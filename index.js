
document.addEventListener('DOMContentLoaded', () => {
    const typingText = document.getElementById('typing-text');
    const typingContainer = document.getElementById('typing-container');

    const text1 = "Web Developer";

    let charIndex = 0;

    const type = () => {
        if (charIndex < text1.length) {
            typingText.innerHTML += text1.charAt(charIndex);
            charIndex++;
            setTimeout(type, 200);
        }
    };

    const startTyping = () => {
        typingText.innerHTML = '';
        charIndex = 0;
        type();
    };

    typingContainer.addEventListener('mouseenter', startTyping);
    startTyping();
});

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.program-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            console.log('ok');
            cards.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
});

const skillcards = document.querySelectorAll('.skill-card');
let currentAngle = 0;
let selectedIndex = 0;

function rotateGallery(selectedIndex) {
    const angleToRotate = selectedIndex * -70;
    currentAngle = angleToRotate;

    skillcards.forEach((skillcard, index) => {
        skillcard.classList.remove('selected');
        if (index === selectedIndex) {
            skillcard.classList.add('selected');
        }
        skillcard.style.transform = `rotateY(${index * 70 + currentAngle}deg) translateZ(150px)`;
    });
}

skillcards.forEach((skillcard, index) => {
    skillcard.addEventListener('click', () => {
        rotateGallery(index);
    });
});
