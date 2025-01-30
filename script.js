function loaded() {
    const buttons = [
        {
            title: "The Legend of Charlie",
            description: "A platformer I made in Gamemaker Studio 1.2 as a CS-10 final project (Windows Installer Download)",
            imgSrc: "images/portfolio/charlie.png",
            href: "Games/The-Legend-Of-Charlie-1.1.1.exe",
            isDownload: true,
        },
        {
            title: "IMG2FRHD",
            description: "Convert image files into FreeRiderHD Tracks!",
            imgSrc: "images/portfolio/img2frhd.png",
            href: "https://logboy2000.github.io/IMG2FRHD/",
            isDownload: false,
        },
        {
            title: "Mole Mash",
            description: "A Javascript game recreation of the arcade game Whac-A-Mole",
            imgSrc: "images/portfolio/mole.png",
            href: "Games/MoleMash/index.html",
            isDownload: false,
        },
        {
            title: "Quick Cure",
            description: "A Minecraft mod for fabric that lets you instantly cure zombie villagers",
            imgSrc: "https://cdn.modrinth.com/data/cSKMfEiR/a64c8b1d1a0a790d39648a9e795139da00e76112.png",
            href: "https://modrinth.com/mod/quick-cure-fabric",
            isDownload: false,
        },
        {
            title: "Frogger",
            description: "A very basic recreation of the frogger arcade game in javascript",
            imgSrc: "images/portfolio/frogger.png",
            href: "Games/Frogger/frogger.html",
            isDownload: false,
        },
        {
            title: "Hangman",
            description: "A recreation of the game hangman made to learn 1D arrays",
            imgSrc: "images/portfolio/hangman.png",
            href: "Games/Hangman/index.html",
            isDownload: false,
        },
        {
            title: "Connect 4",
            description: "A highly customizable Connect 4 game made to learn 2D arrays",
            imgSrc: "images/portfolio/connect4.png",
            href: "Games/Connect4/index.html",
            isDownload: false,
        },
        {
            title: "Tic Tac Toe",
            description: "A Tic Tac Toe game made in Javascript",
            imgSrc: "images/portfolio/tictactoe.png",
            href: "Games/TicTacToe/index.html",
            isDownload: false,
        },
    ];

    buttons.forEach(button => {
        createPortfolioButton(button.title, button.description, button.imgSrc, button.href, button.isDownload);
    });


    document.getElementById('footer').innerText = '<footer>footer</footer>'
}

function createPortfolioButton(title, description, imgSrc, href, isDownload) {
    // Create the anchor element
    var buttonElement = document.createElement('a');
    buttonElement.href = href;
    buttonElement.className = 'portfolio-button background-hover';
    if (isDownload) {
        buttonElement.setAttribute('download', '');
    }
    buttonElement.setAttribute('target', '_blank');
    

    // Create title paragraph with image
    var titleElement = document.createElement('p');
    titleElement.className = 'button-title';

    var imgElement = document.createElement('img');
    imgElement.src = imgSrc;
    imgElement.alt = title;
    imgElement.style.paddingRight = '5px';

    titleElement.appendChild(imgElement);
    titleElement.appendChild(document.createTextNode(title));

    // Create description paragraph
    var descElement = document.createElement('p');
    descElement.className = 'button-desc';
    descElement.textContent = description;

    // Append title and description to the button element
    buttonElement.appendChild(titleElement);
    buttonElement.appendChild(descElement);

    // Append button element to the portfolio container
    document.getElementById('portfolio').appendChild(buttonElement);
}
