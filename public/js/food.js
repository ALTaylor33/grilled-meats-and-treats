const foodHandler = async (event) => {
    event.preventDefault();
  
    const food = document.querySelector('#food').value.trim();
    const guest = document.querySelector('#guest').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (food && guest ) {
      const response = await fetch('/api/food', {
        method: 'POST',
        body: JSON.stringify({ food, guest }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };