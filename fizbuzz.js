for( i = 1; i <= 20; i++ ) {
    if( i % 3 === 0 ){
        console.log("fiz");
    } else if( i % 5 === 0) {
        console.log("buzz");
    } else if( i % 15 === 0 ){
        console.log("fizbuzz");
    } else {
        console.log( i );
    }
}

