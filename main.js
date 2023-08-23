const inputText = document.querySelector('.task-input')
const ulList = document.querySelector('ul')
const addBtn = document.querySelector('.add-button')
const taskNumber = document.querySelector('.task-number')
const errorTxt = document.querySelector('.error-txt')
const editWindow = document.querySelector('.edit-window')
const editInput = document.querySelector('.edit-input')
const acceptEditBtn = document.querySelector('.accept-btn-edit')
const cancelEditBtn = document.querySelector('.cancel-btn-edit')
let taskLi
let editedPreviousTask
let number = 0

const addTask = e => {
    e.preventDefault()
    if(inputText.value !== ''){
        const input = inputText.value
        taskLi = document.createElement('li')
        taskLi.setAttribute('id', `${number++}`)
        taskLi.innerHTML = input + '<div>' + '<button class="complete-btn option-btn"><i class="fa-solid fa-check"></i></button>' + '<button class="edit-btn option-btn">EDIT</button>' + '<button class="delete-btn option-btn"><i class="fa-solid fa-trash"></i></button>' + '</div>'
        ulList.appendChild(taskLi)
        taskNumber.textContent = document.querySelectorAll('li').length
        inputText.value = ''
        errorTxt.style.visibility = 'hidden'

    }else {
        errorTxt.style.visibility = 'visible'
        errorTxt.textContent = 'Please write some tasks'
    }


}

const optionButtons = e => {
    if(e.target.classList.value !== ''){
        if(e.target.closest('button').classList.contains('complete-btn')){
            e.target.closest('li').style.textDecoration = 'line-through'
            e.target.closest('li').style.fontStyle = 'oblique'
            e.target.closest('li').style.backgroundColor = 'grey'
        }else if(e.target.closest('button').classList.contains('edit-btn')){
            editTask(e)
        }else if(e.target.closest('button').classList.contains('delete-btn')){
            e.target.closest('li').remove()
            taskNumber.textContent = document.querySelectorAll('li').length
        }

    }else return
}

const editTask = e => {
    editWindow.style.display = 'flex'
    const previousTaskId = e.target.closest('li').id
    editedPreviousTask = document.getElementById(previousTaskId)
    editInput.value = editedPreviousTask.firstChild.textContent
}

const changeTask = () => {
    editedPreviousTask.firstChild.textContent = editInput.value
    editWindow.style.display = 'none'
    editInput.value = ''
}

const cancelEdit = () => {
    editInput.value = ''
    editWindow.style.display = 'none'
}

const enter = e => {
    if(e.keyCode === 13){
        addTask(e)
    }
}

const enterEdit = e => {
    if(e.keyCode ===13) {
        changeTask(e)
    }
}


addBtn.addEventListener('click', addTask)
ulList.addEventListener('click', optionButtons)
cancelEditBtn.addEventListener('click', cancelEdit)
acceptEditBtn.addEventListener('click', changeTask)
inputText.addEventListener('keydown', enter)
editInput.addEventListener('keydown', enterEdit)

