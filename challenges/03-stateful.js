// SyntaxError unexpected identifier. Should return increased value.

function counter() {
    let i = 0;
    while (true) {
        yield i++
    }
}

const gen = counter();

gen.next().value;
gen.next().value;
console.log(gen.next().value);
