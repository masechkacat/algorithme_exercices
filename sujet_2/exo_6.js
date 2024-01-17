/**
 * Résout le sujet 2 en ne faisant qu'un seul passage sur la liste.
 *
 * @param {number[]} heights - La liste des hauteurs (en étages) des immeubles de la rue, d'est en ouest.
 * @returns {number} - Retourne le nombre de bâtiments ayant au moins un appartement avec une vue sur le soleil couchant.
 */
export function countBuildingsWithView6(heights) {
    let count = 0; // Initialise le compteur à 0 pour compter les bâtiments avec vue à l'ouest.
    let maxHeight = 0; // Initialise la hauteur maximale à 0.

    // Parcours de la liste en commençant par l'ouest (dernier bâtiment).
    for(let i = heights.length - 1; i >= 0; i--) {
        // Vérifie si la hauteur du bâtiment actuel est supérieure à la hauteur maximale.
        if(heights[i] > maxHeight) {
            // Si c'est le cas, met à jour la hauteur maximale et incrémente le compteur.
            maxHeight = heights[i];
            count++;
        }
    }
    
    // Retourne le nombre de bâtiments ayant une vue à l'ouest.
    return count;
}
