

document.querySelector('.main').style.display = 'none';
document.getElementById('load').classList.add('loader');

//timer for animation

 setTimeout(function() {
    document.getElementById('load').classList.remove('loader');
    document.querySelector('.main').style.display = 'block';
    document.querySelector('.container').style.margin = '0';
    
}, 4000);



