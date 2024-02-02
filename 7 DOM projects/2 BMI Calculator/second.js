const form = document.querySelector('form');

// const weight = parseInt(document.querySelector('#Weight').value); // this value give you empty because at the time of refrece the page value was zero.

form.addEventListener('submit' , function(e){
    e.preventDefault(); // at the time of relode the page value was zero so from that function zero value will not be submit at each relode.

    const height = parseInt(document.querySelector('#Height').value);
    const weight = parseInt(document.querySelector('#Weight').value);

    const result = document.querySelector('#result')

    if (height === '' || height === 0 || isNaN(height)) {
        result.innerHTML = `please give the correct value ${height}`;
    }
    else if (weight === '' || weight === 0 || isNaN(weight)) {
        result.innerHTML = `please give the correct value ${weight}`;
    } else {
        result.innerHTML = (weight / ((height * height)/10000)).toFixed(2)
    }
})