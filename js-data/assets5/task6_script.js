(() => {
    const reloadTaskBtn = document.querySelector('.task6_reloadTask')
    const checkingTaskBtn = document.querySelector('.task6_checkingTask')
    const checkTask = document.querySelector('.task6_checkTask')
    const chek_answerTxt = document.querySelector('.task6_chek_answer')
    const dropitems = document.querySelectorAll('.task6_dropeitem')
    const answersWrapper = document.querySelector('.task6_answers')
    const task = document.querySelector('.task6_wrapper')

    const answers = [{
            id: 1,
            data: '1',
            src: 'Images_4/assets5/task6_5.png'
        },
        {
            id: 2,
            data: '1',
            src: 'Images_4/assets5/task6_6.png'

        },
        {
            id: 3,
            data: '2',
            src: 'Images_4/assets5/task6_7.png'

        },
        {
            id: 4,
            data: '2',
            src: 'Images_4/assets5/task6_8.png'


        },
        {
            id: 5,
            data: '2',
            src: 'Images_4/assets5/task6_9.png'


        },
        {
            id: 6,
            data: '3',
            src: 'Images_4/assets5/task6_10.png'


        },
        {
            id: 7,
            data: '1',
            src: 'Images_4/assets5/task6_11.png'


        },
        {
            id: 8,
            data: '3',
            src: 'Images_4/assets5/task6_12.png'


        },
        {
            id: 9,
            data: '1',
            src: 'Images_4/assets5/task6_13.png'


        },
        {
            id: 10,
            data: '3',
            src: 'Images_4/assets5/task6_14.png'


        },
        {
            id: 11,
            data: '3',
            src: 'Images_4/assets5/task6_15.png'


        },
        {
            id: 12,
            data: '4',
            src: 'Images_4/assets5/task6_16.png'


        },
        {
            id: 13,
            data: '4',
            src: 'Images_4/assets5/task6_17.png'


        },
    ]





    function fillAnswerField() {
        answers.sort(() => Math.random() - 0.5).forEach(item => {
            let answer = document.createElement('div')
            answer.classList.add('task6_answer')
            answer.style.backgroundImage = `url(${item.src})`
            answer.setAttribute('data-number', item.data)
            if (item.data === 'small') {
                answer.style.width = '50px'
                answer.style.height = '50px'
            }
            answersWrapper.append(answer)
        })
    }
    fillAnswerField()


    let draggingItem;
    let elemBelow;
    let shiftX;
    let shiftY

    function moveAt(pageX, pageY) {
        draggingItem.style.left = pageX - shiftX + "px";
        draggingItem.style.top = pageY - shiftY + "px";
    }

    task.addEventListener('mousedown', (e) => {

        if (e.target.classList.contains('task6_answer')) {
            chek_answerTxt.innerHTML = ''
            checkTask.style.background = ''

            draggingItem = e.target
            draggingItem.style.cursor = "grabbing";

            shiftX = e.clientX - draggingItem.getBoundingClientRect().left;
            shiftY = e.clientY - draggingItem.getBoundingClientRect().top;

            draggingItem.style.position = "absolute";
            draggingItem.style.zIndex = 1000;
            document.body.append(draggingItem);

            moveAt(e.pageX, e.pageY);
        }
    })

    document.addEventListener('mousemove', (e) => {
        if (draggingItem) {
            moveAt(e.pageX, e.pageY);
            draggingItem.style.cursor = "grabbing";
        }
    })

    document.addEventListener('mouseup', (e) => {
        if (draggingItem) {
            draggingItem.style.visibility = 'hidden';
            elemBelow = document.elementFromPoint(e.clientX, e.clientY);
            draggingItem.style.visibility = 'visible';
            draggingItem.style.cursor = "grab";
            elemBelow = elemBelow.closest(".task6_dropeitem")

            if (elemBelow && elemBelow.classList.contains("task6_dropeitem") && elemBelow.children.length < 5) {
                draggingItem.style.position = "static";
                draggingItem.style.zIndex = null;
                draggingItem.style.top = null;
                draggingItem.style.left = null;
                elemBelow.append(draggingItem);

            } else {
                draggingItem.style.position = "static";
                draggingItem.style.zIndex = null;
                draggingItem.style.top = null;
                draggingItem.style.left = null;
                answersWrapper.append(draggingItem);
            }
            draggingItem = null
        }
    })



    reloadTaskBtn.addEventListener('click', () => {

        dropitems.forEach(item => {
            if (item.children.length) {
                let count = item.children.length
                for (let i = 0; i < count; i++) {
                    item.childNodes[item.childNodes.length - 1].remove()
                }
            }
        })

        for (let i = (answersWrapper.childNodes.length - 1); i > 0; i--) {
            answersWrapper.childNodes[i].remove()
        }
        fillAnswerField()

        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let winVar = 0

        dropitems.forEach(item => {
            if (item.children.length) {
                [...item.children].forEach(el => {
                    if (el.getAttribute('data-number') === item.getAttribute('data-number')) {
                        winVar++
                    }
                })

            }
        })

        if (winVar === 13) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> Молодец!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> Попробуй еще!'
            checkTask.style.background = 'lightpink'
        }
    })

})()