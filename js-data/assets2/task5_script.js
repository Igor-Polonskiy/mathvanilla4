(() => {
    const reloadTaskBtn = document.querySelector('.task5_reloadTask')
    const checkingTaskBtn = document.querySelector('.task5_checkingTask')
    const checkTask = document.querySelector('.task5_checkTask')
    const chek_answerTxt = document.querySelector('.task5_chek_answer')
    const input1 = document.querySelector('#task5_1')
    const input2 = document.querySelector('#task5_2')
    const input3 = document.querySelector('#task5_3')
    const input4 = document.querySelector('#task5_4')
    const input5 = document.querySelector('#task5_5')


    const play1 = document.querySelector('.task5_play1')
    const play2 = document.querySelector('.task5_play2')
    const play3 = document.querySelector('.task5_play3')
    const play4 = document.querySelector('.task5_play4')
    const play5 = document.querySelector('.task5_play5')

    const audio = document.querySelectorAll('.task5_audio')




    let answer1 = 0
    let answer2 = 0
    let answer3 = 0
    let answer4 = 0
    let answer5 = 0



    play1.addEventListener('click', () => {
        audio[0].play()
    })
    play2.addEventListener('click', () => {
        audio[1].play()
    })
    play3.addEventListener('click', () => {
        audio[2].play()
    })
    play4.addEventListener('click', () => {
        audio[3].play()
    })
    play5.addEventListener('click', () => {
        audio[4].play()
    })





    input1.addEventListener('change', (e) => {
        answer1 = e.target.value
    })
    input2.addEventListener('change', (e) => {
        answer2 = e.target.value
    })
    input3.addEventListener('change', (e) => {
        answer3 = e.target.value
    })
    input4.addEventListener('change', (e) => {
        answer4 = e.target.value
    })
    input5.addEventListener('change', (e) => {
        answer5 = e.target.value
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
        if (answer1 === '4' &&
            answer2 === '5' &&
            answer3 === '3' &&
            answer4 === '2' &&
            answer5 === '1') {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()