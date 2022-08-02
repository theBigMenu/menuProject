let hamburger = document.querySelector('.hamburger')
let nav = bodymovin.loadAnimation({
    container: hamburger,
    remderer: 'svg',
    loop: false,
    autoplay: false,
    path: HAMBURGER,
    mode:"cursor", 
})

var directionMenu = 1;  
    hamburger.addEventListener('click', (e) => {
    nav.setDirection(directionMenu);
    nav.play();
    directionMenu = -directionMenu;
});


let hambuerMenu = document.getElementById('hamburgerMenu')
hambuerMenu.addEventListener('click', (e) => {
        let popup = document.querySelector('.popup')
        popup.classList.toggle('hidden')
    })
