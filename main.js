var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Backend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
function homePage() {
    window.location.href = "index.html";
}
function aboutPage() {
    window.location.href = "about.html";
}
function skillPage() {
    window.location.href = "skills.html";
}
function portfolioPage() {
    window.location.href = "portfolio.html";
}

function contactPage() {
    window.location.href = "contact.html";
}

document.getElementById("homeBtn").addEventListener("click", function(event) {
    event.preventDefault();
    homePage();
});
document.getElementById("aboutBtn").addEventListener("click", function(event) {
    event.preventDefault();
    aboutPage();
});
document.getElementById("skillBtn").addEventListener("click", function(event) {
    event.preventDefault();
    skillPage();
});
document.getElementById("portfolioBtn").addEventListener("click", function(event) {
    event.preventDefault();
    portfolioPage();
});
document.getElementById("contactBtn").addEventListener("click", function(event) {
    event.preventDefault();
    contactPage();
});
