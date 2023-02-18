document.getElementById('rectangle-calculator').addEventListener('click', function(){
    const rectangleWidth= getInputFieldValue('rectangle-width');
    const rectangleLength= getInputFieldValue('rectangle-length');

    const rectangleArea= (rectangleWidth * rectangleLength).toFixed(2);

    if(isNaN(rectangleWidth)|| isNaN(rectangleLength)|| rectangleWidth== null || rectangleLength== null || rectangleWidth< 0 || rectangleLength< 0)
    {
        alert("Please enter only positive numbers as input. Input cannot be null");
        clear('rectangle-width','rectangle-length');
        return;
    }

    const rectangleOutput= document.getElementById('rectangle-output');
    rectangleOutput.classList.remove('invisible');
    const rectangleAreaValue= document.getElementById('rectangle-area-value');
    rectangleAreaValue.innerText= rectangleArea;
});