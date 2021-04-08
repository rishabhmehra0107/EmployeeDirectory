/*class Employee{
    constructor(firstName, lastName,email,jobTitle,office,department,phone,skypeId,preferredName) {
        this.employeeFirstName = firstName;
        this.employeeLastName = lastName;
        this.employeeEmail = email;
        this.employeeJobTitle = jobTitle;
        this.employeeOffice = office;
        this.employeeDepartment = department;
        this.employeePhone = phone;
        this.employeeSkypeId = skypeId;
        this.employeePreferredName=preferredName;
      }

}
var employees=[], currentFilterType, uniqueId=0;

    window.addEventListener( "load", function( windowLoadE ) {
    var p, letter, button, holder;
    p= document.getElementById("getLetters");
    holder = document.getElementById( "buttonsHolder" );
    for ( var i = 65; i <= 90; i++ ) {
        letter = String.fromCharCode( i );
        button = document.createElement( "button" );
        button.setAttribute("class","alphabetClass");
        button.innerHTML = letter;
        button.setAttribute( "data-letter", letter );
        button.onclick = function( e ) { searchByLetter( this.getAttribute( "data-letter" ) ); };
        p.appendChild( button );
        if ( i == 90 ) {
            holder.appendChild( p );
        }
    }
} );
function printEmployee(i){
    document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                    document.getElementsByClassName("name")[i].innerHTML = employees[i].employeeFirstName+" "+employees[i].employeeLastName;
                    document.getElementsByClassName("employee-job-title")[i].innerHTML = employees[i].employeeJobTitle;
                    document.getElementsByClassName("employee-department")[i].innerHTML = employees[i].employeeDepartment+" Department";
}
function searchByLetter( letter ) {
    hideAllEmployees();
    currentFilterType=document.getElementById('selectType').value;
        for(var i=0;i<employees.length;i++){
            if((employees[i].employeeLastName.charAt(0)==letter && currentFilterType=='Last Name')||(employees[i].employeeFirstName.charAt(0)==letter && currentFilterType=='First Name')||(employees[i].employeeEmail.charAt(0)==letter && currentFilterType=='Email')||
            (employees[i].employeePreferredName.charAt(0)==letter && currentFilterType=='Preferred Name')||(employees[i].employeeJobTitle.charAt(0)==letter && currentFilterType=='Job Title')||(employees[i].employeeOffice.charAt(0)==letter && currentFilterType=='Office')||
            (employees[i].employeeDepartment.charAt(0)==letter && currentFilterType=='Department')||(employees[i].employeeSkypeId.charAt(0)==letter && currentFilterType=='Skype ID')){
                printEmployee(i);
            }
        }
}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function openEmployeeForm(value) {
    document.getElementById("employeeForm").style.display = "block";
    for(var i=0;i<employees.length;i++){
        if(employees[i].employeePreferredName==value){
            document.getElementById('displayEmployeeId').value=i+1;
            document.getElementById('displayFirstName').value=employees[i].employeeFirstName;
            document.getElementById('displayLastName').value=employees[i].employeeLastName;
            document.getElementById('displayPreferredName').value=employees[i].employeePreferredName;
            document.getElementById('displayEmail').value=employees[i].employeeEmail;
            document.getElementById('displayJobTitle').value=employees[i].employeeJobTitle;
            document.getElementById('displayOffice').value=employees[i].employeeOffice;
            document.getElementById('displayDepartment').value=employees[i].employeeDepartment;
            document.getElementById('displayPreferredName').value=employees[i].employeePreferredName;
            document.getElementById('displayPhone').value=employees[i].employeePhone;
            document.getElementById('displaySkypeId').value=employees[i].employeeSkypeId;
        }
    }

  }

  function closeForm() {
    var elements=document.getElementsByClassName("formerror");
    for(var i=0;i<elements.length;i++){
        elements[i].innerHTML="";
    }
    elements=document.getElementsByClassName("field-input");
    for(var i=0;i<elements.length;i++){
        elements[i].style.border="none";
    }
    document.getElementById("myForm").style.display = "none";
    document.getElementById("employeeForm").style.display = "none";
    
    var departmentList = [], officeList=[], jobList=[];
    for(var i=0;i<employees.length;i++){
        departmentList.push(employees[i].employeeDepartment);
        officeList.push(employees[i].employeeOffice);
        jobList.push(employees[i].employeeJobTitle);
    }    
    getFiltersByType(departmentList.sort(),'department-list','get-employee-department','get-employee-department-count','departmentContainer');
    getFiltersByType(officeList.sort(),'office-list','get-employee-office','get-employee-office-count','officeContainer');
    getFiltersByType(jobList.sort(),'job-title-list','get-employee-job-title','get-employee-job-title-count','jobTitleContainer');
}

function updateEmployeeForm(id) {
    for(var i=0;i<employees.length;i++)
    {
        if((id-1)==i){
            employees[i].employeeFirstName=document.getElementById('displayFirstName').value;
            employees[i].employeeLastName=document.getElementById('displayLastName').value;
            employees[i].employeePreferredName=document.getElementById('displayPreferredName').value;
            employees[i].employeeEmail=document.getElementById('displayEmail').value;
            employees[i].employeeJobTitle=document.getElementById('displayJobTitle').value;
            employees[i].employeeOffice=document.getElementById('displayOffice').value;
            employees[i].employeeDepartment=document.getElementById('displayDepartment').value;
            employees[i].employeePreferredName=document.getElementById('displayPreferredName').value;
            employees[i].employeePhone=document.getElementById('displayPhone').value;
            employees[i].employeeSkypeId=document.getElementById('displaySkypeId').value;
        }
    }
    for(var i=0;i<employees.length;i++){
           printEmployee(i);
        }
        closeForm();
  }

function formSubmit() {
        var email = document.EmployeeForm.email.value;
        var skypeId = document.EmployeeForm.skype.value;
        var firstName = document.EmployeeForm.firstname.value;
        var lastName = document.EmployeeForm.lastname.value;
        var jobTitle = document.EmployeeForm.jobtitle.value;
        var office = document.EmployeeForm.office.value;
        var department = document.EmployeeForm.department.value;
        var phone = document.EmployeeForm.phone.value;
        var preferredName=firstName.concat(" ",lastName);
        atPositionEmail=email.indexOf("@");  
        var dotPositionEmail=email.lastIndexOf(".");
        var regEx = /^[a-zA-Z ]+$/;  
        var flag=1;
        if (firstName==null || firstName==""){  
        document.getElementsByClassName("formerror")[0].innerHTML = "Required"; 
        document.EmployeeForm.firstname.style.border="1px solid red"; 
        flag=0;  
        }
        else if(regEx.test(firstName)==false){
        document.getElementsByClassName("formerror")[0].innerHTML = "Enter letters and space only"; 
        document.EmployeeForm.firstname.style.border= "1px solid red"; 
        flag=0;   
        }
        else{
            document.EmployeeForm.firstname.style.border= "none";
            document.getElementsByClassName("formerror")[0].innerHTML = ""; 
        }
        if (lastName==null || lastName==""){  
        document.getElementsByClassName("formerror")[1].innerHTML = "Required"; 
        document.EmployeeForm.lastname.style.border= "1px solid red";   
        flag=0;   
        }
        else if(regEx.test(lastName)==false){
        document.getElementsByClassName("formerror")[1].innerHTML = "Enter letters and space only"; 
        document.EmployeeForm.lastname.style.border= "1px solid red"; 
        flag=0;    
        }
        else{
            document.EmployeeForm.lastname.style.border= "none";
            document.getElementsByClassName("formerror")[1].innerHTML = ""; 
        }
        if(email=="" || email==null){
            document.getElementsByClassName("formerror")[2].innerHTML = "Required"; 
        document.EmployeeForm.email.style.border= "1px solid red";
        flag=0;  
        }
        else if (atPositionEmail<1 || dotPositionEmail<atPositionEmail+2 || dotPositionEmail+2>=email.length){  
        document.getElementsByClassName("formerror")[2].innerHTML = "Please enter valid e-mail address"; 
        document.EmployeeForm.email.style.border= "1px solid red"; 
        flag=0; 
         }  
         else{
            document.EmployeeForm.email.style.border= "none";
            document.getElementsByClassName("formerror")[2].innerHTML = ""; 
        }
         if (jobTitle==null || jobTitle==""){ 
        document.getElementsByClassName("formerror")[3].innerHTML = "Required"; 
        document.EmployeeForm.jobtitle.style.border= "1px solid red"; 
        flag=0;   
        }
        else if(regEx.test(jobTitle)==false){
        document.getElementsByClassName("formerror")[3].innerHTML = "Enter letters and space only"; 
        document.EmployeeForm.jobtitle.style.border= "1px solid red"; 
        flag=0;    
        }
        else{
            document.EmployeeForm.jobtitle.style.border= "none";
            document.getElementsByClassName("formerror")[3].innerHTML = ""; 
        }
        if (office==null || office==""){  
        document.getElementsByClassName("formerror")[4].innerHTML = "Required"; 
        document.EmployeeForm.office.style.border= "1px solid red"; 
        flag=0;  
        }
        else if(regEx.test(office)==false){
        document.getElementsByClassName("formerror")[4].innerHTML = "Enter letters and space only"; 
        document.EmployeeForm.office.style.border= "1px solid red"; 
        flag=0;    
        }
        else{
            document.EmployeeForm.office.style.border= "none";
            document.getElementsByClassName("formerror")[4].innerHTML = ""; 
        }
        if (department==null || department==""){ 
        document.getElementsByClassName("formerror")[5].innerHTML = "Required"; 
        document.EmployeeForm.department.style.border= "1px solid red"; 
        flag=0;   
        }
        else if(regEx.test(department)==false){
        document.getElementsByClassName("formerror")[5].innerHTML = "Enter letters and space only"; 
        document.EmployeeForm.department.style.border= "1px solid red";
        flag=0;   
        }
        else{
            document.EmployeeForm.department.style.border= "none";
            document.getElementsByClassName("formerror")[5].innerHTML = ""; 
        }
        if(phone=="" || phone==null)
        {
        document.getElementsByClassName("formerror")[6].innerHTML = "Required"; 
        document.EmployeeForm.phone.style.border= "1px solid red"; 
        flag=0; 
        }
        else if(isNaN(phone))
        {
        document.getElementsByClassName("formerror")[6].innerHTML = "Enter the valid Mobile Number(Like : 9566137117)"; 
        document.EmployeeForm.phone.style.border= "none"; 
        flag=0; 
        }
        else if(phone.length!=10)
        {
        document.getElementsByClassName("formerror")[6].innerHTML = "Your Mobile Number must be 10 Integers"; 
        document.EmployeeForm.phone.style.border= "1px solid red";
        flag=0; 
        }
        else{
            document.EmployeeForm.phone.style.border= "none";
            document.getElementsByClassName("formerror")[6].innerHTML = ""; 
        }
        var atPositionSkypeId=skypeId.indexOf("@");  
        var dotPositionSkypeId=skypeId.lastIndexOf(".");  
        if(skypeId=="" || skypeId==null){
            document.getElementsByClassName("formerror")[7].innerHTML = "Required"; 
        document.EmployeeForm.skype.style.border= "1px solid red";
        flag=0;  
        }
        else if (atPositionSkypeId<1 || dotPositionSkypeId<atPositionSkypeId+2 || dotPositionSkypeId+2>=skypeId.length){  
        document.getElementsByClassName("formerror")[7].innerHTML = "Please enter valid Skype ID"; 
        document.EmployeeForm.skype.style.border= "1px solid red";
        flag=0;  
        }
         else{
            document.EmployeeForm.skype.style.border= "none";
            document.getElementsByClassName("formerror")[7].innerHTML = ""; 
        }
        if(flag==0){
        return false;
        }
        var employee= new Employee(firstName,lastName,email,jobTitle,office,department,phone,skypeId,preferredName);
        employees.push(employee);
        var elements=document.getElementsByClassName("field-input");
        for(var i=0;i<elements.length;i++){
        elements[i].value="";
        }
        for(var i=0;i<employees.length;i++){
            document.getElementById('noEmployeeAdded').style.display="none";
                var preferred_name=employees[i].employeePreferredName;
                var new_employee = document.createElement("div");
                new_employee.setAttribute("class", "employee-card");
                new_employee.onclick = function() { openEmployeeForm(preferred_name); };
                new_employee.innerHTML+="<img class='container-image' src='https://cdn.wisden.com/wp-content/uploads/2017/11/GettyImages-689405274-e1520010556769.jpg'>"+
                "<div class='container-text'>"+
                "<h4 class='name'></h4>"+
                "<p class='employee-job-title'></p>"+
                "<p class='employee-department'></p>"+
                "<i class='fas fa-phone-square-alt'></i>"+
                "<i class='fas fa-envelope'></i>"+
                "<i class='fas fa-comment'></i>"+
                "<i class='fas fa-star'></i>"+
                "<i class='fas fa-heart'></i>"+
                "</div>";
                document.getElementById("employeeList").appendChild(new_employee);
                printEmployee(i);
            }
        closeForm();
         return true;
    }

    function hideAllEmployees(){
         var elements=document.getElementsByClassName("employee-card");
        for(var i=0;i<elements.length;i++){
        document.getElementsByClassName("employee-card")[i].style.display="none";
    }
    }

    function filterEmployee(type){
        hideAllEmployees();
        for(var i=0;i<employees.length;i++){
         if(employees[i].employeeDepartment==type){
            printEmployee(i);
         }
        if(employees[i].employeeOffice==type){
                printEmployee(i);
            }
        if(employees[i].employeeJobTitle==type){
                printEmployee(i);
            }
         }
    }

    function getData(){
        hideAllEmployees();
        var enteredData=document.getElementsByName('searchEntry');
        currentFilterType=document.getElementById('selectType').value;
            for(var i=0;i<employees.length;i++){
                if((employees[i].employeeLastName.includes(enteredData[0].value) && currentFilterType=='Last Name')||(employees[i].employeeFirstName.includes(enteredData[0].value) && currentFilterType=='First Name')||(employees[i].employeeEmail.includes(enteredData[0].value) && currentFilterType=='Email')||
                (employees[i].employeePreferredName.includes(enteredData[0].value) && currentFilterType=='Preferred Name')||(employees[i].employeeJobTitle.includes(enteredData[0].value) && currentFilterType=='Job Title')||(employees[i].employeeOffice.includes(enteredData[0].value) && currentFilterType=='Office')||
                (employees[i].employeeDepartment.includes(enteredData[0].value) && currentFilterType=='Department')||(employees[i].employeePhone.includes(enteredData[0].value) && currentFilterType=='Phone')||(employees[i].employeeSkypeId.includes(enteredData[0].value) && currentFilterType=='Skype ID')){
                printEmployee(i);
            }
        }
}

function clearData(){
    hideAllEmployees();
    for(var i=0;i<employees.length;i++){
        printEmployee(i);
    }
}

function removeError(errorFrom){
    if(errorFrom=='fromFirstName'){
        document.EmployeeForm.firstname.style.border= "none";
        document.getElementsByClassName("formerror")[0].innerHTML = "";
    }
    else if(errorFrom=='fromLastName'){
        document.EmployeeForm.lastname.style.border= "none";
        document.getElementsByClassName("formerror")[1].innerHTML = "";
    }
    else if(errorFrom=='fromEmail'){
        document.EmployeeForm.email.style.border= "none";
        document.getElementsByClassName("formerror")[2].innerHTML = "";
    }
    else if(errorFrom=='fromJobTitle'){
        document.EmployeeForm.jobtitle.style.border= "none";
        document.getElementsByClassName("formerror")[3].innerHTML = "";
    }
    else if(errorFrom=='fromDepartment'){
        document.EmployeeForm.department.style.border= "none";
        document.getElementsByClassName("formerror")[5].innerHTML = "";
    }
    else if(errorFrom=='fromOffice'){
        document.EmployeeForm.office.style.border= "none";
        document.getElementsByClassName("formerror")[4].innerHTML = "";
    }
    else if(errorFrom=='fromPhone'){
        document.EmployeeForm.phone.style.border= "none";
        document.getElementsByClassName("formerror")[6].innerHTML = "";
    }
    else if(errorFrom=='fromSkypeId'){
        document.EmployeeForm.skype.style.border= "none";
        document.getElementsByClassName("formerror")[7].innerHTML = "";
    }
}
function filterByViewMore(type){
var departmentList = [], officeList=[], jobList=[];
for(var i=0;i<employees.length;i++){
    departmentList.push(employees[i].employeeDepartment);
    officeList.push(employees[i].employeeOffice);
    jobList.push(employees[i].employeeJobTitle);
}    
if(type=='department')
viewMore(departmentList.sort(),'get-employee-department','get-employee-department-count');
else if(type=='office')
viewMore(officeList.sort(),'get-employee-office','get-employee-office-count');
else
viewMore(jobList.sort(),'get-employee-job-title','get-employee-job-title-count');
}
function viewMore(filterTypeList,filterType,filterCount){
    var previousElement, listItems=[],itemsCount=[];
    for (var i = 0; i < filterTypeList.length; i++) {
        if (filterTypeList[i] != previousElement) {
          listItems.push(filterTypeList[i]);
          itemsCount.push(1);
        } else {
            itemsCount[itemsCount.length - 1]++;
        }
        previousElement = filterTypeList[i];
      }
      for(i=4;i<listItems.length;i++)
      {
        document.getElementsByClassName(filterType)[i].style.display="inline-block";
        document.getElementsByClassName(filterCount)[i].style.display="inline-block";
}
}

function removeFilters(filterType){
    var filterElements=document.getElementsByClassName(filterType);
    for(var i=0;i<filterElements.length;i++){
        document.getElementsByClassName(filterType)[i].style.display="none";
}}

function getFiltersByType(filterTypeList,filterType,filterTypeClass,filterCountClass,filterCategory){
          var previousElement, listItems=[],itemsCount=[],viewmore=0;
          for (var i = 0; i < filterTypeList.length; i++) {
        if (filterTypeList[i] != previousElement) {
          listItems.push(filterTypeList[i]);
          itemsCount.push(1);
        } else {
            itemsCount[itemsCount.length - 1]++;
        }
        previousElement = filterTypeList[i];
      }
      for(i=0;i<listItems.length;i++){
          var newFilter = document.createElement("div");
          newFilter.setAttribute("class", filterType);
          newFilter.innerHTML+='<button class="'+filterTypeClass+'" id="employee_'+(uniqueId)+'" onclick="filterEmployee(document.getElementById(\'employee_' + (uniqueId++) + '\').innerHTML)"></button><p class="'+filterCountClass+'"></p>';
          document.getElementById(filterCategory).appendChild(newFilter);
      }
      removeFilters(filterTypeClass);
      removeFilters(filterCountClass);
      for(i=0;i<listItems.length;i++)
      {
        if(i<=3){
            document.getElementsByClassName(filterTypeClass)[i].style.display="inline-block";
        document.getElementsByClassName(filterTypeClass)[i].innerHTML=listItems[i];
        document.getElementsByClassName(filterCountClass)[i].style.display="inline-block";
        document.getElementsByClassName(filterCountClass)[i].innerHTML="("+itemsCount[i]+")";
        }
        else{
            document.getElementsByClassName('view-more')[0].style.display="inline-block";
            document.getElementsByClassName('view-more')[1].style.display="inline-block";
            document.getElementsByClassName('view-more')[2].style.display="inline-block";
            document.getElementsByClassName(filterTypeClass)[i].innerHTML=listItems[i];
            document.getElementsByClassName(filterCountClass)[i].innerHTML="("+itemsCount[i]+")";
}}}
*/