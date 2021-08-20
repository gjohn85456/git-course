class NamedOne {
    // -- SHOULD be changed --
    constructor(first, last) {
        this.tempFirstName = first;
        this.tempLastName = last;
        this.newFirstName = '';
        this.newLastName = '';
        this.tempFullName = this.tempFirstName + ' ' + this.tempLastName;
    }
    get firstName() {
        this.newFirstName = this.tempFirstName;
        return this.newFirstName;
    }
    set firstName(v) {
        this.newFirstName = v;
    }

    get lastName() {
        this.newLastName = this.tempLastName;
        return this.newFirstName;
    }
    set lastName(v) {
        this.newLastName = v;
    }
    get fullName() {
        if (firstName() != this.tempFirstName && lastName() != this.tempLastName) {
            return firstName() + lastName();
        }
    }

}

let namedOne = new NamedOne("Naomi", "Wang");

console.log(namedOne.firstName);
console.log(namedOne.lastName);


namedOne.firstName = "John";
namedOne.lastName = "Doe";
console.log(namedOne.firstName)
console.log(namedOne.lastName);
console.log(namedOne.fullName);