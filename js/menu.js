var toggle1=0;
var toggle2=0;
var toggle3=0;
var toggle4=0;
var toggle5=0;
var toggle6=0;
function toggle_hero1(){
	var hero=document.getElementById("hero");
	var icon=document.getElementById("down-icon");
	if(toggle1%2===0){
		hero.style.height="auto";
		hero.style.paddingTop="40px";
		hero.style.paddingBottom="50px";
		toggle1++;
		icon.className="glyphicon glyphicon-chevron-up";
	}
	else{
		hero.style.height="0px";
		hero.style.paddingTop="0px";
		hero.style.paddingBottom="0px";
		toggle1++;
		icon.className="glyphicon glyphicon-chevron-down";
	}
}

function toggle_hero2(){
	var hero=document.getElementById("hero2");
	var icon=document.getElementById("down-icon2");
	if(toggle2%2===0){
		hero.style.height="auto";
		hero.style.paddingTop="40px";
		hero.style.paddingBottom="50px";
		toggle2++;
		icon.className="glyphicon glyphicon-chevron-up";
	}
	else{
		hero.style.height="0px";
		hero.style.paddingTop="0px";
		hero.style.paddingBottom="0px";
		toggle2++;
		icon.className="glyphicon glyphicon-chevron-down";
	}
}

function toggle_hero3(){
	var hero=document.getElementById("hero3");
	var icon=document.getElementById("down-icon3");
	if(toggle3%2===0){
		hero.style.height="auto";
		hero.style.paddingTop="40px";
		hero.style.paddingBottom="50px";
		toggle3++;
		icon.className="glyphicon glyphicon-chevron-up";
	}
	else{
		hero.style.height="0px";
		hero.style.paddingTop="0px";
		hero.style.paddingBottom="0px";
		toggle3++;
		icon.className="glyphicon glyphicon-chevron-down";
	}
}

function toggle_hero4(){
	var hero=document.getElementById("hero4");
	var icon=document.getElementById("down-icon4");
	if(toggle4%2===0){
		hero.style.height="auto";
		hero.style.paddingTop="40px";
		hero.style.paddingBottom="50px";
		toggle4++;
		icon.className="glyphicon glyphicon-chevron-up";
	}
	else{
		hero.style.height="0px";
		hero.style.paddingTop="0px";
		hero.style.paddingBottom="0px";
		toggle4++;
		icon.className="glyphicon glyphicon-chevron-down";
	}
}

function toggle_hero5(){
	var hero=document.getElementById("hero5");
	var icon=document.getElementById("down-icon5");
	if(toggle5%2===0){
		hero.style.height="auto";
		hero.style.paddingTop="40px";
		hero.style.paddingBottom="50px";
		toggle5++;
		icon.className="glyphicon glyphicon-chevron-up";
	}
	else{
		hero.style.height="0px";
		hero.style.paddingTop="0px";
		hero.style.paddingBottom="0px";
		toggle5++;
		icon.className="glyphicon glyphicon-chevron-down";
	}
}

function toggle_hero6(){
	var hero=document.getElementById("hero6");
	var icon=document.getElementById("down-icon6");
	if(toggle6%2===0){
		hero.style.height="auto";
		hero.style.paddingTop="40px";
		hero.style.paddingBottom="50px";
		toggle6++;
		icon.className="glyphicon glyphicon-chevron-up";
	}
	else{
		hero.style.height="0px";
		hero.style.paddingTop="0px";
		hero.style.paddingBottom="0px";
		toggle6++;
		icon.className="glyphicon glyphicon-chevron-down";
	}
}