// ==========================
// Typing Animation
// ==========================

const typingText = document.getElementById("typing");

const words = [
    "Frontend Developer",
    "Web Developer",
    "C++ Programmer",
    "Problem Solver"
];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;


function typing(){

    let currentWord = words[wordIndex];


    if(!deleting){

        typingText.textContent = currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typing,1000);

            return;

        }

    }

    else{

        typingText.textContent = currentWord.substring(0,charIndex--);


        if(charIndex === 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }


    setTimeout(typing,100);

}


typing();



// ==========================
// Dark / Light Mode
// ==========================


const themeBtn = document.getElementById("theme");


themeBtn.onclick = ()=>{


document.body.classList.toggle("light-mode");


if(document.body.classList.contains("light-mode")){


themeBtn.innerHTML =
'<i class="fa-solid fa-sun"></i>';


localStorage.setItem("theme","light");


}

else{


themeBtn.innerHTML =
'<i class="fa-solid fa-moon"></i>';


localStorage.setItem("theme","dark");


}


};



// Restore Theme


if(localStorage.getItem("theme")==="light"){


document.body.classList.add("light-mode");


themeBtn.innerHTML =
'<i class="fa-solid fa-sun"></i>';


}
// ==========================
// Scroll To Top Button
// ==========================


const scrollBtn = document.getElementById("scrollTop");


window.addEventListener("scroll", ()=>{


if(window.scrollY > 300){

scrollBtn.style.display = "flex";

}

else{

scrollBtn.style.display = "none";

}


});



scrollBtn.onclick = ()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


};



// ==========================
// Scroll Reveal Animation
// ==========================


const sections = document.querySelectorAll("section");


window.addEventListener("scroll",()=>{


sections.forEach(section=>{


let position = section.getBoundingClientRect().top;


let screenHeight = window.innerHeight;



if(position < screenHeight - 100){


section.style.opacity="1";

section.style.transform="translateY(0)";


}


});


});



// Initial Animation State


sections.forEach(section=>{


section.style.opacity="0";

section.style.transform="translateY(50px)";

section.style.transition="0.8s ease";


});



// ==========================
// Contact Form
// ==========================


const form = document.querySelector(".contact-form form");


form.addEventListener("submit",(e)=>{


e.preventDefault();


alert(
"Thank you for contacting me! I will get back to you soon."
);


form.reset();


});



// ==========================
// Navbar Active Link
// ==========================


const navLinks = document.querySelectorAll("nav ul li a");


window.addEventListener("scroll",()=>{


let current="";


sections.forEach(section=>{


const sectionTop = section.offsetTop - 150;


if(window.scrollY >= sectionTop){

current = section.getAttribute("id");

}


});



navLinks.forEach(link=>{


link.classList.remove("active");


if(link.getAttribute("href") === "#"+current){


link.classList.add("active");


}


});


});
// ==========================
// Project Card Animation
// ==========================


const cards = document.querySelectorAll(".project-card");


cards.forEach(card=>{


card.addEventListener("mouseenter",()=>{


card.style.transform="translateY(-12px)";


});


card.addEventListener("mouseleave",()=>{


card.style.transform="translateY(0)";


});


});



// ==========================
// Smooth Navigation
// ==========================


document.querySelectorAll("nav a").forEach(link=>{


link.addEventListener("click",(e)=>{


e.preventDefault();


const target = document.querySelector(
link.getAttribute("href")
);


target.scrollIntoView({

behavior:"smooth"

});


});


});



// ==========================
// Mobile Menu Preparation
// ==========================


const nav = document.querySelector("nav ul");


window.addEventListener("resize",()=>{


if(window.innerWidth > 768){


nav.style.display="flex";


}

});



// ==========================
// Page Loading Animation
// ==========================


window.addEventListener("load",()=>{


document.body.style.opacity="1";


});



// ==========================
// Console Message
// ==========================


console.log(
"🚀 Purvi Jain Portfolio Loaded Successfully!"
);


console.log(
"Built using HTML, CSS & JavaScript ❤️"
);