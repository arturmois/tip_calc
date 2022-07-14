
function calculate_tip(event) {
    event.preventDefault()
    let bill = document.getElementById('bill').value
    let service_qual = document.getElementById('service-qual').value
    let people = document.getElementById('people').value

    if(bill == '' | service_qual == 0) {
        alert('Por favor, preencha os valores')
        return
    }

    if(people == '' | people <= 1){
        people = 1
        document.getElementById('each').style.display = 'none'
    }

    else {
        document.getElementById('each').style.display = 'block'
    }

    let total = (bill * service_qual) / people
    total = total.toFixed(2)

    document.getElementById('tip').innerHTML = total
    document.getElementById('total-tip').style.display = 'block'

}

document.getElementById('total-tip').style.display = 'none'
document.getElementById('each').style.display = 'none'

document.getElementById('tips-form').addEventListener('submit', calculate_tip)