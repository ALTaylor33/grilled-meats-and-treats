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
// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/projects/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete project');
//     }
//   }
// };

document
  .querySelector('.new-event-form')
  .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.project-list')
//   .addEventListener('click', delButtonHandler);

  // document.getElementById("addGuest").addEventListener("click", function() {
  //   var guestList = document.getElementById("guestLabel");
  //   var newGuest = document.createElement("li");
  //   newGuest.textContent = "Guest" + (guestList.children.length + 1);
  //   guestList.appendChild(newGuest);
  // });
