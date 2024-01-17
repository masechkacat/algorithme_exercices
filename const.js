import { findPairWithSum1 } from "./sujet_1/exo_1.js";
import { findPairWithSum3 } from "./sujet_1/exo_3.js";
import { findPairWithSum5 } from "./sujet_1/exo_5.js";
import { countBuildingsWithView2 } from "./sujet_2/exo_2.js";
import { countBuildingsWithView4 } from "./sujet_2/exo_4.js";
import { countBuildingsWithView6 } from "./sujet_2/exo_6.js";

export const functions = {
    'ex1': {
        func: findPairWithSum1,
        code: findPairWithSum1.toString(),
        params: 2,
        defaultParams: ['[10, 15, 3, 7]', '17'],
        description: './sujet_1/ex1_description.txt'
    },
    'ex3': {
        func: findPairWithSum3,
        code: findPairWithSum3.toString(),
        params: 2,
        defaultParams: ['[10, 15, 3, 7]', '17'],
        description: './sujet_1/ex3_description.txt'
    },
    'ex5': {
        func: findPairWithSum5,
        code: findPairWithSum5.toString(),
        params: 2,
        defaultParams: ['[10, 15, 3, 7]', '17'],
        description: './sujet_1/ex5_description.txt'
    },
    'ex2': {
        func: countBuildingsWithView2,
        code: countBuildingsWithView2.toString(),
        params: 1,
        defaultParams: ['[3, 7, 8, 3, 6, 1]'],
        description: './sujet_2/ex2_description.txt'
    },
    'ex4': {
        func: countBuildingsWithView4,
        code: countBuildingsWithView4.toString(),
        params: 1,
        defaultParams: ['[3, 7, 8, 3, 6, 1]'],
        description: './sujet_2/ex4_description.txt'
    },
    'ex6': {
        func: countBuildingsWithView6,
        code: countBuildingsWithView6.toString(),
        params: 1,
        defaultParams: ['[3, 7, 8, 3, 6, 1]'],
        description: './sujet_2/ex6_description.txt'
    }
};