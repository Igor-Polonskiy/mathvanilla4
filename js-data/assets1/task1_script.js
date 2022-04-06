(() => {
    const audio = document.querySelectorAll('.task1_audio')
    const task1_prev = document.querySelector('.task1_prev')
    const task1_next = document.querySelector('.task1_next')
    const task1_slide = document.querySelector('.task1_img')
    const slide_caption = document.querySelector('.task1_slide_caption')
    const numberOfimgs = document.querySelector('.task1_count2')
    const count = document.querySelector('.task1_count1')
    const task1_begin = document.querySelector('.task1_begin')

    let currentSlide = 1
    let sound = false

    const pictures = [{
            id: 1,
            src: 'Images_4/assets1/task1_1.png',
            text: 'Какую геометрическую фигуру начертили первоклассники?'
        },
        {
            id: 2,
            src: 'Images_4/assets1/task1_2.png',
            text: 'Это точка.'
        },
        {
            id: 3,
            src: 'Images_4/assets1/task1_3.png',
            text: 'А как можно назвать эти линии?'
        },
        {
            id: 4,
            src: 'Images_4/assets1/task1_4.png',
            text: 'Это кривая линия.'
        },
        {
            id: 5,
            src: 'Images_4/assets1/task1_5.png',
            text: 'Это прямая линия. Прямую можно продлить до бесконечности, то есть у неё нет ни начала, ни конца.'
        },
        {
            id: 6,
            src: 'Images_4/assets1/task1_6.png',
            text: 'Эта фигура называется луч. Луч — это часть прямой, которая имеет начало и не имеет конца.'
        },
        {
            id: 7,
            src: 'Images_4/assets1/task1_7.png',
            text: 'Наш луч чем-то похож на солнечный. Мы видим, где он начинаются, но не видим где заканчивается.'
        },
        {
            id: 8,
            src: 'Images_4/assets1/task1_8.png',
            text: 'Представим, что прямую обрезали с двух сторон. Получился отрезок. У отрезка есть начало и конец.'
        },
        {
            id: 9,
            src: 'Images_4/assets1/task1_9.png',
            text: 'У отрезка есть начало и конец.'
        },
        {
            id: 10,
            src: 'Images_4/assets1/task1_10.png',
            text: 'Подумай, какой чертёжный инструмент поможет тебя начертить луч, отрезок и прямую.'
        },
        {
            id: 11,
            src: 'Images_4/assets1/task1_11.png',
            text: 'Это линейка.'
        },
        {
            id: 12,
            src: 'Images_4/assets1/task1_12.png',
            text: 'Посмотри, как правильно держать линейку.'
        },
        {
            id: 13,
            src: 'Images_4/assets1/task1_13.png',
            text: 'Линии бывают вертикальные, горизонтальные, наклонные.'
        },
        {
            id: 14,
            src: 'Images_4/assets1/task1_14.png',
            text: 'Линии могут пересекаться. Точкой обозначают место пересечения линий.'
        }
    ]

    task1_begin.addEventListener('click', (e) => {
        if (e.target.classList.contains('task1_start1')) {
            sound = true
            audio[currentSlide - 1].play()
            task1_begin.style.display = 'none'
        } else if (e.target.classList.contains('task1_start2')) {
            task1_begin.style.display = 'none'
        }



    })

    count.innerText = currentSlide
    numberOfimgs.innerText = pictures.length
    task1_prev.style.opacity = 0

    slide_caption.innerText = pictures[0].text
    let element = document.createElement('img')
    element.src = pictures[0].src
    task1_slide.append(element)

    task1_prev.addEventListener('click', () => {
        if (currentSlide > 1) {
            currentSlide--
            if (sound) {
                audio[currentSlide].pause()
                audio[currentSlide].currentTime = 0
                audio[currentSlide - 1].play()
            }
            slide_caption.innerText = pictures[currentSlide - 1].text
            element.src = pictures[currentSlide - 1].src
            count.innerText = currentSlide
            task1_next.style.opacity = 1
        }
        if (currentSlide === 1) {
            task1_prev.style.opacity = 0
        }


    })

    task1_next.addEventListener('click', () => {
        if (currentSlide < pictures.length) {
            task1_prev.style.opacity = 1
            currentSlide++
            if (sound) {
                audio[currentSlide - 2].pause()
                audio[currentSlide - 2].currentTime = 0
                audio[currentSlide - 1].play()
            }
            slide_caption.innerText = pictures[currentSlide - 1].text
            element.src = pictures[currentSlide - 1].src
            count.innerText = currentSlide
        }
        if (currentSlide === pictures.length) {
            task1_next.style.opacity = 0
        }

    })
})()