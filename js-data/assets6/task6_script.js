(() => {
    const audio = document.querySelectorAll('.task6_audio')
    const task6_prev = document.querySelector('.task6_prev')
    const task6_next = document.querySelector('.task6_next')
    const task6_slide = document.querySelector('.task6_img')
    const slide_caption = document.querySelector('.task6_slide_caption')
    const numberOfimgs = document.querySelector('.task6_count2')
    const count = document.querySelector('.task6_count1')
    const task6_begin = document.querySelector('.task6_begin')

    let currentSlide = 1
    let sound = false

    const pictures = [{
            id: 1,
            src: 'Images_4/assets6/task6_1.png',
            text: 'Вычтем из зелёного отрезка красный.'
        },
        {
            id: 2,
            src: 'Images_4/assets6/task6_2.png',
            text: 'С помощью циркуля измеряем зелёный отрезок.'
        },
        {
            id: 3,
            src: 'Images_4/assets6/task6_3.png',
            text: `На луче откладываем этот отрезок и делаем заметку.`
        },
        {
            id: 4,
            src: 'Images_4/assets6/task6_4.png',
            text: 'Измеряем красный отрезок.'
        },
        {
            id: 5,
            src: 'Images_4/assets6/task6_5.png',
            text: 'Ножку циркуля ставим на начало первого отрезка и отмеряем второй отрезок, делаем отметку.'
        },
        {
            id: 6,
            src: 'Images_4/assets6/task6_6.png',
            text: 'Скобка показывает отрезок, получившийся в результате вычитания.'
        }
    ]

    task6_begin.addEventListener('click', (e) => {
        if (e.target.classList.contains('task6_start1')) {
            sound = true
            audio[currentSlide - 1].play()
            task6_begin.style.display = 'none'
        } else if (e.target.classList.contains('task6_start2')) {
            task6_begin.style.display = 'none'
        }



    })

    count.innerText = currentSlide
    numberOfimgs.innerText = pictures.length
    task6_prev.style.opacity = 0

    slide_caption.innerText = pictures[0].text
    let element = document.createElement('img')
    element.src = pictures[0].src
    task6_slide.append(element)

    task6_prev.addEventListener('click', () => {
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
            task6_next.style.opacity = 1
        }
        if (currentSlide === 1) {
            task6_prev.style.opacity = 0
        }


    })

    task6_next.addEventListener('click', () => {
        if (currentSlide < pictures.length) {
            task6_prev.style.opacity = 1
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
            task6_next.style.opacity = 0
        }

    })
})()