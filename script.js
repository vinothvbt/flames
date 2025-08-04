document.addEventListener('DOMContentLoaded', function() {
    // Local meme alternatives (SVG-based memes for fallback)
    const localMemes = {
        'Friendship': [
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjNDJhNWY1Ii8+Cjx0ZXh0IHg9IjE1MCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjI0IiBmb250LWZhbWlseT0iQXJpYWwiPkJlc3QgRnJpZW5kcyE8L3RleHQ+Cjx0ZXh0IHg9IjE1MCIgeT0iMTIwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSI0MCIgZm9udC1mYW1pbHk9IkFyaWFsIj7wn5GL8J+RizwvdGV4dD4KPHN2Zz4='
        ],
        'Love': [
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZTkxZTYzIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjI0IiBmb250LWZhbWlseT0iQXJpYWwiPkxvdmUgaXMgaW4gdGhlIGFpciE8L3RleHQ+Cjx0ZXh0IHg9IjE1MCIgeT0iMTMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSI0MCIgZm9udC1mYW1pbHk9IkFyaWFsIj7wn5KV8J+SljwvdGV4dD4KPHN2Zz4='
        ],
        'Affection': [
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZmZlYjNiIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMzMzMiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtZmFtaWx5PSJBcmlhbCI+QXd3LCBzbyBzd2VldCE8L3RleHQ+Cjx0ZXh0IHg9IjE1MCIgeT0iMTMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMzMzIiBmb250LXNpemU9IjQwIiBmb250LWZhbWlseT0iQXJpYWwiPvCfpbA8L3RleHQ+CjxzdmQ+'
        ],
        'Marriage': [
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjOGJjMzRhIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjIwIiBmb250LWZhbWlseT0iQXJpYWwiPldlZGRpbmcgYmVsbHMhPC90ZXh0Pgo8dGV4dCB4PSIxNTAiIHk9IjEzMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iNDAiIGZvbnQtZmFtaWx5PSJBcmlhbCI+8J+SgjwvdGV4dD4KPHN2Zz4='
        ],
        'Enemy': [
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZjQ0MzM2Ii8+Cjx0ZXh0IHg9IjE1MCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjIwIiBmb250LWZhbWlseT0iQXJpYWwiPkl0J3Mgbm90IHlvdSwgaXQncyBtZSE8L3RleHQ+Cjx0ZXh0IHg9IjE1MCIgeT0iMTMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSI0MCIgZm9udC1mYW1pbHk9IkFyaWFsIj7wn5ig8J+YoDwvdGV4dD4KPHN2Zz4='
        ],
        'Sibling': [
            'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZmY5ODAwIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjIwIiBmb250LWZhbWlseT0iQXJpYWwiPkZhbWlseSBmb3JldmVyITwvdGV4dD4KPHRleHQgeD0iMTUwIiB5PSIxMzAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjQwIiBmb250LWZhbWlseT0iQXJpYWwiPvCfkqjigI3wn5Kp4oCN8J+Rp+KAjfCfkanwn8iBPC90ZXh0Pgo8c3ZnPg=='
        ]
    };

    // External meme images for each result
    const externalMemes = {
        'Friendship': [
            'https://i.imgflip.com/2/1g8my4.jpg',
            'https://i.imgflip.com/2/q29pm.jpg',
            'https://media.giphy.com/media/l1J9EdzfOSgfyueLm/giphy.gif'
        ],
        'Love': [
            'https://media.giphy.com/media/26AHPxxnSw1L9T1rW/giphy.gif',
            'https://i.imgflip.com/2/146el.jpg',
            'https://media.giphy.com/media/xTiN0h0O13k0HsMVlK/giphy.gif'
        ],
        'Affection': [
            'https://media.giphy.com/media/3o7aDfF2H0gCMmH9di/giphy.gif',
            'https://i.imgflip.com/2/8attk.jpg',
            'https://media.giphy.com/media/l1J9FiGxR61OcF2mI/giphy.gif'
        ],
        'Marriage': [
            'https://media.giphy.com/media/l0HlADMS95lBYXUl2/giphy.gif',
            'https://i.imgflip.com/2/61kha.jpg',
            'https://media.giphy.com/media/26tOZlKO9QxXcHPEY/giphy.gif'
        ],
        'Enemy': [
            'https://media.giphy.com/media/l0HlPystfePnAI3G8/giphy.gif',
            'https://i.imgflip.com/2/2fm6x.jpg',
            'https://media.giphy.com/media/l0MYzxkg0o1tkGSaI/giphy.gif'
        ],
        'Sibling': [
            'https://media.giphy.com/media/3o7aDgCZl8aDhz2u5y/giphy.gif',
            'https://i.imgflip.com/2/1ur9b0.jpg',
            'https://media.giphy.com/media/l0MYC0LajbaPoEADu/giphy.gif'
        ]
    };

    // Sound effects
    let soundEnabled = true;

    // Initialize floating hearts
    createFloatingHearts();

    // Form submission handler
    document.getElementById('flamesForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const name1 = document.getElementById('name1').value.trim().toLowerCase().replace(/ /g, '');
        const name2 = document.getElementById('name2').value.trim().toLowerCase().replace(/ /g, '');

        if (!name1 || !name2) {
            showError("Please enter both names! 😊");
            return;
        }

        if (name1 === name2) {
            showError("Please enter different names! 😄");
            return;
        }

        // Hide form and show loading
        hideElement('flamesForm');
        showLoading(name1, name2);

        // Calculate FLAMES result
        setTimeout(() => {
            const result = calculateFlames(name1, name2);
            showFlamesAnimation(result);
        }, 2000);
    });

    // Try again button handler
    document.addEventListener('click', function(e) {
        if (e.target.id === 'tryAgainBtn') {
            resetGame();
        }
        
        // Sound toggle
        if (e.target.closest('#soundToggle')) {
            toggleSound();
        }
    });

    function calculateFlames(name1, name2) {
        let combinedNames = name1 + name2;
        
        // Remove common letters
        for (let char of name1) {
            if (name2.includes(char)) {
                combinedNames = combinedNames.replace(char, '');
                combinedNames = combinedNames.replace(char, '');
            }
        }

        const flames = ["Friendship", "Love", "Affection", "Marriage", "Enemy", "Sibling"];
        let resultIndex = (combinedNames.length % flames.length) - 1;
        resultIndex = resultIndex < 0 ? flames.length - 1 : resultIndex;

        return {
            result: flames[resultIndex],
            remainingLetters: combinedNames.length,
            names: { first: name1, second: name2 }
        };
    }

    function showLoading(name1, name2) {
        const loadingContainer = document.getElementById('loadingContainer');
        const processingText = document.getElementById('nameProcessing');
        
        loadingContainer.classList.add('active');
        
        // Animated typing effect for processing text
        const messages = [
            `Analyzing ${name1.charAt(0).toUpperCase() + name1.slice(1)} & ${name2.charAt(0).toUpperCase() + name2.slice(1)}...`,
            "Consulting the love algorithms... 💕",
            "Checking cosmic compatibility... ✨",
            "Almost ready... 🔮"
        ];
        
        let messageIndex = 0;
        const typeMessage = () => {
            if (messageIndex < messages.length) {
                typeText(processingText, messages[messageIndex], () => {
                    messageIndex++;
                    setTimeout(typeMessage, 400);
                });
            }
        };
        
        typeMessage();
    }

    function showFlamesAnimation(data) {
        hideElement('loadingContainer');
        
        const flamesContainer = document.getElementById('flamesContainer');
        const flamesText = document.getElementById('flamesText');
        
        flamesContainer.classList.add('active');
        
        // Create FLAMES letters with animation
        const flamesLetters = ['F', 'L', 'A', 'M', 'E', 'S'];
        flamesText.innerHTML = '';
        
        flamesLetters.forEach((letter, index) => {
            setTimeout(() => {
                const letterSpan = document.createElement('span');
                letterSpan.textContent = letter;
                letterSpan.className = 'letter';
                letterSpan.style.animationDelay = `${index * 0.2}s`;
                flamesText.appendChild(letterSpan);
                
                // Strike through letters based on calculation
                setTimeout(() => {
                    if (shouldStrikeLetter(letter, data.result)) {
                        letterSpan.classList.add('struck');
                    }
                }, 500);
            }, index * 300);
        });
        
        // Show result after FLAMES animation
        setTimeout(() => {
            showResult(data);
        }, 3000);
    }

    function shouldStrikeLetter(letter, result) {
        const resultMap = {
            'F': 'Friendship',
            'L': 'Love', 
            'A': 'Affection',
            'M': 'Marriage',
            'E': 'Enemy',
            'S': 'Sibling'
        };
        
        return resultMap[letter] !== result;
    }

    function showResult(data) {
        hideElement('flamesContainer');
        
        const resultContainer = document.getElementById('resultContainer');
        const resultContent = document.getElementById('flamesResult');
        const memeImg = document.getElementById('resultMeme');
        
        resultContainer.classList.add('active');
        
        // Set result text with emoji
        const resultEmojis = {
            'Friendship': '👫',
            'Love': '💕',
            'Affection': '🥰',
            'Marriage': '💒',
            'Enemy': '😠',
            'Sibling': '👨‍👩‍👧‍👦'
        };
        
        resultContent.innerHTML = `
            <div class="result-title">The Result Is...</div>
            <div class="result-main">${resultEmojis[data.result]} ${data.result.toUpperCase()} ${resultEmojis[data.result]}</div>
            <div class="result-subtitle">Destiny has spoken! ✨</div>
        `;
        
        // Try external meme first, fallback to local meme
        const resultMemes = externalMemes[data.result];
        const localResultMemes = localMemes[data.result];
        const randomExternalMeme = resultMemes[Math.floor(Math.random() * resultMemes.length)];
        const randomLocalMeme = localResultMemes[Math.floor(Math.random() * localResultMemes.length)];
        
        memeImg.src = randomExternalMeme;
        memeImg.alt = `${data.result} meme`;
        
        // Fallback to local meme if external fails
        memeImg.onerror = function() {
            this.src = randomLocalMeme;
            this.onerror = null;
        };
        
        // Create celebration effect
        createCelebration(data.result);
        
        // Change background theme
        updateBackgroundTheme(data.result);
    }

    function updateBackgroundTheme(result) {
        const body = document.body;
        
        // Apply new theme with gradient backgrounds - improved color psychology
        const themes = {
            'Friendship': 'linear-gradient(135deg, #3498db 0%, #5dade2 50%, #85c1e9 100%)', // Trust & loyalty blues
            'Love': 'linear-gradient(135deg, #e74c3c 0%, #ec7063 50%, #f1948a 100%)', // Passionate romantic reds
            'Affection': 'linear-gradient(135deg, #e8b4f0 0%, #d7bde2 50%, #c39bd3 100%)', // Gentle caring purples
            'Marriage': 'linear-gradient(135deg, #f8f9fa 0%, #f5deb3 50%, #daa520 100%)', // Pure white to gold elegance
            'Enemy': 'linear-gradient(135deg, #2c3e50 0%, #34495e 50%, #5d6d7e 100%)', // Dark stormy grays
            'Sibling': 'linear-gradient(135deg, #f39c12 0%, #f5b041 50%, #f7dc6f 100%)' // Warm family yellows
        };
        
        body.style.background = themes[result];
    }

    function createCelebration(result) {
        const celebrationContainer = document.querySelector('.celebration-particles');
        
        if (result === 'Love' || result === 'Marriage') {
            createHeartExplosion(celebrationContainer, result);
        } else if (result === 'Friendship') {
            createConfetti(celebrationContainer);
        } else if (result === 'Enemy') {
            createFireworks(celebrationContainer, '#5d6d7e'); // Match new Enemy theme
        } else if (result === 'Affection') {
            createStarBurst(celebrationContainer, ['#e8b4f0', '#d7bde2', '#c39bd3']); // Purple theme
        } else if (result === 'Sibling') {
            createStarBurst(celebrationContainer, ['#f39c12', '#f5b041', '#f7dc6f']); // Yellow theme
        } else {
            createStarBurst(celebrationContainer);
        }
    }

    function createHeartExplosion(container, result) {
        const heartEmojis = result === 'Love' ? ['❤️', '💕', '💖'] : ['💒', '👰', '🤵', '💍']; // Different hearts for Love vs Marriage
        
        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
            heart.style.position = 'absolute';
            heart.style.left = '50%';
            heart.style.top = '50%';
            heart.style.fontSize = Math.random() * 20 + 10 + 'px';
            heart.style.pointerEvents = 'none';
            
            // Create random animation
            const randomX = Math.random() * 400 - 200;
            const randomY = Math.random() * 400 - 200;
            heart.style.animation = `heartExplode 2s ease-out ${Math.random() * 0.5}s forwards`;
            heart.style.setProperty('--random-x', randomX + 'px');
            heart.style.setProperty('--random-y', randomY + 'px');
            
            container.appendChild(heart);
            
            setTimeout(() => heart.remove(), 2500);
        }
    }

    function createConfetti(container) {
        // Friendship colors - blues that match the new theme
        const colors = ['#3498db', '#5dade2', '#85c1e9', '#aed6f1', '#d6eaf8'];
        
        for (let i = 0; i < 30; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'absolute';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = '50%';
            confetti.style.top = '0%';
            confetti.style.borderRadius = '50%';
            confetti.style.animation = `confettiFall 3s ease-out ${Math.random() * 0.5}s forwards`;
            container.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 3500);
        }
    }

    function createStarBurst(container, colors = ['#ffd700', '#ffed4e', '#f1c40f']) {
        for (let i = 0; i < 15; i++) {
            const star = document.createElement('div');
            star.innerHTML = '⭐';
            star.style.position = 'absolute';
            star.style.left = '50%';
            star.style.top = '50%';
            star.style.fontSize = Math.random() * 15 + 8 + 'px';
            star.style.color = colors[Math.floor(Math.random() * colors.length)];
            star.style.animation = `starBurst 1.5s ease-out ${Math.random() * 0.3}s forwards`;
            container.appendChild(star);
            
            setTimeout(() => star.remove(), 2000);
        }
    }

    function createFireworks(container, color) {
        for (let i = 0; i < 25; i++) {
            const spark = document.createElement('div');
            spark.style.position = 'absolute';
            spark.style.width = '4px';
            spark.style.height = '4px';
            spark.style.backgroundColor = color;
            spark.style.left = '50%';
            spark.style.top = '50%';
            spark.style.borderRadius = '50%';
            spark.style.animation = `firework 1.5s ease-out ${Math.random() * 0.2}s forwards`;
            container.appendChild(spark);
            
            setTimeout(() => spark.remove(), 2000);
        }
    }

    function createFloatingHearts() {
        const heartsContainer = document.querySelector('.floating-hearts');
        
        setInterval(() => {
            const heart = document.createElement('div');
            heart.innerHTML = Math.random() > 0.5 ? '💕' : '💖';
            heart.style.position = 'absolute';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = '100%';
            heart.style.fontSize = Math.random() * 20 + 10 + 'px';
            heart.style.pointerEvents = 'none';
            heart.style.animation = `floatUp ${Math.random() * 3 + 5}s linear forwards`;
            heart.style.opacity = Math.random() * 0.7 + 0.3;
            
            heartsContainer.appendChild(heart);
            
            setTimeout(() => heart.remove(), 8000);
        }, 3000);
    }

    function typeText(element, text, callback) {
        element.textContent = '';
        let index = 0;
        
        const typeInterval = setInterval(() => {
            element.textContent += text[index];
            index++;
            
            if (index >= text.length) {
                clearInterval(typeInterval);
                if (callback) callback();
            }
        }, 50);
    }

    function showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(255, 107, 107, 0.9);
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            font-weight: 600;
            z-index: 10000;
            animation: slideInDown 0.5s ease-out;
        `;
        
        document.body.appendChild(errorDiv);
        
        setTimeout(() => {
            errorDiv.style.animation = 'slideOutUp 0.5s ease-out forwards';
            setTimeout(() => errorDiv.remove(), 500);
        }, 3000);
    }

    function hideElement(id) {
        const element = document.getElementById(id);
        element.style.display = 'none';
        element.classList.remove('active');
    }

    function resetGame() {
        // Reset all containers
        hideElement('loadingContainer');
        hideElement('flamesContainer');
        hideElement('resultContainer');
        
        // Clear inputs
        document.getElementById('name1').value = '';
        document.getElementById('name2').value = '';
        
        // Show form
        document.getElementById('flamesForm').style.display = 'flex';
        
        // Reset background to original gradient
        document.body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        
        // Clear celebration particles
        document.querySelector('.celebration-particles').innerHTML = '';
        
        // Focus first input
        document.getElementById('name1').focus();
    }

    function toggleSound() {
        soundEnabled = !soundEnabled;
        const soundBtn = document.querySelector('#soundToggle i');
        if (soundBtn) {
            soundBtn.className = soundEnabled ? 'fas fa-volume-up' : 'fas fa-volume-mute';
        }
    }

    // Add CSS animations dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInDown {
            from { transform: translateX(-50%) translateY(-100%); opacity: 0; }
            to { transform: translateX(-50%) translateY(0); opacity: 1; }
        }
        
        @keyframes slideOutUp {
            from { transform: translateX(-50%) translateY(0); opacity: 1; }
            to { transform: translateX(-50%) translateY(-100%); opacity: 0; }
        }
        
        @keyframes heartExplode {
            0% { transform: translate(-50%, -50%) scale(0) rotate(0deg); opacity: 1; }
            100% { 
                transform: translate(var(--random-x, -100px), var(--random-y, -100px)) 
                           scale(2) rotate(720deg); 
                opacity: 0; 
            }
        }
        
        @keyframes confettiFall {
            0% { transform: translateY(0) rotate(0deg); opacity: 1; }
            100% { transform: translateY(400px) rotate(720deg); opacity: 0; }
        }
        
        @keyframes starBurst {
            0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
            100% { 
                transform: translate(-150px, -150px) scale(3); 
                opacity: 0; 
            }
        }
        
        @keyframes firework {
            0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            100% { 
                transform: translate(-100px, -100px) scale(0); 
                opacity: 0; 
            }
        }
        
        @keyframes floatUp {
            0% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    // Initialize focus on first input
    document.getElementById('name1').focus();
});