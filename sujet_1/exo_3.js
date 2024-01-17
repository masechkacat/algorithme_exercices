/**
 * Résoudre le sujet 1 avec une complexité algorithmique de O(n).
 * 
 * @param {number[]} arr - Le tableau de nombres entiers relatifs.
 * @param {number} k - Le nombre à rechercher comme résultat de la somme.
 * @returns {boolean} - true si deux nombres de la liste ont k comme
 * résultat de leur somme, sinon false.
 */
export function findPairWithSum3(arr, k) {
    // Crée un ensemble pour stocker les éléments uniques du tableau.
    let elements = new Set();

    // Premier passage - ajout des éléments dans l'ensemble.
    for (let i = 0; i < arr.length; i++) {
        elements.add(arr[i]);
    }

    // Deuxième passage - recherche de la paire dans l'ensemble.
    for (let i = 0; i < arr.length; i++) {
        // Vérifie si l'élément complémentaire (k - arr[i]) est présent
        //dans l'ensemble et n'est pas égal à l'élément actuel.
        if (elements.has(k - arr[i]) && k - arr[i] !== arr[i]) {
            return true;
        }
    }

    // Si aucune paire n'est trouvée, retourne false.
    return false;
}
