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

