const guestHandler = async (event) => {
    event.preventDefault();
  
    const drink = document.querySelector('#drink').value.trim();
    const guest = document.querySelector('#guest').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (drink && guest ) {
      const response = await fetch('/api/drink', {
        method: 'POST',
        body: JSON.stringify({ drink, guest }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };