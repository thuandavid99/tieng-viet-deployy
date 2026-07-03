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
    },

    {
        id: 102,
        volume: 2,
        type: "reading",
        chapter: 1,
        chapterName: "Tôi và các bạn",
        lessonInChapter: 2,
        title: "Đôi tai xấu xí",
        author: "Theo Kể chuyện cho bé mầm non, tập 3",
        icon: "🐰",

        steps: [
            // 1. Khởi động
            { type: "narrate", role: "teacher", text: "Mỗi con vật đều có một đặc điểm rất đặc biệt trên cơ thể. Con thử đoán xem lạc đà, tê giác và chuột túi có gì đặc biệt nhé." },
            { type: "ask_aloud", prompt: "Lạc đà có gì đặc biệt trên lưng?", reveal: "Lạc đà có cái bướu to trên lưng để dự trữ nước và mỡ." },
            { type: "ask_aloud", prompt: "Tê giác có gì đặc biệt trên mũi?", reveal: "Tê giác có chiếc sừng to trên mũi." },
            { type: "ask_aloud", prompt: "Chuột túi có gì đặc biệt ở bụng?", reveal: "Chuột túi có cái túi ở bụng để mang con non." },
            { type: "narrate", role: "teacher", text: "Hôm nay chúng ta sẽ nghe một câu chuyện về một bộ phận rất đặc biệt của bạn Thỏ, đó là đôi tai đấy!" },

            // 2. Đọc - đoạn văn chính
            { type: "narrate", role: "narrator", text: "Thỏ có đôi tai dài và to. Bị bạn bè chê, thỏ buồn lắm. Thỏ bố động viên: Rồi con sẽ thấy tai mình rất đẹp." },
            { type: "narrate", role: "narrator", text: "Một lần, thỏ và các bạn đi chơi xa, quên khuấy đường về. Ai cũng hoảng sợ. Thỏ chợt dỏng tai: Suỵt! Có tiếng bố tớ gọi. Cả nhóm đi theo hướng có tiếng gọi. Tất cả về được tới nhà. Các bạn tấm tắc khen tai thỏ thật tuyệt." },
            { type: "narrate", role: "narrator", text: "Từ đó, thỏ không còn buồn vì đôi tai nữa." },

            // Từ ngữ
            { type: "vocab", word: "động viên", meaning: "nói lời an ủi, khích lệ để ai đó vững tin hơn" },
            { type: "vocab", word: "quên khuấy", meaning: "quên hẳn đi, không nhớ chút gì" },
            { type: "vocab", word: "tấm tắc", meaning: "khen ngợi luôn miệng, tỏ ý rất thích" },

            // 3. Trả lời câu hỏi
            { type: "ask_aloud", prompt: "Vì sao thỏ buồn?", reveal: "Thỏ buồn vì bị bạn bè chê đôi tai dài và to." },
            { type: "ask_aloud", prompt: "Chuyện gì xảy ra trong lần thỏ và các bạn đi chơi xa?", reveal: "Cả nhóm mải chơi, quên mất đường về nên ai cũng hoảng sợ." },
            { type: "ask_aloud", prompt: "Nhờ đâu mà cả nhóm tìm được đường về nhà?", reveal: "Nhờ đôi tai thính của thỏ nghe được tiếng bố thỏ gọi, cả nhóm đã tìm được đường về nhà." },

            // 5. Chọn từ hoàn thiện câu
            { type: "ask_aloud", prompt: "Điền từ còn thiếu: Chú mèo... nghe tiếng chít chít của lũ chuột. Là từ chạy nhanh, dỏng tai hay thính tai?", reveal: "Đáp án đúng là: Chú mèo DỎNG TAI nghe tiếng chít chít của lũ chuột." },

            // 6. Kể lại chuyện theo tranh - liệt kê tuần tự
            { type: "narrate", role: "teacher", text: "Bây giờ mình cùng kể lại câu chuyện Đôi tai xấu xí theo 4 phần nhé." },
            { type: "narrate", role: "narrator", text: "Phần một: Thỏ có đôi tai dài và to, bị bạn bè chê nên buồn lắm." },
            { type: "narrate", role: "narrator", text: "Phần hai: Một lần, thỏ và các bạn đi chơi xa rồi quên mất đường về." },
            { type: "narrate", role: "narrator", text: "Phần ba: Cả nhóm đi theo hướng có tiếng gọi mà thỏ nghe thấy." },
            { type: "narrate", role: "narrator", text: "Phần bốn: Từ đó, thỏ không còn buồn vì đôi tai của mình nữa." },

            // 7. Nghe viết
            { type: "dictation", text: "Các bạn cùng thỏ đi theo hướng có tiếng gọi. Cả nhóm về được nhà.", note: "Nhớ viết hoa chữ đầu câu, có dấu chấm cuối câu." },

            // 8. Tìm từ có vần uyt/iêt
            { type: "ask_aloud", prompt: "Trong bài, từ nào có vần uyt, giống như trong tiếng 'huýt sáo'?", reveal: "Đó là từ 'suỵt' trong câu: Suỵt! Có tiếng bố tớ gọi." },

            // 9. Nói về con vật yêu thích - thay cho hoạt động vẽ tranh
            { type: "ask_aloud", prompt: "Con thích con vật nào nhất? Con hãy kể cho cô nghe con vật đó có đặc điểm gì đặc biệt nhé.", reveal: "Mỗi bạn có thể thích một con vật khác nhau, không có câu trả lời sai đâu nhé!" },

            { type: "narrate", role: "teacher", text: "Con học rất giỏi! Hết bài 2 rồi, mình cùng nghỉ một chút nhé." }
        ]
    }
];
