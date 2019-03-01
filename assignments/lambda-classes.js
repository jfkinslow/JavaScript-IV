// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.faveLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }

    grade(student, subject) {
        console.log(`${student.name} received a perfect score on ${subject}.`)
    }
}

class Student extends Person {
    constructor(attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    }

    listSubjects(){
        for (let i of this.favSubjects){
            console.log(i);
        }
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }
}

class ProjectManager extends Instructor {
    constructor(attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}

const josh = new Instructor({
    name: 'Josh Knell',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });
  const nick = new ProjectManager({
    name: 'Nick Stricker',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    gradClassName: `Web18`,
    favInstructor: `Josh Knell`
  });
  const joshuak = new Student({
    name: 'Joshua Kinslow',
    location: 'Illinois',
    age: 37,
    gender: 'male',
    previousBackground: `Freelance Web Dev and Warehouse Jobs`,
    className: `Web 18`,
    favSubjects: [
        'HTML',
        'CSS',
        'JavaScript'
    ]
  });

  joshuak.speak();
  joshuak.listSubjects();
  josh.demo('JavaScript-IV');
  joshuak.PRAssignment('JavaScript-IV');
  nick.debugCode(joshuak, 'JavaScript-IV');
  nick.standUp('web18_nick');
  josh.grade(joshuak, 'JavaScript-IV');
  console.dir(josh);
  console.dir(nick);
  console.dir(joshuak);
  