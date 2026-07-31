const menu__btn = document.querySelector('.menu__btn');
const header__socials = document.querySelector('.header__socials');


menu__btn.addEventListener('click', () => {
    if (header__socials.style.visibility !== 'visible') {
        header__socials.style.visibility = 'visible'
    }else{
        header__socials.style.visibility ='hidden'
    }


})




const navMenu_active = document.querySelectorAll("nav a")

const removeActive = () => {
    navMenu_active.forEach(item => {
        item.classList.remove('active');
    })
}


navMenu_active.forEach(item => {
    item.addEventListener('click', () => {
        removeActive();
        item.classList.add('active')


    });
});

// change and save theme to local storage


const theme_btn = document.querySelector('.theme__btn');

theme_btn.addEventListener('click', () => {
    if (document.body.className == '') {
        document.body.className = 'dark';
        localStorage.setItem('portfolio__theme', 'dark');
        theme_btn.innerHTML = `<i class="ph ph-sun"></i>`
    } else {
        document.body.className = "";
        localStorage.setItem('portfolio__theme', '');
        theme_btn.innerHTML = `<i class="ph ph-moon"></i>`
    }
})


// get theme from local storage and apply on page reload


window.addEventListener('load', () => {
    const savedThene = localStorage.getItem('portfolio__theme') || '';
    document.body.className = savedThene;

    if (document.body.className == '') {
        theme_btn.innerHTML = `<i class="ph ph-moon"></i>`;

    } else {
        theme_btn.innerHTML = `<i class="ph ph-sun"></i>`
    }
})