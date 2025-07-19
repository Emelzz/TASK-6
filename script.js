// Task number one
let upSkillProfile = {
    firstName: 'Chukwuemelie Nnadozie',
    age: 24,
    printer: function () {
        console.log('Hi, my name is', this.firstName);
    },
    firstHobby: 'Watching porn',
    secondHobby: 'Watching more porn',
    thirdHobby: 'Thinking of watching more porn'
}

console.log(upSkillProfile.secondHobby);
// Task two
setTimeout(() => upSkillProfile.printer(), 1000)
// A callback function is a function that is called within another fucntion. it is passed as an argument to another function