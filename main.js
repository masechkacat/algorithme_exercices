// import { findPairWithSum1 } from "./sujet_1/exo_1.js";
// import { findPairWithSum3 } from "./sujet_1/exo_3.js";
// import { findPairWithSum5 } from "./sujet_1/exo_5.js";
// import { countBuildingsWithView2 } from "./sujet_2/exo_2.js";
// import { countBuildingsWithView4 } from "./sujet_2/exo_4.js";
// import { countBuildingsWithView6 } from "./sujet_2/exo_6.js";

// const functions = {
//     'ex1': { func: findPairWithSum1, code: findPairWithSum1.toString(), params: 2, defaultParams: ['[10, 15, 3, 7]', '17'] },
//     'ex3': { func: findPairWithSum3, code: findPairWithSum3.toString(), params: 2, defaultParams: ['[10, 15, 3, 7]', '17'] },
//     'ex5': { func: findPairWithSum5, code: findPairWithSum5.toString(), params: 2, defaultParams: ['[10, 15, 3, 7]', '17'] },
//     'ex2': { func: countBuildingsWithView2, code: countBuildingsWithView2.toString(), params: 1, defaultParams: ['[3, 7, 8, 3, 6, 1]'] },
//     'ex4': { func: countBuildingsWithView4, code: countBuildingsWithView4.toString(), params: 1, defaultParams: ['[3, 7, 8, 3, 6, 1]'] },
//     'ex6': { func: countBuildingsWithView6, code: countBuildingsWithView6.toString(), params: 1, defaultParams: ['[3, 7, 8, 3, 6, 1]'] }
// };

import { functions } from './const.js';

document.addEventListener('DOMContentLoaded', function () {
    const codeSection = document.createElement('div');
    codeSection.classList.add('row'); 
    codeSection.classList.add('m-5'); 
    document.body.appendChild(codeSection);

    document.querySelectorAll('.btn-primary').forEach(button => {
        button.addEventListener('click', async function () {
            event.preventDefault();
            const exerciseId = this.id;
            const selectedFunction = functions[exerciseId];

            codeSection.innerHTML = '';

            let inputFields = '';
            for (let i = 0; i < selectedFunction.params; i++) {
                const defaultValue = selectedFunction.defaultParams[i] || '';
                inputFields += `<input type="text" class="form-control my-2" value="${defaultValue}" placeholder="Parametre ${i + 1}" id="${exerciseId}_inputParam${i}">`;
            }

            codeSection.innerHTML = `
                <div class="row">
                <div class="col-8">
                <pre><code>${selectedFunction.code}</code></pre>
                </div>
                <div class="col-4">
                ${inputFields}
                <button class="btn btn-success mt-2" id="${exerciseId}_runButton">Lancer</button>
                <p class="mt-3">Result: <span id="${exerciseId}_outputResult"></span></p>
                </div>
                </div>
                <p id="${exerciseId}_description"></p>
            `;

            // Загрузка описания при нажатии кнопки "exercice"
            const description = await loadDescriptionFromFile(selectedFunction.description);
            document.getElementById(`${exerciseId}_description`).textContent = description;

            document.getElementById(`${exerciseId}_runButton`).addEventListener('click', function() {
                runSelectedFunction(exerciseId);
            });
        });
    });
});

async function loadDescriptionFromFile(filePath) {
  try {
      const response = await fetch(filePath);
      if (!response.ok) {
          throw new Error('Failed to load description');
      }
      const text = await response.text();
      return text;
  } catch (error) {
      console.error('Error loading description:', error);
      return 'Description not available.';
  }
}

async function runSelectedFunction(exerciseId) {
    const selectedFunction = functions[exerciseId];
    let inputParams = [];
    for (let i = 0; i < selectedFunction.params; i++) {
        const inputValue = document.getElementById(`${exerciseId}_inputParam${i}`).value.trim();
        // Парсим строку в массив или число
        const parsedValue = JSON.parse(inputValue);
        inputParams.push(parsedValue);
    }
    const result = selectedFunction.func(...inputParams);
    document.getElementById(`${exerciseId}_outputResult`).textContent = result;
}

