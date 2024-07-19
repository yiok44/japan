document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.container, .photo-container img, h1, .footer, .music-link, .icons');
    elements.forEach(element => {
        element.style.opacity = 0;
        element.style.animation = 'fadeIn 2s ease-in-out forwards';
    });

    const photos = document.querySelectorAll('.photo-container img');
    const overlay = document.querySelector('.overlay');
    const fullImage = document.querySelector('.full-image');

    photos.forEach(photo => {
        photo.addEventListener('click', () => {
            const src = photo.src;
            fullImage.src = src;
            overlay.classList.add('show');
        });
    });

    overlay.addEventListener('click', () => {
        overlay.classList.remove('show');
    });
});
