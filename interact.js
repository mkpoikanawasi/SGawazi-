document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const content = document.querySelector('.content');
    
    // Make the No button run away from the cursor
    noBtn.addEventListener('mouseover', function() {
        // Generate random position within the visible area
        const maxX = content.clientWidth - noBtn.clientWidth;
        const maxY = content.clientHeight - noBtn.clientHeight;
        
        // Calculate new position ensuring button stays within content area
        // with some padding to avoid edges
        const padding = 20;
        let newX = Math.random() * (maxX - padding * 2) + padding;
        let newY = Math.random() * (maxY - padding * 2) + padding;
        
        // Apply new position
        noBtn.style.position = 'absolute';
        noBtn.style.left = newX + 'px';
        noBtn.style.top = newY + 'px';
    });
    
    // Handle Yes button click
    yesBtn.addEventListener('click', function() {
        // Redirect to the success page
        window.location.href = 'suceess.html';
    });
    
    // Create floating hearts animation
    function createHeartAnimation() {
        // Create multiple hearts
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.innerHTML = '❤️';
                heart.classList.add('floating-heart');
                
                // Random starting position
                const startX = Math.random() * content.clientWidth;
                const startY = content.clientHeight;
                
                heart.style.left = startX + 'px';
                heart.style.bottom = '0';
                
                content.appendChild(heart);
                
                // Remove heart after animation completes
                setTimeout(() => {
                    heart.remove();
                }, 4000);
            }, i * 200);
        }
    }
    
    // Handle No button click (just in case they manage to click it)
    noBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // Move the button again
        noBtn.dispatchEvent(new Event('mouseover'));
    });
});