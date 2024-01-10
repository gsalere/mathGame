const verify = document.getElementById('verify')
const right = document.getElementById('right')
const wrong = document.getElementById('wrong')
const start = document.getElementById('start')
const n1 = document.getElementById('n1')
const n2= document.getElementById('n2')
const verifyInput = document.getElementById('verifyInput')

verifyInput.addEventListener('keydown', function(ev){
    ev.preventDefault()
    if(ev.key === "Enter"){
        sum()
    } else{
        verifyInput.value += ev.key
    }
})


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRandomInt(0, 10))

start.addEventListener('click', function(){
    if(verifyInput.disabled = false){
        verifyInput.disabled = true
    } else{
        verifyInput.disabled = false
    generate()
    start.setAttribute('disabled', false)
    verifyInput.focus()
    }
})

function generate(){
    n1.value = getRandomInt(0,10)
    n2.value = getRandomInt(0,10)
}
right.value = 0

verify.addEventListener('click', function(){
  sum()
})
function sum(){
    const calc = eval(n1.value * n2.value)
    const result = verifyInput.value

    if(calc == result){
        right.value = Number(right.value) + 1
    } else{
        wrong.value = Number(wrong.value) + 1
    }
    check()
    generate()
    verifyInput.value = ''
    verifyInput.focus() 
}

function check(){
    if(right.value == 5){
        alert('Você ganhou!')
        start.setAttribute('disabled', true)
        n1.value = 0
        n2.value = 0
        right.value = 0
        wrong.value = 0
        verifyInput.disabled = true
    }
    if(wrong.value == 5){
        alert("Você perdeu!\nTente Novamente!")
        start.disabled = false
        n1.value = 0
        n2.value = 0
        right.value = 0
        wrong.value = 0
        verifyInput.disabled = true
    }

}