class Project {
  constructor(
    name,
    desc,
    imgSrc,
    projectSrc,
    codeSrc = null,
    isDownload = false,
  ) {
    this.name = name;
    this.desc = desc;
    this.imgSrc = imgSrc;
    this.projectSrc = projectSrc;
    this.codeSrc = codeSrc;
    this.isDownload = isDownload;
  }

  createProjectElement() {
    let projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    let img = document.createElement("img");
    img.src = this.imgSrc;
    img.alt = this.name;
    projectDiv.appendChild(img);

    let h3 = document.createElement("h3");
    h3.textContent = this.name;
    projectDiv.appendChild(h3);

    let p = document.createElement("p");
    p.textContent = this.desc;
    p.classList.add("project-desc");
    projectDiv.appendChild(p);

    let projectButtonsDiv = document.createElement("div");
    projectButtonsDiv.classList.add("project-buttons");

    if (this.projectSrc) {
      let projectLink = document.createElement("a");
      projectLink.href = this.projectSrc;
      projectLink.classList.add("main-button");
      projectLink.textContent = this.isDownload ? "Download" : "View";
      projectLink.target = "_blank";
      if (this.isDownload) {
        projectLink.download = "";
      }
      projectButtonsDiv.appendChild(projectLink);
    }

    if (this.codeSrc) {
      let codeLink = document.createElement("a");
      codeLink.href = this.codeSrc;
      codeLink.classList.add("secondary-button");
      codeLink.textContent = "Source Code";
      codeLink.target = "_blank";
      projectButtonsDiv.appendChild(codeLink);
    } else {
      let codeLink = document.createElement("a");
      codeLink.href = "#";
      codeLink.classList.add("secondary-button");
      codeLink.textContent = "Source Lost :(";
      codeLink.style.pointerEvents = "none";
      codeLink.style.opacity = "0.5";
      projectButtonsDiv.appendChild(codeLink);
    }

    projectDiv.appendChild(projectButtonsDiv);
    return projectDiv;
  }
}

class ProjectManager {
  constructor(projectListSelector) {
    this.projectList = document.querySelector(projectListSelector);
  }

  addProject(project) {
    const projectElement = project.createProjectElement();
    this.projectList.appendChild(projectElement);
  }

  addProjects(projects) {
    projects.forEach((project) => this.addProject(project));
  }
}

// Usage
function scrollToSection(id) {
  const headerHeight = document.querySelector("header").offsetHeight + 30;
  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

function initializeProjects() {
  const projectManager = new ProjectManager(".project-list");

  const projects = [
    new Project(
      "HK Guessr",
      "A Geoguessr Clone using the Hollow Knight map",
      "images/portfolio/hollowguessr.png",
      "https://hollowguessr.pages.dev/",
      "https://github.com/Logboy2000/HKGuessr",
    ),
    new Project(
      "IMG2FRHD",
      "Convert image files into FreeRiderHD Tracks!",
      "images/portfolio/img2frhd.png",
      "https://logboy2000.github.io/IMG2FRHD/",
      "https://github.com/Logboy2000/IMG2FRHD",
    ),
    new Project(
      "Quick Cure",
      "A Minecraft mod for fabric that lets you instantly cure zombie villagers",
      "images/portfolio/quickcure.png",
      "https://modrinth.com/mod/quick-cure-fabric",
      "https://github.com/Logboy2000/Quick-Cure-Fabric",
    ),
    new Project(
      "Mole Mash",
      "A web game recreation of Whac-A-Mole with some osu! inspiration.",
      "images/portfolio/mole.png",
      "https://logboy2000.github.io/Comp-Sci-20/Procederal Programming/Choice Programming",
      "https://github.com/Logboy2000/Comp-Sci-20/tree/main/Procederal%20Programming/Choice%20Programming",
    ),
    new Project(
      "The Legend of Charlie",
      "A platformer I made in Gamemaker Studio 1.2 as a CS-10 final project",
      "images/portfolio/charlie.png",
      "downloads/The-Legend-Of-Charlie-1.1.1.exe",
      null,
      true,
    ),
    new Project(
      "Elevens",
      "Make matches that add up to 11 to win!",
      "images/portfolio/elevens.png",
      "https://logboy2000.github.io/Comp-Sci-30/Object%20Oriented%20Programming/Elevens",
      "https://github.com/Logboy2000/Comp-Sci-30/tree/main/Object%20Oriented%20Programming/Elevens",
    ),
    new Project(
      "Hangman",
      "A recreation of the game hangman made to learn 1D arrays",
      "images/portfolio/hangman.png",
      "https://logboy2000.github.io/Comp-Sci-20/Data Structures 1/Hangman",
      "https://github.com/Logboy2000/Comp-Sci-20/tree/main/Data%20Structures%201/Hangman",
    ),
    new Project(
      "Connect 4",
      'A very customizable Connect "4" game made to learn 2D arrays',
      "images/portfolio/connect4.png",
      "https://logboy2000.github.io/Comp-Sci-20/Data Structures 1/Connect4",
      "https://github.com/Logboy2000/Comp-Sci-20/tree/main/Data%20Structures%201/Connect4",
    ),
    new Project(
      "Frogger",
      "A very basic recreation of the frogger arcade game in JavaScript",
      "images/portfolio/frogger.png",
      "https://logboy2000.github.io/Comp-Sci-10/Structured Programming 2/Frogger/",
      "https://github.com/Logboy2000/Comp-Sci-10/tree/main/Structured%20Programming%202/Frogger",
    ),
    new Project(
      "Tic Tac Toe",
      "A Tic Tac Toe game made in Javascript",
      "images/portfolio/tictactoe.png",
      "https://logboy2000.github.io/Comp-Sci-10/Structured Programming 2/TicTacToe/",
      "https://github.com/Logboy2000/Comp-Sci-10/tree/main/Structured%20Programming%202/TicTacToe",
    ),
  ];

  projectManager.addProjects(projects);
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("aboutDescription").innerText =
    `Hi! I'm Logan, a ${getAge("2008-12-11")}-year-old game developer and programmer. I love making video games and mods for them. `;

  // Initialize projects on page load
  initializeProjects();

  // Add parallax effect to the body background image with bounds check
  window.addEventListener("scroll", () => {
    const scrollPosition = window.pageYOffset;
    const body = document.body;
    const maxOffset = body.offsetHeight - window.innerHeight;
    const clampedScrollPosition = Math.min(scrollPosition, maxOffset);
    body.style.backgroundPositionY = `${clampedScrollPosition * 0.5}px`;
  });
});

function getAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);

  let age = today.getFullYear() - birth.getFullYear();

  // Check if birthday has occurred yet this year
  const hasHadBirthdayThisYear =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() &&
      today.getDate() >= birth.getDate());

  if (!hasHadBirthdayThisYear) {
    age--;
  }

  return age;
}
