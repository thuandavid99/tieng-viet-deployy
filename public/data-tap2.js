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
    },
        {
        id: 103,
        volume: 2,
        type: "reading",
        chapter: 1,
        chapterName: "Tôi và các bạn",
        lessonInChapter: 3,
        title: "Bài đọc: Bạn của gió",
        author: "Sách giáo khoa Kết Nối",
        icon: "🍃",

        steps: [
            { type: "narrate", role: "teacher", text: "Chào con, chúng mình cùng bước sang Bài 3 nhé. Bài đọc có tên là: Bạn của gió." },
            { type: "narrate", role: "narrator", text: "Gió đi khắp nơi, thổi qua đồng cỏ, luồn qua kẽ lá. Gió hỏi hoa: Bạn có muốn đi cùng mình không? Hoa lắc đầu vì còn phải ở lại làm đẹp cho đời." },
            { type: "narrate", role: "narrator", text: "Gió lại hỏi mây, hỏi chim. Ai cũng có công việc riêng. Cuối cùng, Gió nhận ra mình là bạn của tất cả mọi người, vì Gió mang đến sự mát lành cho muôn loài." },
            { type: "vocab", word: "mát lành", meaning: "không khí trong lành, mát mẻ" },
            { type: "ask_aloud", prompt: "Gió đã hỏi những ai đi cùng mình?", reveal: "Gió đã hỏi hoa, mây và chim." },
            { type: "ask_aloud", prompt: "Vì sao Gió lại là bạn của tất cả mọi người?", reveal: "Vì Gió mang đến sự mát lành cho muôn loài." },
            { type: "dictation", text: "Gió đi khắp nơi mang sự mát lành.", note: "Con hãy nghe và viết lại nhé." },
            { type: "narrate", role: "teacher", text: "Con đã học xong Bài 3 rồi! Con có thấy Gió cũng giống như một người bạn tốt không?" }
        ]
        }    , {
        id: 104,
        volume: 2,
        type: "reading",
        chapter: 1,
        chapterName: "Tôi và các bạn",
        lessonInChapter: 4,
        title: "Bài đọc: Cây ổi",
        author: "Sách giáo khoa Kết Nối",
        icon: "🌳",
        steps: [
            { type: "narrate", role: "teacher", text: "Bài 4: Cây ổi. Cây ổi trong vườn nhà bà là cây ổi găng, quả nhỏ nhưng rất giòn và thơm." },
            { type: "vocab", word: "ổi găng", meaning: "loại ổi quả nhỏ, cùi giòn" },
            { type: "ask_aloud", prompt: "Cây ổi trong vườn nhà bà là loại ổi gì?", reveal: "Là cây ổi găng." },
            { type: "dictation", text: "Cây ổi trong vườn nhà bà rất thơm.", note: "Con viết lại nhé." }
        ]
    }, {
        id: 105,
        volume: 2,
        type: "reading",
        chapter: 1,
        chapterName: "Tôi và các bạn",
        lessonInChapter: 5,
        title: "Bài đọc: Em yêu trường em",
        author: "Sách giáo khoa Kết Nối",
        icon: "🏫",
        steps: [
            { type: "narrate", role: "teacher", text: "Bài 5: Em yêu trường em. Trường học là ngôi nhà thứ hai của chúng mình đấy." },
            { type: "narrate", role: "narrator", text: "Ở trường có cô giáo hiền, có bạn bè thân thiết. Chúng mình cùng học tập và vui chơi thật vui." },
            { type: "ask_aloud", prompt: "Trường học được ví như gì?", reveal: "Trường học như ngôi nhà thứ hai." },
            { type: "dictation", text: "Em yêu trường em, ngôi nhà thứ hai.", note: "Viết nắn nót nhé." }
        ]
    }, {
        id: 106,
        volume: 2,
        type: "reading",
        chapter: 1,
        chapterName: "Tôi và các bạn",
        lessonInChapter: 6,
        title: "Bài đọc: Chú sẻ nhỏ",
        author: "Sách giáo khoa Kết Nối",
        icon: "🐦",
        steps: [
            { type: "narrate", role: "teacher", text: "Bài 6: Chú sẻ nhỏ. Chú sẻ nhỏ bị thương ở cánh, may nhờ có bé giúp đỡ mà chú đã khỏi bệnh." },
            { type: "vocab", word: "bị thương", meaning: "cơ thể bị đau do va chạm" },
            { type: "ask_aloud", prompt: "Ai đã giúp chú sẻ nhỏ?", reveal: "Bạn nhỏ đã giúp chú sẻ nhỏ." },
            { type: "dictation", text: "Bé chăm sóc chú sẻ nhỏ bị thương.", note: "Con viết lại nhé." }
        ]
    }, {
        id: 107,
        volume: 2,
        type: "reading",
        chapter: 1,
        chapterName: "Tôi và các bạn",
        lessonInChapter: 7,
        title: "Bài đọc: Giờ ra chơi",
        author: "Sách giáo khoa Kết Nối",
        icon: "⚽",
        steps: [
            { type: "narrate", role: "teacher", text: "Bài 7: Giờ ra chơi. Tiếng trống vang lên, các bạn ùa ra sân trường chơi nhảy dây, đá bóng." },
            { type: "ask_aloud", prompt: "Khi tiếng trống vang lên, các bạn làm gì?", reveal: "Các bạn ùa ra sân trường chơi nhảy dây, đá bóng." },
            { type: "dictation", text: "Giờ ra chơi, các bạn chơi đá bóng.", note: "Con viết lại nhé." },
            { type: "narrate", role: "teacher", text: "Bài học đã xong, con đã rất cố gắng!" }
        ]
        }    , {
        id: 108,
        volume: 2,
        type: "reading",
        chapter: 1,
        chapterName: "Tôi và các bạn",
        lessonInChapter: 8,
        title: "Bài đọc: Cậu bé thông minh",
        author: "Sách giáo khoa Kết Nối",
        icon: "🧠",
        steps: [
            { type: "narrate", role: "teacher", text: "Bài 8: Cậu bé thông minh. Nhờ sự nhanh trí, cậu bé đã giải được câu đố khó của nhà vua." },
            { type: "ask_aloud", prompt: "Vì sao cậu bé được gọi là thông minh?", reveal: "Vì cậu bé đã giải được câu đố khó của nhà vua." },
            { type: "dictation", text: "Cậu bé rất thông minh và nhanh trí.", note: "Con viết lại nhé." }
        ]
    }, {
        id: 109,
        volume: 2,
        type: "reading",
        chapter: 2,
        chapterName: "Mái ấm gia đình",
        lessonInChapter: 1,
        title: "Bài đọc: Nụ hôn trên bàn tay",
        author: "Sách giáo khoa Kết Nối",
        icon: "💋",
        steps: [
            { type: "narrate", role: "teacher", text: "Bài 9: Nụ hôn trên bàn tay. Mẹ hôn lên bàn tay Nam để cậu cảm thấy ấm áp mỗi khi đến lớp." },
            { type: "ask_aloud", prompt: "Mẹ đặt nụ hôn vào đâu của Nam?", reveal: "Mẹ đặt nụ hôn vào bàn tay Nam." },
            { type: "dictation", text: "Nụ hôn của mẹ thật ấm áp.", note: "Con viết lại nhé." }
        ]
    }, {
        id: 110,
        volume: 2,
        type: "reading",
        chapter: 2,
        chapterName: "Mái ấm gia đình",
        lessonInChapter: 2,
        title: "Bài đọc: Làm anh",
        author: "Sách giáo khoa Kết Nối",
        icon: "👦",
        steps: [
            { type: "narrate", role: "teacher", text: "Bài 10: Làm anh. Làm anh khó đấy, phải yêu thương và nhường nhịn em nhỏ." },
            { type: "ask_aloud", prompt: "Khi em khóc, anh phải làm gì?", reveal: "Anh phải dỗ dành em." },
            { type: "dictation", text: "Làm anh thật khó nhưng rất vui.", note: "Con viết lại nhé." }
        ]
    }, {
        id: 111,
        volume: 2,
        type: "reading",
        chapter: 2,
        chapterName: "Mái ấm gia đình",
        lessonInChapter: 3,
        title: "Bài đọc: Cả nhà đi chơi núi",
        author: "Sách giáo khoa Kết Nối",
        icon: "⛰️",
        steps: [
            { type: "narrate", role: "teacher", text: "Bài 11: Cả nhà đi chơi núi. Gia đình Nam cùng nhau đi leo núi, trên đường đi bố đã cõng Đức." },
            { type: "ask_aloud", prompt: "Ai đã cõng Đức khi đường dốc?", reveal: "Bố đã cõng Đức." },
            { type: "dictation", text: "Cả nhà cùng nhau đi chơi núi.", note: "Con viết lại nhé." }
        ]
    }, {
        id: 112,
        volume: 2,
        type: "reading",
        chapter: 2,
        chapterName: "Mái ấm gia đình",
        lessonInChapter: 4,
        title: "Bài đọc: Quạt cho bà ngủ",
        author: "Sách giáo khoa Kết Nối",
        icon: "👵",
        steps: [
            { type: "narrate", role: "teacher", text: "Bài 12: Quạt cho bà ngủ. Bà ốm, bạn nhỏ đã quạt cho bà ngủ ngon." },
            { type: "ask_aloud", prompt: "Bạn nhỏ làm gì để bà ngủ ngon?", reveal: "Bạn nhỏ vẫy quạt thật đều cho bà." },
            { type: "dictation", text: "Bé quạt cho bà ngủ ngon.", note: "Con viết lại nhé." }
        ]
    }, {
        id: 113,
        volume: 2,
        type: "reading",
        chapter: 2,
        chapterName: "Mái ấm gia đình",
        lessonInChapter: 5,
        title: "Bài đọc: Bữa cơm gia đình",
        author: "Sách giáo khoa Kết Nối",
        icon: "🥘",
        steps: [
            { type: "narrate", role: "teacher", text: "Bài 13: Bữa cơm gia đình. Cả nhà quây quần bên nhau trong ngày Gia đình Việt Nam." },
            { type: "ask_aloud", prompt: "Ngày gia đình Việt Nam là ngày nào?", reveal: "Ngày 28 tháng 6." },
            { type: "dictation", text: "Bữa cơm gia đình thật tuyệt.", note: "Con viết lại nhé." }
        ]
        }    , {
        id: 114,
        volume: 2,
        type: "reading",
        chapter: 2,
        chapterName: "Mái ấm gia đình",
        lessonInChapter: 6,
        title: "Bài đọc: Ngôi nhà",
        author: "Sách giáo khoa Kết Nối",
        icon: "🏠",
        steps: [
            { type: "narrate", role: "teacher", text: "Bài 14: Ngôi nhà. Bài thơ nói về tình yêu của bạn nhỏ dành cho ngôi nhà mộc mạc." },
            { type: "ask_aloud", prompt: "Trước ngõ nhà bạn nhỏ có cây gì?", reveal: "Có hàng xoan trước ngõ." },
            { type: "dictation", text: "Em yêu ngôi nhà gỗ tre mộc mạc.", note: "Con viết lại nhé." }
        ]
    }, {
        id: 115,
        volume: 2,
        type: "reading",
        chapter: 3,
        chapterName: "Mái trường mến yêu",
        lessonInChapter: 1,
        title: "Bài đọc: Tôi đi học",
        author: "Sách giáo khoa Kết Nối",
        icon: "🎒",
        steps: [
            { type: "narrate", role: "teacher", text: "Bài 15: Tôi đi học. Cảm xúc bỡ ngỡ và xúc động trong ngày đầu tiên đến trường." },
            { type: "ask_aloud", prompt: "Thầy giáo trẻ đón các bạn vào lớp như thế nào?", reveal: "Với gương mặt hiền từ." },
            { type: "dictation", text: "Ngày đầu đi học thật đáng nhớ.", note: "Con viết lại nhé." }
        ]
    }, {
        id: 116,
        volume: 2,
        type: "reading",
        chapter: 3,
        chapterName: "Mái trường mến yêu",
        lessonInChapter: 2,
        title: "Bài đọc: Đi học",
        author: "Sách giáo khoa Kết Nối",
        icon: "🍃",
        steps: [
            { type: "narrate", role: "teacher", text: "Bài 16: Đi học. Bài thơ về con đường đi học đầy hương thơm của núi rừng." },
            { type: "ask_aloud", prompt: "Cái gì xòe ô che nắng cho bạn nhỏ?", reveal: "Lá cọ xòe ô che nắng." },
            { type: "dictation", text: "Hương rừng thơm đồi vắng.", note: "Con viết lại nhé." }
        ]
    }, {
        id: 117,
        volume: 2,
        type: "reading",
        chapter: 3,
        chapterName: "Mái trường mến yêu",
        lessonInChapter: 3,
        title: "Bài đọc: Hoa yêu thương",
        author: "Sách giáo khoa Kết Nối",
        icon: "🌸",
        steps: [
            { type: "narrate", role: "teacher", text: "Bài 17: Hoa yêu thương. Cả lớp cùng vẽ tranh để dành tặng cô giáo." },
            { type: "ask_aloud", prompt: "Trên cánh hoa, các bạn nhỏ ghi gì?", reveal: "Ghi tên tổ của mình." },
            { type: "dictation", text: "Cả lớp cùng làm hoa yêu thương.", note: "Con viết lại nhé." }
        ]
    }, {
        id: 118,
        volume: 2,
        type: "reading",
        chapter: 3,
        chapterName: "Mái trường mến yêu",
        lessonInChapter: 4,
        title: "Bài đọc: Cây bàng và lớp học",
        author: "Sách giáo khoa Kết Nối",
        icon: "🌳",
        steps: [
            { type: "narrate", role: "teacher", text: "Bài 18: Cây bàng và lớp học. Cây bàng già như người bạn thân thiết của các bạn nhỏ." },
            { type: "ask_aloud", prompt: "Tán cây bàng được ví như cái gì?", reveal: "Như cái ô xanh mướt." },
            { type: "dictation", text: "Cây bàng già vẫy chào các bạn.", note: "Con viết lại nhé." }
        ]
    }, {
        id: 119,
        volume: 2,
        type: "reading",
        chapter: 3,
        chapterName: "Mái trường mến yêu",
        lessonInChapter: 5,
        title: "Bài đọc: Bác trống trường",
        author: "Sách giáo khoa Kết Nối",
        icon: "🥁",
        steps: [
            { type: "narrate", role: "teacher", text: "Bài 19: Bác trống trường. Bác trống gắn bó với học trò từ bao đời nay." },
            { type: "ask_aloud", prompt: "Trống trường giúp học trò việc gì?", reveal: "Giúp học trò ra vào lớp đúng giờ." },
            { type: "dictation", text: "Bác trống là người bạn thân thiết.", note: "Con viết lại nhé." }
        ]
    }, {
        id: 120,
        volume: 2,
        type: "reading",
        chapter: 3,
        chapterName: "Mái trường mến yêu",
        lessonInChapter: 6,
        title: "Bài đọc: Giờ ra chơi",
        author: "Sách giáo khoa Kết Nối",
        icon: "⚽",
        steps: [
            { type: "narrate", role: "teacher", text: "Bài 20: Giờ ra chơi. Sân trường sôi động với những trò chơi thú vị." },
            { type: "ask_aloud", prompt: "Đến giờ ra chơi, các bạn làm gì?", reveal: "Các bạn ùa ra sân trường chơi nhảy dây, đá cầu." },
            { type: "dictation", text: "Giờ ra chơi thật là vui.", note: "Con viết lại nhé." }
        ]
             }
    
];
