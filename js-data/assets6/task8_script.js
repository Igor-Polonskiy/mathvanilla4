(() => {
    const reloadTaskBtn = document.querySelector('.task8_reloadTask')
    const checkingTaskBtn = document.querySelector('.task8_checkingTask')
    const checkTask = document.querySelector('.task8_checkTask')
    const chek_answerTxt = document.querySelector('.task8_chek_answer')
    const input1 = document.querySelector('#task8_1')
    const input2 = document.querySelector('#task8_2')
    const input3 = document.querySelector('#task8_3')
    const input4 = document.querySelector('#task8_4')
    const input5 = document.querySelector('#task8_5')


    let answer1 = 0
    let answer2 = 0
    let answer3 = 0
    let answer4 = 0
    let answer5 = 0



    input1.addEventListener('change', (e) => {
        answer1 = e.target.value.toUpperCase()
    })

    input2.addEventListener('change', (e) => {
        answer2 = e.target.value.toUpperCase()
    })
    input3.addEventListener('change', (e) => {
        answer3 = e.target.value.toUpperCase()
    })
    input4.addEventListener('change', (e) => {
        answer4 = e.target.value.toUpperCase()
    })
    input5.addEventListener('change', (e) => {
        answer5 = e.target.value.toUpperCase()
    })



    reloadTaskBtn.addEventListener('click', () => {
        input1.value = ''
        input2.value = ''
        input3.value = ''
        input4.value = ''
        input5.value = ''
        answer1 = 0
        answer2 = 0
        answer3 = 0
        answer4 = 0
        answer5 = 0
        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        if (answer1 === 'АО' && answer2 === 'НУ' && answer3 === 'АИ' && answer4 === 'ОИ' && answer5 === 'ИУ') {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()