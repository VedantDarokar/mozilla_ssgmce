function sendMail(event) {
  event.preventDefault(); // Prevents form from refreshing

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  console.log("Sending email with data:", { name, email, subject, message });

  if (!name || !email || !subject || !message) {
      alert("Please fill in all fields.");
      return;
  }

  emailjs.send("service_mbul6vv", "template_qtgz014", {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
  }).then(
      function (response) {
          alert("Message sent successfully!");
          console.log("SUCCESS!", response);
      },
      function (error) {
          alert("Failed to send message. Please try again.");
          console.log("FAILED...", error);
      }
  );
}
