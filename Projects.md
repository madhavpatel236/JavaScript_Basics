## Projects 1
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Color Changer</title>
    <link rel="stylesheet" href="first.css">
</head>
<body>
    <div class="containor">
        <h1 class="heading">Color Changer</h1>
        <span class="boxes" id="red"></span>
        <span class="boxes" id="black"></span>
        <span class="boxes" id="blue"></span>
        <span class="boxes" id="green"></span>
        <h3 class="footer">Try clicking on one of the colors above to change the background color of this page!</h3>
    </div>
</body>
<script src="first.js"></script>
</html>
```
```css
*{
    padding: 0px;
    margin: 0px;
    /* background-color: #212121; */  /*this is wrong from that line color will not change in the full page because that makes a page color static */
    color: white;
}
span {
    display: block;
}
.containor{
    margin: 100px auto ; /* top & bottom = 100px , left & right = auto means center  */
    width: 80%;
    text-align: center;
}
.boxes{
    width: 100px;
    height: 100px;
    border: 2px solid black;
    display: inline-block;
    
}
#red{
    background-color: red;
}
#black{
    background-color: black;
}
#blue{
    background-color: blue;
}
#green{
    background-color: green;
}

```
``` javascript

const buttons = document.querySelectorAll('.boxes');
const body = document.querySelector('body');

buttons.forEach( function(val){
    // console.log(val)

    val.addEventListener('click' , function(e){
        // console.log(e);   // wrong
        // console.log(e.target);   // right way to target any things
        
        if(e.target.id === 'red'){ 
            body.style.backgroundColor = e.target.id;  
        }
        else if(e.target.id === 'black'){ 
            body.style.backgroundColor = e.target.id;  
        }
        else if(e.target.id === 'blue'){ 
            body.style.backgroundColor = e.target.id;  
        }
        else if(e.target.id === 'green'){ 
            body.style.backgroundColor = e.target.id;  
        }
    } )
} );

``` 