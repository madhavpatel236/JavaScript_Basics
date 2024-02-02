// Chai or Code - vedio-36

document.getElementById('btn').addEventListener('click' , function(e) {
    console.log('Event Bubbling');

    // event objects : 
    // type , timestamp , defaultPrevented
    // target , toElement , srcElement , currentTarget
    // clientX , clientY , ScreenX , ScreenY
    // altkey , ctrlkey , shiftkey , keyCode

    // console.log(e.type); // type of the event like click,hover ect.
    // console.log(e.timeStamp); // time stamp of the interaction with the environment
    // console.log(e.defaultPrevented);  // prevent the default work EX.form submission prevent in every relode 
    // console.log(e.target); //  target element
    // console.log(e.toElement); // 
    // console.log(e.src Element);
    // console.log(e.currentTarget);
    // console.log(e.clientX);
    // console.log(e.clientY);
    // console.log(e.screenX);
    // console.log(e.screenY);
    // console.log(e.altKey);
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);
    // console.log(e.keyCode);
    

    console.log(e.stopPropagation()); // it is stop the propogation mean down > top or top > down
} , true) // true/false -->> Event propogation

document.getElementById('div1').addEventListener('click' , function(e) {
    console.log('event Captaring');
    } , true) //false

// (I) Event Bubbling(false)  > down to up 
// (II) Event Captaring(true) > top to bottom
