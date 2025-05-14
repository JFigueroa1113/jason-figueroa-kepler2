document.addEventListener("DOMContentLoaded", function () {
  // Footer 
  const body = document.body;
  const footer = document.createElement("footer");
  body.appendChild(footer);

  const today = new Date();
  const thisYear = today.getFullYear();

  const copyright = document.createElement("p");
  copyright.innerHTML = `&copy; Jason Figueroa ${thisYear}`;
  footer.appendChild(copyright);

  // Skills
  const skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"];
  const skillsSection = document.getElementById("skills");
  const skillsList = skillsSection.querySelector("ul");

  for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
  }

  // Message form
  const messageForm = document.forms["leave_message"];

  messageForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log(usersName, usersEmail, usersMessage);

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");

    const newMessage = document.createElement("li");
    newMessage.innerHTML = `
      <a href="mailto:${usersEmail}">${usersName}</a> 
      <span> wrote: ${usersMessage}</span>
    `;

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", function () {
      const entry = removeButton.parentNode;
      entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset();
  });
});
