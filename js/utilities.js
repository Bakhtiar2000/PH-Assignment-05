function getInputFieldValue(inputId){
    const inputField= document.getElementById(inputId);
    const inputValue= parseFloat(inputField.value);
    console.log(inputValue);
    return inputValue;
    
}

function clear(element1,element2){
    const elementField1= document.getElementById(element1);
    const elementField2= document.getElementById(element2);

    elementField1.value='';
    elementField2.value='';
}