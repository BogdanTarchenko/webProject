document.addEventListener('DOMContentLoaded', () => {

    const body = document.querySelector('body')
    cx = window.innerWidth / 2,
        cy = window.innerHeight / 2



    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
    {

        ScrollSmoother.create({
            wrapper: '.wrapper',
            content: '.content',
            smooth: 3,
            effects: true
        })

        gsap.fromTo('.hero-section', {opacity: 1}, {
            opacity: 0,
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'center',
                end: '650',
                scrub: true
            }
        })

        gsap.fromTo('.text-block__main', {opacity: 1}, {
            opacity: 0,
            scrollTrigger: {
                trigger: '.hero-section',
                start: '1100',
                end: '1400',
                scrub: true
            }
        })

        gsap.fromTo('.text-block__extra', {opacity: 1}, {
            opacity: 0,
            scrollTrigger: {
                trigger: '.hero-section',
                start: '1600',
                end: '1850',
                scrub: true
            }
        })

        let itemsL = gsap.utils.toArray('.algorithms__center .algorithms__left')
        itemsL.forEach(item => {
            gsap.fromTo(item, {x: -250, opacity: 0}, {
                opacity: 1, x: 0,
                scrollTrigger: {
                    trigger: item,
                    scrub: true
                }
            })
        })

        let itemsR = gsap.utils.toArray('.algorithms__center .algorithms__right')
        itemsR.forEach(item => {
            gsap.fromTo(item, {x: 250, opacity: 0}, {
                opacity: 1, x: 0,
                scrollTrigger: {
                    trigger: item,
                    scrub: true
                }
            })
        })

        const cursor = document.getElementById('cursor'),
            follower = document.getElementById('aura'),
            links = document.getElementsByTagName('a')

        mouseX = 0, mouseY = 0, posX = 0, posY = 0

        body.addEventListener('mousemove', e => {

            clientX = e.pageX,
                clientY = e.pageY

            mouseCoords(e)
            cursor.classList.remove('hidden')
            follower.classList.remove('hidden')
        })

        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener('mouseover', () => {
                cursor.classList.add('active')
                follower.classList.add('active')
            })
        }

        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener('mouseout', () => {
                cursor.classList.remove('active')
                follower.classList.remove('active')
            })
        }

        body.addEventListener('mouseout', () => {
            cursor.classList.add('hidden')
            follower.classList.add('hidden')
        })

        function mouseCoords(e) {

            mouseX = e.clientX
            mouseY = e.clientY

        }

        gsap.to({}, .01, {

            repeat: -1,

            onRepeat: () => {

                posX += (mouseX - posX) / 5
                posY += (mouseY - posY) / 5

                gsap.set(cursor, {
                    css: {
                        left: mouseX,
                        top: mouseY
                    }
                })

                gsap.set(follower, {
                    css: {
                        left: posX - 24,
                        top: posY - 24
                    }
                })

            }

        })
    }
})