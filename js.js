let showSidebar = () => {
    const sidebar = document.getElementsByTagName("ul");
    sidebar[0].style.display = (sidebar[0].style.display == "flex" ? "none" : "flex");
}

window.addEventListener('resize', function(event) {
    const sidebar = document.getElementsByTagName("ul");
    sidebar[0].style.display = (window.matchMedia("(min-width: 1048px)").matches && "flex");
}, true);
