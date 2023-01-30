// import {test} from '../js/test';

// window.addEventListener('DOMContentLoaded', () => {
//     const el = document.querySelector("#mj");
//     const minju = "민 주"
//     el.innerHTML = `
//         <h1>${test(minju, 123)} webpack 설정!!!</h1>
//     `
// });

/**
 * Created by jmju on 2023-01-26.
 */

import layout from './divide/layout';
import exclude from './exclude/exclude';

const appMethods = {
    layout,
    exclude,
};

const appInit = () => {
    const appName = document.querySelector('body');
    console.log(appName)
    
    if (appName) {
        [layout,exclude, appMethods[appName]].forEach(method => {
            if(method) method();

            console.log(method)
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    appInit();
});