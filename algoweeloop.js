function rotation(numbers, k){
    let cpt=0;
    while (cpt < k) {
        // j'enleve le dernier element et je le retourne (numbers est modifie)
        let lastElement = numbers.pop()
        // je rajoute l'element au debut de la chaine
        numbers.unshift(lastElement)
        cpt++
    }
    return numbers
}

// methode bourrin

function rotation2(numbers, k){
    for(let cpt= k; cpt > 0;  cpt--){
        let last;
        last= numbers[numbers.length-1]
        for(let cpt2= numbers.length-1; cpt2 > 0; cpt2--){
            numbers[cpt2] =numbers[cpt2-1]
        }
        // ne pas oublier de mettre le dernier element au debut
        numbers[0]= last

    }
    return numbers
}