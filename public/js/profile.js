// const { doc } = require("prettier");

const newFormHandler = async (event) => {
  event.preventDefault();

  const event_name = document.querySelector('#party-add').value.trim();
  const event_date = document.querySelector('#date').value.trim();
  const description = document.querySelector('#party-desc').value.trim();
  const guestName = document.querySelector('#guest').value.trim();

  console.log(event_name)

  if (event_name && event_date && description) {
    const response = await fetch(`/api/event`, { 
      method: 'POST',
      body: JSON.stringify({ event_name, event_date, description}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (guestName) {
      const response2 = await fetch(`/api/guest`, { 
        method: 'POST',
        body: JSON.stringify({ guestName }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
    console.log(response2)

    if (response2.ok) {
      window.location.reload()
    } else {
      alert('Failed to create event');
    }
  }
}
}
//POO POO PEE PEE

document
  .querySelector('.new-event-form')
  .addEventListener('submit', newFormHandler);

(function addMoreGuests() {
  var guestList = document.getElementById("guestLabel");
  var addGuestButton = document.getElementById("addGuest");
  var guestCount = 1;
  
  addGuestButton.addEventListener("click", function() {
    guestCount++;
    var newGuestGroup = document.createElement("div");
    newGuestGroup.className = "form-group";
    
    var newGuestLabel = document.createElement("label");
    newGuestLabel.textContent = "Guest " + guestCount + ":";
    newGuestLabel.setAttribute("for", "guest" + guestCount);
    
    var newGuestInput = document.createElement("textarea");
    newGuestInput.className = "form-input";
    newGuestInput.setAttribute("id", "guest" + guestCount);
    newGuestInput.setAttribute("name", "guest" + guestCount);

    var deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
      guestList.removeChild(newGuestGroup);
    });
    
    newGuestGroup.appendChild(newGuestLabel);
    newGuestGroup.appendChild(newGuestInput);
    newGuestGroup.appendChild(deleteButton);
    guestList.appendChild(newGuestGroup);
  });
})();