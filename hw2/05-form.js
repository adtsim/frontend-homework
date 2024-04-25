document
  .getElementById("mainForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Gather form data
    const formData = new FormData(this);
    const fullName = formData.get("name");
    const email = formData.get("email");
    const registrationStatus = formData.get("registration");
    const additionalInfo = formData.get("additionalTextInput");

    // Extract the courses
    const courses = [];
    const coursesNotTaken = [];
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      if (checkbox.checked) {
        courses.push(checkbox.getAttribute("data-course-name"));
      } else {
        coursesNotTaken.push(checkbox.getAttribute("data-course-name"));
      }
    });

    // Format the content for the modal
    let content = `
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Registration Status:</strong> ${registrationStatus}</p>
      <p><strong>Has Taken:</strong> ${courses.join(", ")}</p>
      <p><strong>Has Not Taken:</strong> ${coursesNotTaken.join(", ")}</p>
      <p><strong>Additional Comments:</strong> ${additionalInfo}</p>
  `;

    // Set the formatted content to the modal
    document.getElementById("modalContent").innerHTML = content;
    new bootstrap.Modal(document.getElementById("submissionModal")).show();
  });
