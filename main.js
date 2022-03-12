const linksSocialMedia = {
  github: 'vinicius6433',
  youtube: 'vinicius6433',
  facebook: 'vinicius.moreira.1650',
  twitter: 'vinicius64333',
  instagram: 'vinicius64333'
}
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url).then(response => {
    response.json().then(data => {
      ;(userName.textContent = data.name),
        (userBio.textContent = data.bio),
        (userLink.href = data.html_url),
        (userImage.src = data.avatar_url),
        (userLogin.textContent = data.login)
    })
  })
}

getGitHubProfileInfos()
