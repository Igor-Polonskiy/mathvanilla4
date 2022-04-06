(() => {
    const answers = document.querySelector('.task9_answers')
    const reloadTaskBtn = document.querySelector('.task9_reloadTask')
    const checkingTaskBtn = document.querySelector('.task9_checkingTask')
    const checkTask = document.querySelector('.task9_checkTask')
    const chek_answerTxt = document.querySelector('.task9_chek_answer')

    const winVarTask9 = '4'

    let answersItems = null
    let finishAnswer = null

    const answersData = [{
            id: 1,
            src: 'Images_4/assets2/task9_1.png',

        },
        {
            id: 2,
            src: 'Images_4/assets2/task9_2.png',
        },
        {
            id: 3,
            src: 'Images_4/assets2/task9_3.png',
        },
        {
            id: 4,
            src: 'Images_4/assets2/task9_4.png',
        }
    ]


    answers.addEventListener('click', (e) => {
        if (e.target.classList.contains('task9_answer')) {
            answersItems.forEach(item => {
                if (finishAnswer) {
                    finishAnswer.classList.remove('task9_answer_active')
                    finishAnswer.classList.remove('task9_green')
                    finishAnswer.classList.remove('task9_red')
                }
                item.classList.remove('task9_answer_active')
            })
            e.target.classList.add('task9_answer_active')
            finishAnswer = e.target
            chek_answerTxt.innerHTML = ''
            checkTask.style.background = ''
        }
    })

    reloadTaskBtn.addEventListener('click', () => {
        answers.innerHTML = ''
        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
        insertAnswers(answersData)
        finishAnswer = null
    })

    checkingTaskBtn.addEventListener('click', () => {
        finishAnswer.classList.remove('task9_answer_active')
        if (finishAnswer.getAttribute('data-id') === winVarTask9) {
            finishAnswer.classList.add('task9_green')
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            if (finishAnswer) {
                finishAnswer.classList.add('task9_red')
            }
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

    function shuffleArr(arr) {
        return arr.sort(() => Math.random() - 0.5)
    }

    function insertAnswers(arr) {
        shuffleArr(arr)
        arr.forEach(item => {
            let e = document.createElement('div')
            e.style.backgroundImage = `url(${item.src})`
            e.setAttribute('data-id', item.id)
            e.classList.add('task9_answer')
            answers.append(e)
        })
        answersItems = answers.querySelectorAll('.task9_answer')
    }

    insertAnswers(answersData)
})();