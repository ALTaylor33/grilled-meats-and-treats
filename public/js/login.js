const loginFormHandler = async (event) => {
  event.preventDefault();
console.log('is this working')
  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/guest/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  console.log(name, email, password);

  if (name && email && password) {
    const response = await fetch('/api/guest', {
      method: 'POST',
      body: JSON.stringify({  username: name,
        password: password, }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(name, email, password);
    if (response.ok) {
      document.location.replace('/home');
    } else {
      alert(response.statusText);
    }
  }
};

// const usernameEl = document.querySelector('#username-input-signup');
//   const passwordEl = document.querySelector('#password-input-signup');

//   const response = await fetch('/api/user', {
//     method: 'POST',
//     body: JSON.stringify({
//       username: usernameEl.value,
//       password: passwordEl.value,
//     }),
//     headers: { 'Content-Type': 'application/json' },
//   });

//   if (response.ok) {
//     document.location.replace('/dashboard');
//   } else {
//     alert('Failed to sign up');
//   }


document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
