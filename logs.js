const logs = document.getElementById('logs')

for (const [ date, list ] of Object.entries(window.$contents)) {
  const h2 = document.createElement('h2')
  h2.innerText = date
  h2.classList.add('subtitle')
  h2.classList.add('is-6')
  logs.append(h2)
  const ul = document.createElement('ul')
  for (const text of list) {
    const li = document.createElement('li')
    li.innerHTML = text
    ul.append(li)
  }
  logs.append(ul)
}
