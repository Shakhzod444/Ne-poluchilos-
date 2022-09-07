let form = document.forms.log
let inps = form.querySelectorAll('input')
let succes = document.querySelector('.txt')
let error = document.querySelector('.txt2')
let btn = document.querySelector('button')






form.onsubmit = (event) => {
    event.preventDefault()

    let count = 0

    inps.forEach(inp => {
        if (inp.value.length === 0 ) {
            count++
            
        }
    })
    error.innerHTML = count
    succes.innerHTML = 12 - count
    if (count > 0) {
        console.log('Запишите данные!');
    } else {
        submit()
    }
}

function submit() {
    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}

