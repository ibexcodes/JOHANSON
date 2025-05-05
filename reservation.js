document.getElementById("reservationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const name = form.name.value;
  const email = form.email.value;
  const room = form.room.value;
  const guests = form.guests.value;

  // Simulate payment success
  setTimeout(() => {
    alert(`Payment successful!\nReservation details sent to ${email}`);
    window.location.href = "feedback.html";
  }, 1500);

  // Simulate sending email
  console.log(`Sending email to ${email}...\nRoom: ${room}\nGuests: ${guests}`);
});
