let stars = document.getElementById('stars')
let mountain= document.getElementById('mountain')
let introduce = document.getElementById('introduce')
let header = document.querySelector('header')

window.addEventListener('scroll',function ()
{
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    introduce.style.marginTop = value * 1.5 + 'px';
    mountain.style.top = value * 0.5 + 'px';
    header.style.top = value * 0.5 + 'px';

})
