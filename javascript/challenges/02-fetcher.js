const sleep = require("../helpers/sleep");

// sometimes it does not work

const main = async() => {
    const taskRunner = new TaskRunner();
    const first = taskRunner.run(() => fetch(/* random api */));
    await sleep(100);
    const second = taskRunner.run(() => fetch(/* random api */));
    await sleep(100);
    const third = taskRunner.run(() => fetch(/* random api */));
    await Promise.all([first, second, third])
}

class TaskRunner {
    constructor() {
        this.pending = [];
        this.running = false;
    }
    run(exec) {
        const task = { exec };
        const promise = new Promise((resolve, reject) => {
            Object.assign(task, { resolve, reject });
        });
        this.pending.push(task)
        if (!this.running) {
            this.running = true;
            this.shift();
        }
        return promise;
    }
    shift() {
        const task = this.pending.shift();
        if (task) {
            task.exec()
                .then(task.resolve, task.reject)
                .finally(() => this.shift())
        }
    }
}
