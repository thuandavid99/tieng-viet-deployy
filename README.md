# Thế Giới Âm Thanh AVYP

Ứng dụng học Tiếng Việt lớp 1 dành cho **học sinh khiếm thị**, dạy đánh vần theo chương trình **Tiếng Việt 1 — Tập một — Kết Nối Tri Thức Với Cuộc Sống**. Thiết kế theo hướng **âm thanh là chính** (audio-first): học sinh nghe, chạm và cảm nhận rung thay vì phải nhìn.

Dự án phục vụ công tác giảng dạy tại **FPT Schools Huế**.

---

## Tính năng chính

- **Học 80 bài âm/vần** theo đúng trình tự SGK Tập 1 (bài 1–80), bao gồm cả các bài Ôn tập và kể chuyện.
- **Giọng đọc tiếng Việt tự nhiên** qua FPT.AI Text-to-Speech (giọng `banmai`).
- **Điều hướng bằng cử chỉ**, không cần nhìn màn hình:
  - Chạm 1 lần: tương tác/nghe lại
  - Chạm 2 lần (double-tap): quay lại màn trước
  - Chạm 3 lần (triple-tap): về trang chủ
- **Phản hồi đa giác quan**: rung (haptic) khi chạm đúng/sai, âm thanh "ting"/"buzz" báo hiệu chuyển màn hoặc chạm vùng trống.
- **Độ tương phản cao** (nền vàng, chữ đen) cho học sinh còn khả năng nhìn kém.
- **Tình huống hội thoại luyện nói** cho từng bài, biên soạn bám theo mục "Nói theo tranh" trong Sách Giáo Viên, chuyển thể sang dạng nghe (bỏ yêu cầu quan sát tranh).

---

## Cấu trúc dự án

```
├── api/
│   └── speak.js          # Serverless function gọi FPT.AI TTS
├── public/
│   ├── index.html         # Khung HTML
│   ├── style.css          # Toàn bộ giao diện (màu sắc, layout, font-size)
│   ├── data.js             # Dữ liệu 80 bài học — sửa file này khi thêm/sửa nội dung
│   └── script.js           # Logic ứng dụng (điều hướng, TTS, hiệu ứng)
├── vercel.json
├── package.json
└── README.md
```

**Khi cần chỉnh sửa:**
| Việc cần làm | File cần mở |
|---|---|
| Thêm/sửa bài học, từ ví dụ, câu, hội thoại | `public/data.js` |
| Sửa màu sắc, kích thước chữ, giao diện | `public/style.css` |
| Thêm màn hình/cấu trúc HTML mới | `public/index.html` |
| Sửa logic điều hướng, hiệu ứng, TTS | `public/script.js` |

> `index.html` nạp 2 file JS theo đúng thứ tự: `data.js` trước, `script.js` sau (vì `script.js` dùng biến `lessons` khai báo trong `data.js`).

---

## Hướng dẫn Deploy lên Vercel

### Bước 1: Cài Vercel CLI (nếu deploy từ máy)

```bash
npm install -g vercel
vercel login
```

### Bước 2: Thêm biến môi trường API Key

Ứng dụng dùng **FPT.AI Text-to-Speech**, không phải Google TTS. Lấy API key tại [console FPT.AI](https://console.fpt.ai/), sau đó:

```bash
vercel env add FPT_AI_API_KEY
```

Dán key khi được hỏi, chọn cả Production/Preview/Development.

Nếu deploy qua GitHub + Vercel dashboard: vào **Settings → Environment Variables**, thêm `FPT_AI_API_KEY` thủ công.

### Bước 3: Kiểm tra Root Directory (quan trọng)

Nếu code nằm trong thư mục con (ví dụ giải nén từ file zip `xxx-main.zip` rồi push nguyên thư mục lên), vào **Settings → General → Root Directory** và trỏ đúng vào thư mục chứa `vercel.json`, `api/`, `public/`. Nếu code đã nằm ở gốc repo, để trống mục này.

### Bước 4: Deploy

```bash
vercel --prod
```

Hoặc chỉ cần push lên nhánh `main` trên GitHub nếu đã liên kết sẵn với Vercel — mỗi lần push sẽ tự động deploy lại.

---

## Kiểm tra lỗi cú pháp trước khi deploy

File `data.js` được chỉnh sửa tay thường xuyên nên dễ thiếu dấu `{`, `}`, `,`. Trước khi push, chạy:

```bash
node -c public/data.js
node -c public/script.js
```

Nếu không có gì hiện ra (im lặng) = cú pháp đúng. Nếu báo `SyntaxError` kèm số dòng, sửa đúng chỗ đó rồi kiểm tra lại. Một lỗi cú pháp nhỏ ở đây sẽ làm sập toàn bộ ứng dụng, kể cả các bài học không liên quan.

---

## Tình trạng nội dung

- **Bài 1–80**: đủ khung dữ liệu (âm/vần, từ khóa, icon).
- **Tên bài (char/sub)**: đã đối chiếu và sửa đúng theo mục lục SGK Kết Nối Tri Thức.
- **Tình huống hội thoại (`situation`)**: đang cập nhật dần theo Sách Giáo Viên thật, thay thế nội dung nháp. Bài nào còn ghi chú `// [NHÁP]` trong code nghĩa là nội dung tạm, chưa đối chiếu SGV.
- **Bài đọc Tập 2**: đã có 1 bài mẫu để dành ở `id: 200`, chưa đưa vào luồng chọn Tập vì màn mục lục hiện chưa lọc theo `volume`.

---

## Ghi chú kỹ thuật khác

- Âm thanh được cache tạm trong phiên làm việc (session) để tránh gọi lại API TTS nhiều lần cho cùng một nội dung; cache sẽ mất khi tải lại trang.
- Ảnh nền tình huống (`background_image`) hiện để `null` ở phần lớn các bài — có thể bổ sung ảnh thật vào `public/images/` khi cần.
