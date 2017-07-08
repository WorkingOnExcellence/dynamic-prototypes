/*
on click, show example
*/
function showExample(img, btn) {
    'use strict';
    console.log("clicked " + btn + " to show " + img);
    
    if (document.getElementsByClassName(img)[0].style.visibility === "visible") {
        document.getElementsByClassName(img)[0].style.visibility = "hidden";
    } else {
        document.getElementsByClassName(img)[0].style.visibility = "visible";
    }
    
    console.log("showExample() complete");
}