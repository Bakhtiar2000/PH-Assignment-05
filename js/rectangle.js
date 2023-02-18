document.getElementById('rectangle-calculator').addEventListener('click', function(){
    const rectangleWidth= getInputFieldValue('rectangle-width');
    const rectangleLength= getInputFieldValue('rectangle-length');

    const rectangleArea= (rectangleWidth * rectangleLength).toFixed(2);

    const rectangleOutput= document.getElementById('rectangle-output');
    rectangleOutput.classList.remove('invisible');
    const rectangleAreaValue= document.getElementById('rectangle-area-value');
    rectangleAreaValue.innerText= rectangleArea;
});