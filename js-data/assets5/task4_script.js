(() => {
    const reloadTaskBtn = document.querySelector('.task4_reloadTask')
    const checkingTaskBtn = document.querySelector('.task4_checkingTask')
    const checkTask = document.querySelector('.task4_checkTask')
    const chek_answerTxt = document.querySelector('.task4_chek_answer')
    const imgsWrapper = document.querySelector('.task4_imgwrapper')

    let pictures = [{
            id: 1,
            src: 'Images_4/assets5/task4_1.png',
            data: false
        },
        {
            id: 2,
            src: 'Images_4/assets5/task4_2.png',
            data: false
        },
        {
            id: 3,
            src: 'Images_4/assets5/task4_3.png',
            data: true
        },
        {
            id: 4,
            src: 'Images_4/assets5/task4_4.png',
            data: true
        },
        {
            id: 5,
            src: 'Images_4/assets5/task4_5.png',
            data: true
        }
    ]


    let count = 0

    function fillField() {
        pictures.sort(() => Math.random() - 0.5).forEach(item => {
            let answer = document.createElement('div')
            answer.classList.add('task4_img')
            answer.style.backgroundImage = `url(${item.src})`
            answer.setAttribute('data-number', item.data)
            imgsWrapper.append(answer)

        })
    }

    fillField()

    imgsWrapper.addEventListener('click', (e) => {
        if (e.target.classList.contains('task4_img')) {
            e.target.classList.toggle('task4_active')
        }
    })

    reloadTaskBtn.addEventListener('click', () => {
        imgsWrapper.innerHTML = ''
        fillField()

        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let imgs = document.querySelectorAll('.task4_active')
        let winVar = 0
        imgs.forEach(item => {
            if (item.getAttribute('data-number') === 'true') {
                winVar++
            } else winVar--
        })

        if (winVar === 3) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()