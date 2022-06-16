var factForm = document.getElementById("factform");
factForm.a.addEventListener("click",factA);
function factA(){
	document.getElementById("factdisplay").innerHTML = "Hot water will turn into ice faster than cold water.";
	document.querySelector("main").style.backgroundColor = "#FF55AA";
	document.querySelector("#factdisplay").style.color = "#177013";
	document.querySelector("form").style.backgroundColor = "#DF5678";
	document.querySelector("main").style.border = "5px solid #67459F";
	document.querySelector("#factdisplay").style.border = "5px dotted #650D1B";
}
factForm.b.addEventListener("click",factB);
function factB(){
	document.getElementById("factdisplay").innerHTML = "The Mona Lisa has no eyebrows.";
	document.querySelector("main").style.backgroundColor = "#C8A353";
	document.querySelector("#factdisplay").style.color = "#45EF90";
	document.querySelector("form").style.backgroundColor = "#989898";
	document.querySelector("main").style.border = "5px solid #11FFFF";
	document.querySelector("#factdisplay").style.border = "5px dotted #823200";
}
factForm.c.addEventListener("click",factC);
function factC(){
	document.getElementById("factdisplay").innerHTML = "The strongest muscle in the body is the tongue.";
	document.querySelector("main").style.backgroundColor = "#EEB4B4";
	document.querySelector("#factdisplay").style.color = "#4B4BEE";
	document.querySelector("form").style.backgroundColor = "#555555";
	document.querySelector("main").style.border = "5px solid #567891";
	document.querySelector("#factdisplay").style.border = "5px dotted #9B3D12";
}
factForm.d.addEventListener("click",factD);
function factD(){
	document.getElementById("factdisplay").innerHTML = "Peacock is the male term for the species, the female term is peahen, togethor they are called peafowls.<img src='images/peacock.jpg' alt='Peacock'>";
	document.querySelector("main").style.backgroundColor = "#A9FDAC";
	document.querySelector("#factdisplay").style.color = "#FB4578";
	document.querySelector("form").style.backgroundColor = "#febbcc";
	document.querySelector("main").style.border = "5px solid #3489FF";
	document.querySelector("#factdisplay").style.border = "5px dotted #AE8E1C";
}
factForm.e.addEventListener("click",factE);
function factE(){
	document.getElementById("factdisplay").innerHTML = "Humans are the Only Animals That Enjoy Spicy Foods";
	document.querySelector("main").style.backgroundColor = "#B8336A";
	document.querySelector("#factdisplay").style.color = "#DDDDFF";
	document.querySelector("form").style.backgroundColor = "#7856ab";
	document.querySelector("main").style.border = "5px solid #65FF11";
	document.querySelector("#factdisplay").style.border = "5px dotted #C1DF1F";
}