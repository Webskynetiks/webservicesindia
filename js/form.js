
  document.getElementById("enquiryForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      name: document.getElementById("name2").value,
      email: document.getElementById("email2").value,
      phone: document.getElementById("phone2").value,
    //   Subject: document.getElementById("subject2").value,
      package: document.getElementById("package").value,
      message: document.getElementById("message2").value,
      pageUrl: window.location.href
    };

    Email.send({
      Host: "smtp.elasticemail.com",
      Port: 2525,
      Username: "sales@skynetiks.com",
      Password: "A67B232604CAF3ECE4584F9DE30A17054104", // ⚠️ Replace with secure backend for production
      To: "sales@skynetiks.com",
      From: "sales@skynetiks.com",
      Subject: `New Enquiry: ${formData.package}`,
      Body: `
        <b>Name:</b> ${formData.name}<br/>
        <b>Email:</b> ${formData.email}<br/>
        <b>Phone:</b> ${formData.phone}<br/>
        <b>Package Selected:</b> ${formData.package}<br/>
        <b>Message:</b><br/>${formData.message}<br/><br/>
        <h4>Page URL:</h4>
        <a href="${formData.pageUrl}" target="_blank">${formData.pageUrl}</a>
      `
    }).then(message => {
      console.log("SMTPJS response:", message);
      if (message === "OK") {
        alert("Your enquiry has been sent successfully!");
        document.getElementById("enquiryForm").reset();
        // Optional redirect
        // window.location.href = "/thankyou.html";
      } else {
        alert("Failed to send your enquiry. Please try again.");
      }
    }).catch(error => {
      console.error("Email sending error:", error);
      alert("Something went wrong while sending the email.");
    });
  });
