console.log('fired');

let navBtn = document.querySelector('.hamburgerIcon'),
    navMenu = document.querySelector('.navCon');

    navBtn.addEventListener('click', function() {
        navMenu.classList.toggle('reveal');
    });



