(() => {
    const reloadTaskBtn = document.querySelector('.task11_reloadTask')
    const checkingTaskBtn = document.querySelector('.task11_checkingTask')
    const checkTask = document.querySelector('.task11_checkTask')
    const chek_answerTxt = document.querySelector('.task11_chek_answer')
    const imgsWrapper = document.querySelector('.task11_imgwrapper')

    let pictures = [{
            id: 1,
            src: '3 + 2 = 5',
            data: true
        },
        {
            id: 2,
            src: '3 − 1 = 2',
            data: true
        },
        {
            id: 3,
            src: '5 − 2 = 2',
            data: false
        },
        {
            id: 4,
            src: '5 − 3 = 1',
            data: false
        },
        {
            id: 5,
            src: '3 < 1',
            data: true
        }
    ]


    let count = 0

    function fillField() {
        pictures.sort(() => Math.random() - 0.5).forEach(item => {
            let answer = document.createElement('div')
            answer.classList.add('task11_img')
            answer.innerText = item.src
            answer.setAttribute('data-number', item.data)
            imgsWrapper.append(answer)

        })
    }

    fillField()

    imgsWrapper.addEventListener('click', (e) => {
        if (e.target.classList.contains('task11_img')) {
            e.target.classList.toggle('task11_active')
        }
    })

    reloadTaskBtn.addEventListener('click', () => {
        imgsWrapper.innerHTML = ''
        fillField()

        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let imgs = document.querySelectorAll('.task11_active')
        let winVar = 0
        imgs.forEach(item => {
            if (item.getAttribute('data-number') === 'false') {
                winVar++
            } else winVar--
        })

        if (winVar === 2) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()