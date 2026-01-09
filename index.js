const button1= document.querySelector('#pro')
const button2= document.querySelector('#ultimate')
const button3= document.querySelector('#ma-toggle')
const pro_price= document.querySelector('#pro-price')
const ultimate_price= document.querySelector('#ultimate-price')
const dark_mode= document.querySelector('#dark-mode')
const body= document.querySelector('#body')
let isAnnual= false

button1.addEventListener('click', function() {
    alert("Success! You are now a Pro Member.")
}

)

button2.addEventListener('click', function() {
    alert("Success! You are now an Ultimate Member.")
}

)

button3.addEventListener('click', function(){
    if (isAnnual) {
        pro_price.textContent='$19.99/month'
        ultimate_price.textContent='$49.99/month'
        isAnnual= false
        button3.textContent = 'Switch to Annual';
    }
    else {
        pro_price.textContent='$149.99/year'
        ultimate_price.textContent='$449.99/year'
        isAnnual= true
        button3.textContent = 'Switch to Monthly';
    }
}

)
dark_mode.addEventListener('click', function(){
    body.classList.toggle('dark_mode')
    if (body.classList.contains('dark_mode')){
        dark_mode.textContent='☀️ Light Mode'
    }
    else {
        dark_mode.textContent='🌙 Dark Mode'
    }
}

)