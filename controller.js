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
const projects = [
   {
      title: 'Team Project',
      imageUrl: './assets/img/React-Native-Thumbnail.gif',
      imageAlt: 'Cover image',
      progressBarWidth: '',
      projectTags: 'React Native | SQL | Supabase',
      projectDescription: `<h3>Goals:</h3>
      <ul>
        <li>To learn programming collaboratively with others.</li>
        <li>To challenge myself by learning something new like React Native, building upon my existing experience with React. Additionally, I aim to expand my knowledge in SQL and utilize tools like Superbase to further enhance my skills.</li>
        <li>To develop leadership skills by leading a group, aligning with the theme of how I select the technologies to work with.</li>
      </ul>
      
      <p>Currently, I am collaborating with a UX graduate from General Assembly on the design. This collaboration is primarily focused on the UX aspects of the project, providing valuable insights and expertise in that area.</p>
      `,
      links: [
         {
            url: 'https://github.com/EfrainAD/100-Days-of-JavaScript',
            name: 'Github Link',
         },
      ],
   },
   {
      title: 'App Project',
      imageUrl: './assets/img/job-tracker-thumbnail.jpeg',
      imageAlt: 'Cover image',
      progressBarWidth: '',
      projectTags: 'React | nongodb | express',
      projectDescription: `<h3>Goals:</h3>
      <ul>
         <li>To consolidate what I have learned from tutorials and apply it in practical projects.</li>
         <li>To practice and reinforce my existing knowledge and skills.</li>
         <li>To fine-tune my abilities and address any areas that require improvement.</li>
    </ul>
    <p>Currently implementing recruiter to the api</p>
    `,
      links: [
         {
            url: 'https://github.com/EfrainAD/Job-Tracker-API',
            name: 'Github Link to the corrent work on the API',
         },
      ],
   },
   {
      title: 'Working on Certification',
      imageUrl: './assets/img/cert-mongodb-thumbnail.png',
      imageAlt: 'Image',
      progressBarWidth: '',
      projectTags: 'HTML | CSS/SASS | JavaScript',
      projectDescription: `Split between this and AWS one, but thought I go for this one first. It's a certification from MongoDB`,
      links: [
         {
            url: 'https://learn.mongodb.com/pages/certification-program',
            name: 'learn.mongoDB.com',
         },
      ],
   },
   {
      title: 'Online Class',
      imageUrl: './assets/img/Web-Design-With-HTML-CSS-and-SASS.jpeg',
      imageAlt: 'Image',
      progressBarWidth: '80%',
      projectTags: 'HTML | CSS/SASS | JavaScript',
      projectDescription: `In this tutorial I am working on some frontend. I don't as much experince in this area. And want to finish this off before moving the next bigger online class. I am currently working on a challenage in the tutorial right now.`,
      links: [
         {
            url: 'https://www.udemy.com/course/build-website-with-html-css-sass-beginner-to-advanced/',
            name: 'Class Link',
         },
         {
            url: 'https://github.com/EfrainAD/Restaurant_Website',
            name: 'Github Link - Restaurant Website',
         },
         {
            url: 'https://github.com/EfrainAD/Agency_Website',
            name: 'Github Link - Agency Website',
         },
      ],
   },
]

// Adding the correnly working on projects the the DOM
const container = document.querySelector('#container-working-on')

projects.forEach((project) => {
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
