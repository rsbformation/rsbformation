/*
 * Copyright (c) 2023 Your Company Name
 * All rights reserved.
 */
const text= document.querySelector(".second-text");
function textLoad(liste) {
        let index = 0;

        setInterval(()=>{
            if(index >= liste.length){
                index = 0;
            }

            text.textContent = liste[index];
            index++;

        }, 3000); 
    }
    const liste = ['Excel', 'Word', 'PowerPoint'];
    textLoad(liste);