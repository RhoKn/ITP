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