# Ứng dụng Tiếng Việt Lớp 1 - Google TTS Version

App học tiếng Việt lớp 1 với giọng đọc tự nhiên từ Google Cloud Text-to-Speech API.

## 🚀 Hướng dẫn Deploy lên Vercel

### Bước 1: Cài đặt Vercel CLI

```bash
npm install -g vercel
```

### Bước 2: Login Vercel

```bash
vercel login
```

### Bước 3: Deploy

```bash
cd tieng-viet-deploy
vercel
```

Làm theo hướng dẫn:
- Set up and deploy? → Yes
- Which scope? → Chọn account của bạn
- Link to existing project? → No
- Project name? → tieng-viet-lop1
- Directory? → ./
- Override settings? → No

### Bước 4: Thêm API Key

```bash
vercel env add GOOGLE_TTS_API_KEY
```

Paste API key của bạn khi được hỏi.
Chọn Production, Preview, Development: Yes cho cả 3.

### Bước 5: Deploy Production

```bash
vercel --prod
```

## 🔑 Lấy Google Cloud API Key

1. Truy cập: https://console.cloud.google.com
2. Tạo project mới
3. Enable "Cloud Text-to-Speech API"
4. Tạo API Key trong "Credentials"
5. Restrict key để chỉ dùng cho Text-to-Speech API

## 📦 Structure

```
tieng-viet-deploy/
├── api/
│   └── speak.js          # Serverless function cho TTS
├── public/
│   └── index.html        # Frontend app
├── vercel.json           # Vercel config
├── package.json          # Dependencies
└── README.md             # Hướng dẫn này
```

## 🎯 Features

- ✅ Giọng đọc tiếng Việt tự nhiên (Google Neural2)
- ✅ Auto-fallback sang Web Speech API nếu lỗi
- ✅ Serverless architecture (không cần server)
- ✅ Free hosting trên Vercel
- ✅ 25 bài học Tập 1 hoàn chỉnh

## 🌐 Demo

Sau khi deploy, app sẽ có URL dạng:
`https://tieng-viet-lop1.vercel.app`

## 💰 Chi phí

- Vercel: FREE
- Google TTS: FREE (0-4 triệu ký tự/tháng)

## 📞 Support

Nếu có vấn đề, kiểm tra:
1. API key đã đúng chưa: `vercel env ls`
2. Logs: `vercel logs`
3. Test local: `vercel dev`
