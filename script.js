const tipButtons = document.getElementsByClassName('percent-click')
const percent5 = tipButtons[0]
const percent10 = tipButtons[1]
const percent15 = tipButtons[2]
const percent25 = tipButtons[3]
const percent50 = tipButtons[4]
const percentCustom = document.getElementById('custom-button')


const billAmount = document.getElementById('price-input')
const peopleCount = document.getElementById('person-count')

const tipAmount = document.getElementById('tip-total')
const totalPerPerson = document.getElementById('price-total')

const resetButton = document.getElementsByClassName('reset-button')[0]

const reset = () => {
    tipAmount.innerText = '$0.00'
    totalPerPerson.innerText = '$0.00'
    billAmount.value = NaN
    peopleCount.value = NaN
    percentCustom.value = NaN
}

const calculatePercent5 = () => {
    if (billAmount.value > 0 && peopleCount.value > 0) {
        let calcTipAmount = Math.floor((5/100) * billAmount.value)
        tipAmount.innerText = calcTipAmount
        let calcTotalPerPerson = Math.floor((billAmount.value / peopleCount.value) + calcTipAmount)
        totalPerPerson.innerText = `$${calcTotalPerPerson}`
    }
}

const calculatePercent10 = () => {
    if (billAmount.value > 0 && peopleCount.value > 0) {
        let calcTipAmount = Math.floor((5/100) * billAmount.value)
        tipAmount.innerText = calcTipAmount
        let calcTotalPerPerson = Math.floor((billAmount.value / peopleCount.value) + calcTipAmount)
        totalPerPerson.innerText = `$${calcTotalPerPerson}`
    }
}

const calculatePercent15 = () => {
    if (billAmount.value > 0 && peopleCount.value > 0) {
        let calcTipAmount = Math.floor((5/100) * billAmount.value)
        tipAmount.innerText = calcTipAmount
        let calcTotalPerPerson = Math.floor((billAmount.value / peopleCount.value) + calcTipAmount)
        totalPerPerson.innerText = `$${calcTotalPerPerson}`
    }
}

const calculatePercent25 = () => {
    if (billAmount.value > 0 && peopleCount.value > 0) {
        let calcTipAmount = Math.floor((5/100) * billAmount.value)
        tipAmount.innerText = calcTipAmount
        let calcTotalPerPerson = Math.floor((billAmount.value / peopleCount.value) + calcTipAmount)
        totalPerPerson.innerText = `$${calcTotalPerPerson}`
    }
}

const calculatePercent50 = () => {
    if (billAmount.value > 0 && peopleCount.value > 0) {
        let calcTipAmount = Math.floor((5/100) * billAmount.value)
        tipAmount.innerText = calcTipAmount
        let calcTotalPerPerson = Math.floor((billAmount.value / peopleCount.value) + calcTipAmount)
        totalPerPerson.innerText = `$${calcTotalPerPerson}`
    }
}

const calculatePercentCustom = (event) => {
    if (event.key === 'Enter') {
        if (billAmount.value > 0 && peopleCount.value > 0 && percentCustom.value > 0) {
            let calcTipAmount = Math.floor((Number(percentCustom.value)/100) * billAmount.value)
            tipAmount.innerText = calcTipAmount
            let calcTotalPerPerson = Math.floor((billAmount.value / peopleCount.value) + calcTipAmount)
            totalPerPerson.innerText = `$${calcTotalPerPerson}`
        }
    }
}


percent5.addEventListener('click', calculatePercent5)
percent10.addEventListener('click', calculatePercent10)
percent15.addEventListener('click', calculatePercent15)
percent25.addEventListener('click', calculatePercent25)
percent50.addEventListener('click', calculatePercent50)
percentCustom.addEventListener('keypress', calculatePercentCustom)

resetButton.addEventListener('click', reset)