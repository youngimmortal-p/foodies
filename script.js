const welcomePg = document.getElementById("welcome")
const pageEl = document.getElementById("page")
const contactEl = document.getElementById("contact-form");
const inputEl = document.querySelector("input")
const input = document.getElementById("input2")
const message = document.getElementById("text")
const animate = document.querySelectorAll('.fade-in, .slideinLeft, .slideinRight, .zoom-in')
const hamburger = document.getElementById('hamburger')
const navLinks = document.getElementById('navlinks')
const msgEl = document.getElementById('msg')
const submitBtn = document.getElementById('submitbtn')
setTimeout(() => {
    welcomePg.classList.add('fadeout')

    setTimeout(() => {
        welcomePg.style.display = 'none'
        pageEl.style.display = 'block'
    }, 1000);
   
}, 2500);
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active')
        }
    })
}, {threshold: 0.2});
    animate.forEach(animate => observer.observe(animate))

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        hamburger.classList.toggle('active')
    })
    contactEl.addEventListener("submit", (e) => {
    e.preventDefault();
    msgEl.textContent = "We'll get back to you shortly. Thank you"
    msgEl.style.color = '#2E7D32'
        setTimeout(() => {
         msgEl.remove()
        }, 2000)
   
    inputEl.value = ' '
    input.value = ''
    message.value = ''
   
})




