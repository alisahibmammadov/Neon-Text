const btn = document.querySelector('.btn')

const span = document.querySelector('.year-span')
const p = document.querySelector('.year-p')

btn.addEventListener('click', ()=>{
    span.style.top = '-100%'
    p.style.top = '-76%'
})