

function scrollToSection(id) {
	const headerHeight = document.querySelector('header').offsetHeight + 30
	const element = document.getElementById(id)
	if (element) {
		const elementPosition = element.getBoundingClientRect().top
		const offsetPosition = elementPosition + window.pageYOffset - headerHeight

		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth',
		})
	}
}
function addProjectButtons() {
	addProjectButton(
		'HK Guessr',
		'A Geoguessr Clone using the Hollow Knight map',
		'images/portfolio/hollowguessr.png',
		'https://logboy2000.github.io/HKGuessr/',
		'https://github.com/Logboy2000/HKGuessr',
		false
	)
	addProjectButton(
		'IMG2FRHD',
		'Convert image files into FreeRiderHD Tracks!',
		'images/portfolio/img2frhd.png',
		'https://logboy2000.github.io/IMG2FRHD/',
		'https://github.com/Logboy2000/IMG2FRHD',
		false
	)
	addProjectButton(
		'Quick Cure',
		'A Minecraft mod for fabric that lets you instantly cure zombie villagers',
		'images/portfolio/quickcure.png',
		'https://modrinth.com/mod/quick-cure-fabric',
		'https://github.com/Logboy2000/Quick-Cure-Fabric',
		false
	)
	addProjectButton(
		'Mole Mash',
		'A web game recreation of Whac-A-Mole with some osu! inspiration.',
		'images/portfolio/mole.png',
		'https://logboy2000.github.io/Comp-Sci-20/Procederal Programming/Choice Programming',
		'https://github.com/Logboy2000/Comp-Sci-20/tree/main/Procederal%20Programming/Choice%20Programming',
		false
	)
	addProjectButton(
		'The Legend of Charlie',
		'A platformer I made in Gamemaker Studio 1.2 as a CS-10 final project',
		'images/portfolio/charlie.png',
		'downloads/The-Legend-Of-Charlie-1.1.1.exe',
		null,
		true
	)
	addProjectButton(
		'Frogger',
		'A very basic recreation of the frogger arcade game in JavaScript',
		'images/portfolio/frogger.png',
		'https://logboy2000.github.io/Comp-Sci-10/Structured Programming 2/Frogger/',
		'https://github.com/Logboy2000/Comp-Sci-10/tree/main/Structured%20Programming%202/Frogger',
		false
	)
	addProjectButton(
		'Hangman',
		'A recreation of the game hangman made to learn 1D arrays',
		'images/portfolio/hangman.png',
		'https://logboy2000.github.io/Comp-Sci-20/Data Structures 1/Hangman',
		'https://github.com/Logboy2000/Comp-Sci-20/tree/main/Data%20Structures%201/Hangman',
		false
	)
	addProjectButton(
		'Connect 4',
		'A very customizable Connect "4" game made to learn 2D arrays',
		'images/portfolio/connect4.png',
		'https://logboy2000.github.io/Comp-Sci-20/Data Structures 1/Connect4',
		'https://github.com/Logboy2000/Comp-Sci-20/tree/main/Data%20Structures%201/Connect4',
		false
	)
	addProjectButton(
		'Tic Tac Toe',
		'A Tic Tac Toe game made in Javascript',
		'images/portfolio/tictactoe.png',
		'https://logboy2000.github.io/Comp-Sci-10/Structured Programming 2/TicTacToe/',
		'https://github.com/Logboy2000/Comp-Sci-10/tree/main/Structured%20Programming%202/TicTacToe',
		false
	)
}

function addProjectButton(
	name,
	desc,
	imgSrc,
	projectSrc,
	codeSrc = null,
	isDownload = false
) {
	let projectDiv = document.createElement('div')
	projectDiv.classList.add('project')
	let img = document.createElement('img')
	img.src = imgSrc
	img.alt = name
	projectDiv.appendChild(img)

	let h3 = document.createElement('h3')
	h3.textContent = name
	projectDiv.appendChild(h3)

	let p = document.createElement('p')
	p.textContent = desc
	p.classList.add('project-desc')
	projectDiv.appendChild(p)

	let projectButtonsDiv = document.createElement('div')
	projectButtonsDiv.classList.add('project-buttons')

	if (projectSrc) {
		let projectLink = document.createElement('a')
		projectLink.href = projectSrc
		projectLink.classList.add('view-button')
		projectLink.textContent = 'View'
		projectLink.target = '_blank'
		projectButtonsDiv.appendChild(projectLink)
	}

	if (codeSrc) {
		let codeLink = document.createElement('a')
		codeLink.href = codeSrc
		codeLink.classList.add('source-button')
		codeLink.textContent = 'Source Code'
		codeLink.target = '_blank'
		projectButtonsDiv.appendChild(codeLink)
	} else {
		let codeLink = document.createElement('a')
		codeLink.href = '#'
		codeLink.classList.add('source-button')
		codeLink.textContent = 'Source Lost :('
		codeLink.style.pointerEvents = 'none'
		codeLink.style.opacity = '0.5'
		projectButtonsDiv.appendChild(codeLink)
	}
	let projectLink = projectButtonsDiv.querySelector('.view-button')
	if (isDownload) {
		projectLink.download = ''
		projectLink.textContent = 'Download'
	}

	projectDiv.appendChild(projectButtonsDiv)
	document.querySelector('.project-list').appendChild(projectDiv)
}
