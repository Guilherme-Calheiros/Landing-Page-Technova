const accordion_item = document.querySelectorAll('.accordion-item');

const slider = document.querySelector('.slider');
const firstSlideWidth = slider.offsetWidth;

function showMenu(){
    let mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle("show")
}

function slideLeft(){
    if(window.innerWidth <= 768){
        slider.scrollLeft += -firstSlideWidth/1;    
    } else {
        slider.scrollLeft += -firstSlideWidth/3;
    }
    if (slider.scrollLeft <= 0) {
        slider.scrollLeft = slider.scrollWidth;
    }
}

function slideRight(){
    if(window.innerWidth <= 768){
        slider.scrollLeft += firstSlideWidth/1;
        if (slider.scrollLeft >= slider.clientWidth * 4) {
            slider.scrollLeft = 0;
        }    
    } else {
        slider.scrollLeft += firstSlideWidth/3;
        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
            slider.scrollLeft = 0;
        }
    }
}

accordion_item.forEach(item => {
    const accordion_header = item.querySelector('.accordion-header');
    
    accordion_header.addEventListener("click", () => {
        const accordion_content_item = item.querySelector('.accordion-content');

        const content_active = document.querySelector('.active');

        checkActive(item, accordion_content_item, content_active);
    })
})

function checkActive(item, content, content_active){
    const icon = item.querySelector('.material-symbols-outlined')

    if(content_active){
        content_active.style.height = '0px';
        content_active.classList.remove('active');
        icon.innerHTML = 'expand_more'
    }

    if(content !== content_active){
        content.style.height = content.scrollHeight + 10 + 'px';
        content.classList.add('active');
        icon.innerHTML = 'expand_less'
    }

}