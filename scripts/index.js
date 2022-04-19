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
text2 = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil officia praesentium excepturi mollitia sed, repellendus ullam laboriosam dolore accusamus porro repellat cum sint cupiditate aliquid eligendi, sequi quibusdam harum aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ducimus ex nesciunt quam eos quae dolorem, dolore reiciendis amet perspiciatis praesentium dolorum illo ad ipsam beatae? Eos voluptas repudiandae eveniet.';
function typingAbout() {
    if (k<text2.length) {
        var char = text2.charAt(k);
        if (k == 4) {
            char += '</br>';
        }
        document.getElementById("about-content").innerHTML += char;
        k++;
        setTimeout(typingAbout,5);
    }
}
