const multiplierParDeux = (nombre) => {
    return nombre*2
}

const result = multiplierParDeux(2) * 4
console.log(`Le résultat de la multiplication est de ${result}`)

const scopeClosureFunction = (nombre) => {
    let result = nombre*2

    function multiplyByAChoiceNunbre(){
        result = result*4
        console.log(`Le résultat de la multiplication est de ${result}`)
    }

    return multiplyByAChoiceNunbre

}

scopeClosureFunction()