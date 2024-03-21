if (!localStorage.getItem('nameValue')) {
    localStorage.setItem('nameValue', 'Nguyễn Hoàng Đức Trung');
    localStorage.setItem('yearValue', '2021');
    localStorage.setItem('eduValue', 'Đại học đại trà');
    localStorage.setItem('programValueSelect', 0);
    localStorage.setItem('programValue', "Chương trình chuẩn");
    localStorage.setItem('departmentValueSelect', 1);
    localStorage.setItem('departmentValue', "Trường Công nghệ Thông tin và Truyền thông");
    localStorage.setItem('statusValueSelect', 0);
    localStorage.setItem('statusValue', "Học");
    localStorage.setItem('sexValueSelect', 0);
    localStorage.setItem('sexValue', "Nam");
    localStorage.setItem('classValue', 'Khoa học máy tính 04-K66');
    localStorage.setItem('gradeValue', '66');
    localStorage.setItem('emailValue', 'trung.nhd215491@sis.hust.edu.vn');

}

// localStorage.setItem('programValue', "Chương trình chuẩn");
// localStorage.setItem('departmentValue', "Trường Công nghệ Thông tin và Truyền thông");
// localStorage.setItem('statusValue', "Học");
// localStorage.setItem('sexValue', "Nam");


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
var statusIndex  = localStorage.getItem('statusValueSelect');

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
    document.getElementById("programList").selectedIndex = localStorage.getItem('programValueSelect');
    document.getElementById("departmentList").selectedIndex = localStorage.getItem('departmentValueSelect');
    document.getElementById("statusList").selectedIndex = localStorage.getItem('statusValueSelect');
    document.getElementById("sexList").selectedIndex = localStorage.getItem('sexValueSelect');
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

    var selectedProgramIndex = document.getElementById("programList").selectedIndex;
    var selectedProgramValue = document.getElementById("programList").options[selectedProgramIndex].value;

    var selectedDepartmentIndex = document.getElementById("departmentList").selectedIndex;
    var selectedDepartmentValue = document.getElementById("departmentList").options[selectedDepartmentIndex].value;

    var selectedStatusIndex = document.getElementById("statusList").selectedIndex;
    var selectedStatusValue = document.getElementById("statusList").options[selectedStatusIndex].value;

    var selectedSexIndex = document.getElementById("sexList").selectedIndex;
    var selectedSexValue = document.getElementById("sexList").options[selectedSexIndex].value;

    localStorage.setItem('nameValue', document.getElementById("nameTb").value);
    localStorage.setItem('yearValue', document.getElementById("yearTb").value);
    localStorage.setItem('eduValue', document.getElementById("eduTb").value);

    localStorage.setItem('programValue', selectedProgramValue);
    localStorage.setItem('departmentValue', selectedDepartmentValue);
    localStorage.setItem('statusValue', selectedStatusValue);
    localStorage.setItem('sexValue', selectedSexValue);

    localStorage.setItem('statusValueSelect', selectedStatusIndex);
    localStorage.setItem('departmentValueSelect', selectedDepartmentIndex);
    localStorage.setItem('programValueSelect', selectedProgramIndex);
    localStorage.setItem('sexValueSelect', selectedSexIndex);

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