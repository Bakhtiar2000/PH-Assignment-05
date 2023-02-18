document.getElementById('triangle-calculator').addEventListener('click', function(){

    //Get the inputs and calculate Area with that
    const triangleBase= getInputFieldValue('triangle-base');
    const triangleHeight= getInputFieldValue('triangle-height');
    const triangleArea= (0.5 * triangleBase * triangleHeight).toFixed(2);

    //Check validation
    if(isNaN(triangleBase)|| isNaN(triangleHeight)|| triangleBase== null || triangleHeight== null || triangleBase< 0 || triangleHeight< 0)
    {
        alert("Please enter only positive numbers as input. Input cannot be null");
        clear('triangle-base','triangle-height');
        return;
    }

    //Unhide the output paragraph
    const triangleOutput= document.getElementById('triangle-output');
    triangleOutput.classList.remove('invisible');

    //Set the output value
    const triangleAreaValue= document.getElementById('triangle-area-value');
    triangleAreaValue.innerText= triangleArea;
});