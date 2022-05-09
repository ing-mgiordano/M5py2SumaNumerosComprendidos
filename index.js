function addNumbers(){
    const userNum1 = parseInt(document.getElementById('user-number1').value)
    const userNum2 = parseInt(document.getElementById('user-number2').value)
    console.log(userNum1, userNum2)

    if(isNaN(userNum1) || isNaN(userNum2)){
        alert('Escriba un numero')
        return
    }

    const arrayNumber = []
    let kickOff = userNum1
    let end = userNum2

    if (userNum2 >= userNum1) {
        for (let cont = kickOff; cont <= end; cont++) { 
            arrayNumber.push(kickOff)
            kickOff++
            console.log(arrayNumber)
        }
    }

    if (userNum2 < userNum1){
        for (let cont = kickOff; cont >= end; cont--) { 
            arrayNumber.push(kickOff)
            kickOff--
            console.log(arrayNumber)
        }
    }

    let sum = 0
    arrayNumber.forEach(element => {sum += element});
    console.log(`suma = ${sum}`)
    document.getElementById('result').innerHTML = `El resultado de la suma de
                                                   ${arrayNumber} es:
                                                   ${sum}` 
}