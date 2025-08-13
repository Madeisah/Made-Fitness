
const menuToggle = document.getElementById("menu-toggle");
const openIcon = document.getElementById("open-icon");
const closeIcon = document.getElementById("close-icon");
const popupMenu = document.getElementById("menu");

// =============================FAQ=============================================





// ========================DIRECTIONAL ANIMATION================================




const revealFrom = document.querySelectorAll('.reveal-from');  

const revealElements = () => {  
    const windowHeight = window.innerHeight;  
    const windowBottom = window.scrollY + windowHeight;  

    revealFrom.forEach((reveal) => {  
        const revealTop = reveal.getBoundingClientRect().top + window.scrollY;  

        if (windowBottom > revealTop) {  
            const delay = reveal.dataset.delay;  
            setTimeout(() => {  
                reveal.classList.add('visible');  
            }, delay);  
        }  
    });  
};  

window.addEventListener('scroll', revealElements);  
window.addEventListener('load', revealElements);










// ========================OPACITY ANIMATION================================




const revealOpacity = document.querySelectorAll('.reveal-opacity');  

const revealOpacity1 = () => {  
    const windowHeight = window.innerHeight;  
    const windowBottom = window.scrollY + windowHeight;  

    revealOpacity.forEach((reveal) => {  
        const revealTop = reveal.getBoundingClientRect().top + window.scrollY;  

        if (windowBottom > revealTop) {  
            const delay = reveal.dataset.delay; // Get delay from data attribute  
            const opacityDuration = reveal.dataset.opacityDuration; // Get opacity duration from data attribute  

            // Apply opacity transition duration and set the visibility state  
            reveal.style.transition = `opacity ${opacityDuration}s ease`;   
            setTimeout(() => {  
                reveal.classList.add('visible'); // Add the `visible` class after the specified delay  
            }, delay);  
        }  
    });  
};  

window.addEventListener('scroll', revealOpacity1);  
window.addEventListener('load', revealOpacity1);



















// ========================ROTATION ANIMATION================================





const rotate = document.querySelectorAll('.rotate');  

const rotate1 = () => {  
    const windowHeight = window.innerHeight;  
    const windowBottom = window.scrollY + windowHeight;  

    rotate.forEach((reveal) => {  
        const revealTop = reveal.getBoundingClientRect().top + window.scrollY;  

        if (windowBottom > revealTop) {  
            const delay = reveal.dataset.delay; // Get delay from data attribute  
            setTimeout(() => {  
                reveal.classList.add('visible'); // Add `visible` class after delay  
            }, delay);  
        }  
    });  
};  

window.addEventListener('scroll', rotate1);  
window.addEventListener('load', rotate1);































