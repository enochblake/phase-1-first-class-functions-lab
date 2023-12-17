const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getStudentGrade() {
    
    rl.question("Enter student marks (between 0 and 100): ", function(answer) {
       
        var studentMarks = parseFloat(answer);

        if (isNaN(studentMarks) || studentMarks < 0 || studentMarks > 100) {
            console.log("Invalid input. Please enter a valid number between 0 and 100.");
        } else {
           
            var grade;
            if (studentMarks > 79) {
                grade = 'A';
            } else if (studentMarks >= 60 && studentMarks <= 79) {
                grade = 'B';
            } else if (studentMarks >= 50 && studentMarks <= 59) {
                grade = 'C';
            } else if (studentMarks >= 40 && studentMarks <= 49) {
                grade = 'D';
            } else {
                grade = 'E';
            }

            console.log("Student marks: " + studentMarks);
            console.log("Grade: " + grade);
        }

        rl.close();
    });
}

getStudentGrade();
