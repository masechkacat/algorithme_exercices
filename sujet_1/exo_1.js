// Cette fonction recherche une paire de nombres dans un tableau dont la somme est égale à k.
export function findPairWithSum1(arr, k) {
    // Parcours du tableau avec la première boucle
    for(let i = 0; i < arr.length; i++) {
        // Parcours du tableau avec la deuxième boucle, en commençant à l'indice suivant de la première boucle
        for(let j = i + 1; j < arr.length; j++) {
            // Vérifie si la somme des deux nombres est égale à k
            if(arr[i] + arr[j] === k) {
                // Si c'est le cas, retourne true
                return true;
            }
        }
    }
    // Si aucune paire n'est trouvée, retourne false
    return false;
}

/**
 * Résoudre le sujet 1 avec une complexité algorithmique de O(n²).
 * 
 * @param {number[]} arr - Le tableau de nombres entiers relatifs.
 * @param {number} k - Le nombre à rechercher comme résultat de la somme.
 * @returns {boolean} - true si deux nombres de la liste ont k comme résultat de leur somme, sinon false.
 */
