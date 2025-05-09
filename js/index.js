document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const footer = document.createElement("footer");
    body.appendChild(footer);

    const today = new Date();
    const thisYear = today.getFullYear();

    const copyright = document.createElement("p");
    copyright.innerHTML = `&copy; Jason Figueroa ${thisYear}`;
    footer.appendChild(copyright);

    const skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"];

    const skillsSection = document.getElementById("skills");
    const skillsList = skillsSection.querySelector("ul");

    for (let i = 0; i < skills.length; i++) {
        const skill = document.createElement("li");
        skill.innerText = skills[i];
        skillsList.appendChild(skill);
    }
});
