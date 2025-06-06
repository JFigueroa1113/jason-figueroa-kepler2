document.addEventListener("DOMContentLoaded", function () {
  // Footer 
  const footer = document.querySelector("footer");

  const today = new Date();
  const thisYear = today.getFullYear();

  footer.innerHTML = `<p>&copy; Jason Figueroa ${thisYear}</p>`;

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


fetch("https://api.github.com/users/JFigueroa1113/repos")
  .then(function(response) {
    return response.json();
  })
  .then(function(repositories) {
    console.log(repositories);

    var projectSection = document.getElementById('projects');
    var projectList = projectSection.querySelector('ul');

    for (var i = 0; i < repositories.length; i++) {
      var project = document.createElement('li');
      project.innerText = repositories[i].name;
      projectList.appendChild(project);
    }
  })
  .catch(function(error) {
    console.error('Error fetching repositories:', error);
    var projectSection = document.getElementById('projects');
    projectSection.innerHTML += '<p style="color: red;">Failed to load repositories. Try again later.</p>';
  });
