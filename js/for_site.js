/******************************************************************************************************/
/*************************** JUST COPY THIS CODE IN BROWSER EXTENSION *********************************/
/******************************************************************************************************/

document.addEventListener('DOMContentLoaded', function () {
	var site = "HDRezka";
	
	let scriptFileGeneralMain = document.createElement("script");
	scriptFileGeneralMain.src = "http://localhost/General scripts/main.js"
	document.body.prepend(scriptFileGeneralMain)
	
	let scriptFile = document.createElement("script");
	scriptFile.src = "http://localhost/"+site+"/js/main.js"
	document.body.prepend(scriptFile)
	
	let cssFile = document.createElement("link");
	cssFile.href = "http://localhost/"+site+"/css/main.css"
	cssFile.rel = "stylesheet"
	document.body.prepend(cssFile)
});