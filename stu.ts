class school {
     name: string;
    students: Student[]=[];
    teachers: Teacher[]=[];

    addStudent(stdObj: Student){
      this.students.push(stdObj)  
    }
    addTeacher(teObj: Teacher){
        this.teachers.push(teObj)  
      }
    constructor(name:string){
        this.name = name;
    }
}
// Student
class Student{
    name: string;
    age: number;
    schoolName: string;

    constructor(name:string,age:number,schoolName:string){
    this.name = name;
    this.age = age
    this.schoolName = schoolName; 
  }
}
// Teacher
class Teacher extends Student{}
   
// School
let school1 = new school("CPLC Public School")
let school2 = new school("H.N Public School")
let school3 = new school("Zeeshan  Public School")
// student
let s1 = new Student("Zain",5, school1.name)
let s2 = new Student("Ali",5, school2.name)
let s3 = new Student("Asad",5, school3.name)
// Teacher
let T1 = new Teacher("Huma",35, school1.name)
let T2 = new Teacher("Alia",55, school2.name)
let T3 = new Teacher("Sana",45, school3.name)

school1.addStudent(s1)
school2.addStudent(s2)
school3.addStudent(s3)
// Teacher
school1.addTeacher(T1)
school2.addTeacher(T2)
school3.addTeacher(T3)


console.log(T1)
console.log(T2)
console.log(T3)
// school
console.log(school1)
console.log(school2)
console.log(school3)

