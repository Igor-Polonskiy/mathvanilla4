(() => {
    const answers = document.querySelector('.task11_answers')
    const reloadTaskBtn = document.querySelector('.task11_reloadTask')
    const checkingTaskBtn = document.querySelector('.task11_checkingTask')
    const checkTask = document.querySelector('.task11_checkTask')
    const chek_answerTxt = document.querySelector('.task11_chek_answer')

    const winVarTask11 = '1'

    let answersItems = null
    let finishAnswer = null

    const answersData = [{
            id: 1,
            src: '3 + 2',

        },
        {
            id: 2,
            src: '1 + 4 ',
        },
        {
            id: 3,
            src: '3 + 1 ',
        },
        {
            id: 4,
            src: '2 + 2 ',
        }
    ]

    insertAnswers(answersData)

    answers.addEventListener('click', (e) => {
        if (e.target.classList.contains('task11_answer')) {
            answersItems.forEach(item => {
                if (finishAnswer) {
                    finishAnswer.classList.remove('task11_answer_active')
                    finishAnswer.classList.remove('task11_green')
                    finishAnswer.classList.remove('task11_red')
                }
                item.classList.remove('task11_answer_active')
            })
            e.target.classList.add('task11_answer_active')
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
        if (finishAnswer) {
            finishAnswer.classList.remove('task11_answer_active')

            if (finishAnswer.getAttribute('data-id') === winVarTask11) {
                finishAnswer.classList.add('task11_green')
                chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
                checkTask.style.background = 'lightgreen'
            } else {
                finishAnswer.classList.add('task11_red')
                chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
                checkTask.style.background = 'lightpink'
            }
        }
    })

    function shuffleArr(arr) {
        return arr.sort(() => Math.random() - 0.5)
    }

    function insertAnswers(arr) {
        shuffleArr(arr)
        arr.forEach(item => {
            let e = document.createElement('div')
            e.innerText = item.src
            e.setAttribute('data-id', item.id)
            e.classList.add('task11_answer')
            answers.append(e)
        })
        answersItems = answers.querySelectorAll('.task11_answer')
    }

})();