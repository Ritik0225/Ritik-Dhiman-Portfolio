// --------------Sticky Navbar----------------
let navbar = document.getElementById('navbar')

window.onscroll = ()=> {
    if(window.pageYOffset > navbar.offsetTop){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky")
    }
}


// Swiper start

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor: true,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    700: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
  //  scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  });

// Swiper end 

// Swiper 2 start

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},
breakpoints: {
  // when window width is >= 320px
  320: {
    slidesPerView: 1,
    spaceBetween: 20
  },
  // when window width is >= 480px
  480: {
    slidesPerView: 1,
    spaceBetween: 20
  },
  // when window width is >= 640px
  700: {
    slidesPerView: 2,
    spaceBetween: 20
  }
}

//  scrollbar: {
//   el: '.swiper-scrollbar',
// },
});

// Swiper 2 end 

// Countdown app start

const endDate = "21 June 2023";
document.getElementById('endDate').innerText = endDate

const input = document.querySelectorAll("input")

function clock(){
  const end = new Date(endDate)
  const now = new Date()
  const diff = (end - now)/1000
  // console.log(diff)

  input[0].value = Math.floor(diff / 3600/ 24);
  input[1].value = Math.floor((diff / 3600) % 24);
  input[2].value = Math.floor((diff / 60) % 60);
  input[3].value = Math.floor((diff) % 60)
}clock()

setInterval(() => {
  return clock()
}, 1000)
// Countdown app end

// AOS start
AOS.init({
  offset: 250,
  delay: 0,
  duration: 1000,
  easing: 'ease'
}); 
// AOS end 

// Scroll behaviour start
const aboutSec = document.querySelector("#aboutSection") 
const accomplishmentSec = document.querySelector("#certification")
const workSec = document.querySelector("#my-work")
const contactSec = document.querySelector("#footer")

document.querySelector(".about").addEventListener('click', () => {
  aboutSec.scrollIntoView({behavior: "smooth"})
})
// Scroll behaviour end 

// RESPONSIVE CODE START

const bar = document.getElementById('bar')
const close = document.getElementById('close')
const navItems = document.querySelector('.navItems')

bar.addEventListener('click', () =>{
  console.log("hello")
  navItems.style.right = '0'
})

close.addEventListener('click', ()=>{
  navItems.style.right = '-300px'
})
// RESPONSIVE CODE END 