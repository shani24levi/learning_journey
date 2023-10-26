/* eslint-disable @typescript-eslint/no-unused-expressions */
class Person {
    private job: string
    constructor(
        public name: string,
        public last: string
    ) {
        this.job = ''
    }
    get fullname() {
        return `${this.name} ${this.last}`
    }
    set setJob(job: string) {
        this.job = job
    }
}

const p = new Person('shnai', 'levi')
p.fullname /// when using get we can call it as a element of the class and not as a function
p.setJob = 'nothing' // with set we set like its an element
