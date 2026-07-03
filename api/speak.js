export default async function handler(req, res) {
    const { text, voice = 'banmai' } = req.query;
    const API_KEY = process.env.FPT_AI_API_KEY;

    if (!text) {
        return res.status(400).json({ error: 'Thiếu nội dung văn bản' });
    }

    try {
        // Thêm khoảng lặng đầu để FPT AI không cắt mất âm đầu
        const paddedText = '. ' + text;

        // Bước 1: Gọi FPT AI -> nhận URL mp3
        const fptRes = await fetch('https://api.fpt.ai/hmi/tts/v5', {
            method: 'POST',
            headers: {
                'api-key': API_KEY,
                'speed': '-1',
                'voice': voice
            },
            body: paddedText
        });

        const fptData = await fptRes.json();

        // FPT AI trả về { error: 0, async: "url_mp3" }
        if (fptData.error !== 0 || !fptData.async) {
            throw new Error('FPT AI error: ' + JSON.stringify(fptData));
        }

        const mp3Url = fptData.async;

        // Bước 2: Chờ file MP3 sẵn sàng rồi download về (retry tối đa 10 lần)
        let mp3Buffer = null;
        for (let i = 0; i < 10; i++) {
            await new Promise(r => setTimeout(r, 800));
            const mp3Res = await fetch(mp3Url);
            if (mp3Res.ok && mp3Res.headers.get('content-type')?.includes('audio')) {
                mp3Buffer = await mp3Res.arrayBuffer();
                break;
            }
        }

        if (!mp3Buffer) throw new Error('MP3 không sẵn sàng');

        // Bước 3: Trả về base64 cho client
        const base64 = Buffer.from(mp3Buffer).toString('base64');
        res.status(200).json({ success: true, audio: base64 });

    } catch (error) {
        console.error('TTS error:', error);
        res.status(500).json({ error: error.message });
    }
}
