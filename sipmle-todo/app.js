const form = document.querySelector('form');
const main = document.querySelector('main');

function renderProjectHandler(inputTitle, inputInfo) {
  const newProjectEl = document.createElement('div');
  const clonedTemplateContent = document.querySelector('template').content.cloneNode(true);
  newProjectEl.append(clonedTemplateContent)
  const moreInfoBtn = newProjectEl.querySelector('.more-info');
  const removeButton = newProjectEl.querySelector('#delete');
  const newInfoEl = document.createElement('p');
  newProjectEl.dataset.moreInfo = inputInfo;
  newInfoEl.textContent = newProjectEl.dataset.moreInfo;
  newProjectEl.querySelector('h4').textContent = inputTitle;
  moreInfoBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const top = newProjectEl.offsetTop + newProjectEl.clientHeight + 1;
    const left = newProjectEl.offsetLeft + newProjectEl.clientLeft + 1;
    newInfoEl.style.position ='absolute';
    newInfoEl.offsetTop = top;
    newInfoEl.offsetLeft = left;
    newInfoEl.classList.remove('none-visible');
    newProjectEl.append(newInfoEl)
    newInfoEl.addEventListener('click', (event) => {
      event.preventDefault()
      newInfoEl.classList.add('none-visible')
    })
  })
  removeButton.addEventListener('click',(event)=>{
    event.preventDefault();
    newProjectEl.remove()
  });
  return newProjectEl;
}
renderProjectHandler(2, 3)
function submitFormHandler(event) {
  event.preventDefault();
  const inputTitle = document.getElementById('title').value;
  const inputInfo = document.getElementById('info').value;
  const newEl = renderProjectHandler(inputTitle, inputInfo);
  main.append(newEl)
}
form.addEventListener('submit', submitFormHandler)