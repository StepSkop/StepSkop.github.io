/* Background changing */
const sections = document.querySelectorAll("section");
const options = {
    threshold: "0.6",
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach((i) => {
        if (i.isIntersecting) {
            switch (i.target.id) {
                case "homepage":
                    document.documentElement.setAttribute("style", "--background-color: #7821bd");
                    typingHome();
                    break;
                case "games":
                    document.documentElement.setAttribute("style", "--background-color: #490082");
                    break;
                case "about":
                    document.documentElement.setAttribute("style", "--background-color: #CC00FF");
                    typingAbout();
                    break;
            }
        }
    });
}, options);
sections.forEach((section) => {
    observer.observe(section);
});
/* Text wrtitng animation */
var j=0,text;
text = 'GAME VIBE';
function typingHome() {
    if (j<text.length) {
        var char = text.charAt(j);
        if (j == 4) {
            char += '</br>';
        }
        document.getElementById("game-vibe-text").innerHTML += char;
        j++;
        setTimeout(typingHome,70);
    }
}
var k=0,text2;
text2 = 'We are friendly gamer community from Czech Republic, but you will find gamers from other countries here. Even in night time you are able to find someone chilling in the voice. Welcome to gamers hideout.';
function typingAbout() {
    if (k<text2.length) {
        var char = text2.charAt(k);
        if (k == 175) {
            char += '</br>';
            char += '</br>'
        }
        document.getElementById("about-content").innerHTML += char;
        k++;
        setTimeout(typingAbout,5);
    }
}
/* Mobile VH Fix */
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);