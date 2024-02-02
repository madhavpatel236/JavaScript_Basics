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