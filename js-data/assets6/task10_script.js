(() => {
    const reloadTaskBtn = document.querySelector('.task10_reloadTask')
    const checkingTaskBtn = document.querySelector('.task10_checkingTask')
    const checkTask = document.querySelector('.task10_checkTask')
    const chek_answerTxt = document.querySelector('.task10_chek_answer')
    const input1 = document.querySelector('#task10_1')
    const input2 = document.querySelector('#task10_2')
    const input3 = document.querySelector('#task10_3')


    let answer1 = 0
    let answer2 = 0
    let answer3 = 0




    input1.addEventListener('change', (e) => {
        answer1 = e.target.value.toUpperCase()
    })

    input2.addEventListener('change', (e) => {
        answer2 = e.target.value.toUpperCase()
    })
    input3.addEventListener('change', (e) => {
        answer3 = e.target.value.toUpperCase()
    })




    reloadTaskBtn.addEventListener('click', () => {
        input1.value = ''
        input2.value = ''
        input3.value = ''

        answer1 = 0
        answer2 = 0
        answer3 = 0

        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        if (answer1 === 'АЛ' && answer2 === 'АН' && answer3 === 'АЛ') {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()