(() => {
    const audio = document.querySelectorAll('.task4_audio')
    const task4_prev = document.querySelector('.task4_prev')
    const task4_next = document.querySelector('.task4_next')
    const task4_slide = document.querySelector('.task4_img')
    const slide_caption = document.querySelector('.task4_slide_caption')
    const numberOfimgs = document.querySelector('.task4_count2')
    const count = document.querySelector('.task4_count1')
    const task4_begin = document.querySelector('.task4_begin')

    let currentSlide = 1
    let sound = false

    const pictures = [{
            id: 1,
            src: 'Images_4/assets6/task4_1.png',
            text: 'Представь, что у тебя есть две полоски бумаги. Что нужно сделать, чтобы их сложить?'
        },
        {
            id: 2,
            src: 'Images_4/assets6/task4_2.png',
            text: 'Чтобы сложить две полоски, нужно приложить концы этих полосок друг к другу.'
        },
        {
            id: 3,
            src: 'Images_4/assets6/task4_3.png',
            text: `Похожим способом можно складывать отрезки. Сложим два отрезка: красный и зелёный.`
        },
        {
            id: 4,
            src: 'Images_4/assets6/task4_4.png',
            text: 'Чертим луч.'
        },
        {
            id: 5,
            src: 'Images_4/assets6/task4_5.png',
            text: 'С помощью циркуля измеряем первый отрезок.'
        },
        {
            id: 6,
            src: 'Images_4/assets6/task4_6.png',
            text: 'На луче откладываем этот отрезок и делаем заметку.'
        },
        {
            id: 7,
            src: 'Images_4/assets6/task4_7.png',
            text: 'Также измеряем второй отрезок.'
        },
        {
            id: 8,
            src: 'Images_4/assets6/task4_8.png',
            text: 'Ножку циркуля ставим на отметку — конец первого отрезка и отмеряем второй отрезок, делаем отметку.'
        },
        {
            id: 9,
            src: 'Images_4/assets6/task4_9.png',
            text: 'Покажем синим цветом получившийся при сложении отрезок.'
        }
    ]

    task4_begin.addEventListener('click', (e) => {
        if (e.target.classList.contains('task4_start1')) {
            sound = true
            audio[currentSlide - 1].play()
            task4_begin.style.display = 'none'
        } else if (e.target.classList.contains('task4_start2')) {
            task4_begin.style.display = 'none'
        }



    })

    count.innerText = currentSlide
    numberOfimgs.innerText = pictures.length
    task4_prev.style.opacity = 0

    slide_caption.innerText = pictures[0].text
    let element = document.createElement('img')
    element.src = pictures[0].src
    task4_slide.append(element)

    task4_prev.addEventListener('click', () => {
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
            task4_next.style.opacity = 1
        }
        if (currentSlide === 1) {
            task4_prev.style.opacity = 0
        }


    })

    task4_next.addEventListener('click', () => {
        if (currentSlide < pictures.length) {
            task4_prev.style.opacity = 1
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
            task4_next.style.opacity = 0
        }

    })
})()