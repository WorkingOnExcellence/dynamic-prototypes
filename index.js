/*
check for examples that are already visible
*/
function visibleCheck(check) {
    'use strict';
    if (document.getElementsByClassName(check)[1].style.visibility === "visible") {
        return true;
    } else {
        return false;
    }
}

function activeClass(show, hide) {
    'use strict';
    var b;
    b = 0;

    //remove all other active classes
    for (b; b < hide.length; b++) {
        if (hide[b].getAttribute("id") !== show) {
            hide[b].removeAttribute("class");
        } else {
            //give current button an active class
            hide[b].className = "active";
            console.log(hide[b].textContent + " is now active");
        }
    }
}


/*
on click, show example
*/
function showExample(img, btn) {
    'use strict';
    console.log("clicked " + btn + " to show " + img);
    
    var a, gif_class, btns_class;
    
    a = 0;
    gif_class = document.getElementsByClassName(img);
    btns_class = document.getElementsByTagName('button');
    
    
    //identify which button was pressed
    for (a; a < btns_class.length; a++) {
        
        //---SHARE BUTTON---
        if (btn === "share-btn") {
            console.log("share btn clicked");
            
            //make active
            activeClass(btn, btns_class);
            
            //check for visible imgs
            if (visibleCheck('storyboard')) {
                //hide if visible
                if (document.getElementsByTagName("img").length > 0) {
                    document.getElementsByClassName(img)[1].style.visibility = "hidden";
                }
            }
            
            //set attribute with prototype file
            gif_class[1].setAttribute("src", "share-gif02.gif");
            
            //make visible
            document.getElementsByClassName(img)[1].style.visibility = "visible";
            
            return;
        
        //---HOME BUTTON---
        } else if (btn === "home-btn") {
            console.log("home btn clicked");
            
            //make active
            activeClass(btn, btns_class);
            
            //check for visible imgs
            if (visibleCheck('storyboard')) {
                //hide if visible
                if (document.getElementsByTagName("img").length > 0) {
                    document.getElementsByClassName(img)[1].style.visibility = "hidden";
                }
            }
            
            alert("prototype has not been created yet");
            
            return;
            
        //---FEED BUTTON---
        } else if (btn === "feed-btn") {
            console.log("feed btn clicked");
            
            //make active
            activeClass(btn, btns_class);
            
            //check for visible imgs
            if (visibleCheck('storyboard')) {
                //hide if visible
                if (document.getElementsByTagName("img").length > 0) {
                    document.getElementsByClassName(img)[1].style.visibility = "hidden";
                }
            }
            
            alert("prototype has not been created yet");
            
            return;
            
        //---UPLOAD BUTTON---
        } else if (btn === "upload-btn") {
            console.log("upload btn clicked");
            
            //make active
            activeClass(btn, btns_class);
            
            //check for visible imgs
            if (visibleCheck('storyboard')) {
                //hide if visible
                if (document.getElementsByTagName("img").length > 0) {
                    document.getElementsByClassName(img)[1].style.visibility = "hidden";
                }
            }
            
            alert("prototype has not been created yet");
            
            return;
            
        //---EVENTS BUTTON---
        } else if (btn === "events-btn") {
            console.log("events btn clicked");
            
            //make active
            activeClass(btn, btns_class);
            
            //check for visible imgs
            if (visibleCheck('storyboard')) {
                //hide if visible
                if (document.getElementsByTagName("img").length > 0) {
                    document.getElementsByClassName(img)[1].style.visibility = "hidden";
                }
            }
            
            alert("prototype has not been created yet");
            
            return;
            
        //---SETTINGS BUTTON---
        } else if (btn === "settings-btn") {
            console.log("settings btn clicked");
            
            //make active
            activeClass(btn, btns_class);
            
            //check for visible imgs
            if (visibleCheck('storyboard')) {
                //hide if visible
                if (document.getElementsByTagName("img").length > 0) {
                    document.getElementsByClassName(img)[1].style.visibility = "hidden";
                }
            }

            alert("prototype has not been created yet");
            
            return;
            
        //---CONTACTS BUTTON---
        } else if (btn === "contacts-btn") {
            console.log("contacts btn clicked");
            
            //make active
            activeClass(btn, btns_class);
            
            //check for visible imgs
            if (visibleCheck('storyboard')) {
                //hide if visible
                if (document.getElementsByTagName("img").length > 0) {
                    document.getElementsByClassName(img)[1].style.visibility = "hidden";
                }
            }

            alert("prototype has not been created yet");
            
            return;
            
        //---MESSAGING BUTTON---
        } else if (btn === "messaging-btn") {
            console.log("messaging btn clicked");
            
            //make active
            activeClass(btn, btns_class);
            
            //check for visible imgs
            if (visibleCheck('storyboard')) {
                //hide if visible
                if (document.getElementsByTagName("img").length > 0) {
                    document.getElementsByClassName(img)[1].style.visibility = "hidden";
                }
            }
            
            alert("prototype has not been created yet");
            
            return;
            
        //---FEED:UPLOAD TRANSITION---
        } else if (btn === "feed-upload") {
            console.log("feed:upload btn clicked");
            
            //make active
            activeClass(btn, btns_class);
            
            //check for visible imgs
            if (visibleCheck('storyboard')) {
                //hide if visible
                if (document.getElementsByTagName("img").length > 0) {
                    document.getElementsByClassName(img)[1].style.visibility = "hidden";
                }
            }

            alert("prototype has not been created yet");
            
            return;
            
        //---FEED:SETTINGS TRANSITION---
        } else if (btn === "feed-settings") {
            console.log("feed:settings btn clicked");
            
            //make active
            activeClass(btn, btns_class);
            
            //check for visible imgs
            if (visibleCheck('storyboard')) {
                //hide if visible
                if (document.getElementsByTagName("img").length > 0) {
                    document.getElementsByClassName(img)[1].style.visibility = "hidden";
                }
            }
            
            alert("prototype has not been created yet");
            
            return;
        
        //---CONTACTS:MESSAGING---
        } else if (btn === "contacts-msg") {
            console.log("contacts:messaging btn clicked");
            
            //make active
            activeClass(btn, btns_class);
            
            //check for visible imgs
            if (visibleCheck('storyboard')) {
                //hide if visible
                if (document.getElementsByTagName("img").length > 0) {
                    document.getElementsByClassName(img)[1].style.visibility = "hidden";
                }
            }

            alert("prototype has not been created yet");
            
            return;
        }
    
        console.log("showExample() complete");
    }
}
