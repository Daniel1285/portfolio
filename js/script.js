
/*================= toggle icon =================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')

};


/*================= scroll sections link =================*/
let section = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let secTop = sec.offsetTop;
        let secHeight = sec.offsetHeight - 100;
        let id = sec.getAttribute('id');

        if(top >= secTop && top < secTop + secHeight){
            navLink.forEach(link =>{
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });
        };
    });

    /*================= sticky nav-bar =================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

   
    /*================= remove toggle icon and navbar when click on navbar link =================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active')
};

