document.getElementById('parallelogram-calculator').addEventListener('click', function(){

    //Unhide the output paragraph
    const parallelogramOutput= document.getElementById('parallelogram-output');
    parallelogramOutput.classList.remove('invisible');

    //Set the output value
    const parallelogramAreaValue= document.getElementById('parallelogram-area-value');
    parallelogramAreaValue.innerText= 120.00;
});

document.getElementById('rhombus-calculator').addEventListener('click', function(){

    //Unhide the output paragraph
    const rhombusOutput= document.getElementById('rhombus-output');
    rhombusOutput.classList.remove('invisible');

    //Set the output value
    const rhombusAreaValue= document.getElementById('rhombus-area-value');
    rhombusAreaValue.innerText= 64.00;

});

document.getElementById('pentagon-calculator').addEventListener('click', function(){

    //Unhide the output paragraph
    const pentagonOutput= document.getElementById('pentagon-output');
    pentagonOutput.classList.remove('invisible');

    //Set the output value
    const pentagonAreaValue= document.getElementById('pentagon-area-value');
    pentagonAreaValue.innerText= 30.00;

});

document.getElementById('ellipse-calculator').addEventListener('click', function(){

    //Unhide the output paragraph
    const ellipseOutput= document.getElementById('ellipse-output');
    ellipseOutput.classList.remove('invisible');

    //Set the output value
    const ellipseAreaValue= document.getElementById('ellipse-area-value');
    ellipseAreaValue.innerText= 62.80;

});

