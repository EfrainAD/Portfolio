export const renderCards = (projects, location) => {
   const container = document.querySelector(location)

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
}
