// Retrieving HTML Elements
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password1 = document.getElementById('password1');

//Functions
//Function to display Error of Empty fields
function showError(input, message)
{
    //To get the whole div access(form-control)
    const formControl=input.parentElement;
    //Override the class name
    formControl.className = 'form-control error';
    //Access the small in form-control
    const small = formControl.querySelector('small');
    //In small write this message
    small.innerText = message; 
}
//Function to show success of events
function showSuccess(input)
{
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control success';
}
function matchPasswords(input1,input2)
{
    if(input1.value === input2.value)
    {
        showSuccess(input2);
    }
    else
    {
        showError(input2,`Password not matched`);
    }
}
function checkEmail(input)
{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if( re.test(input.value.trim()))
    {
        showSuccess(input);
    }
    else
    {
        showError(input,`Please Enter valid Email`);
    }
}

function checkRequired(inputArray)
{
    inputArray.forEach(function(input)
    {
        if(input.value === '')
        {
            showError(input,`${getField(input)} is required`);
        }
        else
        {
            showSuccess(input);
        }
    });
}

function getField(input)
{
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLength(input,min,max)
{
    if(input.value.length < min)
    {
        showError(input,`${getField(input)} must be greater than ${min} characters`);
    }
    else if(input.value.length > max)
    {
        showError(input, `${getField(input)} must be less than ${max} characters `);
    }
    else
    {
        showSuccess(input);
    }
}
// Creating Event Listener for Button
form.addEventListener('submit', function(e) 
{
    //Stop page from reloading on clicking submit button for console.log.
    e.preventDefault(e);
    //Will print submitted on clicking submit button, but will start reloading.
    // console.log('Submitted');

    //check if user is submitting without username
    //old method of displaying error
    // alert('Username is required');
    checkRequired([username,email,password,password1]);
    checkLength(username,3,10);
    checkLength(password,6,15);
    checkEmail(email);
    matchPasswords(password,password1);
});