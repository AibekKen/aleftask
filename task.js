
//==== для того что на лету ставить изоброжение в фоном и для адаптивности

function ibg() {

   let ibg = document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img')) {
         ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
   }
}

ibg();



const blocks = document.querySelectorAll('.block')
const mainImage = document.querySelector('.main-image')

blocks.forEach((block, i) => {
   block.addEventListener('click', () => {

      mainImage.src = `images/big/${i}.jpg`;
      ibg();
      block.classList.add('active')

      for (let j = 0; j < blocks.length; j++) {
         if (j !== i) {
            blocks[j].classList.remove('active')
         }
      }

   })

})

const minus = document.querySelector('.count__minus')
const plus = document.querySelector('.count__plus')
const number = document.querySelector('.count__value')
const orderBtn = document.querySelector('.order-form__order-btn')
const likeBtn = document.querySelector('.order-form__like-btn')
const prodactName = document.querySelector('.description__title')

plus.addEventListener('click', () => {
   number.value = +number.value + 1;
})

minus.addEventListener('click', () => {
   if (number.value > 1) { number.value = +number.value - 1; }
})

const message = document.querySelector('.message')

orderBtn.addEventListener('click', () => {
   message.classList.toggle('active');
   message.textContent = `Tовар "${prodactName.innerHTML.trim()}" в количестве ${number.value} единиц добавлен в корзину!`
   setTimeout(removeClass, 2000)
}
)

likeBtn.addEventListener('click', () => {
   message.classList.toggle('active');
   message.textContent = `Tовар "${prodactName.innerHTML.trim()}" в количестве ${number.value} единиц добавлен в избранное!`
   setTimeout(removeClass, 2000)
}
)

const removeClass = () => {
   message.classList.remove('active');
}

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const menuLink = document.querySelectorAll('.menu__link')


burger.addEventListener('click', () => {
   burger.classList.toggle('active');
   menu.classList.toggle('active');
   document.body.classList.toggle('lock');
})


menuLink.forEach((link, index) => link.addEventListener('click', () => {
   burger.classList.remove('active');
   menu.classList.remove('active');
   document.body.classList.remove('lock');

}))


const header = document.querySelector('.header')


let positions = []

window.addEventListener('scroll', () => {
   positions = [...positions, Math.floor(window.scrollY)];

   if (positions[positions.length - 1] < positions[positions.length - 2]) {

      if ((header.classList.contains('scrollup'))) {
         header.classList.add('active')
         }
         else{
            header.classList.add('scrollup')
            setTimeout(addActive, 1000)
   
            function addActive() {
               header.classList.add('active')
         }
      }
     


   }
   else {
      header.classList.remove('scrollup')
      header.classList.remove('active')
   }
});

