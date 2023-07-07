// Array of project data
import { currentProjects, GAProjects } from './assets/data/projectData.js'
import { renderCards } from './assets/JavaScript/projectCardRenderer.js'
window.onload = () => {
   // CORRENTLY WORKING ON SECTION IMPORT

   renderCards(currentProjects, '#container-working-on')
   renderCards(GAProjects, '#container-GA-projects')

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
}
