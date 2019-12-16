const lightboxParse = (() => {
    let projCover = document.querySelectorAll('.p-link'),
        lightbox = document.querySelector('.lightbox'),
        container = document.querySelector('.projectCon');

        

        function parseData(object) {
            let images = document.querySelector('.images'),
                para = document.querySelector('.paraContent1'),
                icon1 = document.querySelector('.content1'),
                icon2 = document.querySelector('.content2');

                let lbImg = 
                `images/${object.lightIMG}`,
                lbPara = `
                <p class="lb-text">${object.Para}</p>
                `,
                lbIcon1 = 
                `images/${object.Icon1}`,
                lbIcon2 = 
                `images/${object.Icon2}`;

                images.src = lbImg;
                para.innerHTML = lbPara;
                icon1.src = lbIcon1;
                icon2.src = lbIcon2;

                lightbox.classList.add('show-lb');
                
        }

        function getData(event) {
            event.preventDefault();
            let url = `/${this.getAttribute('href')}`;

            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                parseData(data);
            })
            .catch((err) => {
                console.log(err);
            });
        }

        projCover.forEach(image => image.addEventListener("click", getData));
        projCover.forEach(image => image.addEventListener("click", function() {
            container.classList.add('projHide');
            lightbox.classList.remove('projHide');
        }));

lightbox.querySelector('.close').addEventListener("click", function() {
    lightbox.classList.add('projHide');
    container.classList.remove('projHide');
    
});

})();