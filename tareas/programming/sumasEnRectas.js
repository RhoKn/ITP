/**
 * 06-02-10191
 */

/* https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort */
const NumbersArray = [12,27,9,3,21,6,18,24,15];
/*
var init = function(NumbArr){
    
    let primerRenglon = split(NumbArr,0,10);
    let segundoRenglon = split(NumbArr,11,20);
    let tercerRenglon = split(NumbArr,21,30);

    let matriz = build(primerRenglon,segundoRenglon,tercerRenglon);

    console.log(`----MATRIZ GENERADA----`);
    for( var line = 0; line < 3; line++){
        console.log(`${matriz[line][0]}    ${matriz[line][1]}    ${matriz[line][2]}`);
    }
    console.log('___________');
    
    console.log(`\n`);
    console.log(`----Rectas a sumar----`);
    console.log(`${matriz[0][0]} - -`);
    console.log(`- ${matriz[1][1]} -`);
    console.log(`- - ${matriz[2][0]} \n`);

    console.log(`- ${matriz[0][1]} -`);
    console.log(`- ${matriz[1][1]} -`);
    console.log(`-  ${matriz[2][1]} - \n`);

    console.log(`- - ${matriz[0][2]} `);
    console.log(`- ${matriz[1][1]} -`);
    console.log(`${matriz[2][0]} - -\n`);
    console.log(`${matriz[1]}`);
    
    console.log(`______________`);
    console.log(`SUMAS`);
    console.log(`${matriz[0][0]} + ${matriz[1][1]} + ${matriz[2][2]} = ${matriz[0][0] + matriz[1][1] + matriz[2][2]}`);
    console.log(`${matriz[0][1]} + ${matriz[1][1]} + ${matriz[2][1]} = ${matriz[0][1] + matriz[1][1] + matriz[2][1]}`);
    console.log(`${matriz[0][2]} + ${matriz[1][1]} + ${matriz[2][0]} = ${matriz[0][2] + matriz[1][1] + matriz[2][0]}`);
    console.log(`${matriz[1][0]} + ${matriz[1][1]} + ${matriz[1][2]} = ${matriz[1][0] + matriz[1][1] + matriz[1][2]}`);
    
}(NumbersArray);

function split(arr,limInf, limSup){
    var splitRes = arr.filter((number)=>{
        if(number >= limInf && number <= limSup){
            return number;
        }
    });
    splitRes.sort(function(a, b) {
        return a - b;
    });
    return splitRes;
}

function build(primerRenglon, segundoRenglon, tercerRenglon){
    let matriz = [[0,0,0],[0,0,0],[0,0,0]];

    for(line = 0; line < 3; line++){
        switch(line){
            case 0: 
                for(var column = 0; column < 3; column ++){
                    matriz[line][column] = primerRenglon[column];
                }
                break;
            case 1: 
                for(var column = 0; column < 3; column ++){
                    matriz[line][column] = segundoRenglon[column];
                }
                break;
            case 2: 
                for(var column = 0; column < 3; column ++){
                    matriz[line][column] = tercerRenglon[column];
                }
                break;
        }
    }
    return matriz;
}
*/
var init = function (theArray){
    var mgcNumbr = magicNumber(theArray);
    var matrix = buildMatrix(theArray,theArray.length);
    console.log(mgcNumbr);
}(NumbersArray);


function magicNumber (theArray){
    theArray = theArray.sort((a,b) =>{
        return a-b;
    });
    var x = theArray[0] + (theArray[Math.floor(theArray.length/2)]) + theArray[theArray.length-1];
    return x;
}

function buildMatrix (theArray, items){
    var matrix = new Array();

    for ( var columns = 0; columns < Math.sqrt(items); columns++ ) {
        matrix[columns] = []; 
    }
    
}