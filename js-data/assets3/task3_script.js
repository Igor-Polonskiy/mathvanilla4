(() => {
    const reloadTaskBtn = document.querySelector('.task3_reloadTask')
    const checkingTaskBtn = document.querySelector('.task3_checkingTask')
    const checkTask = document.querySelector('.task3_checkTask')
    const chek_answerTxt = document.querySelector('.task3_chek_answer')
    const dropitems = document.querySelectorAll('.task3_dropeitem')
    const answersWrapper = document.querySelector('.task3_answers')
    const task = document.querySelector('.task3_wrapper')

    const answers = [{
            id: 1,
            data: '1',
            src: 'Images_4/assets3/task3_1.png'
        },
        {
            id: 2,
            data: '2',
            src: 'Images_4/assets3/task3_2.png'

        }
    ]





    function fillAnswerField() {
        answers.sort(() => Math.random() - 0.5).forEach(item => {
            let answer = document.createElement('div')
            answer.classList.add('task3_answer')
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

        if (e.target.classList.contains('task3_answer')) {
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
            elemBelow = elemBelow.closest(".task3_dropeitem")

            if (elemBelow && elemBelow.classList.contains("task3_dropeitem") && elemBelow.children.length < 3) {
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

        if (winVar === 2) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> ??????????????!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> ???????????????? ??????!'
            checkTask.style.background = 'lightpink'
        }
    })

})()