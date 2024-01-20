function showMenu() {
    const sidebar = document.getElementsByTagName("ul");
    if(sidebar[0].style.display === "flex") {
        sidebar[0].style.display = "none";
    } else {
        sidebar[0].style.display = "flex";
    }
    
}

window.addEventListener('resize', function(event) {
    const sidebar = document.getElementsByTagName("ul");
    const menu_bar = this.document.getElementById('icon');
    sidebar[0].style.display = "flex";
}, true);
