const images = document.querySelectorAll('.gallery-image');
        const thumbnails = document.querySelectorAll('.thumbnail');
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');
        let currentImageIndex = 0;

        function showImage(index) {
            images.forEach(image => image.classList.remove('active'));
            thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));
            images[index].classList.add('active');
            thumbnails[index].classList.add('active');
            currentImageIndex = index;
        }

        nextButton.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            showImage(currentImageIndex);
        });

        prevButton.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            showImage(currentImageIndex);
        });
        thumbnails.forEach((thumbnail, index) => {
            thumbnail.addEventListener('click', () => {
                showImage(index);
            })
        })