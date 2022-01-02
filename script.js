let navBar = document.getElementById("nav-bar");
const animatedText = document.getElementById('animated-text');
const skillSection = document.getElementById("skills");
const progressBars = document.querySelectorAll(".progress-bar")

new Typewriter(animatedText, {
    deleteSpeed: 20,
})
.typeString("Hi I am <span style='color: yellow'>Eliot...</span>")
.stop()
.pauseFor(1000)
.deleteChars(9)
.typeString(", <span style='color: white'>FullStack dev</span>")
.pauseFor(1000)
.deleteChars(13)
.typeString("<span style='color: white'>and Computer Science Student</span>")
.pauseFor(1000)
.deleteChars("and Computer Science Student".length+2)
.typeString(" <span style='color: yellow'>Eliot...</span>")
.start();

function showProgress() {
    progressBars.forEach(progressBar => {
        const value = progressBar.dataset.progress;
        console.log(value);
        progressBar.style.opacity = 1;
        progressBar.style.width = value+"%";
    });
}

function hideProgress() {
    progressBars.forEach(progressBar => {
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 0;
        progressBar.style.width = "0%";
    });
}

document.addEventListener("scroll", function() {
    navBar.classList.toggle("sticky", window.scrollY>100);
    const sectionPos = skillSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
    if (sectionPos < screenPos) {
        showProgress();
    }
    else {
        hideProgress();
    }
})