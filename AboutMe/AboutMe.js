const slideshow = document.querySelector('.slideshow')

setInterval(() => {
    const firstIcon = slideshow.firstElementChild
    firstIcon.classList.add('faded-out')
    const thirdIcon = slideshow.children[3]
    thirdIcon.classList.add('light')
    thirdIcon.previousElementSibling.classList.remove('light')

    setTimeout(() => {
        slideshow.removeChild(firstIcon)
        slideshow.appendChild(firstIcon)

        setTimeout(() => {
            firstIcon.classList.remove('faded-out')
        }, 500)       
    }, 500)
}, 3000)

//Certification Button1
const centerItem = document.querySelector(".center-item");
const menu = document.querySelector(".menu");

centerItem.addEventListener("mouseover", () => {
  menu.classList.add("change");
});

menu.addEventListener("mouseleave", () => {
  menu.classList.remove("change");
});

//Certification Button2
const centerItem2 = document.querySelector(".center-item2");
const menu2 = document.querySelector(".menu2");

centerItem2.addEventListener("mouseover", () => {
  menu2.classList.add("change2");
});

menu.addEventListener("mouseleave", () => {
  menu2.classList.remove("change2");
});


//Navbar

document.querySelector(".dots-btn").addEventListener("click", () => {
  document.querySelector(".navbar").classList.toggle("change");
});



