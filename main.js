student_name=[];
function submit(){
    var display_student=[];

    //This loop is to take names of students and push them in the array
for (var i=1; i<=4; i++){
    var name = document.getElementById("name_of_the_student_"+i).value;
    console.log(name);
    student_name.push(name);
}

console.log(student_name);

var length_of_student_name = student_name.length;
console.log(length_of_student_name);

for (var j = 0; j<length_of_student_name; j++){
display_student.push("<h4>NAME - " + student_name[j] + "</h4>");
console.log(display_student);
}

console.log(display_student);
document.getElementById("display_name_with_commas").innerHTML = display_student;

var remove_commas = display_student.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML = remove_commas;
document.getElementById("submit_button").style.display = "none";
document.getElementById("sort_button").style.display = "inline-block";

}

function sorting(){
student_name.sort();
console.log(student_name);

var display_student_sort=[];

var length_of_student_name = student_name.length;
console.log(length_of_student_name);

for (var j = 0; j<length_of_student_name; j++){
    display_student_sort.push("<h4>NAME - " + student_name[j] + "</h4>");
    console.log(display_student_sort);
    }

    var remove_commas = display_student_sort.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML = remove_commas;

}