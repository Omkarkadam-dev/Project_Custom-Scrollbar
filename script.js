// Futuristic interaction logic
console.log('Futuristic Custom Scrollbar is ready!');

// Scroll effect for glowing border
const contentBox = document.querySelector('.content-box');

contentBox.addEventListener('scroll', () => {
    const scrollPosition = contentBox.scrollTop;
    const maxScroll = contentBox.scrollHeight - contentBox.clientHeight;
    const scrollPercentage = (scrollPosition / maxScroll) * 100;

    // Change border glow effect as you scroll
    contentBox.style.boxShadow = `0 0 30px rgba(0, 212, 255, ${0.2 + (scrollPercentage / 100) * 0.8})`;
});
