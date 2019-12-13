console.log('fired');

let navBtn = document.querySelector('.hamburgerIcon'),
    navMenu = document.querySelector('.navCon');

    navBtn.addEventListener('click', function() {
        navMenu.classList.toggle('reveal');
    });

let imageCon = document.querySelector('.imageCon'),
    slides = document.querySelectorAll('.slide'),
    slides2 = document.querySelectorAll('.slide2'),
    currentImage = 0, 
    imageInterval = setInterval(nextImage,4000),
    imageInterval2 = setInterval(nextImage2,4000);

    function nextImage() {
        slides[currentImage].className = 'slide';
        currentImage = (currentImage+1)%slides.length;
        slides[currentImage].className = 'slide showing';
    };

    function nextImage2() {
        slides2[currentImage].className = 'slide';
        currentImage = (currentImage+1)%slides2.length;
        slides2[currentImage].className = 'slide showing';
    };