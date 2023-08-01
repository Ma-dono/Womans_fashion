function recalcultotal(){
    var  input = this.parentNode.querySelector('input[type=number]');
}

function btnadd(){
    var  input =  this.parentNode.querySelector('input[type=number]');
    input.stepUp();
}
function btnminus(){
    var  input =  this.parentNode.querySelector('input[type=number]');
    input.stepDown();
}


let menu = document.querySelector('#menu-icon');
let navlinks = document.querySelector('.nav-links');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlinks.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlinks.classList.remove('active');
}