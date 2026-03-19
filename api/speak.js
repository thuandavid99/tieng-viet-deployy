// Vercel Serverless Function - Google Text-to-Speech
const https = require('https');

module.exports = async (req, res) => {
	// Enable CORS
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	
	if (req.method === 'OPTIONS') {
		return res.status(200).end();
	}
	
	// Get text from query parameter
	const text = req.query.text || req.body?.text;
	
	if (!text) {
		return res.status(400).json({ error: 'Missing text parameter' });
	}
	
	// Google Cloud API Key - CHANGE THIS!
	const API_KEY = process.env.GOOGLE_TTS_API_KEY;
	
	if (!API_KEY) {
		return res.status(500).json({ error: 'API key not configured' });
	}
	
	// Request body for Google TTS
	const requestBody = JSON.stringify({
		input: { text: text },
		voice: {
			languageCode: 'vi-VN',
			name: 'vi-VN-Neural2-A', // Female voice, very natural
			// Other options:
			// 'vi-VN-Neural2-D' - Male voice
			// 'vi-VN-Wavenet-A' - Female WaveNet
			// 'vi-VN-Wavenet-D' - Male WaveNet
		},
		audioConfig: {
			audioEncoding: 'MP3',
			pitch: 0,
			speakingRate: 0.9 // Slightly slower for children
		}
	});
	
	// Make request to Google TTS API
	const options = {
		hostname: 'texttospeech.googleapis.com',
		path: `/v1/text:synthesize?key=${API_KEY}`,
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Content-Length': Buffer.byteLength(requestBody)
		}
	};
	
	const googleRequest = https.request(options, (googleResponse) => {
		let data = '';
		
		googleResponse.on('data', (chunk) => {
			data += chunk;
		});
		
		googleResponse.on('end', () => {
			if (googleResponse.statusCode !== 200) {
				return res.status(googleResponse.statusCode).json({
					error: 'Google TTS API error',
					details: data
				});
			}
			
			try {
				const result = JSON.parse(data);
				const audioContent = result.audioContent;
				
				// Return audio as base64
				res.status(200).json({
					success: true,
					audio: audioContent,
					text: text
				});
			} catch (error) {
				res.status(500).json({
					error: 'Failed to parse response',
					details: error.message
				});
			}
		});
	});
	
	googleRequest.on('error', (error) => {
		res.status(500).json({
			error: 'Request failed',
			details: error.message
		});
	});
	
	googleRequest.write(requestBody);
	googleRequest.end();
};
