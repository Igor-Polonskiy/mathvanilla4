(() => {
    const reloadTaskBtn = document.querySelector('.task9_reloadTask')
    const checkingTaskBtn = document.querySelector('.task9_checkingTask')
    const checkTask = document.querySelector('.task9_checkTask')
    const chek_answerTxt = document.querySelector('.task9_chek_answer')
    const answersWrapper = document.querySelector('.task9_answers')
    const task9 = document.querySelector('.task9_wrapper')



    const answers = [{
            id: 1,
            data: '1',
            src: '>'
        },
        {
            id: 2,
            data: '2',
            src: '<'
        }
    ]

    answers.forEach(item => {
        let answer = document.createElement('div')
        answer.classList.add('task9_answer')
        answer.setAttribute('data-number', item.data)
        answer.innerText = item.src
        answersWrapper.append(answer)
    })

    let draggingItem;
    let elemBelow;
    let shiftX;
    let shiftY

    function moveAt(pageX, pageY) {
        draggingItem.style.left = pageX - shiftX + "px";
        draggingItem.style.top = pageY - shiftY + "px";
    }

    task9.addEventListener('mousedown', (e) => {

        if (e.target.classList.contains('task9_answer')) {
            chek_answerTxt.innerHTML = ''
            checkTask.style.background = ''

            draggingItem = document.createElement('div')
            draggingItem.classList.add('task9_answer_drop')
            draggingItem.setAttribute('data-number', e.target.getAttribute('data-number'))
            draggingItem.innerText = e.target.innerText


            //draggingItem = e.target

            draggingItem.style.cursor = "grabbing";


            draggingItem.style.position = "absolute";
            draggingItem.style.zIndex = 1000;



            document.body.append(draggingItem);
            shiftX = e.clientX - e.target.getBoundingClientRect().left;
            shiftY = e.clientY - e.target.getBoundingClientRect().top;
            moveAt(e.pageX, e.pageY);

        }
        if (e.target.classList.contains('task9_answer_drop')) {
            chek_answerTxt.innerHTML = ''
            checkTask.style.background = ''
            draggingItem = e.target

            draggingItem.style.cursor = "grabbing";


            draggingItem.style.position = "absolute";
            draggingItem.style.zIndex = 1000;




            shiftX = e.clientX - draggingItem.getBoundingClientRect().left;
            shiftY = e.clientY - draggingItem.getBoundingClientRect().top;
            moveAt(e.pageX, e.pageY);
            document.body.append(draggingItem);
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
            elemBelow = elemBelow.closest(".task9_dropeitem")

            if (elemBelow && elemBelow.classList.contains("task9_dropeitem")) {
                draggingItem.style.position = "static";
                draggingItem.style.zIndex = null;
                draggingItem.style.top = null;
                draggingItem.style.left = null;
                elemBelow.append(draggingItem);

            } else {
                /* draggingItem.style.position = "static";
                 draggingItem.style.zIndex = null;
                 draggingItem.style.top = null;
                 draggingItem.style.left = null;
                 answersWrapper.append(draggingItem);*/
                draggingItem.remove()
            }
            draggingItem = null
        }
    })

    const dropeitems = document.querySelectorAll('.task9_dropeitem')

    reloadTaskBtn.addEventListener('click', () => {

        dropeitems.forEach(item => {
            item.innerHTML = ''
        })

        chek_answerTxt.innerHTML = ''
        checkTask.style.background = ''
    })

    checkingTaskBtn.addEventListener('click', () => {
        let winVar = 0

        dropeitems.forEach(item => {
            let count = 0
            if (item.children.length) {
                [...item.children].forEach((i) => {

                    if (i.getAttribute('data-number') === item.getAttribute('data-number')) {
                        count++
                    }


                })
                if (count === +item.getAttribute('data-count')) {
                    winVar++
                }
                console.log(count)
            }
        })
        console.log(winVar)

        if (winVar === 9) {
            chek_answerTxt.innerHTML = '<span>&#128077;</span> ??????????????!'
            checkTask.style.background = 'lightgreen'
        } else {
            chek_answerTxt.innerHTML = '<span>&#10060;</span> ???????????????? ??????!'
            checkTask.style.background = 'lightpink'
        }
    })

})()