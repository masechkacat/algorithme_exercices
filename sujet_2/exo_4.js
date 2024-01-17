/**
 * Résout le sujet 2 en déterminant combien de bâtiments ont au
 * moins un appartement avec une vue sur le soleil couchant.
 *
 * @param {number[]} heights - La liste des hauteurs (en étages) des immeubles de la rue, d'est en ouest.
 * @returns {number} - Le nombre de bâtiments ayant au moins un appartement avec une vue à l'ouest.
 */
export function countBuildingsWithView4(heights) {
    let n = heights.length;
    let maxHeightsFromRight = new Array(n);
    let maxHeight = 0;
    let count = 0;

    // Premier passage: Remplit le tableau maxHeightsFromRight
    //avec les hauteurs maximales à droite de chaque bâtiment
    for (let i = n - 1; i >= 0; i--) {
        maxHeightsFromRight[i] = maxHeight;
        maxHeight = Math.max(maxHeight, heights[i]);
    }

    // Deuxième passage: Compte les bâtiments avec vue sur le soleil couchant
    for (let i = 0; i < n; i++) {
        if (heights[i] > maxHeightsFromRight[i]) {
            count++;
        }
    }

    return count;
}

