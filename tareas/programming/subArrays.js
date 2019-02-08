/**
 * Este ejercicio considste en:
 * De un array dado, realizar dos subArrays, y que la suma de los valores de cada array de exactamente lo mismo, sin poder reordenar 
 * el array dado.
 */
var theArray = [97,3,100];
var init = function(theArray) {
    var valueToReach = (theArray.reduce(( lastValue, actualValue) => {
        return lastValue + actualValue;
    }))/2;
    var splitted = false;
    var indexToSplit = 0;
    var firstArrayValue = 0;
    var secondArray;
    var secondArrayValue = 0;
    var possible = true;
    do{
        if(secondArrayValue > valueToReach){
            possible = false;
            break;
        }else if(secondArrayValue == valueToReach){
            secondArray = theArray.splice(indexToSplit,(theArray.length)-(indexToSplit));
            splitted = true;
        }else{
            secondArrayValue += theArray[indexToSplit];
            indexToSplit++;
        }
        
    }while(!splitted);

    if(!possible){
        console.log( 'No es posible hacer dos sub arreglos que su sumatoria sea igual');
    }else{
        firstArrayValue = theArray.reduce(( lastValue, actualValue) => {
            return lastValue + actualValue;
        });

        if(firstArrayValue == secondArrayValue){
            console.log(
                `La sumatoria de los valores del subArreglo => [${theArray}] igual a ${valueToReach}\n` +
                `La sumatoria de los valores del subArreglo => [${secondArray}] tambien es igual a ${valueToReach}`);
        }
    }
}(theArray);

/*

*/