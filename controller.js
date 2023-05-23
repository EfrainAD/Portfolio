window.onload = () => {
   const navMenu = document.querySelector('.nav-menu')
   const navItems = document.querySelectorAll('.nav-item')
   const hamburger = document.querySelector('.nav-toggle')

   const toggle = (e) => e.classList.toggle('is-active')
   const toggleNav = ({ target }) =>
      Array.from(navMenu.classList).includes('is-active')
         ? toggle(navMenu)
         : null

   hamburger.addEventListener('click', () => toggle(navMenu, 'is-active'))
   Array.from(navItems).forEach((e) => e.addEventListener('click', toggleNav))
}

///// modals /////
// Get the modal
var modal = document.getElementById('zombie-directions')

// Get the button that opens the modal
var btn = document.getElementById('myBtn')

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0]

// When the user clicks the button, open the modal
btn.onclick = function () {
   modal.style.display = 'block'
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
   modal.style.display = 'none'
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
   if (event.target == modal) {
      modal.style.display = 'none'
   }
}

// CORRENTLY WORKING ON SECTION IMPORT
// Array of project data
import { currentProjects } from './assets/data/projectData.js'
// Adding the correnly working on projects the the DOM
const container = document.querySelector('#container-working-on')

currentProjects.forEach((project) => {
   const projectColumn = document.createElement('div')
   projectColumn.className = 'column'
   const projectBox = document.createElement('div')
   projectBox.className = 'box'
   const article = document.createElement('article')

   const figure = document.createElement('figure')
   figure.className = 'image project-figure'
   const image = document.createElement('img')
   image.src = project.imageUrl
   image.alt = project.imageAlt
   figure.appendChild(image)

   if (project.progressBarWidth) {
      const progressBar = document.createElement('div')
      progressBar.className = 'progress-bar'
      progressBar.style.width = project.progressBarWidth
      figure.appendChild(progressBar)
   }

   const projectTags = document.createElement('div')
   projectTags.className = 'has-text-centered'
   projectTags.textContent = project.projectTags

   const projectTitle = document.createElement('h1')
   projectTitle.className = 'project-title'
   projectTitle.textContent = project.title

   const projectDescription = document.createElement('p')
   projectDescription.innerHTML = project.projectDescription

   const projectLinksContainer = document.createElement('div')
   projectLinksContainer.className = 'project-links'

   project.links.forEach((link) => {
      const linkElement = document.createElement('a')
      linkElement.href = link.url
      linkElement.textContent = link.name
      projectLinksContainer.appendChild(linkElement)
   })

   figure.appendChild(projectTags)
   projectBox.appendChild(article)
   article.appendChild(figure)
   article.appendChild(projectTitle)
   article.appendChild(projectDescription)
   article.appendChild(projectLinksContainer)
   projectColumn.appendChild(projectBox)
   container.appendChild(projectColumn)
})
