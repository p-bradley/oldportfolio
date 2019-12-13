const lightboxParse = (() => {
    let projCover = document.querySelectorAll('.p-link'),
        lightbox = document.querySelector('.lightbox'),
        container = document.querySelector('.projContainer');

        //this is going to parse the data

        function parseData(object) {
            let images = document.querySelector('.images'),
                para = document.querySelector('.paraContent1'),
                icon1 = document.querySelector('.content1'),
                icon2 = document.querySelector('.content2');

                let lbImg = `
                <img class="lb-image" src="${object.lightIMG}"
                `,
                lbPara = `
                <p class="lb-text">${object.Para}</p>
                `,
                lbIcon1 = `
                <img class="lb-icon1 lb-icon" src="${object.Icon1}" 
                `,
                lbIcon2 = `
                <img class="lb-icon2 lb-icon" src="${object.Icon2}" 
                `;

                images.innerHTML = lbImg;
                para.innerHTML = lbPara;
                icon1.innerHTML = lbIcon1;
                icon2.innerHTML = lbIcon2;
                
                lightbox.classList.add('show-lb');
                container.classList.add('hidden');
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

lightbox.querySelector('.close').addEventListener("click", function() {
    lightbox.classList.remove('show-lb');
    container.classList.remove('hidden');
});
  
})();