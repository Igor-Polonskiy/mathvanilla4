(() => {
    const reloadTaskBtn = document.querySelector('.task14_reloadTask')
    const checkingTaskBtn = document.querySelector('.task14_checkingTask')
    const checkTask = document.querySelector('.task14_checkTask')
    const chek_answerTxt = document.querySelector('.task14_chek_answer')
    const cells = document.querySelectorAll('.task14_input')

    let answer = []
    let winVar = ['Р', "А", "Б", "В", "О", "Д", "И", "Н", "Л", "О", "М", "Е", "Н", "Ь", "Ш", "Е", "Ш", "Е"]

    cells.forEach((item, index) => {
        item.addEventListener('change', (e) => {
            answer[index] = e.target.value.toUpperCase()
        })
    })

    reloadTaskBtn.addEventListener('click', () => {
        cells.forEach(item => {
            item.value = ''
        })

        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let check = 0
        answer.forEach((item, index) => {
            if (item === winVar[index]) {
                check++
            }
        })
        console.log(answer, check)
        if (check === 18) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()