var snd = new Audio("../muziko/evilLaugh.mp3");
snd.play();
snd.currentTime = 0; //så den spelar skrattet en gång först

// Jens oändliga dag
window.type = function type(text, i) {
	document.getElementsByTagName('p')[0].innerHTML += text[i];

	i++;
	if(text[i] == '<') while(text[i - 1] != '>') i++; // ignorera <br>

	if(i < text.length) {
		setTimeout(type, Math.floor(Math.random() * 80), text, i);
    } else {
		var new_text = arr[Math.floor(Math.random() * arr.length)];
		if(new_text[0] == new_text[0].toUpperCase()) {
			document.getElementsByTagName('p')[0].innerHTML += '. ';
			if(Math.floor(Math.random() * 4) == 2) document.getElementsByTagName('p')[0].innerHTML += "<br><br>";
		} else if(Math.round(Math.random())) {
			document.getElementsByTagName('p')[0].innerHTML += ', ';
		} else {
			document.getElementsByTagName('p')[0].innerHTML += " et ";
		}

		setTimeout(type, Math.floor(Math.random() * 80), new_text, 0);
    }
}

window.onload = choosePic;

//Alla Jens
var myPix = new Array("img/jens_bond.png","img/jens_mario.png","img/jens_rick.png","img/jens_wizard.png",
"img/jens_cowboy.png","img/jens_bandidos.png","img/jens_homer2.png","img/jens_vampyr.png","img/jens_BYGGER.png",
"img/jens_gentelman.png","img/jens_bard.png","img/jens_ash.png","img/jens_skolavslutning.png",
"img/jens_witch.png","img/jens_mort2.png","img/jens_luigi.png","img/jens_jul.png","img/jens_s.png",
"img/jens_Thinker_knom.png","img/jens_barb.png");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
		 document.getElementById("myPicture").src = myPix[randomNum];
		 var randomNum = Math.floor(Math.random() * myPix.length);
		 document.getElementById("myPicture1").src = myPix[randomNum];
}