			// ====================================
			// SVG DEFINITIONS
			// ====================================
			const svgs = {
				"chicken": `<svg viewBox="0 0 100 100" width="80" height="80">
					<defs>
						<linearGradient id="chickenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" style="stop-color:#FFF176;stop-opacity:1" />
							<stop offset="100%" style="stop-color:#FFEB3B;stop-opacity:1" />
						</linearGradient>
					</defs>
					<path d="M30 60 Q30 85 60 80 Q80 80 80 50 Q80 30 60 30 Q50 30 45 40 Z" 
						  fill="url(#chickenGrad)" stroke="#FBC02D" stroke-width="2"/>
					<path d="M45 40 Q45 20 60 20 Q70 20 70 30" fill="#D32F2F"/>
					<path d="M80 50 L95 45 L95 55 Z" fill="#FF9800"/>
					<circle cx="65" cy="45" r="3" fill="black"/>
					<circle cx="67" cy="44" r="1" fill="white"/>
					<path d="M40 80 L35 95 M50 80 L55 95" stroke="#FBC02D" stroke-width="3"/>
				</svg>`,
				
				"doll": `<svg viewBox="0 0 100 100" width="80" height="80">
					<circle cx="50" cy="30" r="20" fill="#FFCC80"/>
					<path d="M30 50 L70 50 L80 90 L20 90 Z" fill="#E91E63"/>
					<circle cx="42" cy="28" r="3" fill="black"/>
					<circle cx="58" cy="28" r="3" fill="black"/>
					<circle cx="43" cy="27" r="1" fill="white"/>
					<circle cx="59" cy="27" r="1" fill="white"/>
					<path d="M45 35 Q50 38 55 35" stroke="#D84315" stroke-width="2" fill="none"/>
					<circle cx="45" cy="33" r="2" fill="#FF9800" opacity="0.5"/>
					<circle cx="55" cy="33" r="2" fill="#FF9800" opacity="0.5"/>
				</svg>`,
				
				"fish": `<svg viewBox="0 0 100 100" width="80" height="80">
					<defs>
						<linearGradient id="fishGrad" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" style="stop-color:#4FC3F7;stop-opacity:1" />
							<stop offset="100%" style="stop-color:#29B6F6;stop-opacity:1" />
						</linearGradient>
					</defs>
					<path d="M80 50 Q60 20 20 50 Q60 80 80 50 Z" fill="url(#fishGrad)"/>
					<path d="M80 50 L95 35 L95 65 Z" fill="#039BE5"/>
					<circle cx="35" cy="45" r="4" fill="black"/>
					<circle cx="36" cy="44" r="1.5" fill="white"/>
					<path d="M30 50 Q35 52 40 50" stroke="white" stroke-width="1" opacity="0.5"/>
				</svg>`,
				
				"friend": `<svg viewBox="0 0 100 100" width="80" height="80">
					<circle cx="30" cy="30" r="15" fill="#FFCC80"/>
					<circle cx="70" cy="30" r="15" fill="#FFCC80"/>
					<path d="M15 50 L45 50 L45 80 L15 80 Z" fill="#4CAF50"/>
					<path d="M55 50 L85 50 L85 80 L55 80 Z" fill="#FF9800"/>
					<circle cx="25" cy="28" r="2" fill="black"/>
					<circle cx="35" cy="28" r="2" fill="black"/>
					<circle cx="65" cy="28" r="2" fill="black"/>
					<circle cx="75" cy="28" r="2" fill="black"/>
					<path d="M22 35 Q30 38 38 35" stroke="#D84315" stroke-width="1.5" fill="none"/>
					<path d="M62 35 Q70 38 78 35" stroke="#D84315" stroke-width="1.5" fill="none"/>
				</svg>`,
				
				"cow": `<svg viewBox="0 0 100 100" width="80" height="80">
					<path d="M20 60 Q20 85 50 85 Q80 85 80 60 Q80 40 50 40 Q20 40 20 60 Z" 
						  fill="#FFFDE7" stroke="#333" stroke-width="2"/>
					<ellipse cx="30" cy="55" rx="8" ry="10" fill="#333" opacity="0.2"/>
					<ellipse cx="70" cy="55" rx="8" ry="10" fill="#333" opacity="0.2"/>
					<circle cx="35" cy="55" r="3" fill="black"/>
					<circle cx="65" cy="55" r="3" fill="black"/>
					<circle cx="36" cy="54" r="1" fill="white"/>
					<circle cx="66" cy="54" r="1" fill="white"/>
					<path d="M40 75 Q50 80 60 75" stroke="#333" stroke-width="2" fill="none"/>
					<ellipse cx="50" cy="72" rx="4" ry="2" fill="#FF9800"/>
					<path d="M20 45 L10 30 M80 45 L90 30" stroke="#333" stroke-width="3"/>
					<ellipse cx="10" cy="28" rx="3" ry="5" fill="#FFEB3B"/>
					<ellipse cx="90" cy="28" rx="3" ry="5" fill="#FFEB3B"/>
				</svg>`,
				
				"cricket": `<svg viewBox="0 0 100 100" width="80" height="80">
					<ellipse cx="50" cy="50" rx="20" ry="30" fill="#4CAF50"/>
					<circle cx="50" cy="30" r="10" fill="#388E3C"/>
					<path d="M40 20 L20 10 M60 20 L80 10" stroke="#388E3C" stroke-width="2"/>
					<circle cx="20" cy="10" r="2" fill="#FFEB3B"/>
					<circle cx="80" cy="10" r="2" fill="#FFEB3B"/>
					<path d="M30 60 L10 80 M70 60 L90 80" stroke="#388E3C" stroke-width="3"/>
					<circle cx="45" cy="28" r="2" fill="black"/>
					<circle cx="55" cy="28" r="2" fill="black"/>
					<path d="M48 33 Q50 34 52 33" stroke="white" stroke-width="1" fill="none"/>
				</svg>`,
				
				"flag": `<svg viewBox="0 0 100 100" width="80" height="80">
					<rect x="10" y="10" width="6" height="80" fill="#795548"/>
					<path d="M16 15 L80 15 L80 50 L16 50 Z" fill="#D32F2F"/>
					<path d="M47 32 L40 45 L25 32 L40 20 Z" fill="#FFEB3B" transform="translate(5,0)"/>
					<circle cx="10" cy="8" r="4" fill="#FFB300"/>
				</svg>`,
				
				"walker": `<svg viewBox="0 0 100 100" width="80" height="80">
					<circle cx="50" cy="20" r="10" fill="#FFCC80"/>
					<path d="M50 30 L50 60 L30 80 M50 60 L70 80 M30 40 L70 40" 
						  stroke="#333" stroke-width="4" stroke-linecap="round"/>
					<circle cx="46" cy="18" r="2" fill="black"/>
					<circle cx="54" cy="18" r="2" fill="black"/>
					<path d="M48 22 Q50 23 52 22" stroke="#333" stroke-width="1" fill="none"/>
				</svg>`,
				
				"babe": `<svg viewBox="0 0 100 100" width="80" height="80">
					<circle cx="50" cy="30" r="15" fill="#FFCC80"/>
					<path d="M30 50 Q50 80 70 50" fill="#E1BEE7"/>
					<circle cx="45" cy="28" r="2" fill="black"/>
					<circle cx="55" cy="28" r="2" fill="black"/>
					<circle cx="46" cy="27" r="0.5" fill="white"/>
					<circle cx="56" cy="27" r="0.5" fill="white"/>
					<path d="M48 33 Q50 35 52 33" stroke="#FF9800" stroke-width="1.5" fill="none"/>
					<path d="M40 25 Q35 20 32 22" stroke="#3E2723" stroke-width="2" fill="none"/>
					<path d="M60 25 Q65 20 68 22" stroke="#3E2723" stroke-width="2" fill="none"/>
				</svg>`,
				
				"ant": `<svg viewBox="0 0 100 100" width="80" height="80">
					<circle cx="30" cy="50" r="10" fill="#3E2723"/>
					<circle cx="50" cy="50" r="10" fill="#3E2723"/>
					<circle cx="70" cy="50" r="12" fill="#3E2723"/>
					<path d="M30 60 L20 80 M50 60 L50 80 M70 60 L80 80" 
						  stroke="#3E2723" stroke-width="2"/>
					<path d="M25 45 L15 35 M35 45 L45 35" 
						  stroke="#3E2723" stroke-width="2"/>
					<circle cx="27" cy="48" r="2" fill="white"/>
					<circle cx="28" cy="48" r="1" fill="black"/>
				</svg>`
			};

			// ====================================
			// LESSON DATA
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
		        id: 28, char: "Y, QU", sub: "Y y, Qu qu", word: "dã quỳ", svgKey: null, icon: "🌼", 
		        sentence: "Thời gian quý hơn vàng bạc.", 
		        intro: "Bài 28. Chữ Y, Qu.", 
		        detail: "Học chữ Y và Qu.",
		        guide_intro: "Phát âm y và qu.",
		        guide_phoneme: "Y, Qu...", 
		        examples: [{ word: "y tá", icon: "👩‍⚕️" }, { word: "đá quý", icon: "💎" }],
		        situation: { title: "Trân trọng thời gian", background_image: null, dialogs: [{ role: "mom", text: "Con hãy làm bài tập nhé.", icon: "👩" }, { role: "kid", text: "Vâng ạ, thời gian quý lắm!", icon: "👦" }] }
		    },
		    { id: 29, char: "Ôn tập c/k, g/gh", sub: "Ôn tập", word: "cá cờ", svgKey: null, icon: "🐟", sentence: "Phân biệt c/k, g/gh.", intro: "Bài 29. Luyện tập chính tả.", detail: "Ôn tập c/k, g/gh, ng/ngh.", guide_intro: "Lưu ý quy tắc chính tả.", guide_phoneme: "C, K, G, GH, NG, NGH", examples: [{ word: "cá cờ", icon: "🐟" }, { word: "ghế gỗ", icon: "🪑" }], situation: null },
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
		        situation: { title: "Đôi bạn thân", background_image: null, dialogs: [{ role: "zebra", text: "Chào bạn!", icon: "🦓" }, { role: "giraffe", text: "Chào bạn thân!", icon: "🦒" }] }
		    },
    { id: 32, char: "on, ôn, ơn", sub: "on ôn ơn", word: "con chồn", svgKey: null, icon: "🐾", sentence: "Sơn ca véo von: Mẹ ơi, con đã lớn khôn.", intro: "Bài 32. Vần on, ôn, ơn.", detail: "Học vần on, ôn, ơn.", guide_intro: "Phát âm rõ vần kết thúc bằng n.", guide_phoneme: "On, Ôn, Ơn", examples: [{ word: "nón lá", icon: "👒" }, { word: "con chồn", icon: "🦊" }, { word: "sơn ca", icon: "🐦" }], situation: null },
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
    { id: 46, char: "ac, ặc, âc", sub: "ac ặc âc", word: "mắc áo", svgKey: null, icon: "🧥", sentence: "Tây Bắc có ruộng bậc thang.", intro: "Bài 46. Vần ac, ặc, âc.", detail: "Học vần ac, ặc, âc.", guide_intro: "Luyện đọc.", guide_phoneme: "Ac, Ặc, Âc", examples: [{ word: "bác sĩ", icon: "👨‍⚕️" }, { word: "quả gấc", icon: "🍈" }], situation: null },
    { id: 47, char: "oc, ốc, uc, ực", sub: "oc ốc uc ực", word: "con sóc", svgKey: null, icon: "🐿️", sentence: "Ở góc vườn, cạnh gốc cau, khóm cúc nở hoa vàng rực.", intro: "Bài 47. Vần oc, ốc, uc, ực.", detail: "Học vần oc, ốc, uc, ực.", guide_intro: "Luyện đọc.", guide_phoneme: "Oc, Ốc, Uc, Ực", examples: [{ word: "máy xúc", icon: "🚜" }, { word: "con mực", icon: "🦑" }], situation: null },
    { id: 48, char: "at, ăt, ât", sub: "at ăt ât", word: "mặt trời", svgKey: null, icon: "☀️", sentence: "Nam bắt nhịp cho tất cả các bạn hát.", intro: "Bài 48. Vần at, ăt, ât.", detail: "Học vần at, ăt, ât.", guide_intro: "Luyện đọc.", guide_phoneme: "At, Ăt, Ât", examples: [{ word: "bãi cát", icon: "🏖️" }, { word: "bật lửa", icon: "🔥" }], situation: null },
    { id: 49, char: "ot, ôt, ơt", sub: "ot ôt ơt", word: "lá lốt", svgKey: null, icon: "🍃", sentence: "Vườn nhà bà có ớt, rau ngót và cà rốt.", intro: "Bài 49. Vần ot, ôt, ơt.", detail: "Học vần ot, ôt, ơt.", guide_intro: "Luyện đọc.", guide_phoneme: "Ot, Ôt, Ơt", examples: [{ word: "quả nhót", icon: "🍒" }, { word: "quả ớt", icon: "🌶️" }], situation: null },
    { id: 50, char: "Ôn tập", sub: "Ôn tập", word: "gà mẹ", svgKey: null, icon: "🐔", sentence: "Gà mẹ dẫn đàn con đi ăn.", intro: "Bài 50. Ôn tập.", detail: "Ôn tập vần.", guide_intro: "Ôn lại vần.", guide_phoneme: "Tổng hợp", examples: [{ word: "giấc mơ", icon: "💤" }, { word: "hạt thóc", icon: "🌾" }], situation: null },
    { id: 51, char: "et, êt, it", sub: "et êt it", word: "con vẹt", svgKey: null, icon: "🦜", sentence: "Đôi vẹt ríu rít mãi không hết chuyện.", intro: "Bài 51. Vần et, êt, it.", detail: "Học vần et, êt, it.", guide_intro: "Luyện đọc.", guide_phoneme: "Et, Êt, It", examples: [{ word: "bồ kết", icon: "🥣" }, { word: "quả mít", icon: "🍈" }], situation: null },
    { id: 52, char: "ut, ưt", sub: "ut ưt", word: "bút chì", svgKey: null, icon: "✏️", sentence: "Cầu thủ số 7 thu hút khán giả.", intro: "Bài 52. Vần ut, ưt.", detail: "Học vần ut, ưt.", guide_intro: "Luyện đọc.", guide_phoneme: "Ut, Ưt", examples: [{ word: "mứt dừa", icon: "🥥" }, { word: "nứt nẻ", icon: "🌵" }], situation: null },
    { id: 53, char: "ap, ắp, ập", sub: "ap ắp ập", word: "cặp da", svgKey: null, icon: "💼", sentence: "Mẹ đạp xe đưa Hà đến lớp.", intro: "Bài 53. Vần ap, ắp, ập.", detail: "Học vần ap, ắp, ập.", guide_intro: "Luyện đọc.", guide_phoneme: "Ap, Ắp, Ập", examples: [{ word: "xe đạp", icon: "🚲" }, { word: "cá mập", icon: "🦈" }], situation: null },
    { id: 54, char: "op, ôp, ơp", sub: "op ôp ơp", word: "lốp xe", svgKey: null, icon: "🛞", sentence: "Mưa rào lộp độp.", intro: "Bài 54. Vần op, ôp, ơp.", detail: "Học vần op, ôp, ơp.", guide_intro: "Luyện đọc.", guide_phoneme: "Op, Ôp, Ơp", examples: [{ word: "con cọp", icon: "🐅" }, { word: "tia chớp", icon: "⚡" }], situation: null },
    { id: 55, char: "Ôn tập", sub: "Ôn tập", word: "tấp nập", svgKey: null, icon: "🏬", sentence: "Chợ đông vui và bán đủ thứ.", intro: "Bài 55. Ôn tập.", detail: "Ôn tập vần.", guide_intro: "Ôn lại vần.", guide_phoneme: "Tổng hợp", examples: [{ word: "nét chữ", icon: "✍️" }, { word: "hồi hộp", icon: "😰" }], situation: null },
    { id: 56, char: "ep, êp, ip, up", sub: "ep êp ip up", word: "búp sen", svgKey: null, icon: "🪷", sentence: "Trong bếp, lũ cún con múp míp nép vào bên mẹ.", intro: "Bài 56. Vần ep, êp, ip, up.", detail: "Học vần ep, êp, ip, up.", guide_intro: "Luyện đọc.", guide_phoneme: "Ep, Êp, Ip, Up", examples: [{ word: "đôi dép", icon: "🩴" }, { word: "đầu bếp", icon: "👨‍🍳" }], situation: null },
    { id: 57, char: "anh, ênh, inh", sub: "anh ênh inh", word: "quả chanh", svgKey: null, icon: "🍋", sentence: "Con kênh xinh xinh chảy qua cánh đồng.", intro: "Bài 57. Vần anh, ênh, inh.", detail: "Học vần anh, ênh, inh.", guide_intro: "Luyện đọc.", guide_phoneme: "Anh, Ênh, Inh", examples: [{ word: "bờ kênh", icon: "🌊" }, { word: "kính râm", icon: "🕶️" }], situation: null },
    { id: 58, char: "ach, êch, ich", sub: "ach êch ich", word: "sách vở", svgKey: null, icon: "📚", sentence: "Ếch con thích đọc sách.", intro: "Bài 58. Vần ach, êch, ich.", detail: "Học vần ach, êch, ich.", guide_intro: "Luyện đọc.", guide_phoneme: "Ach, Êch, Ich", examples: [{ word: "chênh lệch", icon: "⚖️" }, { word: "tờ lịch", icon: "📅" }], situation: null },
    { id: 59, char: "ang, ăng, âng", sub: "ang ăng âng", word: "cá vàng", svgKey: null, icon: "🐟", sentence: "Vầng trăng sáng lấp ló sau rặng tre.", intro: "Bài 59. Vần ang, ăng, âng.", detail: "Học vần ang, ăng, âng.", guide_intro: "Luyện đọc.", guide_phoneme: "Ang, Ăng, Âng", examples: [{ word: "măng tre", icon: "🎋" }, { word: "nhà tầng", icon: "🏢" }], situation: null },
    { id: 60, char: "Ôn tập", sub: "Ôn tập", word: "vâng lời", svgKey: null, icon: "✅", sentence: "Hà rất thích con gà bà cho.", intro: "Bài 60. Ôn tập.", detail: "Ôn tập vần.", guide_intro: "Ôn lại vần.", guide_phoneme: "Tổng hợp", examples: [{ word: "xinh đẹp", icon: "✨" }, { word: "thẳng hàng", icon: "📏" }], situation: null },
    { id: 62, char: "iêc, iên, iêp", sub: "iêc iên iêp", word: "biển", svgKey: null, icon: "🌊", sentence: "Biển xanh biếc.", intro: "Bài 62. Vần iêc, iên, iêp.", detail: "Học vần iêc, iên, iêp.", guide_intro: "Luyện đọc.", guide_phoneme: "Iêc, Iên, Iêp", examples: [{ word: "xanh biếc", icon: "🌊" }, { word: "sò điệp", icon: "🐚" }], situation: null },
    { id: 63, char: "iêng, iêm, yên", sub: "iêng iêm yên", word: "cá kiếm", svgKey: null, icon: "🐟", sentence: "Yến phụng có bộ lông tím biêng biếc.", intro: "Bài 63. Vần iêng, iêm, yên.", detail: "Học vần iêng, iêm, yên.", guide_intro: "Luyện đọc.", guide_phoneme: "Iêng, Iêm, Yên", examples: [{ word: "sầu riêng", icon: "🍈" }, { word: "tổ yến", icon: "🏠" }], situation: null },
    { id: 64, char: "iêt, iêu, yêu", sub: "iêt iêu yêu", word: "cánh diều", svgKey: null, icon: "🪁", sentence: "Em yêu sách.", intro: "Bài 64. Vần iêt, iêu, yêu.", detail: "Học vần iêt, iêu, yêu.", guide_intro: "Luyện đọc.", guide_phoneme: "Iêt, Iêu, Yêu", examples: [{ word: "nhiệt kế", icon: "🌡️" }, { word: "yêu chiều", icon: "❤️" }], situation: null },
    { id: 65, char: "Ôn tập", sub: "Ôn tập", word: "trùng điệp", svgKey: null, icon: "⛰️", sentence: "Trái đất của chúng ta vô cùng rộng lớn.", intro: "Bài 65. Ôn tập.", detail: "Ôn tập vần.", guide_intro: "Ôn lại vần.", guide_phoneme: "Tổng hợp", examples: [{ word: "xanh biếc", icon: "🌊" }, { word: "tiếng trống", icon: "🥁" }], situation: null },
    { id: 66, char: "uôi, uôm", sub: "uôi uôm", word: "thuyền buồm", svgKey: null, icon: "⛵", sentence: "Thuyền buồm xuôi theo chiều gió.", intro: "Bài 66. Vần uôi, uôm.", detail: "Học vần uôi, uôm.", guide_intro: "Luyện đọc.", guide_phoneme: "Uôi, Uôm", examples: [{ word: "con suối", icon: "💧" }, { word: "buổi sáng", icon: "☀️" }], situation: null },
    { id: 67, char: "uộc, uột", sub: "uộc uột", word: "con chuột", svgKey: null, icon: "🐭", sentence: "Mẹ vuốt tóc và buộc nơ cho Hà.", intro: "Bài 67. Vần uộc, uột.", detail: "Học vần uộc, uột.", guide_intro: "Luyện đọc.", guide_phoneme: "Uộc, Uột", examples: [{ word: "ngọn đuốc", icon: "🕯️" }, { word: "viên thuốc", icon: "💊" }], situation: null },
    { id: 68, char: "uôn, uông", sub: "uôn uông", word: "chuồn chuồn", svgKey: null, icon: "🚁", sentence: "Chuồn chuồn bay qua các luống rau.", intro: "Bài 68. Vần uôn, uông.", detail: "Học vần uôn, uông.", guide_intro: "Luyện đọc.", guide_phoneme: "Uôn, Uông", examples: [{ word: "cuộn chỉ", icon: "🧵" }, { word: "quả chuông", icon: "🔔" }], situation: null },
    { id: 69, char: "ươi, ươu", sub: "ươi ươu", word: "tươi cười", svgKey: null, icon: "😊", sentence: "Chim khướu biết bắt chước tiếng người.", intro: "Bài 69. Vần ươi, ươu.", detail: "Học vần ươi, ươu.", guide_intro: "Luyện đọc.", guide_phoneme: "Ươi, Ươu", examples: [{ word: "quả bưởi", icon: "🍊" }, { word: "ốc bươu", icon: "🐌" }], situation: null },
    { id: 70, char: "Ôn tập", sub: "Ôn tập", word: "cưỡi ngựa", svgKey: null, icon: "🐎", sentence: "Ông trồng nhiều cây ăn trái.", intro: "Bài 70. Ôn tập.", detail: "Ôn tập vần.", guide_intro: "Ôn lại vần.", guide_phoneme: "Tổng hợp", examples: [{ word: "cưỡi ngựa", icon: "🐎" }, { word: "lem luốc", icon: "🎨" }], situation: null },
    { id: 71, char: "ược, uot", sub: "ược uot", word: "thước kẻ", svgKey: null, icon: "📏", sentence: "Hà ước được lướt sóng biển.", intro: "Bài 71. Vần ược, uot.", detail: "Học vần ược, uot.", guide_intro: "Luyện đọc.", guide_phoneme: "Ược, Uot", examples: [{ word: "lướt ván", icon: "🏄" }, { word: "dược sĩ", icon: "👨‍🔬" }], situation: null },
    { id: 72, char: "uơm, ươp", sub: "uơm ươp", word: "con bướm", svgKey: null, icon: "🦋", sentence: "Hoa mướp vàng ươm, bướm bay rập rờn.", intro: "Bài 72. Vần ươm, ươp.", detail: "Học vần ươm, ươp.", guide_intro: "Luyện đọc.", guide_phoneme: "Ươm, Ươp", examples: [{ word: "nườm nượp", icon: "🚶" }, { word: "giàn mướp", icon: "🍈" }], situation: null },
    { id: 73, char: "ươn, ương", sub: "ươn ương", word: "con đường", svgKey: null, icon: "🛣️", sentence: "Đường tới trường lượn theo sườn đồi.", intro: "Bài 73. Vần ươn, ương.", detail: "Học vần ươn, ương.", guide_intro: "Luyện đọc.", guide_phoneme: "Ươn, Ương", examples: [{ word: "khu vườn", icon: "🌳" }, { word: "hạt sương", icon: "💧" }], situation: null },
    { id: 74, char: "oa, oe", sub: "oa oe", word: "đóa hoa", svgKey: null, icon: "🌺", sentence: "Các loài hoa đua nhau khoe sắc.", intro: "Bài 74. Vần oa, oe.", detail: "Học vần oa, oe.", guide_intro: "Luyện đọc.", guide_phoneme: "Oa, Oe", examples: [{ word: "váy xòe", icon: "👗" }, { word: "chích chòe", icon: "🐦" }], situation: null },
    { id: 75, char: "Ôn tập", sub: "Ôn tập", word: "vàng hoe", svgKey: null, icon: "✨", sentence: "Khắp vườn, hoa tỏa hương ngào ngạt.", intro: "Bài 75. Ôn tập.", detail: "Ôn tập vần.", guide_intro: "Ôn lại vần.", guide_phoneme: "Tổng hợp", examples: [{ word: "bay lượn", icon: "🦅" }, { word: "toả hương", icon: "🌸" }], situation: null },
    { id: 76, char: "oan, oăn, oat, oăt", sub: "oan oăn oat oăt", word: "hoạt hình", svgKey: null, icon: "🎬", sentence: "Trên phim hoạt hình, voi bước khoan thai.", intro: "Bài 76. Vần oan, oăn, oat, oăt.", detail: "Học vần oan, oăn, oat, oăt.", guide_intro: "Luyện đọc.", guide_phoneme: "Oan, Oăn, Oat, Oăt", examples: [{ word: "tóc xoăn", icon: "👩‍🦱" }, { word: "nhọn hoắt", icon: "🗡️" }], situation: null },
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

			// ====================================
			// GLOBAL VARIABLES
			// ====================================
			let currentIndex = 0;
			let currentLevel = 0;
			let playbackTimeout;

			// Tắt hoàn toàn SpeechSynthesis - chỉ dùng FPT AI
			if (window.speechSynthesis) {
				window.speechSynthesis.cancel();
				window.speechSynthesis.onvoiceschanged = null;
			}
			function loadVoice() {} // Giữ để không lỗi các chỗ gọi

			// FPT AI TTS - AudioContext approach for iOS Safari compatibility
			let audioCtx = null;
			let currentSource = null;
			const audioCache = {}; // Cache lưu AudioBuffer theo text

			function getAudioContext() {
				if (!audioCtx) {
					const AudioContext = window.AudioContext || window.webkitAudioContext;
					audioCtx = new AudioContext();
				}
				if (audioCtx.state === 'suspended') audioCtx.resume();
				return audioCtx;
			}

			// Token để hủy request đang chạy
			let speakCancelToken = 0;

			async function speak(text, rate = 1.0, callback = null) {
				const myToken = ++speakCancelToken;

				if (currentSource) {
					try { currentSource.stop(); } catch(e) {}
					currentSource = null;
				}

				const ant = document.getElementById('mascot-ant');
				if (ant) ant.classList.add('talking');

				let playedSuccessfully = false;

				try {
					const ctx = getAudioContext();
					let audioBuffer = audioCache[text];

					if (!audioBuffer) {
						// Chưa có cache → gọi API
						const response = await fetch(`/api/speak?text=${encodeURIComponent(text)}`);
						if (myToken !== speakCancelToken) return;
						if (!response.ok) throw new Error('API failed');

						const data = await response.json();
						if (myToken !== speakCancelToken) return;
						if (!data.success || !data.audio) throw new Error('Invalid response');

						const binary = atob(data.audio);
						const bytes = new Uint8Array(binary.length);
						for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);

						audioBuffer = await ctx.decodeAudioData(bytes.buffer);
						if (myToken !== speakCancelToken) return;

						audioCache[text] = audioBuffer; // Lưu vào cache
					}

					if (myToken !== speakCancelToken) return;

					currentSource = ctx.createBufferSource();
					currentSource.buffer = audioBuffer;
					currentSource.playbackRate.value = rate;
					currentSource.connect(ctx.destination);

					currentSource.onended = () => {
						if (ant) ant.classList.remove('talking');
						currentSource = null;
						if (callback) callback();
					};

					currentSource.start(0);
					playedSuccessfully = true;

				} catch (error) {
					if (myToken !== speakCancelToken) return;
					if (!playedSuccessfully) {
						console.error('TTS error:', error);
						if (ant) ant.classList.remove('talking');
						if (callback) callback();
					}
				}
			}
			
			// Fallback to Web Speech API
			// Dừng toàn bộ âm thanh đang phát
			function stopAudio() {
				speakCancelToken++; // Hủy mọi speak() đang chờ fetch
				if (currentSource) {
					try { currentSource.stop(); } catch(e) {}
					currentSource = null;
				}
				if (window.speechSynthesis) window.speechSynthesis.cancel();
				const ant = document.getElementById('mascot-ant');
				if (ant) ant.classList.remove('talking');
			}

			// speakFallback đã bị tắt - chỉ dùng FPT AI
			function speakFallback(text, rate = 1.0, callback = null) {
				if (window.speechSynthesis) window.speechSynthesis.cancel();
				if (callback) callback();
			}
			
			// Helper function to convert base64 to Blob
			function base64ToBlob(base64, contentType = '') {
				const byteCharacters = atob(base64);
				const byteArrays = [];
				
				for (let offset = 0; offset < byteCharacters.length; offset += 512) {
					const slice = byteCharacters.slice(offset, offset + 512);
					const byteNumbers = new Array(slice.length);
					
					for (let i = 0; i < slice.length; i++) {
						byteNumbers[i] = slice.charCodeAt(i);
					}
					
					const byteArray = new Uint8Array(byteNumbers);
					byteArrays.push(byteArray);
				}
				
				return new Blob(byteArrays, { type: contentType });
			}

			function playDingSound() {
				try {
					const ctx = getAudioContext();
					const osc = ctx.createOscillator();
					const gain = ctx.createGain();
					
					osc.type = 'sine';
					osc.frequency.setValueAtTime(523.25, ctx.currentTime);
					osc.frequency.exponentialRampToValueAtTime(1046.5, ctx.currentTime + 0.1);
					
					gain.gain.setValueAtTime(0.3, ctx.currentTime);
					gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
					
					osc.connect(gain);
					gain.connect(ctx.destination);
					
					osc.start();
					osc.stop(ctx.currentTime + 0.5);
				} catch(e) { 
					console.log('Audio context error:', e); 
				}
			}

			// Tiếng "ting" nhẹ khi chuyển trang/màn hình
			function playTingSound() {
				try {
					const ctx = getAudioContext();
					const osc = ctx.createOscillator();
					const gain = ctx.createGain();
					
					osc.type = 'sine';
					osc.frequency.setValueAtTime(880, ctx.currentTime);
					
					gain.gain.setValueAtTime(0.3, ctx.currentTime);
					gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
					
					osc.connect(gain);
					gain.connect(ctx.destination);
					
					osc.start();
					osc.stop(ctx.currentTime + 0.15);
				} catch(e) { 
					console.log('Ting sound error:', e); 
				}
				
				// Rung nhẹ
				vibrateLight();
			}

			// Tiếng "buzz" khi chạm vào vùng không có dữ liệu
			function playBuzzSound() {
				try {
					const ctx = getAudioContext();
					const osc = ctx.createOscillator();
					const gain = ctx.createGain();
					
					osc.type = 'sawtooth';
					osc.frequency.setValueAtTime(100, ctx.currentTime);
					
					gain.gain.setValueAtTime(0.35, ctx.currentTime);
					gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
					
					osc.connect(gain);
					gain.connect(ctx.destination);
					
					osc.start();
					osc.stop(ctx.currentTime + 0.2);
				} catch(e) { 
					console.log('Buzz sound error:', e); 
				}
				
				// Rung mạnh hơn (cảnh báo)
				vibrateStrong();
			}

			// ====================================
			// VIBRATION FUNCTIONS (Haptic Feedback)
			// ====================================
			
			// Rung nhẹ cho navigation thành công
			function vibrateLight() {
				if (navigator.vibrate) {
					navigator.vibrate(50); // 50ms rung nhẹ
				}
			}
			
			// Rung mạnh cho cảnh báo/lỗi
			function vibrateStrong() {
				if (navigator.vibrate) {
					navigator.vibrate([100, 50, 100]); // Pattern: rung-dừng-rung
				}
			}
			
			// Rung cho các tương tác quan trọng
			function vibrateMedium() {
				if (navigator.vibrate) {
					navigator.vibrate(100); // 100ms rung vừa
				}
			}

			// ====================================
			// INITIALIZATION
			// ====================================
			window.onload = function() {
				loadVoice();
				// Tắt SpeechSynthesis hoàn toàn - chỉ dùng FPT AI
				if (window.speechSynthesis) window.speechSynthesis.cancel();
			};

			function initAppAndGo() {
				playTingSound(); // Phát tiếng TING ngay khi chạm
				vibrateMedium(); // Rung để trẻ khiếm thị biết đã chạm đúng

				// Mở khóa AudioContext ngay trong sự kiện tap - bắt buộc cho iOS Safari
				getAudioContext();

				loadVoice();
				
				const introText = "Chào em! Chú Kiến đây! Chào mừng em đến với ứng dụng học Tiếng Việt lớp 1, bộ sách Kết nối tri thức. Chú sẽ đồng hành cùng em nhé. Em chú ý: Chạm hai lần vào màn hình để quay về trang trước. Chạm ba lần để về trang chủ. Bây giờ, chạm phía trên để chọn tập 1, chạm phía dưới để chọn tập 2.";
				speak(introText, 1.0);

				document.getElementById('screen-start-merged').style.display = 'none';
				const booksScreen = document.getElementById('screen-books');
				booksScreen.style.display = 'flex';
				setTimeout(() => booksScreen.classList.add('active'), 50);
			}

			// ====================================
			// NAVIGATION FUNCTIONS
			// ====================================
			function selectVolume(vol) {
				stopAudio();
				if (vol === 1) speak("Tập 1. Các em cùng học nhé!");
				else speak("Tập 2. Các em cùng học nhé!");
				
				// Reset lastSpokenIndex để đọc lại từ đầu
				lastSpokenIndex = -1;
				
				renderTocSlider();
				setTimeout(() => {
					document.getElementById('screen-books').style.display = 'none';
					document.getElementById('screen-lesson').style.display = 'none'; // Đảm bảo ẩn màn lesson
					document.getElementById('screen-toc').style.display = 'flex';
					
					// Đọc hướng dẫn
					speak("Em chọn bài học muốn học nhé. Nhớ là chạm hai lần để quay lại, chạm ba lần để về trang chủ.", 1.0, () => {
						// Sau khi đọc xong hướng dẫn, TỰ ĐỘNG ĐỌC BÀI 1
						setTimeout(() => {
							speakLessonIntro(0); // Tự động đọc bài đầu tiên (index 0)
						}, 500);
					});
				}, 1000);
			}

			// Biến để kiểm soát việc đọc tự động từ Intersection Observer
			let allowAutoSpeak = true;
			
			function renderTocSlider() {
				const container = document.getElementById('toc-slider');
				container.innerHTML = '';
				
				// Create Intersection Observer to detect visible card
				const observerOptions = {
					root: container,
					threshold: 0.7 // Card phải hiện 70% mới được coi là "đang xem"
				};
				
				const observer = new IntersectionObserver((entries) => {
					entries.forEach(entry => {
						if (entry.isIntersecting && allowAutoSpeak) {
							// Lấy index từ data attribute
							const cardIndex = parseInt(entry.target.dataset.index);
							console.log('📱 Card visible:', cardIndex);
							
							// Tự động đọc bài hiện tại
							speakLessonIntro(cardIndex);
						}
					});
				}, observerOptions);
				
				lessons.forEach((lesson, index) => {
					const slide = document.createElement('div');
					slide.className = 'lesson-slide';
					slide.dataset.index = index; // Lưu index vào data attribute
					
					const reviewIds = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80];
					const isReview = reviewIds.includes(lesson.id);
					const isLongChar = !isReview && lesson.char && lesson.char.length > 4;
					const charClass = isReview ? 'review-text' : (isLongChar ? 'long-text' : '');
					
					slide.innerHTML = `
						<div class="slide-card" onclick="playTingSound(); openLessonFromToc(${index})">
							<div class="slide-lesson-num">BÀI ${lesson.id}</div>
							<div class="slide-char ${charClass}">${lesson.char}</div>
							<div class="slide-hint">Chạm để vào học</div>
						</div>
					`;
					container.appendChild(slide);
					
					// Observe slide này
					observer.observe(slide);
				});
			}

			function openLessonFromToc(index) {
				stopAudio();
				currentIndex = index;
				const data = lessons[index];
				
				// Hide ALL other screens
				document.getElementById('screen-start-merged').style.display = 'none';
				document.getElementById('screen-books').style.display = 'none';
				document.getElementById('screen-toc').style.display = 'none';
				document.getElementById('screen-lesson').style.display = 'flex';
				
				updateLessonView(data);
				
				// Check if this is a READING lesson
				if (data.type === "reading") {
					// For READING lessons - read the full passage
					speak(data.intro, 1.0, () => {
						setTimeout(() => {
							speak(data.sentence, 1.0, () => {
								setTimeout(() => {
									// Read the FULL reading text
									speak("Chú Kiến đọc bài nhé, em lắng nghe", 1.0, () => {
										setTimeout(() => {
											speak(data.reading.full_text, 1.0, () => {
												setTimeout(() => {
													// Read vocabulary
													let vocabText = "Từ vựng: ";
													data.examples.forEach((ex, idx) => {
														vocabText += ex.word + " nghĩa là " + ex.meaning + ". ";
													});
													speak(vocabText, 1.0, () => {
														setTimeout(() => {
															speak("Em vuốt lên để xem thêm ví dụ và câu hỏi nhé.", 1.0);
														}, 500);
													});
												}, 1000);
											});
										}, 500);
									});
								}, 500);
							});
						}, 1000);
					});
				} else {
					// Normal character lesson (Tap 1)
					speak(data.intro, 1.0, () => {
						setTimeout(() => {
							// Đọc "Ví dụ" trước
							speak("Ví dụ", 1.0, () => {
								setTimeout(() => {
									// Đọc từng âm tiết của từ
									const syllables = data.word.split(' ');
									let syllableIndex = 0;
									
									function speakNextSyllable() {
										if (syllableIndex < syllables.length) {
											speak(syllables[syllableIndex], 1.0, () => {
												syllableIndex++;
												setTimeout(speakNextSyllable, 400);
											});
										} else {
											// Sau khi đọc hết các âm tiết, đọc cả từ
											setTimeout(() => {
												speak(data.word, 1.0, () => {
													// Sau đó mới đọc câu
													setTimeout(() => {
														speak("Câu ứng dụng là: " + data.sentence, 1.0, () => {
															setTimeout(() => {
																 speak("Em vuốt lên để chú Kiến hướng dẫn đọc nhé.", 1.0);
															}, 500);
														});
													}, 800);
												});
											}, 500);
										}
									}
									
									speakNextSyllable();
								}, 600);
							});
						}, 1000);
					});
				}
			}

			function goBackToToc() {
				stopAudio();
				
				playTingSound();
				allowAutoSpeak = false;
				
				resetLevels();
				document.getElementById('screen-lesson').style.display = 'none';
				document.getElementById('screen-books').style.display = 'none';
				document.getElementById('screen-toc').style.display = 'flex';
				
				setTimeout(() => {
					const container = document.getElementById('toc-slider');
					const slides = container.querySelectorAll('.lesson-slide');
					if (slides[currentIndex]) {
						slides[currentIndex].scrollIntoView({
							behavior: 'smooth',
							block: 'nearest',
							inline: 'center'
						});
					}
				}, 100);
				
				speak("Em chọn bài học muốn học nhé", 1.0, () => {
					lastSpokenIndex = -1;
					setTimeout(() => {
						speakLessonIntro(currentIndex);
						setTimeout(() => {
							allowAutoSpeak = true;
						}, 2000);
					}, 500);
				});
			}
			
			function goBackToBooks() {
				stopAudio();
				playTingSound();
				document.getElementById('screen-start-merged').style.display = 'none';
				document.getElementById('screen-toc').style.display = 'none';
				document.getElementById('screen-lesson').style.display = 'none';
				document.getElementById('screen-books').style.display = 'flex';
			}

			function goBackToStart() {
				stopAudio();
				playTingSound();
				document.getElementById('screen-books').style.display = 'none';
				document.getElementById('screen-toc').style.display = 'none';
				document.getElementById('screen-lesson').style.display = 'none';
				document.getElementById('screen-start-merged').style.display = 'flex';
				speak("Chào em! Chạm vào màn hình để gặp chú Kiến nhé!", 1.0);
			}

			// ====================================
			// LESSON VIEW FUNCTIONS
			// ====================================
			function updateLessonView(data) {
				// Update lesson number badge
				const lessonBadge = document.getElementById('lesson-number-badge');
				if (lessonBadge) {
					lessonBadge.innerText = `BÀI ${data.id}`;
				}
				
				const displayChar = document.getElementById('display-char');
				displayChar.innerText = data.char;
				
				const reviewIds = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80];
				displayChar.classList.remove('review-mode', 'long-text');
				if (reviewIds.includes(data.id)) {
					displayChar.classList.add('review-mode');
				} else if (data.char && data.char.length > 4) {
					displayChar.classList.add('long-text');
				}
				
				// Check if this is a READING lesson (Tap 2)
				if (data.type === "reading") {
					// Display reading content instead of word + illustration
					const svgContainer = document.getElementById('svg-container');
					svgContainer.innerHTML = '';
					
					const illustrationDiv = document.getElementById('display-illu');
					illustrationDiv.innerHTML = `
						<div style="width: 100%; padding: 20px; background: white; border-radius: 10px; border: 3px solid #000;">
							<div style="font-size: 28px; font-weight: bold; text-align: center; margin-bottom: 20px; color: #000;">
								${data.reading.title}
							</div>
							<div style="font-size: 20px; line-height: 1.8; color: #000; text-align: left;">
								${data.reading.paragraphs.map(p => `<p style="margin-bottom: 15px;">${p}</p>`).join('')}
							</div>
							<div style="text-align: right; font-style: italic; color: #666; margin-top: 15px;">
								(${data.reading.author})
							</div>
						</div>
					`;
					
					// Hide word element for reading lessons
					document.getElementById('word-el').style.display = 'none';
					
				} else {
					// Normal character lesson (Tap 1)
					const svgContainer = document.getElementById('svg-container');
					if(data.svgKey && svgs[data.svgKey]) {
						svgContainer.innerHTML = svgs[data.svgKey];
					} else {
						svgContainer.innerHTML = `<span style="font-size: 60px;">${data.icon}</span>`;
					}
					
					document.getElementById('word-el').style.display = 'block';
					document.getElementById('word-el').innerText = data.word;
				}

				document.getElementById('sentence-el').innerText = data.sentence;
				document.getElementById('guide-text').innerText = data.guide_intro + " " + data.guide_phoneme;

				const exContainer = document.getElementById('more-examples-container');
				exContainer.innerHTML = '';
				if (data.examples && data.examples.length > 0) {
					data.examples.forEach(ex => {
						const div = document.createElement('div');
						div.className = 'example-item';
						
						// For reading lessons, show vocabulary with meanings
						if (data.type === "reading" && ex.meaning) {
							div.innerHTML = `
								<span class="ex-icon">${ex.icon}</span>
								<span class="ex-word" style="font-weight: bold;">${ex.word}</span>
								<span style="color: #666; margin-left: 10px;">: ${ex.meaning}</span>
							`;
						} else {
							div.innerHTML = `<span class="ex-icon">${ex.icon}</span><span class="ex-word">${ex.word}</span>`;
						}
						exContainer.appendChild(div);
					});
				} else {
					exContainer.innerHTML = '<div style="color:#999;">Chưa có ví dụ</div>';
				}
				
				resetLevels();
			}

			function replay() {
				vibrateMedium(); // Rung khi click chữ cái
				const data = lessons[currentIndex];
				speak(data.detail, 1.0);
			}
			
			function playSentenceOnly() {
				 vibrateMedium(); // Rung khi click câu
				 const data = lessons[currentIndex];
				 speak(data.sentence, 1.0);
			}

			function playWord() {
				 vibrateMedium(); // Rung khi click từ
				 const data = lessons[currentIndex];
				 
				 // Tách từ thành các âm tiết
				 const syllables = data.word.split(' ');
				 let syllableIndex = 0;
				 
				 function speakNextSyllable() {
					 if (syllableIndex < syllables.length) {
						 speak(syllables[syllableIndex], 1.0, () => {
							 syllableIndex++;
							 setTimeout(speakNextSyllable, 400);
						 });
					 } else {
						 // Sau khi đọc hết các âm tiết, đọc cả từ
						 setTimeout(() => {
							 speak(data.word, 1.0);
						 }, 500);
					 }
				 }
				 
				 speakNextSyllable();
			}

			function playGuide() {
				vibrateMedium(); // Rung khi click hướng dẫn
				const data = lessons[currentIndex]; 
				speak(data.guide_intro + " " + data.guide_phoneme, 1.0); 
			}

			// Speak lesson intro when hovering over or touching lesson card
			let lastSpokenIndex = -1;
			let speakTimeout = null;
			
			function speakLessonIntro(index) {
				console.log('🔊 Speaking lesson intro for index:', index, 'Lesson ID:', lessons[index]?.id);
				
				// Clear any pending speech
				if (speakTimeout) {
					clearTimeout(speakTimeout);
				}
				
					// Stop any current speech
				stopAudio();
				
				// Delay to prevent accidental triggers while scrolling
				speakTimeout = setTimeout(() => {
					// Check lại xem có phải cùng bài không (nếu cùng thì không đọc lại)
					if (lastSpokenIndex === index) {
						console.log('⏭️ Skipping - already spoke lesson', index);
						return;
					}
					
					lastSpokenIndex = index;
					const lesson = lessons[index];
					
					console.log('✅ Actually speaking lesson:', lesson.id, lesson.char);
					
					// Construct the intro text
					let introText = `Bài ${lesson.id}. `;
					
					// Add character name if not a review lesson
					if (lesson.id !== 5 && lesson.id !== 10) {
						// Extract just the character name from intro
						// e.g., "Bài 1. Chữ A." -> "Chữ A"
						const charName = lesson.intro.split('.')[1]?.trim() || `Chữ ${lesson.char}`;
						introText += charName;
					} else {
						introText += "Ôn tập và Kể chuyện";
					}
					
					speak(introText, 1.0);
				}, 300);
			}

			// ====================================
			// LEVEL MANAGEMENT
			// ====================================
			function resetLevels() {
				stopAudio();
				clearTimeout(playbackTimeout);
				currentLevel = 0;
				document.getElementById('extra-panel').classList.remove('active');
				document.getElementById('situation-panel').classList.remove('active');
				document.getElementById('hint-swipe').style.opacity = '0.8';
				document.getElementById('lesson-frame-content').style.transform = 'scale(1)';
			}

			function openLevel(level) {
				stopAudio();
				clearTimeout(playbackTimeout);
				playTingSound();
				
				if (level === 1) { 
					currentLevel = 1;
					document.getElementById('extra-panel').classList.add('active');
					document.getElementById('hint-swipe').style.opacity = '0';
					document.getElementById('lesson-frame-content').style.transform = "scale(0.9) translateY(-20px)";
					startExtraSequence();
				} else if (level === 2) { 
					const data = lessons[currentIndex];
					if (!data.situation) {
						playBuzzSound(); // Buzz nếu không có tình huống
						speak("Bài này chưa có tình huống.");
						return;
					}
					currentLevel = 2;
					document.getElementById('situation-panel').classList.add('active');
					startSituationSequence();
				}
			}

			function closeLevel(level) {
				stopAudio();
				clearTimeout(playbackTimeout);
				playTingSound();
				
				if (level === 1) { 
					currentLevel = 0;
					document.getElementById('extra-panel').classList.remove('active');
					document.getElementById('hint-swipe').style.opacity = '0.8';
					document.getElementById('lesson-frame-content').style.transform = "scale(1)";
				} else if (level === 2) { 
					currentLevel = 1;
					document.getElementById('situation-panel').classList.remove('active');
				}
			}

			// ====================================
			// EXTRA PANEL SEQUENCE
			// ====================================
			function startExtraSequence() {
				const data = lessons[currentIndex];
				speak("Chú Kiến hướng dẫn em nhé: " + data.guide_intro, 1.0, () => {
					if(currentLevel !== 1) return;
					
					playbackTimeout = setTimeout(() => {
						 speak(data.guide_phoneme, 1.0, () => {
							 setTimeout(() => {
								 speak(data.guide_phoneme, 1.0, () => {
									 playbackTimeout = setTimeout(() => {
										speak("Em nghe và nhắc lại các ví dụ nhé:", 1.0, () => {
											playExampleLoop(0);
										});
									 }, 1000);
								 });
							 }, 1500);
						 });
					}, 500);
				});
			}

			function playExampleLoop(index) {
				if(currentLevel !== 1) return;
				const data = lessons[currentIndex];
				if(!data.examples || index >= data.examples.length) {
					speak("Đã hết ví dụ. Em hãy vuốt lên để xem tình huống nhé!", 1.0);
					return;
				}

				vibrateMedium(); // Rung khi chuyển ví dụ
				
				const ex = data.examples[index];
				const container = document.getElementById('more-examples-container');
				const items = container.getElementsByClassName('example-item');
				
				if(items[index]) {
					items[index].style.borderColor = "#000000";
					items[index].style.background = "#FFEB3B";
					items[index].style.transform = "scale(1.05)";
				}

				speak(ex.word, 1.0, () => {
					if(currentLevel !== 1) return;
					playbackTimeout = setTimeout(() => {
						speak("Em đọc lại nhé", 1.0, () => {
							if(currentLevel !== 1) return;
							playbackTimeout = setTimeout(() => {
								if(items[index]) { 
									items[index].style.borderColor = "#000000";
									items[index].style.background = "#FFD700";
									items[index].style.transform = "scale(1)";
								}
								playExampleLoop(index + 1);
							}, 3000); 
						});
					}, 300);
				});
			}

			// ====================================
			// SITUATION PANEL SEQUENCE
			// ====================================
			function startSituationSequence() {
				const sit = lessons[currentIndex].situation;
				document.getElementById('sit-title').innerText = sit.title;
				document.getElementById('actor-1').innerText = sit.dialogs[0].icon; 
				document.getElementById('actor-2').innerText = sit.dialogs[1].icon; 
				document.getElementById('sit-bubble').style.opacity = 0;
				
				const bgEl = document.getElementById('sit-stage-bg');
				if (sit.background_image) {
					bgEl.style.backgroundImage = `url('${sit.background_image}')`;
				} else {
					bgEl.style.backgroundImage = 'none';
				}
				
				playDialog(0);
			}

			function playDialog(idx) {
				if (currentLevel !== 2) return;
				const sit = lessons[currentIndex].situation;
				if (idx >= sit.dialogs.length) return;

				const line = sit.dialogs[idx];
				const bubble = document.getElementById('sit-bubble');
				const data = lessons[currentIndex];
				
				// Check if this is a reading lesson with Q&A format
				if (data.type === "reading" && line.answer) {
					// Show question first
					bubble.innerText = line.text;
					bubble.style.opacity = 1;
					
					const actorId = idx % 2 === 0 ? 'actor-1' : 'actor-2';
					const actor = document.getElementById(actorId);
					
					actor.style.transform = actorId === 'actor-1' ? 
						"scaleX(-1) translateY(-10px)" : "translateY(-10px)";
					
					setTimeout(() => {
						actor.style.transform = actorId === 'actor-1' ? 
							"scaleX(-1) translateY(0)" : "translateY(0)";
					}, 200);

					// Read question
					speak(line.text, 1.0, () => {
						if (currentLevel !== 2) return;
						
						setTimeout(() => {
							// Show and read answer
							bubble.innerText = line.answer;
							speak("Trả lời: " + line.answer, 1.0, () => {
								if (currentLevel !== 2) return;
								playbackTimeout = setTimeout(() => {
									playDialog(idx + 1);
								}, 1500);
							});
						}, 1000);
					});
				} else {
					// Normal dialog (Tap 1)
					bubble.innerText = line.text;
					bubble.style.opacity = 1;
					
					const actorId = idx % 2 === 0 ? 'actor-1' : 'actor-2';
					const actor = document.getElementById(actorId);
					
					actor.style.transform = actorId === 'actor-1' ? 
						"scaleX(-1) translateY(-10px)" : "translateY(-10px)";
					
					setTimeout(() => {
						actor.style.transform = actorId === 'actor-1' ? 
							"scaleX(-1) translateY(0)" : "translateY(0)";
					}, 200);

					speak(line.text, 1.0, () => {
						if (currentLevel !== 2) return;
						playbackTimeout = setTimeout(() => {
							playDialog(idx + 1);
						}, 1000);
					});
				}
			}

			function replaySituation() { 
				startSituationSequence(); 
			}

			// ====================================
			// TOUCH/GESTURE HANDLING
			// ====================================
			let touchStartY = 0;
			
			document.addEventListener('touchstart', e => {
				touchStartY = e.changedTouches[0].screenY;
			});
			
			document.addEventListener('touchend', e => {
				if (document.getElementById('screen-lesson').style.display !== 'flex') return;
				
				const diffY = e.changedTouches[0].screenY - touchStartY;

				if (Math.abs(diffY) > 50) { 
					if (diffY < 0) { // UP
						if (currentLevel === 0) openLevel(1);      
						else if (currentLevel === 1) openLevel(2); 
					} else { // DOWN
						if (currentLevel === 2) closeLevel(2);     
						else if (currentLevel === 1) closeLevel(1);
					}
				}
			});

			// ====================================
			// ERROR HANDLING
			// ====================================
			window.addEventListener('error', function(e) {
				console.error('Global error:', e.message);
			});

			// ====================================
			// EMPTY AREA CLICK DETECTION (BUZZ SOUND)
			// ====================================
			document.addEventListener('click', function(e) {
				// Check if click is on empty background area (not on any interactive element)
				const target = e.target;
				
				// List of elements that should NOT trigger buzz
				const interactiveElements = [
					'BUTTON', 'A', 'INPUT', 'SELECT', 'TEXTAREA'
				];
				
				const interactiveClasses = [
					'book-vol', 'slide-card', 'lesson-frame', 'big-char', 
					'illustration', 'sentence-box', 'guide-box', 'example-item',
					'btn-sit', 'btn-back-corner', 'close-handle', 'hand-icon-container'
				];
				
				// Check if clicked on interactive element
				const isInteractive = interactiveElements.includes(target.tagName) ||
									 interactiveClasses.some(cls => target.classList.contains(cls)) ||
									 target.closest('.book-vol, .slide-card, .lesson-frame, .big-char, .illustration, .sentence-box, .guide-box, .example-item, .btn-sit, .btn-back-corner, .close-handle, .hand-icon-container');
				
				// If click is on background/empty area, play buzz
				if (!isInteractive) {
					const screenIds = ['screen-lesson', 'screen-toc', 'screen-books'];
					const isOnScreen = screenIds.some(id => {
						const screen = document.getElementById(id);
						return screen && screen.style.display !== 'none' && screen === target;
					});
					
					if (isOnScreen || target === document.body || target.id === 'situation-panel' || target.id === 'extra-panel') {
						playBuzzSound();
					}
				}
			});

			// ====================================
			// TAP GESTURE NAVIGATION
			// ====================================
			let tapCount = 0;
			let tapTimer = null;
			const TAP_DELAY = 500; // 500ms window for multiple taps
			
			document.addEventListener('touchstart', function(e) {
				tapCount++;
				
				// Clear existing timer
				if (tapTimer) {
					clearTimeout(tapTimer);
				}
				
				// Set new timer
				tapTimer = setTimeout(() => {
					handleTapGesture(tapCount);
					tapCount = 0;
				}, TAP_DELAY);
			});
			
			function handleTapGesture(count) {
				console.log('👆 Tap count:', count);
				
				if (count === 2) {
					// DOUBLE TAP - Go back
					handleDoubleTap();
				} else if (count === 3) {
					// TRIPLE TAP - Go home
					handleTripleTap();
				}
			}
			
			function handleDoubleTap() {
				playTingSound();
				vibrateStrong();
				
				// Kiểm tra màn hình hiện tại (đơn giản hơn)
				const lessonScreen = document.getElementById('screen-lesson');
				const tocScreen = document.getElementById('screen-toc');
				const booksScreen = document.getElementById('screen-books');
				const startScreen = document.getElementById('screen-start-merged');
				
				console.log('📱 Screen states:', {
					lesson: lessonScreen.style.display,
					toc: tocScreen.style.display,
					books: booksScreen.style.display,
					start: startScreen.style.display
				});
				
				// Điều hướng dựa trên màn hình hiện tại
				if (lessonScreen.style.display === 'flex') {
					console.log('✅ Going back to TOC from lesson');
					speak("Quay về mục lục", 1.0);
					goBackToToc();
				} else if (tocScreen.style.display === 'flex') {
					console.log('✅ Going back to books from TOC');
					speak("Quay về chọn tập", 1.0);
					goBackToBooks();
				} else if (booksScreen.style.display === 'flex') {
					console.log('✅ Going back to start from books');
					speak("Quay về trang đầu", 1.0);
					goBackToStart();
				} else {
					console.log('⚠️ Already at start screen');
					speak("Đây là trang đầu rồi em", 1.0);
				}
			}
			
			function handleTripleTap() {
				playTingSound();
				vibrateStrong();
				speak("Về trang chủ", 1.0);
				
				// Reset to home screen
				document.getElementById('screen-lesson').style.display = 'none';
				document.getElementById('screen-toc').style.display = 'none';
				document.getElementById('screen-books').style.display = 'none';
				document.getElementById('screen-start-merged').style.display = 'flex';
				
				// Stop any ongoing speech
				stopAudio();
				
				setTimeout(() => {
					speak("Chào em! Chạm vào màn hình để bắt đầu nhé!", 1.0);
				}, 500);
			}

			// Log khi app sẵn sàng
			console.log('✅ Tiếng Việt 1 App Loaded Successfully!');
			console.log('📚 Total Lessons:', lessons.length);
			console.log('🎨 Total SVGs:', Object.keys(svgs).length);
			console.log('🔊 Sound Effects: Ting (navigation) + Buzz (empty area)');
			console.log('👆 Gestures: Double tap (back) + Triple tap (home)');

