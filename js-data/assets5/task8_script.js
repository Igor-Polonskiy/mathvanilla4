(() => {
    const reloadTaskBtn = document.querySelector('.task8_reloadTask')
    const checkingTaskBtn = document.querySelector('.task8_checkingTask')
    const checkTask = document.querySelector('.task8_checkTask')
    const chek_answerTxt = document.querySelector('.task8_chek_answer')
    const input1 = document.querySelector('#task8_1')
    const input2 = document.querySelector('#task8_2')


    let answer1 = 0
    let answer2 = 0



    input1.addEventListener('change', (e) => {
        answer1 = e.target.value
    })

    input2.addEventListener('change', (e) => {
        answer2 = e.target.value
    })



    reloadTaskBtn.addEventListener('click', () => {
        input1.value = ''
        input2.value = ''
        answer1 = 0
        answer2 = 0
        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        if (answer1 === '4' && answer2 === '3') {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()