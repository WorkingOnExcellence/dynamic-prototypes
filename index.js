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
            
            //check for visible imgs
            if (visibleCheck('storyboard')) {
                //hide if visible
                document.getElementsByClassName(img)[1].style.visibility = "hidden";
            }
            
            //set attribute with prototype file
            gif_class[1].setAttribute("src", "share-gif02.gif");
            
            //make visible
            document.getElementsByClassName(img)[1].style.visibility = "visible";
            
            break;
        
        //---HOME BUTTON---
        } else if (btn === "home-btn") {
            console.log("home btn clicked");
            
            //check for visible imgs
            if (visibleCheck('storyboard')) {
                //hide if visible
                document.getElementsByClassName(img)[1].style.visibility = "hidden";
            }
            
            alert("prototype has not been created yet");
            break;
            
        //---FEED BUTTON---
        } else if (btn === "feed-btn") {
            console.log("feed btn clicked");
            
            //check for visible imgs
            if (visibleCheck('storyboard')) {
                //hide if visible
                document.getElementsByClassName(img)[1].style.visibility = "hidden";
            }
            
            alert("prototype has not been created yet");
            break;
            
        //---UPLOAD BUTTON---
        } else if (btn === "upload-btn") {
            console.log("upload btn clicked");
            
            //check for visible imgs
            if (visibleCheck('storyboard')) {
                //hide if visible
                document.getElementsByClassName(img)[1].style.visibility = "hidden";
            }
            
            alert("prototype has not been created yet");
            break;
            
        //---EVENTS BUTTON---
        } else if (btn === "events-btn") {
            console.log("events btn clicked");
            
            //check for visible imgs
            if (visibleCheck('storyboard')) {
                //hide if visible
                document.getElementsByClassName(img)[1].style.visibility = "hidden";
            }
            
            alert("prototype not created");
            break;
            
        //---SETTINGS BUTTON---
        } else if (btn === "settings-btn") {
            console.log("settings btn clicked");
            
            //check for visible imgs
            if (visibleCheck('storyboard')) {
                //hide if visible
                document.getElementsByClassName(img)[1].style.visibility = "hidden";
            }
            
            alert("prototype not created");
            break;
            
        //---CONTACTS BUTTON---
        } else if (btn === "contacts-btn") {
            console.log("contacts btn clicked");
            
            //check for visible imgs
            if (visibleCheck('storyboard')) {
                //hide if visible
                document.getElementsByClassName(img)[1].style.visibility = "hidden";
            }
            
            alert("prototype not created");
            break;
            
        //---MESSAGING BUTTON---
        } else if (btn === "messaging-btn") {
            console.log("messaging btn clicked");
            
            //check for visible imgs
            if (visibleCheck('storyboard')) {
                //hide if visible
                document.getElementsByClassName(img)[1].style.visibility = "hidden";
            }
            
            alert("prototype not created");
            break;
            
        //---FEED:UPLOAD TRANSITION---
        } else if (btn === "feed-upload") {
            console.log("feed:upload btn clicked");
            
            //check for visible imgs
            if (visibleCheck('storyboard')) {
                //hide if visible
                document.getElementsByClassName(img)[1].style.visibility = "hidden";
            }
            
            alert("prototype not created");
            break;
            
        //---FEED:SETTINGS TRANSITION---
        } else if (btn === "feed-settings") {
            console.log("feed:settings btn clicked");
            
            //check for visible imgs
            if (visibleCheck('storyboard')) {
                //hide if visible
                document.getElementsByClassName(img)[1].style.visibility = "hidden";
            }
            
            alert("prototype not created");
            break;
        
        //---CONTACTS:MESSAGING---
        } else if (btn === "contacts-msg") {
            console.log("contacts:messaging btn clicked");
            
            //check for visible imgs
            if (visibleCheck('storyboard')) {
                //hide if visible
                document.getElementsByClassName(img)[1].style.visibility = "hidden";
            }
            
            alert("prototype not created");
            break;
        }
    
        console.log("showExample() complete");
    }
}