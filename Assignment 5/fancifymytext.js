function onTextEnter(){         //resets text to default when entering new text
    if(KeyboardEvent && document.getElementById("textfield").style.fontSize != "10pt")
        document.getElementById("textfield").style.fontSize = "10pt";


}

function styleChange(element, lookUp){
    element.style.color = lookUp[0];
    element.style.fontWeight = lookUp[1];
    element.style.textDecoration = lookUp[2];
}

function changeText(text){
    text = text.toUpperCase();
    splitText =text.split("."); 
    for(let i = 0; i < splitText.length; i++){
        splitText[i]= splitText[i].trim() + "-Moo";
        
    }
    return splitText.join(". ");

}

function onClick(id = ""){
    const lookUp = {"FancyShmancy":["blue","bold", "underline"], "BoringBetty":["black","normal","none"]};
    button = "bigger "; 
    const textfield = document.getElementById("textfield");

    //Ensure this is not a default value and the entry exists in the dictionary
    if((elem = lookUp[id])!=null){     
        //Disable all the other radio buttons
        for(radioID in lookUp)
            if(radioID != id)document.getElementById(radioID).checked = false; 
    
        styleChange(textfield, elem);
        button = id;
    }
    else if(id == ""){
        textfield.style.fontSize = "24pt";
    }
    else{
        textfield.value = changeText(textfield.value);

    }

    alert("You've pressed the " + button + " button");  
}
    
     


 