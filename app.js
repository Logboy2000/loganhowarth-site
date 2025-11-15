class Project {
  constructor(name, desc, imgSrc, iconSrc, projectSrc, codeSrc = null, isDownload = false) {
    this.name = name;
    this.desc = desc;
    this.imgSrc = imgSrc;
    this.projectSrc = projectSrc;
    this.codeSrc = codeSrc;
    this.iconSrc = iconSrc;
    this.isDownload = isDownload;
  }

  createProjectElement() {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');

    const topRow = document.createElement('div');
    topRow.classList.add('project-top');

    const leftCol = document.createElement('div');
    leftCol.classList.add('project-left');

    const icon = document.createElement('img');
    icon.classList.add('project-icon');
    icon.src = this.iconSrc;
    icon.alt = `${this.name} icon`;

    const titleWrap = document.createElement('div');
    titleWrap.classList.add('project-title-wrap');

    const h3 = document.createElement('h3');
    h3.textContent = this.name;
    h3.classList.add('project-title');

    titleWrap.appendChild(h3);

    console.log(icon.src);
    if (this.iconSrc != null && this.iconSrc !== '') {
      leftCol.appendChild(icon);
    }
    leftCol.appendChild(titleWrap);

    const rightCol = document.createElement('div');
    rightCol.classList.add('project-right');

    const largeImg = document.createElement('img');
    largeImg.classList.add('project-large-image');
    largeImg.src = this.imgSrc;
    largeImg.alt = `${this.name} screenshot`;

    rightCol.appendChild(largeImg);

    topRow.appendChild(leftCol);
    topRow.appendChild(rightCol);

    const p = document.createElement('p');
    p.textContent = this.desc;
    p.classList.add('project-desc');

    const projectButtonsDiv = document.createElement('div');
    projectButtonsDiv.classList.add('project-buttons');



    if (this.codeSrc) {
      const codeLink = document.createElement('a');
      codeLink.href = this.codeSrc;
      codeLink.classList.add('secondary-button');
      codeLink.textContent = 'Source Code';
      codeLink.target = '_blank';
      projectButtonsDiv.appendChild(codeLink);
    } else {
      const codeLink = document.createElement('a');
      codeLink.href = '#';
      codeLink.classList.add('secondary-button');
      codeLink.textContent = 'Source Lost :(';
      codeLink.style.pointerEvents = 'none';
      codeLink.style.opacity = '0.5';
      projectButtonsDiv.appendChild(codeLink);
    }
    if (this.projectSrc) {
      const projectLink = document.createElement('a');
      projectLink.href = this.projectSrc;
      projectLink.classList.add('main-button');
      projectLink.textContent = this.isDownload ? 'Download' : 'Open Now';
      projectLink.target = '_blank';
      if (this.isDownload) projectLink.download = '';
      projectButtonsDiv.appendChild(projectLink);
    }

    projectDiv.appendChild(topRow);
    projectDiv.appendChild(p);
    projectDiv.appendChild(projectButtonsDiv);

    return projectDiv;
  }
}

function scrollToSection(id) {
  const header = document.querySelector('header');
  const headerHeight = header ? header.offsetHeight + 30 : 0;
  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
}

function initializeProjects() {
  const featuredContainer = document.getElementById('featured-projects');
  if (!featuredContainer) return;

  const projects = [
    new Project(
      'Hollow Guessr',
      `A Geoguessr game for the Hollow Knight game series. Allows user-submitted custom "Image Packs" that can be made using an in-browser editor!`,
      'images/portfolio/hollowguessr.png',
      'images/portfolio/hollowguessrfavicon.png',
      'https://hollowguessr.pages.dev/',
      'https://github.com/Logboy2000/HKGuessr'
    ),
    new Project(
      'Quick Cure', 
      'A Minecraft Fabric mod that removes the delay for curing zombie villagers', 
      'images/portfolio/quickcure.png', 
      'images/portfolio/quickcurefavicon.webp', 
      'https://modrinth.com/mod/quick-cure-fabric', 
      'https://github.com/Logboy2000/Quick-Cure-Fabric'
    ),
    new Project(
      'IMG2FRHD',
      'Converts image files into track code for the game FreeRiderHD!',
      'images/portfolio/img2frhd.png',
      '',
      'https://img2frhd.pages.dev/',
      'https://github.com/Logboy2000/IMG2FRHD'
    ),

    new Project(
      'Mole Mash', 
      'A recreation of the game Whac-A-Mole with some "osu!" inspiration.', 
      'images/portfolio/mole.png', 
      'images/portfolio/molemashfavicon.png', 
      'https://logboy2000.github.io/Comp-Sci-20/Procederal Programming/Choice Programming',
       'https://github.com/Logboy2000/Comp-Sci-20/tree/main/Procederal%20Programming/Choice%20Programming'
      ),
    new Project('Elevens', 'Make matches that add up to 11 to win!', 'images/portfolio/elevens.png','images/portfolio/elevensfavicon.png', 'https://logboy2000.github.io/Comp-Sci-30/Object%20Oriented%20Programming/Elevens', 'https://github.com/Logboy2000/Comp-Sci-30/tree/main/Object%20Oriented%20Programming/Elevens'),
    new Project('Hangman', 'A recreation of the game hangman made to learn 1D arrays', 'images/portfolio/hangman.png', 'images/portfolio/hangmanfavicon.png', 'https://logboy2000.github.io/Comp-Sci-20/Data Structures 1/Hangman', 'https://github.com/Logboy2000/Comp-Sci-20/tree/main/Data%20Structures%201/Hangman'),
    new Project('Connect 4', 'A very customizable Connect "4" game made to learn 2D arrays', 'images/portfolio/connect4.png', '', 'https://logboy2000.github.io/Comp-Sci-20/Data Structures 1/Connect4', 'https://github.com/Logboy2000/Comp-Sci-20/tree/main/Data%20Structures%201/Connect4'),
    new Project('The Legend of Charlie', 'A platformer made in Gamemaker Studio 1.2 as a CS-10 final project', 'images/portfolio/charlie.png', '', 'downloads/The-Legend-Of-Charlie-1.1.1.exe', null, true),
    new Project('Frogger', 'A very basic recreation of the frogger arcade game in JavaScript', 'images/portfolio/frogger.png', 'images/portfolio/froggerfavicon.png', 'https://logboy2000.github.io/Comp-Sci-10/Structured Programming 2/Frogger/', 'https://github.com/Logboy2000/Comp-Sci-10/tree/main/Structured%20Programming%202/Frogger'),
    new Project('Tic Tac Toe', 'A Tic Tac Toe game made in Javascript', 'images/portfolio/tictactoe.png', 'images/portfolio/tictactoefavicon.ico', 'https://logboy2000.github.io/Comp-Sci-10/Structured Programming 2/TicTacToe/', 'https://github.com/Logboy2000/Comp-Sci-10/tree/main/Structured%20Programming%202/TicTacToe')
  ];



  projects.forEach((p) => featuredContainer.appendChild(p.createProjectElement()));
}

document.addEventListener('DOMContentLoaded', () => {
  const aboutEl = document.getElementById('aboutDescription');
  if (aboutEl) aboutEl.innerText = `Hi! I'm Logan, a ${getAge('2008-12-11')}-year-old game developer and programmer. I love making video games and mods for them.\nI mostly work with HTML, CSS and JavaScript, but I have experience with Java, Python, and C++.`;
  initializeProjects();
});

function getAge(birthDate) {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const hasHadBirthdayThisYear = today.getMonth() > birth.getMonth() || (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());
  if (!hasHadBirthdayThisYear) age--;
  return age;
}
