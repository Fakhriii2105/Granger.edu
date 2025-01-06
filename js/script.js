const counts = document.querySelectorAll('.count')
const speed  = 97
counts.forEach((counter) => {
    function upData(){
        const target = Number(counter.getAttribute('data-target'));
        const count = Number(counter.innerText);
        const inc = Math.max(target / speed, 1);
        if(count < target){
            counter.innerText =Math.min(Math.floor(inc + count), target);
            setTimeout(upData, 1)
        }else{
            counter.innerText = target;
        }
    }
    upData()
})






new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

    // Pagination Bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

//responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
});