//variables
let iconTheme = document.getElementById('icon_theme')
let inputContainer = document.querySelector('.input_container')
let newTask = document.getElementById('new_task')
let checkbox = document.querySelectorAll('.checkbox')
let textTask = document.getElementById("text_task")
let tasksContainer = document.querySelector(".tasks_container")
let taskAloneContainer = document.querySelectorAll('.task')
let iconCross = document.querySelectorAll('.cross')
let info = document.querySelector('.info')
let itensNumbers = document.getElementById('itens_numbers')
let clearComplete = document.getElementById('clear_complete')
let all = document.getElementById('all')
let active = document.getElementById('active')
let completed = document.getElementById('completed')
let types_mobile = document.querySelector('.types_mobile')
let all_mobile = document.getElementById('all_mobile')
let active_mobile = document.getElementById('active_mobile')
let completed_mobile = document.getElementById('completed_mobile')
let drag_drop = document.querySelector('.drag_drop')
let taskCounter = 0

//task submission
newTask.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        let inputValue = newTask.value

        if (newTask.value != "") {
            saveTask(inputValue)
        }
    }
});

//task creation
const saveTask = (text) => {
    const task = document.createElement('div')
    task.classList.add('task')

    if (iconTheme.getAttribute('src') === 'images/icon-sun.svg') {
        task.style.backgroundColor = 'var(--very_dark_desaturated_blue_dark)'
        task.style.color = 'var(--very_light_gray_light)'
        task.style.borderBottom = '1px solid var(--very_darkness_grayish_blue_dark)'
    } else {
        task.style.backgroundColor = 'var(--very_light_gray_light)'
        task.style.color = 'var(--very_dark_grayish_blue_light)'
        task.style.borderBottom = '1px solid var(--light_grayish_blue_light)'
    }

    const checkText = document.createElement('div')
    checkText.classList.add('check_text')
    task.appendChild(checkText)

    const checkTask = document.createElement('input')
    checkTask.type = 'checkbox'
    checkTask.id = 'checkbox_new_task'
    checkTask.className = 'checkbox'
    checkText.appendChild(checkTask)

    const check = document.createElement('img')
    check.setAttribute('src', 'images/icon-check.svg')
    check.style.display = 'none'
    check.style.position = 'absolute'
    check.style.marginLeft = '0.40rem'

    checkTask.addEventListener('click', () => {
        if (iconTheme.getAttribute('src') == 'images/icon-sun.svg') {
            if (check.style.display == 'none') {
                check.style.display = 'flex'
                taskText.style.textDecoration = 'line-through'
                taskText.style.color = 'var(--dark_grayish_blue_dark)'
                taskText.style.fontSize = '16px'
                taskCounter = taskCounter - 1
                itensNumbers.innerHTML = taskCounter + ' itens left'
            } else {
                check.style.display = 'none'
                taskText.style.textDecoration = 'none'
                taskText.style.color = 'var(--very_light_gray_light)'
                taskText.style.fontSize = '18px'
                taskCounter = taskCounter + 1
                itensNumbers.innerHTML = taskCounter + ' itens left'
            }
        } else {
            if (check.style.display == 'none') {
                check.style.display = 'flex'
                taskText.style.textDecoration = 'line-through'
                taskText.style.color = 'var(--dark_grayish_blue_dark)'
                taskText.style.fontSize = '16px'
                taskCounter = taskCounter - 1
                itensNumbers.innerHTML = taskCounter + ' itens left'
            } else {
                check.style.display = 'none'
                taskText.style.textDecoration = 'none'
                taskText.style.color = 'var(--dark_grayish_blue_dark)'
                taskText.style.fontSize = '18px'
                taskCounter = taskCounter + 1
                itensNumbers.innerHTML = taskCounter + ' itens left'
            }
        }
    })

    checkText.appendChild(check)

    const taskText = document.createElement('p')
    taskText.innerText = text
    checkText.appendChild(taskText)

    const crossImg = document.createElement('img')
    crossImg.classList.add('cross')
    crossImg.setAttribute('src', 'images/icon-cross.svg')
    task.appendChild(crossImg)
    crossImg.addEventListener('click', () => {
        task.remove()
        if (taskText.style.textDecoration != 'line-through') {
            taskCounter = taskCounter - 1
            itensNumbers.innerHTML = taskCounter + ' itens left'
        }

        if (taskCounter == 0) {
            info.style.display = 'none'
            drag_drop.style.display = 'none'

            if (document.body.clientWidth < 840) {
                types_mobile.style.display = 'none'
            }
        } else {
            info.style.display = 'flex'
            drag_drop.style.display = 'flex'

            if (document.body.clientWidth < 840) {
                types_mobile.style.display = 'flex'
            }
        }
    })

    tasksContainer.appendChild(task)
    newTask.value = ''

    taskCounter = taskCounter + 1
    itensNumbers.innerHTML = taskCounter + ' itens left'

    taskText.style.transition = '.1s all ease'

    if (tasksContainer.clientHeight <= '1px') {
        info.style.display = 'none'
        drag_drop.style.display = 'none'

        if (document.body.clientWidth < 840) {
            types_mobile.style.display = 'none'
        }
    } else {
        info.style.display = 'flex'
        drag_drop.style.display = 'flex'

        if (document.body.clientWidth < 840) {
            types_mobile.style.display = 'flex'
        }
    }

    all.addEventListener('click', () => {
        if (active.style.color != 'var(--bright_blue)' || completed.style.color != 'var(--bright_blue)') {
            all.style.color = 'var(--bright_blue)'
            active.style.color = 'var(--dark_grayish_blue_dark)'
            completed.style.color = 'var(--dark_grayish_blue_dark)'
            task.style.display = 'flex'
        }
    })

    active.addEventListener('click', () => {
        if (all.style.color != 'var(--bright_blue)' || completed.style.color != 'var(--bright_blue)') {
            all.style.color = 'var(--dark_grayish_blue_dark)'
            active.style.color = 'var(--bright_blue)'
            completed.style.color = 'var(--dark_grayish_blue_dark)'

            if (taskText.style.textDecoration != 'line-through') {
                task.style.display = 'flex'
            }
            if (taskText.style.textDecoration == 'line-through') {
                task.style.display = 'none'
            }
        }
    })

    completed.addEventListener('click', () => {
        if (all.style.color != 'var(--bright_blue)' || active.style.color != 'var(--bright_blue)') {
            all.style.color = 'var(--dark_grayish_blue_dark)'
            active.style.color = 'var(--dark_grayish_blue_dark)'
            completed.style.color = 'var(--bright_blue)'

            if (taskText.style.textDecoration == 'line-through') {
                task.style.display = 'flex'
            }
            if (taskText.style.textDecoration != 'line-through') {
                task.style.display = 'none'
            }
        }
    })

    all_mobile.addEventListener('click', () => {
        if (active_mobile.style.color != 'var(--bright_blue)' || completed_mobile.style.color !=
            'var(--bright_blue)') {
            all_mobile.style.color = 'var(--bright_blue)'
            active_mobile.style.color = 'var(--dark_grayish_blue_dark)'
            completed_mobile.style.color = 'var(--dark_grayish_blue_dark)'
            task.style.display = 'flex'
        }
    })

    active_mobile.addEventListener('click', () => {
        if (all_mobile.style.color != 'var(--bright_blue)' || completed_mobile.style.color !=
            'var(--bright_blue)') {
            all_mobile.style.color = 'var(--dark_grayish_blue_dark)'
            active_mobile.style.color = 'var(--bright_blue)'
            completed_mobile.style.color = 'var(--dark_grayish_blue_dark)'

            if (taskText.style.textDecoration != 'line-through') {
                task.style.display = 'flex'
            }
            if (taskText.style.textDecoration == 'line-through') {
                task.style.display = 'none'
            }
        }
    })

    completed_mobile.addEventListener('click', () => {
        if (all_mobile.style.color != 'var(--bright_blue)' || active_mobile.style.color != 'var(--bright_blue)') {
            all_mobile.style.color = 'var(--dark_grayish_blue_dark)'
            active_mobile.style.color = 'var(--dark_grayish_blue_dark)'
            completed_mobile.style.color = 'var(--bright_blue)'

            if (taskText.style.textDecoration == 'line-through') {
                task.style.display = 'flex'
            }
            if (taskText.style.textDecoration != 'line-through') {
                task.style.display = 'none'
            }
        }
    })

    clearComplete.addEventListener('click', () => {
        if (taskText.style.textDecoration == 'line-through') {
            task.remove()

            if (taskCounter == 0) {
                info.style.display = 'none'
                drag_drop.style.display = 'none'

                if (document.body.clientWidth < 840) {
                    types_mobile.style.display = 'none'
                }
            } else {
                info.style.display = 'flex'
                drag_drop.style.display = 'flex'

                if (document.body.clientWidth < 840) {
                    types_mobile.style.display = 'flex'
                }
            }
        }
    })

    iconTheme.addEventListener('click', () => {
        if (iconTheme.getAttribute('src') === 'images/icon-sun.svg') {
            task.style.backgroundColor = 'var(--very_dark_desaturated_blue_dark)'
            task.style.color = 'var(--very_light_gray_light)'
            task.style.borderBottom = '1px solid var(--very_darkness_grayish_blue_dark)'
        } else {
            task.style.backgroundColor = 'var(--very_light_gray_light)'
            task.style.color = 'var(--very_dark_grayish_blue_light)'
            task.style.borderBottom = '1px solid var(--light_grayish_blue_light)'
        }
    })
}

//theme change
iconTheme.addEventListener('click', () => {
    if (iconTheme.getAttribute('src') == 'images/icon-sun.svg') {
        iconTheme.setAttribute('src', 'images/icon-moon.svg')
        document.body.style.backgroundImage = 'url("images/bg-desktop-light.jpg")'
        document.body.style.backgroundColor = 'var(--very_light_grayish_blue_light)'
        inputContainer.style.backgroundColor = 'var(--very_light_gray_light)'
        newTask.style.color = 'var(--very_dark_grayish_blue_light)'
        info.style.backgroundColor = 'var(--very_light_gray_light)'
        types_mobile.style.backgroundColor = 'var(--very_light_gray_light)'

        if (document.body.clientWidth < 840) {
            document.body.style.backgroundImage = 'url("images/bg-mobile-light.jpg")'
        }

        for (let index = 0; index < taskAloneContainer.length; index++) {
            taskAloneContainer[index].style.backgroundColor = 'var(--very_light_gray_light)'
            taskAloneContainer[index].style.color = 'var(--very_dark_grayish_blue_light)'
        }
    } else {
        iconTheme.setAttribute('src', 'images/icon-sun.svg')
        document.body.style.backgroundImage = 'url("images/bg-desktop-dark.jpg")'
        document.body.style.backgroundColor = 'var(--very_dark_blue_dark)'
        inputContainer.style.backgroundColor = 'var(--very_dark_desaturated_blue_dark)'
        newTask.style.color = 'var(--very_light_gray_light)'
        info.style.backgroundColor = 'var(--very_dark_desaturated_blue_dark)'
        types_mobile.style.backgroundColor = 'var(--very_dark_desaturated_blue_dark)'

        if (document.body.clientWidth < 840) {
            document.body.style.backgroundImage = 'url("images/bg-mobile-dark.jpg")'
        }

        for (let index = 0; index < taskAloneContainer.length; index++) {
            taskAloneContainer[index].style.backgroundColor = 'var(--very_dark_desaturated_blue_dark)'
            taskAloneContainer[index].style.color = 'var(--very_light_gray_light)'
        }
    }
})

new Sortable(tasksContainer, {
    animation: 300
})