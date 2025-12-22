 // --- Falling Stars Script ---
    document.addEventListener('DOMContentLoaded', () => {
        const starsContainer = document.querySelector('.stars-container');
        
        // Change this number to control the quantity of stars
        const numberOfStars = 200; 

        function createStar() {
            const star = document.createElement('div');
            star.classList.add('star');
            const size = Math.random() * 3 + 1;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.left = `${Math.random() * 100}%`;
            const duration = Math.random() * 5 + 3;
            const twinkleDuration = Math.random() * 2 + 1;
            star.style.animation = `
                fall ${duration}s linear infinite,
                twinkle ${twinkleDuration}s ease-in-out infinite
            `;
            starsContainer.appendChild(star);
        }

        for (let i = 0; i < numberOfStars; i++) {
            createStar();
        }
    });