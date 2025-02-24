let person1 = {
    name: "Tejal",
    greet: function () {
        console.log(`
            hello ${this.name}`);
        
    }
}

let person2 = {
    name:"Ziya"
}
//call
person1.greet.call(person2);
//bind
const bindGreet = person1.greet.bind(person2);
bindGreet();

