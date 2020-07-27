const showCalc = document.querySelector(".showCalc")
const showTask = document.querySelector(".showTask")

const containerCalc = document.querySelector(".divCalc")
const containerTasks = document.querySelector(".divTask")

function pagination() {
    if(containerCalc.style.display == 'none'){
        containerTasks.style.display = 'none'
        containerCalc.style.display = 'block'
    }else{
        containerTasks.style.display = 'block'
        containerCalc.style.display = 'none'
    }
}

showCalc.addEventListener('click', pagination)
showTask.addEventListener('click', pagination)