function calculerSurface(largeur, longueur){
    return largeur * longueur
}

function rectangle (largeur, longueur){
    this.largeur = largeur
    this.longueur = longueur
}

const result = calculerSurface(5, 8)
console.log(`la surface du rectangle esr de ${result}`)