function getCheckedRadioValue(name){
	
	var colors = document.getElementsByName(name);
	
	for(var i =0; i < colors.length; i++){
		if(colors[i].checked){ 
			return colors[i].value;
		}
	}
	return null; //If no radios are selected
	
}

function ChangeBorder(){
	
	var color = getCheckedRadioValue("border");
	var width = document.getElementById("width_input").value;
	
	width = width.concat("px");
	
	if(color !== null){
		document.getElementById("Info").style.borderColor = color;
	}
	
	document.getElementById("Info").style.borderWidth = width;
}

function ChangeBackground(){
	
	var color = getCheckedRadioValue("background");
	if(color !== null){
		document.getElementById("Info").style.backgroundColor = color;
	}
}