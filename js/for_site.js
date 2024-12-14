/******************************************************************************************************/
/*************************** JUST COPY THIS CODE IN BROWSER EXTENSION *********************************/
/******************************************************************************************************/

document.addEventListener('DOMContentLoaded', function () {
    let scriptFile = document.createElement("script");
    scriptFile.src = "http://localhost/HDRezka/js/main.js"
    document.body.append(scriptFile);

    let cssFile = document.createElement("link");
    cssFile.href = "http://localhost/HDRezka/css/main.css"
    cssFile.rel = "stylesheet"
    document.body.append(cssFile);
});