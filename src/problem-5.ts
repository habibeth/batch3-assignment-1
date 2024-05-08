{
    //give a student data with marks  calculate total marks
    interface Student {
        name: string;
        age: number;
        grades: number[]
    }

    const student1: Student = {
        name: "Bob",
        age: 17,
        grades: [75, 80, 82, 88, 90]
    };

    const calculateAverageGrade=(student: Student): number=>{
        let totalGrade: number = 0;
        for(const grade of student1.grades){
            totalGrade = totalGrade + grade;
        }
        return totalGrade;
    }

    const averageGradeForBob = calculateAverageGrade(student1);

    console.log(averageGradeForBob)
    //
}