// function randomColor() {
//     let color = [];
//     for (let i = 0; i < 3; i++) {
//       color.push(Math.floor(Math.random() * 256));
//     }
//     return 'rgb(' + color.join(', ') + ')';
//   } 

// document.getElementById('triangle-container').addEventListener('mouseover',function(event){
//     event.target.style.background= randomColor();
// })


var menuBoxes = document.getElementsByClassName('MenuBox');
for (let i = 0; i < menuBoxes.length; i++) {
    menuBoxes[i].onmouseover = function(e) {
        let color = '#'+Math.floor(Math.random()*16777215).toString(16);
        let colorString = '0px 0px 30px 0px ' + color;
        this.style['box-shadow'] = colorString;
        this.style['-webkit-box-shadow'] = colorString;
        this.style['-moz-box-shadow'] = colorString;
    }  
}