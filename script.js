const head = document.querySelector(`.header`)
const detailShow = document.querySelector(`.detail`)
const detaShow = document.querySelector(`.name`)
const date = document.querySelector(`.ccc`)
const closebtn = document.querySelector(`.aaa`)
const mainNav = document.querySelector(`.nav__link`)
const firstImg = document.querySelector(`.first-image`)
const toScrol = document.querySelector(`.btn--scroll-to`)
const section = document.querySelector(`#section--1`)
const scrll = document.querySelector(`.firstlink`)
const section1 = document.querySelector(`#section--1`)
const scrlll = document.querySelector(`.seclink`)
const sectio2 = document.querySelector(`#section--2`)
const scrllll = document.querySelector(`.thilink`)
const section3 = document.querySelector(`#section--3`)
const nav = document.querySelector(`.nav`)
const nav__link = document.querySelector(`.nav__link`)
const nav__links = document.querySelector(`.nav__links`)
const logo = document.querySelector(`.logo`)
const last = document.querySelector(`.footer`)
const modelShow = document.querySelector(`.btn--show-modal`)
const model = document.querySelector(`.modal`)
const mode = document.querySelector(`.operation__tab`)
const active = document.querySelector(`.operation__tab--active`)
const btnclosed=document.querySelector(`.btn--close-modal`)
//const model = document.querySelector(`.modal`)
const btnhide = document.querySelector(`.btnhide`)
const cross=document.querySelector(`.cross`)
btnhide.addEventListener(`click`,function(){
    nav__links.classList.remove(`hide`)
})
cross.addEventListener(`click`,function(){
    nav__links.classList.add(`hide`)
})
nav__links.addEventListener(`click`,function(){
    nav__links.classList.add(`hide`)
})
//detailShow.addEventListener(`click`, function () {
//   detaShow.classList.remove(`ccc`)

//})
btnclosed.addEventListener(`click`,function(){
    model.classList.add(`hidden`)
})
const messege = document.createElement(`div`);
messege.classList.add(`cookie-message`)
messege.innerHTML = `we used cookies for better
 foctinality.<button
 class=btnn>got it</button>`
sectio2.after(messege)
section3.after(messege)

document.querySelector(`.btnn`).addEventListener(
    `click`, function () {
        messege.parentElement.removeChild(messege)
    }
)
//closebtn.addEventListener(`click`, function () {
// detaShow.classList.add(`ccc`)
//})
messege.style.height = Number.parseFloat(getComputedStyle
    (messege).height, 10) + 30 + `px`

messege.style.backgroundColor = `#222`

//console.log(logo.getAttribute(`alt`))
//console.log(logo.getAttribute(`design`))
//console.log(mainNav.href)
//console.log(firstImg.src)

//toScrol.addEventListener(`click`, function (e) {
//    section.scrollIntoView({ behavior: "smooth" })
//})
//scrll.addEventListener(`click`, function (e) {
//    e.preventDefault()
//    section.scrollIntoView({ behavior: "smooth" })
//})
//scrlll.addEventListener(`click`, function (e) {
//    e.preventDefault()
//    sectio2.scrollIntoView({ behavior: "smooth" })
//scrllll.addEventListener(`click`, function (e) {
////   e.preventDefault()
//   section3.scrollIntoView({ behavior: "smooth" })
//})


document.querySelector(`.nav__links`).addEventListener(
    `click`, function (e) {
        e.preventDefault();
        if (e.target.classList.contains(`nav__link`)) {
            const hammad = e.target.getAttribute(`href`)
            document.querySelector(hammad).scrollIntoView
                (
                    { behavior: "smooth" }

                )
        }
    })
const h1 = document.querySelector(`h1`);
//console.log(h1.querySelectorAll('.highlight'));
//console.log(h1.children);
//h1.firstElemetChild.style.color = 'blue';
//h1.lastElemetChild.style.color = 'red';

//h1.closest(`.header`).style.backgroundColor = 'blue'

const tabs = document.querySelectorAll(`.operations__tab`)
const tabsContainer = document.querySelector
    (`.operations__tab-container`)
const tabsContent = document.querySelectorAll
    (`.operation__content`)

tabsContainer.addEventListener(`click`, function (e) {
    const click = e.target.closest(`mode`);
    console.log(click)
    if (!click) return;


    tabs.forEach(t => t.classList.remove
        (`active`));
    tabsContent.forEach(c => c.classList.remove
        (`active`));

    click.classList.add(`.`)
    console.log(click.dataset.tab)

    document.querySelector(`.active
        {click.dataset.tab}`).classList.add('operations__content--active')
})

const handOver = function (e, opacity) {

    if (e.target.classList.contains(`nav__link`)) {
        const link = e.target;
        const sub = link.closest(`.nav`).
            querySelectorAll(`.nav__link`);

        sub.forEach(el => {
            if (el !== link) el.style.opacity = this;
        });
        logo.style.opacity = this

    }
};
nav.addEventListener(`mouseover`, handOver.bind(0.5))
nav.addEventListener(`mouseout`, handOver.bind(1))

//const scrol = section.getBoundingClientRect();
//console.log(scrol)
//window.addEventListener(`scroll`, function () {
//   if (window.scrollY > scrol.top) nav.classList.add
//        (`sticky`);
//   else nav.classList.remove(`sticky`)
//})
const sss = nav.getBoundingClientRect().height
//console.log(sss)


const header = document.querySelector(`.header`)


const stickyNav = function (entries) {
    const [entry] = entries

    if (!entry.isIntersecting) nav.classList.add(`sticky`)
    else nav.classList.remove(`sticky`)
}
const observer = new IntersectionObserver(
    stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${sss}px`,
}
)
observer.observe(header)


const allSecrion = document.querySelectorAll(`.section`)


const reveal = function (entries, observer) {
    const [entry] = entries;
    if (entry.isIntersecting) {
        entry.target.classList.remove(`section__hidden`)
    }
}
const revealSec = new IntersectionObserver(
    reveal, {
    root: null,
    threshold: 0.1,
}
)
allSecrion.forEach(function (section) {
    revealSec.observe(section);
    section.classList.add(`section__hidden`)
})

const imgTarget = document.querySelectorAll
    (`img[data-src]`);


// const loadImg = function (entries, observer) {
//     const [entry] = entries
//     if (!entry.isIntersecting) return
//     entry.target.src = entry.target.dataset.src;
//     entry.target / addEventListener(`load`, function () {
//         entry.target.classList.remove(`lazy-img`)
//     });
//     observer.unobserve(entry.target)
// }
// const imgObserver = new IntersectionObserver(loadImg, {
//     root: null,
//     threshold: 0,
//     rootMargin: `-100px`,
// })

// imgTarget.forEach(img => imgObserver.observe(img))


const slides = document.querySelectorAll(`.slide`)
const conAll = document.querySelector(`.slider`)
conAll.style.overflow = `hidden`
slides.forEach((s, i) => (s.style.transform =
    `translateX(${100 * i}%)`))

const left = document.querySelector(`.slider__btn--left`)
const right = document.querySelector(`.slider__btn--right`)

const hhh = slides.length
//console.log(hhh)
let cur = 0;

const nextleft = function (slide) {
    slides.forEach((s, i) => (s.style.transform =
        `translateX(${100 * (i - slide)}%)`))
}
const now = function () {
    if (cur === hhh - 1) {
        cur = 0
    }
    else { cur++ }
    nextleft(cur)
}
const then = function () {
    if (cur == 0) {
        cur = hhh - 1
    }
    else (cur--)
    nextleft(cur)
}

left.addEventListener(`click`, now)
right.addEventListener(`click`, then)


modelShow.addEventListener(`click`, function () {
    model.classList.remove(`hidden`)
})




const loadImg = function (entries, observer) {
        const [entry] = entries
          entry.target.classList.remove(`lazy-img`)
     //   observer.unobserve(entry.target)
    }
    const imgObserver = new IntersectionObserver(loadImg, {
        root: null,
        threshold: 0.2,
        rootMargin: `-100px`,
    })
    
    imgTarget.forEach(img => imgObserver.observe(img))

    const border=document.querySelectorAll(`.features__image`)
   
    