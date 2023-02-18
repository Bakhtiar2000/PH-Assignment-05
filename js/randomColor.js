
var menuBoxes = document.getElementsByClassName('MenuBox');
for (let i = 0; i < menuBoxes.length; i++) {
    menuBoxes[i].onmouseover = function(e) {
        let color = '#'+Math.floor(Math.random()*16777215).toString(16);
        this.style['background-color'] = color;
        this.style['-webkit-background-color'] = color;
        this.style['-moz-background-color'] = color;
    }  
}