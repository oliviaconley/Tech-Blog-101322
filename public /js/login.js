const loginFormHandler = async (event) => {
  //prevents the default behavior of the form which would be to clear it out
  event.preventDefault();
 // getting values from our form fields (the text boxes)
 const user = document.querySelector('#user-login').value.trim(); //removed empty space in front or on the end of hte string
 const password = document.querySelector('#password-login').value.trim();

 if (user && password) {
  //post request to our api to login 
  const response = await fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({ user, password }),
    //letting the API know that I'm sending it json data 
    headers: { 'Content-Type': 'application/json' }, 
  });
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log in');
  }
 }

};

//this below needs to tie into the VIEWS 
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);