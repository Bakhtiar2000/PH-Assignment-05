document.getElementById('triangle-calculator').addEventListener('click', function(){
    const triangleBase= getInputFieldValue('triangle-base');
    const triangleHeight= getInputFieldValue('triangle-height');

    const triangleArea= (0.5 * triangleBase * triangleHeight).toFixed(2);
    const triangleOutput= document.getElementById('triangle-output');
    triangleOutput.classList.remove('invisible');
    const triangleAreaValue= document.getElementById('triangle-area-value');
    triangleAreaValue.innerText= triangleArea;
});