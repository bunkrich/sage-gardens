let menuButton = document.getElementById('menu-button')
let menu = document.getElementById('main-nav')

menuButton.addEventListener('click', function(e){
    console.log('button clicked');
    event.preventDefault();
menu.style.display = "grid";
menuButton.style.display = "none";
});
menu.addEventListener('click', function(e){
    menu.style.display = "none";
    menuButton.style.display = "block";
})