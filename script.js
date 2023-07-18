var settingsmenu = document.querySelector(".settings-menu");

function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}
/*var darkbtn = document.getElementById("dark");

darkbtn.onclick= function(){
    darkbtn.classList.toggle("btn-on");
}*/

var darkbtn = document.getElementById("dark");

function darkon(){
    darkbtn.classList.toggle("btn-on");
    document.body.classList.toggle("dark-theme");
    if(localStorage.getItem("theme")== "light"){
        localStorage.setItem("theme", "dark");  
    }

    else{
        localStorage.setItem("theme", "light");
    }
}


if(localStorage.getItem("theme")== "light"){
    darkbtn.classList.remove("btn-on");
    document.body.classList.remove("dark-theme");
}

else if(localStorage.getItem("theme")== "dark"){
    darkbtn.classList.add("btn-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme", "light");
}


