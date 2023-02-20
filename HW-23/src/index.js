class Student {
  constructor(firstName, lastName, birthYear, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = grades;
    this.presence = new Array(25).fill(null);
  }

  present() {
    const index = this.presence.indexOf(null);
    if (index !== -1) {
      this.presence[index] = true;
    } else {
      console.log(`There are no more classes to attend`);
    }
  }

  absent() {
    const index = this.presence.indexOf(null);
    if (index !== -1) {
      this.presence[index] = false;
    } else {
      console.log(`There are no more classes to attend`);
    }
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  getAverageScore() {
    const sum = this.grades.reduce((sum, grade) => sum + grade, 0);
    return sum / this.grades.length;
  }

  getAverageAttendance() {
    const presenceCount = this.presence.filter((item) => item === true).length;
    return presenceCount / this.presence.length;
  }

  summary() {
    const averageScore = this.getAverageScore();
    const averageAttendance = this.getAverageAttendance();
    if (averageScore > 90 && averageAttendance > 0.9) {
      console.log(`Молодець!`);
    } else if (averageScore > 90 || averageAttendance > 0.9) {
      console.log(`Добре, але можна краще`);
    } else {
      console.log(`Редиска`);
    }
  }
}

const student1 = new Student("Anton", "Vovk", 2004, [70, 85, 90, 95, 100]);
const student2 = new Student("Roman", "Kozak", 2003, [78, 84, 85, 91, 95]);
const student3 = new Student(
  "Anastasiia",
  "Rybak",
  2003,
  [100, 90, 99, 96, 90]
);

student3.present();
student3.present();
student3.present();
student3.present();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.absent();
student3.present();
student3.absent();
student3.absent();
student3.present();
student3.present();
student3.absent();
student3.present();
student3.absent();
student3.absent();
student3.present();
student3.absent();
student3.present();
student3.present();
student3.present();
student3.absent();

console.log(student3.getAge());
console.log(student3.getAverageScore());
console.log(student3.getAverageAttendance());

student3.summary();
