const icons = document.querySelectorAll("i");
const likeCountElement = document.querySelector('.like-count');

const iconClickHandler = function(e){
    // console.log(e.target.classList.contains('fa-regular')); 
    // * Capturando click del elemento
    const target = e.target;

    // * Guardar clase que tiene
    const removeClass = target.classList.contains('fa-regular') ? 'fa-regular' : 'fa-solid';

    // * Guardar clase que deseamos agregar
    const addClass = !target.classList.contains('fa-regular') ? 'fa-regular' : 'fa-solid';
    // console.log(addClass);
    // console.log(removeClass);
    //* Elimina la clase que tiene y agrega una nueva clase 
    target.classList.replace(`${removeClass}`, `${addClass}`);

    // *Capturar icono heart para llamar a la funcion countHeart
    if(target.classList.contains('fa-heart')){
        countHeart(addClass);
    }
}

const countHeart = function(elementClass){
    //* Agregamos o quitamos el like
    likeCountElement.innerHTML = (elementClass === 'fa-solid') 
                                        ? (parseInt(likeCountElement.innerHTML) + 1) 
                                        : (parseInt(likeCountElement.innerHTML) - 1);
}

let i = 0;
icons.forEach( icon => {
    if(i >= 2){
        // if(i === 2){
        //     icon.addEventListener("click", countHeart);
        // }
        icon.addEventListener("click", iconClickHandler);
    }
    i++;
});
