const submitbtn = document.querySelector('.submit')
const resetbtn = document.querySelector('.reset')
const result = document.querySelector('.result')

const prevGuess = document.querySelector('#prevguess')
const prevNumb = document.querySelector('#prevnumb')

const chanceLeft = document.querySelector('#chance')

chanceLeft.textContent = 10

let chance = 10

submitbtn.addEventListener('click', function() {
    if (chance > 0) {
        const inpVal = parseInt(document.querySelector('#number').value)
    
        if(isNaN(inpVal) || inpVal < 1 || inpVal > 10) {
            result.textContent = 'Please enter a valid number'
        } else {
            const randomNumber = Math.floor(Math.random()* 10 + 1)
    
            if (inpVal == randomNumber) {
                result.textContent = 'Correct Guess, you win!'
                submitbtn.disabled = true
            } else {
                result.textContent = 'Wrong guess!'
            }

            prevGuess.append(inpVal+' ')
            prevNumb.append(randomNumber+' ')
            // reducing the chance
            chance--;
            chanceLeft.textContent = chance
            if(chance == 0) {
                result.textContent = 'Game Over!'
            }
        }
    }
})

resetbtn.addEventListener('click', function() {
    chanceLeft.textContent = 10
    prevNumb.textContent = ''
    prevGuess.textContent = ''
    result.textContent = ''
    chance = 10
})