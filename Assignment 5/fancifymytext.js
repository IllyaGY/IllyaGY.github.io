function onTextEnter(event) { // Accept the event as a parameter
    const textfield = document.getElementById("textfield");

    // Check if the font size is not already "10pt" and reset it
    if (textfield.style.fontSize != "10pt") {
        textfield.style.fontSize = "10pt";
    }
}
//Changes the styles if any of the radio button is pressed
function styleChange(element, lookUp){
    element.style.color = lookUp[0];
    element.style.fontWeight = lookUp[1];
    element.style.textDecoration = lookUp[2];
}


//Edits text when Moo is pressed
function changeText(text){
    text = text.toUpperCase();
    splitText =text.split("."); 
    for(let i = 0; i < splitText.length; i++){
        splitText[i]= splitText[i].trim() + "-Moo";
        
    }
    return splitText.join(". ");

}

function onClick(id){
    const lookUp = {"FancyShmancy":["blue","bold", "underline"], "BoringBetty":["black","normal","none"]};
    const textfield = document.getElementById("textfield");

    //Ensure the entry exists in the dictionary
    if((elem = lookUp[id])!=null){     
        //Disable all the other radio buttons
        for(radioID in lookUp)
            if(radioID != id)document.getElementById(radioID).checked = false; 
    
        styleChange(textfield, elem);
    }
    else {

        //If Bigger is pressed
        if(id == "Bigger")
            textfield.style.fontSize = "24pt";
        //If Moo is pressed
        else{
            textfield.value = changeText(textfield.value);
        }
    }
    alert("You've pressed the " + id + " button");  
}
    
     


 