/* ==========================================
   ERTRAG GO v2.0
   Premium Website Interactions
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Scroll Progress Bar
    ========================== */

    const progressBar = document.getElementById("progressBar");

    window.addEventListener("scroll", () => {

        const scrollTop = window.scrollY;

        const docHeight = document.documentElement.scrollHeight - window.innerHeight;

        const progress = (scrollTop / docHeight) * 100;

        progressBar.style.width = progress + "%";

    });

    /* ==========================
       Sticky Navbar Effect
    ========================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 60){

            navbar.style.background = "rgba(255,255,255,0.9)";
            navbar.style.boxShadow = "0 20px 60px rgba(15,42,74,.12)";
            navbar.style.backdropFilter = "blur(22px)";

        }else{

            navbar.style.background = "rgba(255,255,255,.72)";
            navbar.style.boxShadow = "0 20px 60px rgba(15,42,74,.08)";

        }

    });

    /* ==========================
       Back To Top
    ========================== */

    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 500){

            backToTop.classList.add("show");

        }else{

            backToTop.classList.remove("show");

        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

    /* ==========================
       Smooth Scrolling
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e){

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    /* ==========================
       Animated Counter
    ========================== */

    const counters = document.querySelectorAll(".stat-box h2");

    const animateCounter = (counter) => {

        const text = counter.innerText;

        const number = parseInt(text);

        if(isNaN(number)) return;

        let count = 0;

        const speed = Math.max(15, 2000 / number);

        const update = () => {

            count++;

            if(count <= number){

                if(text.includes("%")){

                    counter.innerText = count + "%";

                }else if(text.includes("+")){

                    counter.innerText = count + "+";

                }else{

                    counter.innerText = count;

                }

                setTimeout(update, speed);

            }

        };

        update();

    };

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                animateCounter(entry.target);

                observer.unobserve(entry.target);

            }

        });

    },{

        threshold:0.6

    });

    counters.forEach(counter => observer.observe(counter));

    /* ==========================
       Cursor Glow
    ========================== */

    const glow = document.querySelector(".cursor-glow");

    document.addEventListener("mousemove", e => {

        glow.style.left = e.clientX + "px";

        glow.style.top = e.clientY + "px";

    });

    /* ==========================
       Reveal Animation
    ========================== */

    const revealElements = document.querySelectorAll(

        ".service-card,.industry-card,.why-item,.timeline-item,.glass-card,.stat-box"

    );

    const revealObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    },{

        threshold:0.2

    });

    revealElements.forEach(el => {

        el.style.opacity = "0";

        el.style.transform = "translateY(40px)";

        el.style.transition = "all .8s ease";

        revealObserver.observe(el);

    });


/* ==========================
   Mobile Menu
========================== */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuToggle.innerHTML = navLinks.classList.contains("active")
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';

});

const dropdownTriggers = document.querySelectorAll(".dropdown-trigger");

dropdownTriggers.forEach(trigger => {

    trigger.addEventListener("click", (event) => {

        if(window.innerWidth <= 768){

            event.preventDefault();

            trigger.closest(".has-dropdown").classList.toggle("open");

        }

    });

});


/* ==========================
Active Navigation
========================== */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

const menuToggle=document.querySelector(".menu-toggle");

const navLinks=document.querySelector(".nav-links");

menuToggle.addEventListener("click",()=>{

navLinks.classList.toggle("active");

menuToggle.innerHTML=navLinks.classList.contains("active")

?'<i class="fas fa-times"></i>'

:'<i class="fas fa-bars"></i>';

});

const sections=document.querySelectorAll("section");

const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-120;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

});

