document.getElementById('triangle-calculator').addEventListener('click', function(){
    const triangleBase= getInputFieldValue('triangle-base');
    const triangleHeight= getInputFieldValue('triangle-height');

    const triangleArea= (0.5 * triangleBase * triangleHeight).toFixed(2);

    if(isNaN(triangleBase)|| isNaN(triangleHeight)|| triangleBase== null || triangleHeight== null || triangleBase< 0 || triangleHeight< 0)
    {
        alert("Please enter only positive numbers as input. Input cannot be null");
        clear('triangle-base','triangle-height');
        return;
    }

    const triangleOutput= document.getElementById('triangle-output');
    triangleOutput.classList.remove('invisible');
    const triangleAreaValue= document.getElementById('triangle-area-value');
    triangleAreaValue.innerText= triangleArea;
});