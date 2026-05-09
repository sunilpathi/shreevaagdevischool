// ===============================
// AOS ANIMATION
// ===============================
AOS.init({
    duration: 1000,
    once: true
});


// ===============================
// NAVBAR AUTO CLOSE IN MOBILE
// ===============================
const navLinks = document.querySelectorAll('.nav-link');
const menu = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
    link.addEventListener('click', () => {

        // Bootstrap collapse remove
        if(menu.classList.contains('show')){
            new bootstrap.Collapse(menu).toggle();
        }

    });
});


// ===============================
// STICKY NAVBAR BACKGROUND
// ===============================
window.addEventListener('scroll', function(){

    const navbar = document.querySelector('.custom-navbar');

    if(window.scrollY > 50){
        navbar.style.background = "rgba(255,255,255,0.98)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.08)";
        navbar.style.padding = "8px 0";
    }
    else{
        navbar.style.background = "rgba(255,255,255,0.92)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.05)";
        navbar.style.padding = "12px 0";
    }

});


// ===============================
// ACTIVE NAV LINK
// ===============================
const currentLocation = location.href;
const menuItem = document.querySelectorAll('.nav-link');

menuItem.forEach(item => {

    if(item.href === currentLocation){
        item.classList.add('active-nav');
    }

});


// ===============================
// SMOOTH SCROLL
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});


// ===============================
// HERO CAROUSEL AUTO SPEED
// ===============================
const carousel = document.querySelector('#heroCarousel');

if(carousel){

    new bootstrap.Carousel(carousel, {
        interval: 3000,
        ride: 'carousel',
        pause: false
    });

}


// ===============================
// COUNTER ANIMATION
// ===============================
const counters = document.querySelectorAll('.stat-box h3');

const speed = 200;

counters.forEach(counter => {

    const animate = () => {

        const value = +counter.innerText.replace('+','').replace('%','');
        const data = +counter.getAttribute('data-count') || value;

        const time = data / speed;

        if(value < data){

            counter.innerText = Math.ceil(value + time);

            setTimeout(animate, 20);

        }
        else{

            counter.innerText = data;

        }

    };

});


// ===============================
// IMAGE HOVER GLOW EFFECT
// ===============================
const galleryCards = document.querySelectorAll('.gallery-card');

galleryCards.forEach(card => {

    card.addEventListener('mousemove', () => {

        card.style.boxShadow = "0 15px 40px rgba(245,197,66,0.35)";

    });

    card.addEventListener('mouseleave', () => {

        card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.08)";

    });

});


// ===============================
// BUTTON RIPPLE EFFECT
// ===============================
const buttons = document.querySelectorAll('.primary-btn, .secondary-btn');

buttons.forEach(button => {

    button.addEventListener('click', function(e){

        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;

        const ripple = document.createElement('span');

        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

    });

});


