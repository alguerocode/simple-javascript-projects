let draggedElement;
document.addEventListener('dragstart',event =>{
  draggedElement = event.target
  console.log(draggedElement)
})
document.addEventListener('dragover',event =>{
  event.preventDefault()
})
document.addEventListener('drop',event =>{
  event.target.closest('section').append(draggedElement)
  console.log(event)
})