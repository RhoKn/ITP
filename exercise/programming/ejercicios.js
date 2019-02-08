/**
 * var init = function(){
    for (var cont =0; cont<7; cont++){
        console.log('#'.repeat(cont+1));
    }
}();
 */
/** 
var init = function(){
    for (var cont =0; cont<100; cont++){
        if((cont+1) % 3 == 0 && (cont+1) % 5 != 0){
            console.log('Fizz');
        }
        else if((cont+1) % 3 != 0 && (cont+1) % 5 ==0){
            console.log('Buzz');
        } else if((cont+1) % 3 == 0 && (cont+1) % 5 ==0){
            console.log('FizzBuzz');
        }
        else{
            console.log(cont+1);
        }
    }
    /**
     * RETO: CAMBIAR TODO ESTO A TERNARIOS
     * RETO: INTENTAR CON SWITCH
     *//*
}();*/

/**
 * var init = function(total) {
    if(total %2 ==0){
        for(var counter = 0; counter< total; counter++){
            var module= (counter+1) %2;
            switch(module){
                case 0:
                    console.log(' #'.repeat(total/2));
                    break;
                default:
                    console.log('# '.repeat(total/2));
                    break;
            }
        }
    }else{
        console.log('tiene que ser un numero par');
    }
    
}
 */