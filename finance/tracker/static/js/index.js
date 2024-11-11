// alert("helpme");


sidebar = document.getElementById("sidebar");
main = document.getElementById("main");
toggleSidebarOff = document.getElementById("toggleOff");
toggleSidebarOn = document.getElementById("toggleOn");


toggleSidebarOff.addEventListener('click', () =>{
    sidebar.classList.add('close');
    toggleSidebarOn.classList.remove('hide');
    main.classList.add('show-main');
    window.dispatchEvent(new Event('resize'));
});



toggleSidebarOn.addEventListener('click', () =>{
    sidebar.classList.remove('close');
    toggleSidebarOn.classList.add('hide');
    main.classList.remove('show-main');
    window.dispatchEvent(new Event('resize'));
});

function dateFunction() {
    var number = "123";
    let today = new Date().toISOString().slice(0, 10)
  
    console.log(today)
    document.getElementById("Date_today").innerHTML = today;
};

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader-hidden")
  
    loader.addEventListener("transionend", () =>{
        document.body.removeChild(".loader");
    })
});
