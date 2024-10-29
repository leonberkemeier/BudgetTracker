// Date Funktion
function myFunction() {
    var number = "123";
    let today = new Date().toISOString().slice(0, 10)
  
    console.log(today)
    document.getElementById("Date_today").innerHTML = today;
}

// Menu Toggle
const navMenu = document.getElementById('nav_menu');
navToggle = document.getElementById('nav_toggle');
navClose = document.getElementById('nav_close');

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
};
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
})
};