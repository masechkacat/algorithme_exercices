/**
 * Résout le sujet 2 avec une complexité algorithmique de O(n²).
 * Cette fonction compte combien de bâtiments dans la liste
 * ont au moins un appartement avec une vue à l'ouest.
 *
 * @param {number[]} heights - La liste des hauteurs (en étages) des bâtiments.
 * @returns {number} - Le nombre de bâtiments avec une vue à l'ouest.
 */
export function countBuildingsWithView2(heights) {
    let count = 0;

    // Parcours du tableau avec la boucle for
    for(let i = 0; i < heights.length; i++) {
        let hasView = true;

        // Parcours du tableau avec une deuxième boucle for, en commençant
        //à l'indice suivant de la première boucle
        for(let j = i + 1; j < heights.length; j++) {
            // Vérifie si un bâtiment plus haut ou de même hauteur est trouvé à l'est
            if(heights[j] >= heights[i]) {
                hasView = false;
                break;
            }
        }

        // Si aucun bâtiment plus haut n'est trouvé, le bâtiment a une vue à l'ouest
        if(hasView) count++;
    }

    // Retourne le nombre total de bâtiments avec une vue à l'ouest
    return count;
}
