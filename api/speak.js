// Sử dụng fetch có sẵn trong Node.js (không cần cài thêm axios)
export default async function handler(req, res) {
    const { text, voice = 'banmai' } = req.query; 
    const API_KEY = process.env.FPT_AI_API_KEY;

    if (!text) {
        return res.status(400).json({ error: 'Thiếu nội dung văn bản' });
    }

    try {
        const response = await fetch('https://api.fpt.ai/hmi/tts/v5', {
            method: 'POST',
            headers: {
                'api-key': API_KEY,
                'speed': '',
                'voice': voice
            },
            body: text
        });

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Lỗi kết nối FPT AI' });
    }
}
