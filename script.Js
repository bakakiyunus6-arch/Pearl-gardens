/* ==========================
   PEARL GARDENS SCRIPT.JS
========================== */


/* MOBILE MENU */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});



/* CLOSE MENU AFTER CLICK */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});






/* COUNTDOWN TIMER
   Pearl Gardens Boxing Competition
   27 June 2026
*/


const eventDate = new Date("June 27, 2026 20:00:00").getTime();



const timer = setInterval(() => {


    const now = new Date().getTime();


    const distance = eventDate - now;



    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );


    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );


    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );



    document.getElementById("days").innerHTML =
    days;


    document.getElementById("hours").innerHTML =
    hours;


    document.getElementById("minutes").innerHTML =
    minutes;


    document.getElementById("seconds").innerHTML =
    seconds;




    if(distance < 0){

        clearInterval(timer);


        document.querySelector(".countdown").innerHTML =
        "<h2>THE EVENT IS LIVE NOW!</h2>";

    }



},1000);









/* FORM VALIDATION */


function validateForm(formId){

    const form = document.getElementById(formId);


    form.addEventListener("submit", function(e){


        e.preventDefault();



        let inputs = form.querySelectorAll(
            "input, select"
        );


        let valid = true;



        inputs.forEach(input => {


            if(input.value.trim() === ""){

                valid = false;

            }


        });



        if(valid){

            alert(
            "Thank you! Your booking request has been received. Pearl Gardens will contact you."
            );


            form.reset();


        }else{


            alert(
            "Please fill in all required fields."
            );


        }



    });

}




validateForm("poolForm");

validateForm("ticketForm");

validateForm("reservationForm");








/* GALLERY IMAGE CLICK VIEW */


const galleryImages =
document.querySelectorAll(".gallery img");



galleryImages.forEach(image => {


    image.addEventListener("click",()=>{


        const overlay =
        document.createElement("div");


        overlay.className =
        "image-view";



        overlay.innerHTML =
        `
        <img src="${image.src}">
        `;



        document.body.appendChild(overlay);



        overlay.onclick = () => {

            overlay.remove();

        };


    });


});







/* ADD IMAGE VIEW STYLE */


const galleryStyle =
document.createElement("style");


galleryStyle.innerHTML = `

.image-view{

position:fixed;

top:0;

left:0;

width:100%;

height:100%;

background:rgba(0,0,0,.9);

display:flex;

align-items:center;

justify-content:center;

z-index:2000;

}


.image-view img{

max-width:90%;

max-height:90%;

border-radius:15px;

}

`;



document.head.appendChild(galleryStyle);






/* SCROLL ANIMATION */


const sections =
document.querySelectorAll(".section");



window.addEventListener("scroll",()=>{


sections.forEach(section=>{


const position =
section.getBoundingClientRect().top;


if(position < window.innerHeight - 100){

section.style.opacity="1";

section.style.transform="translateY(0)";

}


});


});



sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(50px)";

section.style.transition="0.8s ease";

});