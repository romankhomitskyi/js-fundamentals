const clueCounter =  (msg) => {
    let count = 0;
    const logger = () => {
        console.log(`${msg} ${++count}`)
    }
    return logger
}


// Invoking clueCounter function we gonna create an executing context
// calling myLogger we also creating executing context
// and it retains access to it's parent scope
// It's parent scope is depending on when the function is invoked
const myLogger = clueCounter('I have no idea');

myLogger(); // own execution context hovewer they all share the parent execution context from where they were created
myLogger(); // if the function is being referrenced with any sort off executing context that is gonna be shared execution context
myLogger(); // that is why our counter is gonna be incremented
