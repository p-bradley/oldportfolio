console.log('fired');

let navBtn = document.querySelector('.hamburgerIcon'),
    navMenu = document.querySelector('.navCon');

    navBtn.addEventListener('click', function() {
        navMenu.classList.toggle('reveal');
    });

    (function($) {

        $(document).ready(function(){
            $('.carousel').flickity({
                wrapAround: true,
                freeScroll: true,
                cellAlign: 'center',
                setGallerySize: false
            });
        });
    
    })(jQuery)

