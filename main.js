if (!localStorage.getItem('nameValue')) {
    localStorage.setItem('nameValue', 'Nguyễn Hoàng Đức Trung');
    localStorage.setItem('yearValue', '2021');
    localStorage.setItem('eduValue', 'Đại học đại trà');
    localStorage.setItem('programValue', 'Khoa học Máy tính 2021');
    localStorage.setItem('departmentValue', 'Trường Công nghệ thông tin và Truyền thông');
    localStorage.setItem('statusValue', 'Học');
    localStorage.setItem('sexValue', 'Nam');
    localStorage.setItem('classValue', 'Khoa học máy tính 04-K66');
    localStorage.setItem('gradeValue', '66');
    localStorage.setItem('emailValue', 'trung.nhd215491@sis.hust.edu.vn');

}

var nameValue = localStorage.getItem('nameValue');  
var yearValue = localStorage.getItem('yearValue');
var eduValue = localStorage.getItem('eduValue');
var programValue = localStorage.getItem('programValue');
var departmentValue = localStorage.getItem('departmentValue');
var statusValue = localStorage.getItem('statusValue');
var sexValue = localStorage.getItem('sexValue');
var classValue = localStorage.getItem('classValue');
var gradeValue = localStorage.getItem('gradeValue');
var emailValue = localStorage.getItem('emailValue');

// var nameValue = "Nguyễn Hoàng Đức Trung";
// var yearValue = "2021";
// var eduValue = "Đại học đại trà";
// var programValue = "Khoa học Máy tính 2021";
// var departmentValue = "Trường Công nghệ thông tin và Truyền thông";
// var statusValue = "Học";
// var sexValue = "Nam";
// var classValue = "Khoa học máy tính 04-K66";
// var gradeValue = "66";
// var emailValue = "trung.nhd215491@sis.hust.edu.vn";

if(window.location.pathname.endsWith("edit.html")){
    document.getElementById("nameTb").value = nameValue;
    document.getElementById("nameTb").value = nameValue;
    document.getElementById("yearTb").value = yearValue;
    document.getElementById("eduTb").value = eduValue;
    document.getElementById("programList").value = programValue;
    document.getElementById("departmentList").value = departmentValue;
    document.getElementById("statusList").value = statusValue;
    document.getElementById("sexList").value = sexValue;
    document.getElementById("classTb").value = classValue;
    document.getElementById("gradeTb").value = gradeValue;
    document.getElementById("emailTb").value = emailValue;

}

if(window.location.pathname.endsWith("index.html")){
    var nameElement = document.getElementById("name");
    var yearElement = document.getElementById("year");
    var eduElement = document.getElementById("edu");
    var programElement = document.getElementById("program");
    var departmentElement = document.getElementById("department");
    var statusElement = document.getElementById("status");
    var sexElement = document.getElementById("sex");
    var classElement = document.getElementById("class");
    var gradeElement = document.getElementById("grade");
    var emailElement = document.getElementById("email");

    nameElement.innerText = nameValue;
    yearElement.innerText = yearValue;
    eduElement.innerText = eduValue;
    programElement.innerText = programValue;
    departmentElement.innerText = departmentValue;
    statusElement.innerText = statusValue;
    sexElement.innerText = sexValue;
    classElement.innerText = classValue;
    gradeElement.innerText = gradeValue;
    emailElement.innerText = emailValue;
}

function submitForm() {
    localStorage.setItem('nameValue', document.getElementById("nameTb").value);
    localStorage.setItem('yearValue', document.getElementById("yearTb").value);
    localStorage.setItem('eduValue', document.getElementById("eduTb").value);
    localStorage.setItem('programValue', document.getElementById("programList").value);
    localStorage.setItem('departmentValue', document.getElementById("departmentList").value);
    localStorage.setItem('statusValue', document.getElementById("statusList").value);
    localStorage.setItem('sexValue', document.getElementById("sexList").value);
    localStorage.setItem('classValue', document.getElementById("classTb").value);
    localStorage.setItem('gradeValue', document.getElementById("gradeTb").value);
    localStorage.setItem('emailValue', document.getElementById("emailTb").value);

    window.location.href = "index.html";
}
function cancelForm(){
    window.location.href = "index.html";
}
function editForm() {
    window.location.href = "edit.html";
}