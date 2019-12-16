let imageCon = document.querySelector('.imageCon'),
    slides = document.querySelectorAll('.slide'),
    slides2 = document.querySelectorAll('.slide2');

var slideIndex = 1;
var slideIndex2 = 2;
var timer;
var slideCon;
var timer1;

window.addEventListener('load', function() {
    showImage(slideIndex);
    showImage2(slideIndex2);
    timer = setInterval(function(){plusSlide(1)}, 3000);
    timer1 = setInterval(function(){plusSlide2(1)}, 3000);
});

function currentImage() {
    timer = setInterval(function(){plusSlide(t + 1)}, 3000);
    showImage(slideIndex = t);
};

function showImage(t) {
    var i;
    if (t > slides.length) {slideIndex = 1}
    if (t < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('showing');
    }
    slides[slideIndex-1].classList.add('showing');
}

function plusSlide(t) {
    if (t < 0) {
        showImage(slideIndex -= 1);
    } else {
        showImage(slideIndex += 1);
    }
}

function currentImage2() {
    timer1 = setInterval(function(){plusSlide2(f + 1)}, 3000);
    showImage2(slideIndex2 = f);
};

function showImage2(f) {
    var i;
    if (f > slides2.length) {slideIndex2 = 1}
    if (f < 1) {slideIndex2 = slides2.length}
    for (i = 0; i < slides2.length; i++) {
        slides2[i].classList.remove('showing');
    }
    slides2[slideIndex2-1].classList.add('showing');
}

function plusSlide2(f) {
    if (f < 0) {
        showImage2(slideIndex2 -= 1);
    } else {
        showImage2(slideIndex2 += 1);
    }
}