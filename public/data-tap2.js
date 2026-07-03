// ====================================
// DỮ LIỆU TẬP 2 - Đọc hiểu theo chủ đề
// Kết Nối Tri Thức - Tiếng Việt 1, Tập hai
// LƯU Ý: mảng riêng biệt (lessonsTap2), KHÔNG đụng tới mảng `lessons` của Tập 1
// Mỗi bài là 1 chuỗi "steps" - đọc tuần tự, chạm để sang bước tiếp theo,
// KHÔNG có nút bấm song song (phù hợp học sinh khiếm thị hoàn toàn)
// ====================================

const lessonsTap2 = [
    {
        id: 101,
        volume: 2,
        type: "reading",
        chapter: 1,
        chapterName: "Tôi và các bạn",
        lessonInChapter: 1,
        title: "Tôi là học sinh lớp 1",
        author: "Trung Sơn",
        icon: "🎒",

        steps: [
            // 1. Khởi động
            { type: "narrate", role: "teacher", text: "Từ khi đi học, em thích và không thích những gì?" },

            // 2. Đọc - đoạn văn chính, đọc từng đoạn
            { type: "narrate", role: "narrator", text: "Tôi tên là Nam, học sinh lớp 1A, Trường Tiểu học Lê Quý Đôn. Ngày đầu đi học, mặc bộ đồng phục của trường, tôi hãnh diện lắm." },
            { type: "narrate", role: "narrator", text: "Hồi đầu năm học, tôi mới học chữ cái. Thế mà bây giờ, tôi đã đọc được truyện tranh. Tôi còn biết làm toán nữa. Tôi có thêm nhiều bạn mới." },
            { type: "narrate", role: "narrator", text: "Ai cũng bảo từ khi đi học, tôi chững chạc hẳn lên." },

            // Từ ngữ (đúng 3 từ khóa thật trong sách)
            { type: "vocab", word: "đồng phục", meaning: "quần áo giống nhau cả trường cùng mặc" },
            { type: "vocab", word: "hãnh diện", meaning: "cảm thấy tự hào, vui sướng" },
            { type: "vocab", word: "chững chạc", meaning: "đứng đắn, có vẻ lớn hơn so với tuổi" },

            // 3. Trả lời câu hỏi - dạng hỏi rồi chạm để nghe đáp án
            { type: "ask_aloud", prompt: "Bạn Nam học lớp mấy?", reveal: "Bạn Nam học lớp 1A." },
            { type: "ask_aloud", prompt: "Hồi đầu năm, Nam học gì?", reveal: "Hồi đầu năm, Nam mới học chữ cái." },
            { type: "ask_aloud", prompt: "Bây giờ, Nam biết làm gì?", reveal: "Bây giờ, Nam đã đọc được truyện tranh và biết làm toán." },

            // 5. Chọn từ hoàn thiện câu
            { type: "ask_aloud", prompt: "Điền từ còn thiếu: Nam rất... khi được cô giáo khen. Là từ bổ ích, mới, hay hãnh diện?", reveal: "Đáp án đúng là: Nam rất HÃNH DIỆN khi được cô giáo khen." },

            // 6. Nói theo tranh - chuyển thành liệt kê tuần tự, không ghép hình
            { type: "narrate", role: "teacher", text: "Cô đọc cho con nghe 4 hoạt động các bạn hay làm ở trường nhé." },
            { type: "narrate", role: "narrator", text: "Hoạt động thứ nhất: đá bóng." },
            { type: "narrate", role: "narrator", text: "Hoạt động thứ hai: đọc sách." },
            { type: "narrate", role: "narrator", text: "Hoạt động thứ ba: kéo co." },
            { type: "narrate", role: "narrator", text: "Hoạt động thứ tư: múa." },
            { type: "ask_aloud", prompt: "Con thích hoạt động nào nhất trong 4 hoạt động đó? Con thử kể cho cô nghe xem.", reveal: "Mỗi bạn có thể thích một hoạt động khác nhau, không có câu trả lời sai đâu nhé!" },

            // 7. Nghe viết (chính tả - đọc chậm, giáo viên/HS viết ngoài app)
            { type: "dictation", text: "Nam đã đọc được truyện tranh. Nam còn biết làm toán nữa.", note: "Nhớ viết hoa chữ đầu câu, có dấu chấm cuối câu." },

            // 8. Chọn chữ phù hợp (chính tả s/x, tr/ch)
            { type: "ask_aloud", prompt: "Điền s hay x: học... inh?", reveal: "Đáp án đúng là S — học sinh." },
            { type: "ask_aloud", prompt: "Điền s hay x: ...inh đẹp?", reveal: "Đáp án đúng là X — xinh đẹp." },
            { type: "ask_aloud", prompt: "Điền s hay x: s...ách vở hay x...ách vở?", reveal: "Đáp án đúng là S — sách vở." },
            { type: "ask_aloud", prompt: "Điền tr hay ch: ...anh ảnh?", reveal: "Đáp án đúng là TR — tranh ảnh." },
            { type: "ask_aloud", prompt: "Điền tr hay ch: ...ữ cái?", reveal: "Đáp án đúng là CH — chữ cái." },
            { type: "ask_aloud", prompt: "Điền tr hay ch: vui ...ơi?", reveal: "Đáp án đúng là CH — vui chơi." },

            // 9. Chọn ý phù hợp - tự đánh giá bản thân, đọc từng ý một
            { type: "narrate", role: "teacher", text: "Bây giờ cô đọc từng điều, con nghĩ xem từ khi đi học lớp 1, điều nào đúng với con nhé." },
            { type: "ask_aloud", prompt: "Con có thức dậy sớm hơn không?", reveal: "Nếu đúng với con thì con giơ tay lên nhé, không đúng thì thôi." },
            { type: "ask_aloud", prompt: "Con có ăn sáng nhanh hơn không?", reveal: "Con tự nghĩ xem điều này có đúng với mình không nhé." },
            { type: "ask_aloud", prompt: "Con có còn khóc nhè không?", reveal: "Con tự trả lời xem nào." },
            { type: "ask_aloud", prompt: "Con có ngóng bố mẹ đón về không?", reveal: "Con tự trả lời xem nào." },
            { type: "ask_aloud", prompt: "Con có thuộc thêm nhiều bài thơ không?", reveal: "Con tự trả lời xem nào." },
            { type: "ask_aloud", prompt: "Con có thêm nhiều bạn mới không?", reveal: "Con tự trả lời xem nào." },

            { type: "narrate", role: "teacher", text: "Con học rất giỏi! Hết bài 1 rồi, mình cùng nghỉ một chút nhé." }
        ]
    }
];
