const height = document.body.scrollHeight - window.innerHeight;
const bg = document.getElementById('bg');

window.onscroll = () => {
    const bgWidth = (window.pageYOffset / height) * 600;
    if (bgWidth <= 100) {
        bg.style.width = bgWidth + "%";
    }
}
