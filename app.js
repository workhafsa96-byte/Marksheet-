

function generateMarksheet() {
  let name = document.getElementById("studentName").value;

  let sub1 = Number(document.getElementById("sub1").value);
  let sub2 = Number(document.getElementById("sub2").value);
  let sub3 = Number(document.getElementById("sub3").value);
  let sub4 = Number(document.getElementById("sub4").value);
  let sub5 = Number(document.getElementById("sub5").value);

  let totalMarks = 500;
  let obtainedMarks = sub1 + sub2 + sub3 + sub4 + sub5;
  let percentage = (obtainedMarks / totalMarks) * 100;

  let grade = "";
  let status = "";

  if (percentage >= 80) {
    grade = "A+";
    status = "Pass 🎉";
  } 
  else if (percentage >= 70) {
    grade = "A";
    status = "Pass 🎉";
  } 
  else if (percentage >= 60) {
    grade = "B";
    status = "Pass ✅";
  } 
  else if (percentage >= 50) {
    grade = "C";
    status = "Pass ✅";
  } 
  else {
    grade = "Fail";
    status = "Fail ❌";
  }

  document.getElementById("resultBox").style.display = "block";

  document.getElementById("nameResult").innerHTML = "Student Name: " + name;
  document.getElementById("totalResult").innerHTML = "Obtained Marks: " + obtainedMarks + " / 500";
  document.getElementById("percentageResult").innerHTML = "Percentage: " + percentage.toFixed(2) + "%";
  document.getElementById("gradeResult").innerHTML = "Grade: " + grade;
  document.getElementById("statusResult").innerHTML = "Status: " + status;
}
