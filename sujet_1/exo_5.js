/**
 * Résout le sujet 1 en ne faisant qu'un seul passage sur la liste.
 *
 * @param {number[]} arr - La liste de nombres entiers relatifs.
 * @param {number} k - Le nombre cible à rechercher comme résultat de la somme de deux nombres de la liste.
 * @returns {boolean} - Retourne true si une paire de nombres est trouvée avec une somme égale à k, sinon retourne false.
 */
export function findPairWithSum5(arr, k) {
    // Crée un ensemble (Set) pour stocker les nombres déjà rencontrés.
    let seenNumbers = new Set();

    // Parcours du tableau avec la boucle for
    for(let i = 0; i < arr.length; i++) {
        // Vérifie si la différence entre k et l'élément actuel du tableau est déjà présente dans le Set
        if(seenNumbers.has(k - arr[i])) {
            // Si c'est le cas, une paire de nombres a été trouvée, donc retourne true
            return true;
        }
        // Ajoute l'élément actuel du tableau à l'ensemble seenNumbers
        seenNumbers.add(arr[i]);
    }
    // Si aucune paire n'est trouvée après avoir parcouru toute la liste, retourne false
    return false;
}
