var val = prompt("Veuillez saisir un nombre SVP :")

if (isNaN(val)) {
    val = prompt("Veuillez saisir un nombre SVP :")
}else{
    if (val%2==0){
        console.log(`${val} est un nombre pair`)
    }else{
       console.log(`${val} n'est pas un nombre pair`)
    }
}