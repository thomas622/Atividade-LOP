
function acende(lamp){	
	switch(lamp){
	case 0:
	document.getElementById("luz0").src="Lon.png";
	break;
	case 1:
	document.getElementById("luz1").src="Lon.png";
	break;
	case 2:
	document.getElementById("luz2").src="Lon.png";
	break;
	case 3:
	document.getElementById("luz3").src="Lon.png";
	break;
	case 4:
	document.getElementById("luz4").src="Lon.png";
	break;
	default:
	document.getElementById("luz5").src="Lon.png";
	break;
	}
}

function apaga(lamp){
	switch(lamp){
	case 0:
	document.getElementById("luz0").src="Loff.png";
	break;
	case 1:
	document.getElementById("luz1").src="Loff.png";
	break;
	case 2:
	document.getElementById("luz2").src="Loff.png";
	break;
	case 3:
	document.getElementById("luz3").src="Loff.png";
	break;
	case 4:
	document.getElementById("luz4").src="Loff.png";
	break;
	default:
	document.getElementById("luz5").src="Loff.png";
	break;
	}
}



