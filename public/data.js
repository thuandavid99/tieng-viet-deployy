// ====================================
// DỮ LIỆU BÀI HỌC - Chỉ sửa file này khi thêm/sửa bài
// LƯU Ý: kiểm tra cú pháp bằng lệnh 'node -c data.js' trước khi deploy
// ====================================
const lessons = [
				{ 
					id: 1, char: "A", sub: "A a", word: "ca hát", svgKey: "chicken", icon: "🎤", 
					sentence: "Nam và Hà ca hát.", 
					intro: "Bài 1. Chữ A.", 
					detail: "A trong từ Ca Hát.",
					guide_intro: "Các em ơi, mở rộng miệng ra nào.",
					guide_phoneme: "A, A, A...", 
					examples: [
						{ word: "cái lá", icon: "🍃" }, 
						{ word: "con cá", icon: "🐟" },
						{ word: "ba ba", icon: "🐢" }, 
						{ word: "cà chua", icon: "🍅" }
					],
					situation: {
						title: "Chào hỏi khi đi học",
						background_image: "anh_tinhhuong1.jpg", 
						dialogs: [
							{ role: "dad", text: "Bố chào con. Hôm nay con học ngoan nhé!", icon: "👨" },
							{ role: "son", text: "Vâng ạ! Con sẽ cố gắng học thật tốt!", icon: "👦" }
						]
					}
				},
				{ 
					id: 2, char: "B", sub: "B b", word: "búp bê", svgKey: "doll", icon: "🎎", 
					sentence: "Bà cho bé búp bê.", 
					intro: "Bài 2. Chữ Bờ.", 
					detail: "Bờ trong từ Búp Bê.",
					guide_intro: "Em mím hai môi lại, rồi bật mạnh hơi ra nhé.",
					guide_phoneme: "Bờ, Bờ, Bờ...",
					examples: [ 
						{ word: "bánh mì", icon: "🥖" }, 
						{ word: "con bò", icon: "🐄" },
						{ word: "bông hoa", icon: "🌸" },
						{ word: "bàn ghế", icon: "🪑" }
					],
					situation: {
						title: "Em cảm ơn bà",
						background_image: "anh_tinhhuong2.jpg",
						dialogs: [
							{ role: "grandma", text: "Bà cho bé búp bê này đẹp lắm đấy.", icon: "👵" },
							{ role: "girl", text: "Cháu cảm ơn bà ạ! Cháu yêu bà nhiều lắm!", icon: "👧" }
						]
					}
				},
				{ 
					id: 3, char: "C", sub: "C c", word: "câu cá", svgKey: "fish", icon: "🎣", 
					sentence: "Nam và bố câu cá.", 
					intro: "Bài 3. Chữ Cờ.", 
					detail: "Cờ trong từ Câu Cá.",
					guide_intro: "Gốc lưỡi chạm vòm miệng, bật hơi ra.",
					guide_phoneme: "Cờ, Cờ, Cờ...",
					examples: [ 
						{ word: "con cò", icon: "🐦" }, 
						{ word: "cờ vua", icon: "♟️" },
						{ word: "cây cối", icon: "🌳" },
						{ word: "con cua", icon: "🦀" }
					],
					situation: {
						title: "Chào hỏi bạn bè",
						background_image: "anh_tinhhuong3.jpg", 
						dialogs: [
							{ role: "nam", text: "Chào các bạn! Hôm nay các bạn khỏe không?", icon: "👦" },
							{ role: "friends", text: "Chào Nam! Chúng mình rất khỏe!", icon: "👫" }
						]
					}
				},
				{ 
					id: 4, char: "E", sub: "E e", word: "bạn bè", svgKey: "friend", icon: "👫", 
					sentence: "Em kể mẹ nghe về bạn bè.", 
					intro: "Bài 4. Chữ E.", 
					detail: "E trong từ Bạn Bè.", 
					guide_intro: "Miệng mở vừa phải, môi căng nhẹ.", 
					guide_phoneme: "E, E, E...", 
					examples: [ 
						{ word: "xe đạp", icon: "🚲" }, 
						{ word: "em bé", icon: "👶" },
						{ word: "kẹo ngọt", icon: "🍬" },
						{ word: "bé học", icon: "📚" }
					], 
					situation: {
						title: "Trên sân trường",
						background_image: "anh_tinhhuong4.jpg",
						dialogs: [
							{ role: "friend1", text: "Chúng mình cùng nhảy dây nhé?", icon: "👧" },
							{ role: "friend2", text: "Đồng ý! Mình rất thích nhảy dây!", icon: "👦" }
						]
					}
				},
				{ 
					id: 5, char: "Ôn tập", sub: "Ôn tập", word: "bế bé", svgKey: "babe", icon: "🤱", 
					sentence: "Bà bế bé.", 
					intro: "Bài 5. Ôn tập và Kể chuyện.", 
					detail: "Ôn tập các chữ A, B, C, E đã học.", 
					guide_intro: "Cùng ôn lại các chữ cái nhé.", 
					guide_phoneme: "A, Bờ, Cờ, E", 
					examples: [ 
						{ word: "ba bà", icon: "👵" }, 
						{ word: "cá mè", icon: "🐟" },
						{ word: "ca dao", icon: "🎵" },
						{ word: "bé học", icon: "📖" }
					], 
					situation: {
						title: "Búp bê và Dế mèn",
						background_image: "anh_tinhhuong5.jpg",
						dialogs: [
							{ role: "cricket", text: "Tôi hát tặng bạn một bài nhé!", icon: "🦗" },
							{ role: "doll", text: "Cảm ơn bạn Dế mèn. Bạn hát hay lắm!", icon: "🎎" }
						]
					}
				},
				{ 
					id: 6, char: "O", sub: "O o", word: "con bò", svgKey: "cow", icon: "🐄", 
					sentence: "Đàn bò gặm cỏ.", 
					intro: "Bài 6. Chữ O.", 
					detail: "O trong từ Con Bò.", 
					guide_intro: "Tròn môi lại, mở miệng rộng.", 
					guide_phoneme: "O, O, O...", 
					examples: [ 
						{ word: "cái lọ", icon: "🏺" }, 
						{ word: "con thỏ", icon: "🐇" },
						{ word: "bó hoa", icon: "💐" },
						{ word: "tổ ong", icon: "🐝" }
					], 
					situation: {
						title: "Chào hỏi ông bà",
						background_image: "anh_tinhhuong6.jpg",
						dialogs: [
							{ role: "kid", text: "Cháu chào ông bà! Cháu đi học về ạ!", icon: "👦" },
							{ role: "grandpa", text: "Cháu ngoan quá! Ông bà yêu cháu lắm!", icon: "👴" }
						]
					}
				},
				{ 
					id: 7, char: "Ô", sub: "Ô ô", word: "đi bộ", svgKey: "walker", icon: "🚶", 
					sentence: "Bố và Hà đi bộ trên hè phố.", 
					intro: "Bài 7. Chữ Ô.", 
					detail: "Ô trong từ Đi Bộ.", 
					guide_intro: "Môi nhô ra phía trước, tròn miệng.", 
					guide_phoneme: "Ô, Ô, Ô...", 
					examples: [ 
						{ word: "cô giáo", icon: "👩‍🏫" }, 
						{ word: "ô tô", icon: "🚗" },
						{ word: "chổi quét", icon: "🧹" },
						{ word: "bố mẹ", icon: "👨‍👩‍👦" }
					], 
					situation: {
						title: "An toàn giao thông",
						background_image: "anh_tinhhuong7.jpg",
						dialogs: [
							{ role: "dad", text: "Đèn đỏ rồi, mình dừng lại chờ đèn xanh nhé.", icon: "👨" },
							{ role: "ha", text: "Vâng ạ! Con luôn nhớ quy tắc giao thông!", icon: "👧" }
						]
					}
				},
				{ 
					id: 8, char: "D", sub: "D d", word: "con dế", svgKey: "cricket", icon: "🦗", 
					sentence: "Dưới gốc đa, các bạn chơi dung dăng dung dẻ.", 
					intro: "Bài 8. Chữ Dờ.", 
					detail: "Dờ trong từ Con Dế.", 
					guide_intro: "Đầu lưỡi chạm răng trên, bật hơi nhẹ.", 
					guide_phoneme: "Dờ dờ dờ...", 
					examples: [ 
						{ word: "cây đa", icon: "🌳" }, 
						{ word: "quả dừa", icon: "🥥" },
						{ word: "con dê", icon: "🐐" },
						{ word: "đàn ông", icon: "👨" }
					], 
					situation: {
						title: "Khách đến chơi nhà",
						background_image: "anh_tinhhuong8.jpg",
						dialogs: [
							{ role: "ha", text: "Cháu chào bác ạ! Mời bác vào nhà!", icon: "👧" },
							{ role: "guest", text: "Bác chào cháu! Cháu thật lịch sự!", icon: "👨" }
						]
					}
				},
				{ 
					id: 9, char: "Ơ", sub: "Ơ ơ", word: "lá cờ", svgKey: "flag", icon: "🇻🇳", 
					sentence: "Tàu dỡ hàng ở cảng.", 
					intro: "Bài 9. Chữ Ơ.", 
					detail: "Ơ trong từ Lá Cờ.", 
					guide_intro: "Miệng hơi mở, lưỡi hơi cong lên.", 
					guide_phoneme: "Ơ ơ ơ...", 
					examples: [ 
						{ word: "cái nơ", icon: "🎀" }, 
						{ word: "thợ mỏ", icon: "👷" },
						{ word: "sơ mi", icon: "👔" },
						{ word: "tơ tằm", icon: "🧵" }
					], 
					situation: {
						title: "Phương tiện giao thông",
						background_image: "anh_tinhhuong9.jpg",
						dialogs: [
							{ role: "dad", text: "Máy bay bay trên trời, tàu thuyền đi dưới nước.", icon: "👨" },
							{ role: "kid", text: "Con thích máy bay ạ! Bay cao tít mù!", icon: "👦" }
						]
					}
				},
				{ 
					id: 10, char: "Ôn tập", sub: "Ôn tập", word: "bờ đê", svgKey: "ant", icon: "🏞️", 
					sentence: "Bờ đê có dế.", 
					intro: "Bài 10. Ôn tập và Kể chuyện.", 
					detail: "Ôn tập các chữ O, Ô, Ơ, D, Đ đã học.", 
					guide_intro: "Cùng ôn lại các chữ cái nhé.", 
					guide_phoneme: "O, Ô, Ơ, Dờ, Đờ", 
					examples: [ 
						{ word: "đỡ bé", icon: "🤝" }, 
						{ word: "ca nô", icon: "🚤" },
						{ word: "đồ chơi", icon: "🧸" },
						{ word: "bờ ao", icon: "🏞️" }
					], 
					situation: {
						title: "Đàn kiến con ngoan ngoãn",
						background_image: "anh_tinhhuong10.jpg",
						dialogs: [
							{ role: "ant_kid", text: "Bà ơi! Bà lên lưng cháu đi ạ!", icon: "🐜" },
							{ role: "ant_grandma", text: "Cảm ơn các cháu! Các cháu thật ngoan!", icon: "👵" }
						]
					}
				},
				
				// BÀI 11: I i, K k
				{
					id: 11, char: "I, K", sub: "I i, K k", word: "kì đà", svgKey: null, icon: "🦎",
					sentence: "Nam vẽ kì đà.",
					intro: "Bài 11. Chữ I và chữ K.",
					detail: "I trong từ Kì Đà, K trong từ Kì Đà.",
					guide_intro: "Môi mím nhẹ cho chữ I. Lưỡi chạm vòm miệng cho chữ K.",
					guide_phoneme: "I, I, I... Kờ, Kờ, Kờ...",
					examples: [
						{ word: "bí đỏ", icon: "🎃" },
						{ word: "kè ô", icon: "🏠" },
						{ word: "đi đò", icon: "⛵" },
						{ word: "kì đà", icon: "🦎" }
					],
					situation: {
						title: "Lớp học",
						background_image: null,
						dialogs: [
							{ role: "student1", text: "Em học lớp 1A nhé!", icon: "👦" },
							{ role: "student2", text: "Còn em học lớp 1B!", icon: "👧" }
						]
					}
				},
				
				// BÀI 12: H h, L l
				{
					id: 12, char: "H, L", sub: "H h, L l", word: "le le", svgKey: null, icon: "🦆",
					sentence: "Le le bơi trên hồ.",
					intro: "Bài 12. Chữ H và chữ L.",
					detail: "H trong từ Hồ, L trong từ Le Le.",
					guide_intro: "Hơi thở nhẹ ra cho chữ H. Lưỡi chạm răng trên cho chữ L.",
					guide_phoneme: "H, H, H... L, L, L...",
					examples: [
						{ word: "lá đỏ", icon: "🍁" },
						{ word: "bờ hồ", icon: "🏞️" },
						{ word: "cá hổ", icon: "🐠" },
						{ word: "le le", icon: "🦆" }
					],
					situation: {
						title: "Vườn cây",
						background_image: null,
						dialogs: [
							{ role: "child", text: "Bà ơi! Vườn nhà mình có nhiều cây ăn trái quá!", icon: "👦" },
							{ role: "grandma", text: "Ừ! Có cây ổi, cây xoài, cây nhãn!", icon: "👵" }
						]
					}
				},
				
				// BÀI 13: U u, Ư ư
				{
					id: 13, char: "U, Ư", sub: "U u, Ư ư", word: "dừa", svgKey: null, icon: "🥥",
					sentence: "Đu dừa chín ngọt lừ.",
					intro: "Bài 13. Chữ U và chữ Ư.",
					detail: "U trong từ Dừa, Ư trong từ Lừ.",
					guide_intro: "Môi chu tròn cho chữ U. Môi chu nhỏ hơn cho chữ Ư.",
					guide_phoneme: "U, U, U... Ư, Ư, Ư...",
					examples: [
						{ word: "dù", icon: "☂️" },
						{ word: "du dừ", icon: "🥥" },
						{ word: "hổ dữ", icon: "🐯" }
					],
					situation: {
						title: "Học nhóm",
						background_image: null,
						dialogs: [
							{ role: "teacher", text: "Các em học nhóm cùng nhau nhé!", icon: "👩‍🏫" },
							{ role: "students", text: "Vâng ạ! Chúng em sẽ học bài chăm chỉ!", icon: "👦👧" }
						]
					}
				},
				
				// BÀI 14: Ch ch, Kh kh
				{
					id: 14, char: "CH, KH", sub: "Ch ch, Kh kh", word: "chú khỉ", svgKey: null, icon: "🐵",
					sentence: "Mấy chú khỉ ăn chuối.",
					intro: "Bài 14. Chữ CH và chữ KH.",
					detail: "CH trong từ Chú, KH trong từ Khỉ.",
					guide_intro: "Lưỡi chạm vòm miệng cho CH. Họng thở mạnh cho KH.",
					guide_phoneme: "Chờ, Chờ, Chờ... Khờ, Khờ, Khờ...",
					examples: [
						{ word: "lá khô", icon: "🍂" },
						{ word: "chú khỉ", icon: "🐵" },
						{ word: "chợ cá", icon: "🐟" }
					],
					situation: {
						title: "Bể cá",
						background_image: null,
						dialogs: [
							{ role: "sister", text: "Em nhìn kìa! Cá cảnh đẹp quá!", icon: "👧" },
							{ role: "brother", text: "Ừ! Chị có cá kho khế cho em ăn không?", icon: "👦" }
						]
					}
				},
				
				// BÀI 15: ÔN TẬP I, Ê, U, Ư, K, H, L, CH, KH
				{
					id: 15, char: "Ôn tập", sub: "Ôn tập", word: "cá kho", svgKey: null, icon: "🐟",
					sentence: "Chi cho bé cá cờ. Di Kha cho Hà đi chợ.",
					intro: "Bài 15. Ôn tập và Kể chuyện.",
					detail: "Ôn tập các chữ I, Ê, U, Ư, K, H, L, CH, KH đã học.",
					guide_intro: "Cùng ôn lại các chữ cái nhé.",
					guide_phoneme: "I, Ê, U, Ư, Kờ, H, L, CH, KH...",
					examples: [
						{ word: "chú hề", icon: "🤡" },
						{ word: "chợ cá", icon: "🐟" },
						{ word: "bờ hồ", icon: "🏞️" },
						{ word: "lá khô", icon: "🍂" },
						{ word: "cá dừ", icon: "🐠" },
						{ word: "lá hẹ", icon: "🌿" },
						{ word: "che ô", icon: "☂️" }
					],
					situation: {
						title: "Con quạ thông minh",
						background_image: null,
						dialogs: [
							{ role: "narrator", text: "Quạ nhìn thấy bình nước dưới gốc cây.", icon: "🐦" },
							{ role: "narrator", text: "Quạ thả từng viên sỏi vào bình.", icon: "🐦" },
							{ role: "narrator", text: "Nước dâng lên, quạ uống được nước!", icon: "🐦" }
						]
					}
				},
		
		// BÀI 16: M m, N n
		{
			id: 16, char: "M, N", sub: "M m, N n", word: "nơ đỏ", svgKey: null, icon: "🎀",
			sentence: "Mẹ mua nơ cho Hà.",
			intro: "Bài 16. Chữ M và chữ N.",
			detail: "M trong từ Mẹ Mua, N trong từ Nơ.",
			guide_intro: "Mím môi cho chữ M. Lưỡi chạm răng trên cho chữ N.",
			guide_phoneme: "M, M, M... N, N, N...",
			examples: [
				{ word: "cá mè", icon: "🐟" },
				{ word: "lá me", icon: "🌿" },
				{ word: "nơ đỏ", icon: "🎀" },
				{ word: "ca nô", icon: "🚤" }
			],
			situation: {
				title: "Khu vui chơi",
				background_image: null,
				dialogs: [
					{ role: "mom", text: "Bố mẹ cho Hà đi ca nô nhé!", icon: "👩" },
					{ role: "child", text: "Vâng ạ! Con thích lắm!", icon: "👧" }
				]
			}
		},
		
		// BÀI 17: G g, Gi gi
		{
			id: 17, char: "G, GI", sub: "G g, Gi gi", word: "giỏ gà", svgKey: null, icon: "🧺",
			sentence: "Hà có giỏ trứng gà.",
			intro: "Bài 17. Chữ G và chữ GI.",
			detail: "G trong từ Gà, GI trong từ Giỏ.",
			guide_intro: "Gốc lưỡi chạm vòm miệng cho chữ G.",
			guide_phoneme: "Gờ, Gờ, Gờ... GI, GI, GI...",
			examples: [
				{ word: "gà gõ", icon: "🐔" },
				{ word: "đồ gỗ", icon: "🪑" },
				{ word: "giá đỗ", icon: "🌱" },
				{ word: "cụ già", icon: "👴" }
			],
			situation: {
				title: "Vật nuôi",
				background_image: null,
				dialogs: [
					{ role: "grandma", text: "Bà che giỏ cho ba chú gà nhé!", icon: "👵" },
					{ role: "child", text: "Vâng ạ! Cháu giúp bà!", icon: "👦" }
				]
			}
		},
		
		// BÀI 18: Gh gh, Nh nh
		{
			id: 18, char: "GH, NH", sub: "Gh gh, Nh nh", word: "nhà nhỏ", svgKey: null, icon: "🏠",
			sentence: "Hà ghé nhà bà. Nhà bà ở ngõ nhỏ.",
			intro: "Bài 18. Chữ GH và chữ NH.",
			detail: "GH trong từ Ghế, NH trong từ Nhà.",
			guide_intro: "Họng thở nhẹ cho chữ GH. Lưỡi chạm vòm miệng cho chữ NH.",
			guide_phoneme: "Gờ Hờ, Gờ Hờ, Gờ Hờ... Nhờ, Nhờ, Nhờ...",
			examples: [
				{ word: "ghế đá", icon: "🪨" },
				{ word: "ghẹ đỏ", icon: "🦀" },
				{ word: "nhà gỗ", icon: "🏠" },
				{ word: "lá nho", icon: "🍇" }
			],
			situation: {
				title: "Gia đình",
				background_image: null,
				dialogs: [
					{ role: "mom", text: "Mẹ nhờ Hà bê ghế nhỏ giúp mẹ nhé!", icon: "👩" },
					{ role: "child", text: "Vâng ạ! Con bê ngay!", icon: "👧" }
				]
			}
		},
		
		// BÀI 19: Ng ng, Ngh ngh
		{
			id: 19, char: "NG, NGH", sub: "Ng ng, Ngh ngh", word: "nghê", svgKey: null, icon: "🐃",
			sentence: "Nghê theo mẹ ra ngõ.",
			intro: "Bài 19. Chữ NG và chữ NGH.",
			detail: "NG trong từ Ngõ, NGH trong từ Nghê.",
			guide_intro: "Họng rung cho chữ NG và NGH.",
			guide_phoneme: "Ngờ, Ngờ, Ngờ... Nghờ, Nghờ, Nghờ...",
			examples: [
				{ word: "ngã ba", icon: "🛣️" },
				{ word: "ngõ nhỏ", icon: "🏘️" },
				{ word: "cù nghê", icon: "🌿" },
				{ word: "nghỉ hè", icon: "☀️" }
			],
			situation: {
				title: "Vườn bách thú",
				background_image: null,
				dialogs: [
					{ role: "narrator", text: "Nghê đã no cỏ. Nghê ngủ ở bờ đê.", icon: "🐃" }
				]
			}
		},
		
		// BÀI 20: ÔN TẬP M, N, G, GI, GH, NH, NG, NGH
		{
			id: 20, char: "Ôn tập", sub: "Ôn tập", word: "ngõ nhỏ", svgKey: null, icon: "🏘️",
			sentence: "Mẹ ghé nhà bà. Nhà bà ở ngõ nhỏ.",
			intro: "Bài 20. Ôn tập và Kể chuyện.",
			detail: "Ôn tập các chữ M, N, G, GI, GH, NH, NG, NGH đã học.",
			guide_intro: "Cùng ôn lại các chữ cái nhé.",
			guide_phoneme: "M, N, Gờ, GI, Gờ Hờ, Nhờ, Ngờ, Nghờ...",
			examples: [
				{ word: "nụ cà", icon: "🌱" },
				{ word: "nhà gà", icon: "🏠" },
				{ word: "nghỉ hè", icon: "☀️" },
				{ word: "bờ ngõ", icon: "🏘️" },
				{ word: "giá đỗ", icon: "🌱" },
				{ word: "ghế gỗ", icon: "🪑" },
				{ word: "nho nhỏ", icon: "🍇" }
			],
			situation: {
				title: "Cô chú không biết quý tình bạn",
				background_image: null,
				dialogs: [
					{ role: "narrator", text: "Cô bé nuôi gà nhưng muốn đổi lấy con vật khác.", icon: "👧" },
					{ role: "narrator", text: "Cô bé đổi gà lấy chó, rồi lại tiếc.", icon: "🐔" },
					{ role: "narrator", text: "Cuối cùng, cô bé không còn con vật nào!", icon: "😢" }
				]
			}
		},
		
		// BÀI 21: R r, S s
		{
			id: 21, char: "R, S", sub: "R r, S s", word: "sẻ non", svgKey: null, icon: "🐦",
			sentence: "Bầy sẻ non riu ra riu rít bên mẹ.",
			intro: "Bài 21. Chữ R và chữ S.",
			detail: "R trong từ Riu Rít, S trong từ Sẻ.",
			guide_intro: "Lưỡi rung cho chữ R. Răng xát nhau cho chữ S.",
			guide_phoneme: "R, R, R... S, S, S...",
			examples: [
				{ word: "rổ rá", icon: "🧺" },
				{ word: "cá rô", icon: "🐟" },
				{ word: "su su", icon: "🥒" },
				{ word: "chữ số", icon: "🔢" }
			],
			situation: {
				title: "Cảm ơn",
				background_image: null,
				dialogs: [
					{ role: "child", text: "Cảm ơn mẹ đã làm sinh nhật cho con!", icon: "👧" },
					{ role: "child2", text: "Con cảm ơn bố đã đi công tác về!", icon: "👦" }
				]
			}
		},
		
		// BÀI 22: T t, Tr tr
		{
			id: 22, char: "T, TR", sub: "T t, Tr tr", word: "tranh tre", svgKey: null, icon: "🖼️",
			sentence: "Nam tô bức tranh cây tre.",
			intro: "Bài 22. Chữ T và chữ TR.",
			detail: "T trong từ Tô, TR trong từ Tranh Tre.",
			guide_intro: "Lưỡi chạm răng trên cho chữ T. Lưỡi rung cho chữ TR.",
			guide_phoneme: "T, T, T... TR, TR, TR...",
			examples: [
				{ word: "ô tô", icon: "🚗" },
				{ word: "sư tử", icon: "🦁" },
				{ word: "cá trê", icon: "🐟" },
				{ word: "tre ngô", icon: "🌳" }
			],
			situation: {
				title: "Bảo vệ môi trường",
				background_image: null,
				dialogs: [
					{ role: "narrator", text: "Hà tả hồ cá. Hồ to, có cá mè, cá trê, cá rô.", icon: "🐟" },
					{ role: "narrator", text: "Chúng ta cùng bảo vệ môi biển!", icon: "🌊" }
				]
			}
		},
		
		// BÀI 23: Th th, ia
		{
			id: 23, char: "TH, IA", sub: "Th th, ia", word: "thìa đĩa", svgKey: null, icon: "🥄",
			sentence: "Trung thu, bé được chia quà.",
			intro: "Bài 23. Chữ TH và chữ IA.",
			detail: "TH trong từ Thìa, IA trong từ Chia.",
			guide_intro: "Lưỡi giữa răng cho chữ TH. IA ghép hai âm I và A.",
			guide_phoneme: "TH, TH, TH... IA, IA, IA...",
			examples: [
				{ word: "thú đỏ", icon: "🏔️" },
				{ word: "lá thu", icon: "✉️" },
				{ word: "thìa đĩa", icon: "🥄" },
				{ word: "lá tía tô", icon: "🌿" }
			],
			situation: {
				title: "Cảm ơn",
				background_image: null,
				dialogs: [
					{ role: "child", text: "Bé chia thìa, chia đĩa cho cả nhà.", icon: "👦" },
					{ role: "narrator", text: "Thìa đĩa to cho bố mẹ. Thìa đĩa nhỏ cho bé.", icon: "🥄" }
				]
			}
		},
		
		// BÀI 24: ua, ua
		{
			id: 24, char: "UA, UA", sub: "ua, ua", word: "múa", svgKey: null, icon: "💃",
			sentence: "Mẹ đưa Hà đến lớp học múa.",
			intro: "Bài 24. Chữ UA và chữ UA.",
			detail: "UA trong từ Đưa Múa.",
			guide_intro: "UA ghép hai âm U và A.",
			guide_phoneme: "UA, UA, UA...",
			examples: [
				{ word: "cà chua", icon: "🍅" },
				{ word: "mũa ô", icon: "☂️" },
				{ word: "dưa lê", icon: "🥒" },
				{ word: "cửa sổ", icon: "🪟" }
			],
			situation: {
				title: "Giúp mẹ",
				background_image: null,
				dialogs: [
					{ role: "mom", text: "Mẹ đi chợ mua cá, mua cua.", icon: "👩" },
					{ role: "narrator", text: "Mẹ mua cả sữa chua dưa lê.", icon: "🥒" }
				]
			}
		},
		
		// BÀI 25: ÔN TẬP R, S, T, TR, TH, IA, UA, UA
		{
			id: 25, char: "Ôn tập", sub: "Ôn tập", word: "mùa hè", svgKey: null, icon: "☀️",
			sentence: "Mùa hè, nhà bà có dưa, có dưa lê. Mùa thu, nhà bà có na, có thị.",
			intro: "Bài 25. Ôn tập và Kể chuyện.",
			detail: "Ôn tập các chữ R, S, T, TR, TH, IA, UA, UA đã học.",
			guide_intro: "Cùng ôn lại các chữ cái nhé.",
			guide_phoneme: "R, S, T, TR, Thờ, IA, UA, ƯA...",
			examples: [
				{ word: "cù sọ", icon: "🐚" },
				{ word: "lưa thua", icon: "🔥" },
				{ word: "lá mía rế", icon: "🌿" },
				{ word: "tre", icon: "🎋" },
				{ word: "cửa sổ", icon: "🪟" },
				{ word: "mũa thu", icon: "🍂" },
				{ word: "tô cỏ", icon: "🌱" },
				{ word: "khế chua", icon: "⭐" }
			],
			situation: {
				title: "Chó sói và cừu non",
				background_image: null,
				dialogs: [
					{ role: "narrator", text: "Nhân nhà gặm cỏ, cừu non gặp phải chuyện gì?", icon: "🐑" },
					{ role: "narrator", text: "Cừu non nói gì với sói?", icon: "🐺" },
					{ role: "narrator", text: "Cừu non đã làm gì để thoát khỏi sói?", icon: "🐑" },
					{ role: "narrator", text: "Câu chuyện kết thúc như thế nào?", icon: "📖" }
				]
			}
		},
				
				// BÀI 26 (trang 64): Ph ph, Qu qu
				// [NHÁP - anh thay từ/câu/hội thoại thật từ SGK khi dạy học sinh]
				{
					id: 26, char: "Ph Qu", sub: "Ph ph, Qu qu", word: "phở bò", svgKey: null, icon: "🍜",
					sentence: "Bé đọc và ghép được vần Ph Qu.",
					intro: "Bài 26. Vần Ph Qu.",
					detail: "Học các vần Ph Qu qua từ khoá \"phở bò\".",
					guide_intro: "Các em phát âm rõ từng vần Ph Qu nhé.",
					guide_phoneme: "Ph, Qu...",
					examples: [
						{ word: "phở bò", icon: "🍜" },
						{ word: "quả cam", icon: "🍊" }
					],
					situation: {
						title: "Cùng bạn tập nói nh",
						background_image: null,
						dialogs: [
							{ role: "teacher", text: "Con hãy đọc từ \"phở bò\" cho cô nghe nào!", icon: "👩‍🏫" },
							{ role: "student", text: "Dạ, phở bò ạ!", icon: "🧒" }
						]
					}
				},
				// Dữ liệu từ bài 27 đến 76
		    { 
		        id: 27, char: "V, X", sub: "V v, X x", word: "xe đạp", svgKey: null, icon: "🚲", 
		        sentence: "Hà vẽ xe đạp.", 
		        intro: "Bài 27. Vần Vờ, Xờ.", 
		        detail: "Học các vần V v, X x.",
		        guide_intro: "Phát âm rõ ràng nhé.",
		        guide_phoneme: "Vờ, Xờ...", 
		        examples: [{ word: "vở vẽ", icon: "🎨" }, { word: "vỉa hè", icon: "🛣️" }, { word: "xe lu", icon: "🚜" }],
		        situation: {
    title: "Khám phá Thành phố và Nông thôn", 
    background_image: null, 
    dialogs: [
        { 
            role: "narrator", 
            text: "Chào bé! Hôm nay chúng mình cùng tưởng tượng nhé. Bé hãy nhắm mắt lại và lắng nghe chú Kiến kể về hai nơi này.", 
            icon: "🐜" 
        },
        { 
            role: "narrator", 
            text: "Ở thành phố, bé sẽ nghe thấy tiếng còi xe inh ỏi, tiếng người nói chuyện ồn ào và những tòa nhà cao tầng chọc trời. Còn ở nông thôn, bé sẽ nghe tiếng gà gáy sáng, tiếng gió rì rào qua những cánh đồng lúa và không khí thì rất trong lành.", 
            icon: "🌾" 
        },
        { 
            role: "teacher", 
            text: "Bé thử đoán xem: Nơi nào có nhiều tiếng còi xe, và nơi nào có nhiều tiếng chim hót nhỉ?", 
            icon: "👩‍🏫" 
        },
        { 
            role: "student", 
            text: "Dạ, thành phố thì có nhiều tiếng còi xe, còn nông thôn thì có nhiều tiếng chim hót ạ!", 
            icon: "🧒" 
        }
    ] 
			}
},
		    { 
		        id: 28, char: "Y", sub: "Y y", word: "dã quỳ", svgKey: null, icon: "🌼", 
		        sentence: "Thời gian quý hơn vàng bạc.", 
		        intro: "Bài 28. Chữ Y, Qu.", 
		        detail: "Học chữ Y và Qu.",
		        guide_intro: "Phát âm y và qu.",
		        guide_phoneme: "Y, Qu...", 
		        examples: [{ word: "y tá", icon: "👩‍⚕️" }, { word: "đá quý", icon: "💎" }],
		        situation: { title: "Trân trọng thời gian", background_image: null, dialogs: [{ role: "mom", text: "Con hãy làm bài tập nhé.", icon: "👩" }, { role: "kid", text: "Vâng ạ, thời gian quý lắm!", icon: "👦" }] }
		    },
		    { id: 29, char: "Chính tả", sub: "Luyện tập chính tả", word: "cá cờ", svgKey: null, icon: "🐟", sentence: "Phân biệt c/k, g/gh.", intro: "Bài 29. Luyện tập chính tả.", detail: "Ôn tập c/k, g/gh, ng/ngh.", guide_intro: "Lưu ý quy tắc chính tả.", guide_phoneme: "C, K, G, GH, NG, NGH", examples: [{ word: "cá cờ", icon: "🐟" }, { word: "ghế gỗ", icon: "🪑" }], situation: null },
		    { 
		        id: 30, char: "Ôn tập", sub: "Ôn tập", word: "bờ hồ", svgKey: null, icon: "🏞️", 
		        sentence: "Nhà bé ở Thủ đô.", 
		        intro: "Bài 30. Ôn tập và kể chuyện.", 
		        detail: "Kể chuyện Kiến và Dế mèn.",
		        guide_intro: "Cùng ôn tập.",
		        guide_phoneme: "Ôn tập tổng hợp", 
		        examples: [{ word: "phố cổ", icon: "🏘️" }, { word: "đá quý", icon: "💎" }],
		        situation: { title: "Kiến và Dế mèn", background_image: null, dialogs: [{ role: "ant", text: "Bạn nên lo xa.", icon: "🐜" }, { role: "cricket", text: "Tớ biết rồi.", icon: "🦗" }] }
		    },
		    { 
		        id: 31, char: "an, ăn, ân", sub: "an ǎn ân", word: "bạn thân", svgKey: null, icon: "👯", 
		        sentence: "Ngựa vằn và hươu cao cổ là đôi bạn thân.", 
		        intro: "Bài 31. Vần an, ăn, ân.", 
		        detail: "Học vần an, ăn, ân.",
		        guide_intro: "Phát âm vần kết thúc bằng n.",
		        guide_phoneme: "An, Ăn, Ân", 
		        examples: [{ word: "khăn rằn", icon: "🧣" }, { word: "quả mận", icon: "🍑" }],
		       situation: {
    title: "Xin lỗi bạn",
    background_image: null,
    dialogs: [
        { role: "narrator", text: "Giờ ra chơi kết thúc, các bạn xếp hàng vào lớp.", icon: "🔔" },
        { role: "narrator", text: "Một bạn vô ý giẫm vào chân Hà.", icon: "😳" },
        { role: "student", text: "Xin lỗi bạn! Mình sơ ý giẫm vào chân bạn!", icon: "🧒" },
        { role: "student", text: "Không sao đâu, cảm ơn bạn đã xin lỗi.", icon: "🙂" }
    ]
}
		    },
    { id: 32, char: "on, ôn, ơn", sub: "on ôn ơn", word: "con chồn", svgKey: null, icon: "🐾", sentence: "Sơn ca véo von: Mẹ ơi, con đã lớn khôn.", intro: "Bài 32. Vần on, ôn, ơn.", detail: "Học vần on, ôn, ơn.", guide_intro: "Phát âm rõ vần kết thúc bằng n.", guide_phoneme: "On, Ôn, Ơn", examples: [{ word: "nón lá", icon: "👒" }, { word: "con chồn", icon: "🦊" }, { word: "sơn ca", icon: "🐦" }], situation: {
    title: "Buổi sáng trong khu rừng",
    background_image: null,
    dialogs: [
        { role: "teacher", text: "Trời vừa sáng, nắng chiếu khắp khu rừng. Con nghe xem có những con vật nào thức dậy nhé!", icon: "👩‍🏫" },
        { role: "narrator", text: "Chồn, gấu, lợn, sóc, thỏ, khỉ cùng nhau thức dậy.", icon: "🌳" },
        { role: "student", text: "Con nghe thấy sóc đang chuyền cành, thỏ đang gặm cỏ ạ!", icon: "🧒" },
        { role: "teacher", text: "Giỏi lắm! Khu rừng buổi sáng thật nhộn nhịp phải không nào?", icon: "👩‍🏫" }
    ]
}
	},
    { id: 33, char: "en, ên, in, un", sub: "en ên in un", word: "cún con", svgKey: null, icon: "🐶", sentence: "Cún con nhìn thấy dế mèn trên tàu lá.", intro: "Bài 33. Vần en, ên, in, un.", detail: "Học vần en, ên, in, un.", guide_intro: "Chú ý âm cuối n.", guide_phoneme: "En, Ên, In, Un", examples: [{ word: "ngọn nến", icon: "🕯️" }, { word: "đèn pin", icon: "🔦" }], situation: null },
    { id: 34, char: "am, ăm, âm", sub: "am ăm âm", word: "quả cam", svgKey: null, icon: "🍊", sentence: "Nhện ngắm nghía tấm lưới vừa làm xong.", intro: "Bài 34. Vần am, ăm, âm.", detail: "Học vần am, ăm, âm.", guide_intro: "Âm m ở cuối.", guide_phoneme: "Am, Ăm, Âm", examples: [{ word: "tăm tre", icon: "🥢" }, { word: "củ sâm", icon: "🥕" }], situation: null },
    { id: 35, char: "Ôn tập", sub: "Ôn tập", word: "bàn chân", svgKey: null, icon: "🦶", sentence: "Gà mẹ dẫn đàn con đi ăn.", intro: "Bài 35. Ôn tập.", detail: "Ôn lại các vần đã học.", guide_intro: "Cùng ôn tập.", guide_phoneme: "Tổng hợp", examples: [{ word: "bàn chân", icon: "🦶" }, { word: "lọ mực", icon: "✒️" }], situation: { title: "Gà mẹ và con", background_image: null, dialogs: [{ role: "hen", text: "Tục tục, lại đây ăn nào!", icon: "🐔" }, { role: "chick", text: "Chúng con tới đây!", icon: "🐣" }] } },
    { id: 36, char: "om, ôm, ơm", sub: "om ôm ơm", word: "mâm cơm", svgKey: null, icon: "🥘", sentence: "Hương cốm thơm thôn xóm.", intro: "Bài 36. Vần om, ôm, ơm.", detail: "Học vần om, ôm, ơm.", guide_intro: "Phát âm rõ vần.", guide_phoneme: "Om, Ôm, Ơm", examples: [{ word: "đom đóm", icon: "✨" }, { word: "chó đốm", icon: "🐕" }], situation: null },
    { id: 37, char: "em, êm, im, um", sub: "em êm im um", word: "tủm tỉm", svgKey: null, icon: "😊", sentence: "Chị em Hà chơi trốn tìm.", intro: "Bài 37. Vần em, êm, im, um.", detail: "Học vần em, êm, im, um.", guide_intro: "Phát âm chuẩn âm cuối.", guide_phoneme: "Em, Êm, Im, Um", examples: [{ word: "tem thư", icon: "✉️" }, { word: "thềm nhà", icon: "🏠" }], situation: null },
    { id: 38, char: "ai, ay, ây", sub: "ai ay ây", word: "chùm vải", svgKey: null, icon: "🍇", sentence: "Hai bạn thi nhảy dây.", intro: "Bài 38. Vần ai, ay, ây.", detail: "Học vần ai, ay, ây.", guide_intro: "Luyện phát âm.", guide_phoneme: "Ai, Ay, Ây", examples: [{ word: "máy cày", icon: "🚜" }, { word: "đám mây", icon: "☁️" }], situation: { title: "Nhím và chồn", background_image: null, dialogs: [{ role: "porcupine", text: "Bạn nhím đấy con ạ.", icon: "🦔" }, { role: "fawn", text: "Dạ vâng ạ!", icon: "🦌" }] } },
    { id: 39, char: "oi, ôi, ơi", sub: "oi ôi ơi", word: "đồ chơi", svgKey: null, icon: "🧸", sentence: "Voi con mời bạn đi xem hội.", intro: "Bài 39. Vần oi, ôi, ơi.", detail: "Học vần oi, ôi, ơi.", guide_intro: "Luyện phát âm.", guide_phoneme: "Oi, Ôi, Ơi", examples: [{ word: "chim bói cá", icon: "🐦" }, { word: "thổi còi", icon: "📢" }], situation: null },
    { id: 40, char: "Ôn tập", sub: "Ôn tập", word: "bơi lội", svgKey: null, icon: "🏊", sentence: "Trái đất của chúng ta vô cùng rộng lớn.", intro: "Bài 40. Ôn tập.", detail: "Ôn tập vần.", guide_intro: "Ôn lại vần.", guide_phoneme: "Tổng hợp", examples: [{ word: "bơi lội", icon: "🏊" }, { word: "bãi bồi", icon: "🏖️" }], situation: null },
    { id: 41, char: "ui, ưi", sub: "ui ưi", word: "gửi thư", svgKey: null, icon: "💌", sentence: "Bà gửi cho Hà túi kẹo.", intro: "Bài 41. Vần ui, ưi.", detail: "Học vần ui, ưi.", guide_intro: "Luyện đọc.", guide_phoneme: "Ui, Ưi", examples: [{ word: "bụi cỏ", icon: "🌿" }, { word: "dãy núi", icon: "⛰️" }], situation: null },
    { id: 42, char: "ao, eo", sub: "ao eo", word: "ngôi sao", svgKey: null, icon: "⭐", sentence: "Ao thu lạnh lẽo nước trong veo.", intro: "Bài 42. Vần ao, eo.", detail: "Học vần ao, eo.", guide_intro: "Luyện đọc.", guide_phoneme: "Ao, Eo", examples: [{ word: "quả táo", icon: "🍎" }, { word: "cái kẹo", icon: "🍬" }], situation: null },
    { id: 43, char: "au, âu, êu", sub: "au âu êu", word: "con trâu", svgKey: null, icon: "🐃", sentence: "Đàn sẻ nâu kêu ríu rít ở sau nhà.", intro: "Bài 43. Vần au, âu, êu.", detail: "Học vần au, âu, êu.", guide_intro: "Luyện đọc.", guide_phoneme: "Au, Âu, Êu", examples: [{ word: "rau củ", icon: "🥕" }, { word: "chú tễu", icon: "🤡" }], situation: null },
    { id: 44, char: "iu, ưu", sub: "iu ưu", word: "cái rìu", svgKey: null, icon: "🪓", sentence: "Bà đã nghỉ hưu mà luôn bận bịu.", intro: "Bài 44. Vần iu, ưu.", detail: "Học vần iu, ưu.", guide_intro: "Luyện đọc.", guide_phoneme: "Iu, Ưu", examples: [{ word: "cái địu", icon: "🎒" }, { word: "quả lựu", icon: "🏮" }], situation: null },
    { id: 45, char: "Ôn tập", sub: "Ôn tập", word: "chịu khó", svgKey: null, icon: "💪", sentence: "Mùa hè ở Tam Đảo quả là dễ chịu.", intro: "Bài 45. Ôn tập.", detail: "Ôn tập vần.", guide_intro: "Ôn lại vần.", guide_phoneme: "Tổng hợp", examples: [{ word: "muu trí", icon: "🧠" }, { word: "cây cau", icon: "🌴" }], situation: null },
    { id: 46, char: "ac, ăc, âc", sub: "ac ăc âc", word: "mắc áo", svgKey: null, icon: "🧥", sentence: "Tây Bắc có ruộng bậc thang, có thác nước.", intro: "Bài 46. Vần ac, ặc, âc.", detail: "Học vần ac, ặc, âc.", guide_intro: "Luyện đọc.", guide_phoneme: "Ac, Ặc, Âc", examples: [{ word: "bác sĩ", icon: "👨‍⚕️" }, { word: "quả gấc", icon: "🍈" }], situation: null },
    { id: 47, char: "oc, ôc, uc, ưc", sub: "oc ôc uc ưc", word: "con sóc", svgKey: null, icon: "🐿️", sentence: "Ở góc vườn, cạnh gốc cau, khóm cúc nở hoa vàng rực.", intro: "Bài 47. Vần oc, ốc, uc, ực.", detail: "Học vần oc, ốc, uc, ực.", guide_intro: "Luyện đọc.", guide_phoneme: "Oc, Ốc, Uc, Ực", examples: [{ word: "máy xúc", icon: "🚜" }, { word: "con mực", icon: "🦑" }], situation: null },
    { id: 48, char: "at, ăt, ât", sub: "at ăt ât", word: "mặt trời", svgKey: null, icon: "☀️", sentence: "Nam bắt nhịp cho tất cả các bạn hát.", intro: "Bài 48. Vần at, ăt, ât.", detail: "Học vần at, ăt, ât.", guide_intro: "Luyện đọc.", guide_phoneme: "At, Ăt, Ât", examples: [{ word: "bãi cát", icon: "🏖️" }, { word: "bật lửa", icon: "🔥" }], situation: null },
    { id: 49, char: "ot, ôt, ơt", sub: "ot ôt ơt", word: "lá lốt", svgKey: null, icon: "🍃", sentence: "Vườn nhà bà có ớt, rau ngót và cà rốt.", intro: "Bài 49. Vần ot, ôt, ơt.", detail: "Học vần ot, ôt, ơt.", guide_intro: "Luyện đọc.", guide_phoneme: "Ot, Ôt, Ơt", examples: [{ word: "quả nhót", icon: "🍒" }, { word: "quả ớt", icon: "🌶️" }], situation: null },
    { id: 50, char: "Ôn tập", sub: "Ôn tập", word: "gà mẹ", svgKey: null, icon: "🐔", sentence: "Gà mẹ dẫn đàn con đi ăn.", intro: "Bài 50. Ôn tập.", detail: "Ôn tập vần.", guide_intro: "Ôn lại vần.", guide_phoneme: "Tổng hợp", examples: [{ word: "giấc mơ", icon: "💤" }, { word: "hạt thóc", icon: "🌾" }], situation: null },
    { id: 51, char: "et, êt, it", sub: "et êt it", word: "con vẹt", svgKey: null, icon: "🦜", sentence: "Đôi vẹt ríu rít mãi không hết chuyện.", intro: "Bài 51. Vần et, êt, it.", detail: "Học vần et, êt, it.", guide_intro: "Luyện đọc.", guide_phoneme: "Et, Êt, It", examples: [{ word: "bồ kết", icon: "🥣" }, { word: "quả mít", icon: "🍈" }], situation: null },
    { id: 52, char: "ut, ưt", sub: "ut ưt", word: "bút chì", svgKey: null, icon: "✏️", sentence: "Cầu thủ số 7 thu hút khán giả.", intro: "Bài 52. Vần ut, ưt.", detail: "Học vần ut, ưt.", guide_intro: "Luyện đọc.", guide_phoneme: "Ut, Ưt", examples: [{ word: "mứt dừa", icon: "🥥" }, { word: "nứt nẻ", icon: "🌵" }], situation: null },
    { id: 53, char: "ap, ăp, âp", sub: "ap ăp âp", word: "cặp da", svgKey: null, icon: "💼", sentence: "Mẹ đạp xe đưa Hà đến lớp.", intro: "Bài 53. Vần ap, ắp, ập.", detail: "Học vần ap, ắp, ập.", guide_intro: "Luyện đọc.", guide_phoneme: "Ap, Ắp, Ập", examples: [{ word: "xe đạp", icon: "🚲" }, { word: "cá mập", icon: "🦈" }], situation: null },
    { id: 54, char: "op, ôp, ơp", sub: "op ôp ơp", word: "lốp xe", svgKey: null, icon: "🛞", sentence: "Mưa rào lộp độp.", intro: "Bài 54. Vần op, ôp, ơp.", detail: "Học vần op, ôp, ơp.", guide_intro: "Luyện đọc.", guide_phoneme: "Op, Ôp, Ơp", examples: [{ word: "con cọp", icon: "🐅" }, { word: "tia chớp", icon: "⚡" }], situation: null },
    { id: 55, char: "Ôn tập", sub: "Ôn tập", word: "tấp nập", svgKey: null, icon: "🏬", sentence: "Chợ đông vui và bán đủ thứ.", intro: "Bài 55. Ôn tập.", detail: "Ôn tập vần.", guide_intro: "Ôn lại vần.", guide_phoneme: "Tổng hợp", examples: [{ word: "nét chữ", icon: "✍️" }, { word: "hồi hộp", icon: "😰" }], situation: null },
    { id: 56, char: "ep, êp, ip, up", sub: "ep êp ip up", word: "búp sen", svgKey: null, icon: "🪷", sentence: "Trong bếp, lũ cún con múp míp nép vào bên mẹ.", intro: "Bài 56. Vần ep, êp, ip, up.", detail: "Học vần ep, êp, ip, up.", guide_intro: "Luyện đọc.", guide_phoneme: "Ep, Êp, Ip, Up", examples: [{ word: "đôi dép", icon: "🩴" }, { word: "đầu bếp", icon: "👨‍🍳" }], situation: null },
    { id: 57, char: "anh, ênh, inh", sub: "anh ênh inh", word: "quả chanh", svgKey: null, icon: "🍋", sentence: "Con kênh xinh xinh chảy qua cánh đồng.", intro: "Bài 57. Vần anh, ênh, inh.", detail: "Học vần anh, ênh, inh.", guide_intro: "Luyện đọc.", guide_phoneme: "Anh, Ênh, Inh", examples: [{ word: "bờ kênh", icon: "🌊" }, { word: "kính râm", icon: "🕶️" }], situation: null },
    { id: 58, char: "ach, êch, ich", sub: "ach êch ich", word: "sách vở", svgKey: null, icon: "📚", sentence: "Ếch con thích đọc sách.", intro: "Bài 58. Vần ach, êch, ich.", detail: "Học vần ach, êch, ich.", guide_intro: "Luyện đọc.", guide_phoneme: "Ach, Êch, Ich", examples: [{ word: "chênh lệch", icon: "⚖️" }, { word: "tờ lịch", icon: "📅" }], situation: null },
    { id: 59, char: "ang, ăng, âng", sub: "ang ăng âng", word: "cá vàng", svgKey: null, icon: "🐟", sentence: "Vầng trăng sáng lấp ló sau rặng tre.", intro: "Bài 59. Vần ang, ăng, âng.", detail: "Học vần ang, ăng, âng.", guide_intro: "Luyện đọc.", guide_phoneme: "Ang, Ăng, Âng", examples: [{ word: "măng tre", icon: "🎋" }, { word: "nhà tầng", icon: "🏢" }], situation: null },
    { id: 60, char: "Ôn tập", sub: "Ôn tập", word: "vâng lời", svgKey: null, icon: "✅", sentence: "Hà rất thích con gà bà cho.", intro: "Bài 60. Ôn tập.", detail: "Ôn tập vần.", guide_intro: "Ôn lại vần.", guide_phoneme: "Tổng hợp", examples: [{ word: "xinh đẹp", icon: "✨" }, { word: "thẳng hàng", icon: "📏" }], situation: null },
    // [NHÁP - bài 61 mới thêm, anh thay câu/hội thoại thật từ SGK khi dạy học sinh]
    { id: 61, char: "ong, ông, ung, ưng", sub: "ong ông ung ưng", word: "quả bóng", svgKey: null, icon: "⚽", sentence: "Bé đọc và ghép được vần ong, ông, ung, ưng.", intro: "Bài 61. Vần ong, ông, ung, ưng.", detail: "Học vần ong, ông, ung, ưng.", guide_intro: "Luyện đọc rõ từng vần.", guide_phoneme: "Ong, Ông, Ung, Ưng", examples: [{ word: "quả bóng", icon: "⚽" }, { word: "dòng sông", icon: "🌊" }, { word: "khủng long", icon: "🦕" }, { word: "vui mừng", icon: "😄" }], situation: null },
    { id: 62, char: "iêc, iên, iêp", sub: "iêc iên iêp", word: "biển", svgKey: null, icon: "🌊", sentence: "Biển xanh biếc.", intro: "Bài 62. Vần iêc, iên, iêp.", detail: "Học vần iêc, iên, iêp.", guide_intro: "Luyện đọc.", guide_phoneme: "Iêc, Iên, Iêp", examples: [{ word: "xanh biếc", icon: "🌊" }, { word: "sò điệp", icon: "🐚" }], situation: null },
    { id: 63, char: "iêng, iêm, yên", sub: "iêng iêm yên", word: "cá kiếm", svgKey: null, icon: "🐟", sentence: "Yến phụng có bộ lông tím biêng biếc.", intro: "Bài 63. Vần iêng, iêm, yên.", detail: "Học vần iêng, iêm, yên.", guide_intro: "Luyện đọc.", guide_phoneme: "Iêng, Iêm, Yên", examples: [{ word: "sầu riêng", icon: "🍈" }, { word: "tổ yến", icon: "🏠" }], situation: null },
    { id: 64, char: "iêt, iêu, yêu", sub: "iêt iêu yêu", word: "cánh diều", svgKey: null, icon: "🪁", sentence: "Em yêu sách.", intro: "Bài 64. Vần iêt, iêu, yêu.", detail: "Học vần iêt, iêu, yêu.", guide_intro: "Luyện đọc.", guide_phoneme: "Iêt, Iêu, Yêu", examples: [{ word: "nhiệt kế", icon: "🌡️" }, { word: "yêu chiều", icon: "❤️" }], situation: null },
    { id: 65, char: "Ôn tập", sub: "Ôn tập", word: "trùng điệp", svgKey: null, icon: "⛰️", sentence: "Trái đất của chúng ta vô cùng rộng lớn.", intro: "Bài 65. Ôn tập.", detail: "Ôn tập vần.", guide_intro: "Ôn lại vần.", guide_phoneme: "Tổng hợp", examples: [{ word: "xanh biếc", icon: "🌊" }, { word: "tiếng trống", icon: "🥁" }], situation: null },
    { id: 66, char: "uôi, uôm", sub: "uôi uôm", word: "thuyền buồm", svgKey: null, icon: "⛵", sentence: "Thuyền buồm xuôi theo chiều gió.", intro: "Bài 66. Vần uôi, uôm.", detail: "Học vần uôi, uôm.", guide_intro: "Luyện đọc.", guide_phoneme: "Uôi, Uôm", examples: [{ word: "con suối", icon: "💧" }, { word: "buổi sáng", icon: "☀️" }], situation: null },
    { id: 67, char: "uôc, uôt", sub: "uôc uôt", word: "con chuột", svgKey: null, icon: "🐭", sentence: "Mẹ vuốt tóc và buộc nơ cho Hà.", intro: "Bài 67. Vần uộc, uột.", detail: "Học vần uộc, uột.", guide_intro: "Luyện đọc.", guide_phoneme: "Uộc, Uột", examples: [{ word: "ngọn đuốc", icon: "🕯️" }, { word: "viên thuốc", icon: "💊" }], situation: null },
    { id: 68, char: "uôn, uông", sub: "uôn uông", word: "chuồn chuồn", svgKey: null, icon: "🚁", sentence: "Chuồn chuồn bay qua các luống rau.", intro: "Bài 68. Vần uôn, uông.", detail: "Học vần uôn, uông.", guide_intro: "Luyện đọc.", guide_phoneme: "Uôn, Uông", examples: [{ word: "cuộn chỉ", icon: "🧵" }, { word: "quả chuông", icon: "🔔" }], situation: null },
    { id: 69, char: "ươi, ươu", sub: "ươi ươu", word: "tươi cười", svgKey: null, icon: "😊", sentence: "Chim khướu biết bắt chước tiếng người.", intro: "Bài 69. Vần ươi, ươu.", detail: "Học vần ươi, ươu.", guide_intro: "Luyện đọc.", guide_phoneme: "Ươi, Ươu", examples: [{ word: "quả bưởi", icon: "🍊" }, { word: "ốc bươu", icon: "🐌" }], situation: null },
    { id: 70, char: "Ôn tập", sub: "Ôn tập", word: "cưỡi ngựa", svgKey: null, icon: "🐎", sentence: "Ông trồng nhiều cây ăn trái.", intro: "Bài 70. Ôn tập.", detail: "Ôn tập vần.", guide_intro: "Ôn lại vần.", guide_phoneme: "Tổng hợp", examples: [{ word: "cưỡi ngựa", icon: "🐎" }, { word: "lem luốc", icon: "🎨" }], situation: null },
    { id: 71, char: "ươc, ươt", sub: "ươc ươt", word: "thước kẻ", svgKey: null, icon: "📏", sentence: "Hà ước được lướt sóng biển.", intro: "Bài 71. Vần ược, uot.", detail: "Học vần ược, uot.", guide_intro: "Luyện đọc.", guide_phoneme: "Ược, Uot", examples: [{ word: "lướt ván", icon: "🏄" }, { word: "dược sĩ", icon: "👨‍🔬" }], situation: null },
    { id: 72, char: "ươm, ươp", sub: "ươm ươp", word: "con bướm", svgKey: null, icon: "🦋", sentence: "Hoa mướp vàng ươm, bướm bay rập rờn.", intro: "Bài 72. Vần ươm, ươp.", detail: "Học vần ươm, ươp.", guide_intro: "Luyện đọc.", guide_phoneme: "Ươm, Ươp", examples: [{ word: "nườm nượp", icon: "🚶" }, { word: "giàn mướp", icon: "🍈" }], situation: null },
    { id: 73, char: "ươn, ương", sub: "ươn ương", word: "con đường", svgKey: null, icon: "🛣️", sentence: "Đường tới trường lượn theo sườn đồi.", intro: "Bài 73. Vần ươn, ương.", detail: "Học vần ươn, ương.", guide_intro: "Luyện đọc.", guide_phoneme: "Ươn, Ương", examples: [{ word: "khu vườn", icon: "🌳" }, { word: "hạt sương", icon: "💧" }], situation: null },
    { id: 74, char: "oa, oe", sub: "oa oe", word: "đóa hoa", svgKey: null, icon: "🌺", sentence: "Các loài hoa đua nhau khoe sắc.", intro: "Bài 74. Vần oa, oe.", detail: "Học vần oa, oe.", guide_intro: "Luyện đọc.", guide_phoneme: "Oa, Oe", examples: [{ word: "váy xòe", icon: "👗" }, { word: "chích chòe", icon: "🐦" }], situation: null },
    { id: 75, char: "Ôn tập", sub: "Ôn tập", word: "vàng hoe", svgKey: null, icon: "✨", sentence: "Khắp vườn, hoa tỏa hương ngào ngạt.", intro: "Bài 75. Ôn tập.", detail: "Ôn tập vần.", guide_intro: "Ôn lại vần.", guide_phoneme: "Tổng hợp", examples: [{ word: "bay lượn", icon: "🦅" }, { word: "toả hương", icon: "🌸" }], situation: null },
    { id: 76, char: "oan, oăn, oat, oăt", sub: "oan oăn oat oăt", word: "hoạt hình", svgKey: null, icon: "🎬", sentence: "Trên phim hoạt hình, voi bước khoan thai.", intro: "Bài 76. Vần oan, oăn, oat, oăt.", detail: "Học vần oan, oăn, oat, oăt.", guide_intro: "Luyện đọc.", guide_phoneme: "Oan, Oăn, Oat, Oăt", examples: [{ word: "tóc xoăn", icon: "👩‍🦱" }, { word: "nhọn hoắt", icon: "🗡️" }], situation: null },
    // [NHÁP - bài 77-80 mới thêm, anh thay câu/hội thoại/câu chuyện thật từ SGK khi dạy học sinh]
    { id: 77, char: "oai, uê, uy", sub: "oai uê uy", word: "củ khoai", svgKey: null, icon: "🍠", sentence: "Bé đọc và ghép được vần oai, uê, uy.", intro: "Bài 77. Vần oai, uê, uy.", detail: "Học vần oai, uê, uy.", guide_intro: "Luyện đọc rõ từng vần.", guide_phoneme: "Oai, Uê, Uy", examples: [{ word: "củ khoai", icon: "🍠" }, { word: "hoa huệ", icon: "🌼" }, { word: "quý giá", icon: "💎" }], situation: null },
    { id: 78, char: "uân, uât", sub: "uân uât", word: "mùa xuân", svgKey: null, icon: "🌱", sentence: "Bé đọc và ghép được vần uân, uât.", intro: "Bài 78. Vần uân, uât.", detail: "Học vần uân, uât.", guide_intro: "Luyện đọc rõ từng vần.", guide_phoneme: "Uân, Uât", examples: [{ word: "mùa xuân", icon: "🌱" }, { word: "nghệ thuật", icon: "🎨" }], situation: null },
    { id: 79, char: "uyên, uyêt", sub: "uyên uyêt", word: "lời khuyên", svgKey: null, icon: "💬", sentence: "Bé đọc và ghép được vần uyên, uyêt.", intro: "Bài 79. Vần uyên, uyêt.", detail: "Học vần uyên, uyêt.", guide_intro: "Luyện đọc rõ từng vần.", guide_phoneme: "Uyên, Uyêt", examples: [{ word: "lời khuyên", icon: "💬" }, { word: "tuyệt vời", icon: "🌟" }], situation: null },
    { id: 80, char: "Ôn tập", sub: "Ôn tập và kể chuyện", word: "ôn bài", svgKey: null, icon: "📖", sentence: "Chúng mình cùng ôn lại các vần đã học nhé.", intro: "Bài 80. Ôn tập và Kể chuyện.", detail: "Ôn tập cuối Tập 1 và nghe kể chuyện.", guide_intro: "Cùng ôn lại các vần đã học nào.", guide_phoneme: "Ôn tập tổng hợp", examples: [{ word: "ôn bài", icon: "📖" }, { word: "kể chuyện", icon: "🗣️" }], situation: null },
				{
					id: 200,
					volume: 2,
					type: "reading",
					theme: "Tôi và các bạn",
					char: "📚",
					sub: "Bài đọc",
					word: "Tôi là học sinh lớp 1",
					svgKey: null,
					icon: "🎒",
					
					sentence: "Từ khi đi học, em thích và không thích những gì?",
					intro: "Bài 1. Tôi là học sinh lớp 1.",
					detail: "Bài đọc về bạn Nam, học sinh lớp một A.",
					
					reading: {
						title: "Tôi là học sinh lớp 1",
						author: "Trung Sơn",
						paragraphs: [
							"Tôi tên là Nam, học sinh lớp một A, trường Tiểu học Lê Quý Đôn. Ngày đầu đi học, mặc bộ đồng phục của trường, tôi hãnh diện lắm.",
							"Hồi đầu năm học, tôi mới học chữ cái. Thế mà bây giờ, tôi đã đọc được truyện tranh. Tôi còn biết làm toán nữa. Tôi cũng thêm nhiều bạn mới.",
							"Ai cũng bảo từ khi đi học, tôi chẳng chóc hẳn lên."
						],
						full_text: "Tôi tên là Nam, học sinh lớp một A, trường Tiểu học Lê Quý Đôn. Ngày đầu đi học, mặc bộ đồng phục của trường, tôi hãnh diện lắm. Hồi đầu năm học, tôi mới học chữ cái. Thế mà bây giờ, tôi đã đọc được truyện tranh. Tôi còn biết làm toán nữa. Tôi cũng thêm nhiều bạn mới. Ai cũng bảo từ khi đi học, tôi chẳng chóc hẳn lên."
					},
					
					examples: [
						{ word: "hãnh diện", icon: "😊", meaning: "tự hào, vui vẻ về thành tích" },
						{ word: "chẳng chóc", icon: "⚡", meaning: "rất nhanh, không bao lâu" },
						{ word: "hẳn lên", icon: "📈", meaning: "trở nên ngoan hơn, khôn hơn" }
					],
					
					guide_intro: "Từ khi đi học lớp một, em đã thay đổi những gì?",
					guide_phoneme: "Thức dậy sớm hơn. Ăn sáng nhanh hơn. Không khóc nhè. Không ngượng bỡ mỗ đơn về. Thuộc thêm nhiều bài thơ. Có thêm nhiều bạn.",
					
					situation: {
						title: "Trả lời câu hỏi",
						background_image: null,
						dialogs: [
							{ 
								role: "teacher", 
								text: "Bạn Nam học lớp mấy?", 
								answer: "Bạn Nam học lớp một A.",
								icon: "❓" 
							},
							{ 
								role: "teacher", 
								text: "Hồi đầu năm, Nam học gì?", 
								answer: "Hồi đầu năm, Nam học chữ cái.",
								icon: "❓" 
							},
							{ 
								role: "teacher", 
								text: "Bây giờ, Nam biết làm gì?", 
								answer: "Bây giờ, Nam đã đọc được truyện tranh và biết làm toán.",
								icon: "❓" 
							}
						]
					},
					
					activities: [
						{ phrase: "đá bóng", icon: "⚽", description: "Các bạn đang đá bóng" },
						{ phrase: "đọc sách", icon: "📚", description: "Bạn Nam đang đọc sách" },
						{ phrase: "kéo co", icon: "🎯", description: "Các bạn đang chơi kéo co" },
						{ phrase: "múa", icon: "💃", description: "Bạn nữ đang múa" }
					]
				}
			];

