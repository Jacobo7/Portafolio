//script para portafolio burger button 
let main = document.querySelector('main');
let boton = document.getElementById('hamburger');
let navBar = document.getElementById('navbar');

let y;

boton.addEventListener('click',()=>
    {
        navBar.classList.toggle('open');
    }
)

window.onscroll = function() 
    {
        y = window.scrollY;

        if(y >= 406.67)
            {
                navBar.classList.remove('open');
                navBar.classList.add('navbar-fixed');
                main.style.marginTop= '75px';            
            }
            else if(y < 406.67)
            {
                navBar.classList.remove('navbar-fixed');
                main.style.marginTop= '0px'; 
            }
    };

  

