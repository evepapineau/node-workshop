//first program
function helloWorld (){
    console.log("Hello World!");
    setTimeout(function() {
        console.log("Hello World Again!!");
    }, 1000);
};

helloWorld();

//A wild interval has appeared!
function wildInterval(){
    console.log("Hello World!");
    setTimeout(wildInterval, 10000);
}

wildInterval();

