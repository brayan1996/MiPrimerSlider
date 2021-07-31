
// setInterval(function() {
//     Next()
// }, 5000);
// cada 5 seg llama a la funcion Next


const slider= document.querySelector(".slider")
const sliderSection = document.querySelectorAll(".slider__section")
let sliderSectionLast = sliderSection[sliderSection.length-1]
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");
slider.prepend(sliderSectionLast);
const Next = ()=>{
    const sliderFirst = document.querySelectorAll(".slider__section")[0]
    slider.style.marginLeft="-200%"
    slider.style.transition= "all 0.5s";
    setTimeout(function(){
        slider.style.transition= "none";
        slider.insertAdjacentElement('beforeend',sliderFirst);
        slider.style.marginLeft= "-100%";
    },500);
}
btnRight.addEventListener('click',Next)
const Before = ()=>{
    const sliderLast = document.querySelectorAll(".slider__section")[sliderSection.length-1]
    slider.style.marginLeft ="0"
    slider.style.transition = "all 0.5s"
    setTimeout(function(){
        slider.style.transition= "none";
        slider.insertAdjacentElement('afterbegin',sliderLast)
        slider.style.marginLeft= "-100%";
    },500)
}
btnLeft.addEventListener('click',Before)


// const ul = document.getElementById('ul')
// let names = ["Bryan","andy","rebeca","laura"]
// let fragmento = document.createDocumentFragment()
// for (const name of names) {
//     let list = document.createElement('LI')
//     list.textContent=name;
//     fragmento.appendChild(list)
// }
// ul.appendChild(fragmento)
// console.log(fragmento)

// const img = document.querySelector(".slider__img")
// const atributo= img.getAttribute("src")
// console.log(atributo)
// btnRight.classList.replace('slider__btn','slider__btn--mod')
// const image = document.createElement('IMG')
// image.setAttribute('src',atributo)
// btnRight.appendChild(image)
// console.log(image)
//meti una imagen aunque se rompio xd

