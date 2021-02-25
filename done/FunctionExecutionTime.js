const {performance} = require("perf_hooks")
function forLoop(){
    for (let index = 0; index <100000000; index++) {
        
    }
}
const t1 = performance.now();
forLoop()
const t2 = performance.now();
console.log(`${t2-t1} ms`);