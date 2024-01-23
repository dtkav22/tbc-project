const showSidebar = () => {
    const sidebar = document.getElementsByTagName("ul");
    sidebar[0].style.display = (sidebar[0].style.display == "flex" ? "none" : "flex");
};

window.addEventListener('resize', function(event) {
    const sidebar = document.getElementsByTagName("ul")[0];
    sidebar.style.display = (window.matchMedia("(min-width: 1048px)").matches && "flex");
}, true);

const scrollFunction = () => {
    const navigation = document.getElementsByTagName("nav")[0];
    navigation.style.backgroundColor = (window.scrollY != 0 ? "rgb(28, 28, 27, 0.9)" : "rgb(28, 28, 27)");
};

window.onscroll = scrollFunction;

let timer = setInterval(slideTimer, 5000);

const imgIdArr = [["1", "2", "3"], ["4", "5", "6"], ["7"]];
let imgSectionPointer = 0;
const slide = (dir, newSection) => {
    clearInterval(timer);
    timer = setInterval(slideTimer, 5000);

    newSection = (newSection === -1 ? (imgSectionPointer + dir + 3) % 3 : newSection);

    imgIdArr[newSection].forEach((id) => startAppearance("partner-" + id));
    imgIdArr[imgSectionPointer].forEach((id) => startDisappearance("partner-" + id));
    imgSectionPointer = newSection;
};

function startDisappearance(id){
    const img = document.getElementById(id);
    img.style.opacity = "1";
    let disappearanaceInterval = setInterval(disappearanceFrame, 50);
    function disappearanceFrame() {
        if(img.style.opacity === "0") {
            clearInterval(disappearanaceInterval);
        } else {
            img.style.opacity = String(parseFloat(img.style.opacity) - 0.1);
        }
    }
}

function startAppearance(id) {
    const img = document.getElementById(id);
    img.style.opacity = "0";
    let appearanceInterval = setInterval(appearanceFrame, 50);
    function appearanceFrame() {
        if(img.style.opacity === "1") {
            clearInterval(appearanceInterval);
        } else {
            img.style.opacity = String(parseFloat(img.style.opacity) + 0.1);
        }
    }
}

function slideTimer() {
    slide(1, -1);
}

const showRightsAndRules = () => {
    document.getElementById('rules-txt').style.display = "block";
};

const closeRightsAndRules = () => {
    document.getElementById('rules-txt').style.display = "none";
};

const questionArrowEvent = (questionId) => {
    const answerDiv = document.getElementById("answer-" + questionId);
    answerDiv.style.display = (answerDiv.style.display === "none" ? "block" : "none");
}