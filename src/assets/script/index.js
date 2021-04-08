var employeesFirstName=[];
    var employeesLastName=[];
    var employeesEmail=[];
    var employeesJobTitle=[];
    var employeesOffice=[];
    var employeesDepartment=[];
    var employeesPhone=[];
    var employeesSkypeId=[];
    var employeesPreferredName=[];
    var currentFilterType;
    var uniqueDepId=0;
    var uniqueOffId=0;
    var uniqueJobId=0;
    window.addEventListener( "load", function( windowLoadE ) {
    var p, letter, button, holder;
    p= document.getElementById("getLetters");
    holder = document.getElementById( "buttonsHolder" );
    for ( var i = 65; i <= 90; i++ ) {
        letter = String.fromCharCode( i );
        button = document.createElement( "button" );
        button.style.background="#00b1fc";
        button.style.fontSize="18px";
        button.style.color="white";
        button.style.border="none";
        button.style.cursor="pointer";
        button.style.margin="1.5px 1.5px";
        button.style.width="45.1px";
        button.style.height="38px";
        button.style.padding="0px";
        button.style.fontFamily="'Open Sans', sans-serif";
        button.innerHTML = letter;
        button.setAttribute( "data-letter", letter );
        button.onclick = function( e ) { searchByLetter( this.getAttribute( "data-letter" ) ); };
        p.appendChild( button );
        if ( i == 90 ) {
            holder.appendChild( p );
        }
    }
} );
function searchByLetter( letter ) {
    var elements=document.getElementsByClassName("employee-card");
    for(var i=0;i<elements.length;i++){
        document.getElementsByClassName("employee-card")[i].style.display="none";
    }
    currentFilterType=document.getElementById('selectType').value;
    if(currentFilterType=='Last Name'){
        for(var i=0;i<employeesLastName.length;i++){
            if(employeesLastName[i].charAt(0)==letter){
                document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                    document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
                    document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
                    document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i];
            }
        }
    }
    else if(currentFilterType=='Preffered Name'){
        for(var i=0;i<employeesPreferredName.length;i++){
            if(employeesPreferredName[i].charAt(0)==letter){
                document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                    document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
                    document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
                    document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i];
            }
        }
    }
    else if(currentFilterType=='Department'){
        for(var i=0;i<employeesDepartment.length;i++){
            if(employeesDepartment[i].charAt(0)==letter){
                document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                    document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
                    document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
                    document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i];
            }
        }
    }
    else if(currentFilterType=='Office'){
        for(var i=0;i<employeesOffice.length;i++){
            if(employeesOffice[i].charAt(0)==letter){
                document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                    document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
                    document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
                    document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i];
            }
        }
    }
    else if(currentFilterType=='Job Title'){
        for(var i=0;i<employeesJobTitle.length;i++){
            if(employeesJobTitle[i].charAt(0)==letter){
                document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                    document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
                    document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
                    document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i];
            }
        }
    }
    else if(currentFilterType=='Email'){
        for(var i=0;i<employeesEmail.length;i++){
            if(employeesEmail[i].charAt(0)==letter){
                document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                    document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
                    document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
                    document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i];
            }
        }
    }
    else if(currentFilterType=='Phone'){
        for(var i=0;i<employeesPhone.length;i++){
            if(employeesPhone[i].charAt(0)==letter){
                document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                    document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
                    document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
                    document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i];
            }
        }
    }
    else if(currentFilterType=='Skype ID'){
        for(var i=0;i<employeesSkypeId.length;i++){
            if(employeesSkypeId[i].charAt(0)==letter){
                document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                    document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
                    document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
                    document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i];
            }
        }
    }
    else{
        for(var i=0;i<employeesFirstName.length;i++){
            if(employeesFirstName[i].charAt(0)==letter){
                document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                    document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
                    document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
                    document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i];
            }
        }
}
}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function openEmployeeForm(value) {
    document.getElementById("employeeForm").style.display = "block";
    for(var i=0;i<employeesPreferredName.length;i++){
        if(employeesPreferredName[i]==value){
            document.getElementById('displayEmployeeId').value=i+1;
            document.getElementById('displayFirstName').value=employeesFirstName[i];
            document.getElementById('displayLastName').value=employeesLastName[i];
            document.getElementById('displayPreferredName').value=employeesPreferredName[i];
            document.getElementById('displayEmail').value=employeesEmail[i];
            document.getElementById('displayJobTitle').value=employeesJobTitle[i];
            document.getElementById('displayOffice').value=employeesOffice[i];
            document.getElementById('displayDepartment').value=employeesDepartment[i];
            document.getElementById('displayPreferredName').value=employeesPreferredName[i];
            document.getElementById('displayPhone').value=employeesPhone[i];
            document.getElementById('displaySkypeId').value=employeesSkypeId[i];
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

        var departmentElements=document.getElementsByClassName("get-employee-department");
    for(var i=0;i<departmentElements.length;i++){
        document.getElementsByClassName("get-employee-department")[i].style.display="none";
    }
    var officeElements=document.getElementsByClassName("get-employee-office");
    for(var i=0;i<officeElements.length;i++){
        document.getElementsByClassName("get-employee-office")[i].style.display="none";
    }
    var jobElements=document.getElementsByClassName("get-employee-job-title");
    for(var i=0;i<jobElements.length;i++){
        document.getElementsByClassName("get-employee-job-title")[i].style.display="none";
    }
    var departmentElementsCount=document.getElementsByClassName("get-employee-department-count");
    for(var i=0;i<departmentElementsCount.length;i++){
        document.getElementsByClassName("get-employee-department-count")[i].style.display="none";
    }
    var officeElementsCount=document.getElementsByClassName("get-employee-office-count");
    for(var i=0;i<officeElementsCount.length;i++){
        document.getElementsByClassName("get-employee-office-count")[i].style.display="none";
    }
    var jobElementsCount=document.getElementsByClassName("get-employee-job-title-count");
    for(var i=0;i<jobElementsCount.length;i++){
        document.getElementsByClassName("get-employee-job-title-count")[i].style.display="none";
    }

        var departmentType = [],
        departmentCount = [],
        previousDepartment;
    
      var departmentList=employeesDepartment.slice(0);
      departmentList.sort();
      for (var i = 0; i < departmentList.length; i++) {
        if (departmentList[i] != previousDepartment) {
          departmentType.push(departmentList[i]);
          departmentCount.push(1);
        } else {
            departmentCount[departmentCount.length - 1]++;
        }
        previousDepartment = departmentList[i];
      }
      for(i=0;i<departmentType.length;i++){
        if(i>0){
            var depId="dep"+uniqueDepId;
            uniqueDepId++;
          var new_department = document.createElement("div");
          new_department.setAttribute("class", "department-list");
          new_department.innerHTML+='<button class="get-employee-department" id="'+depId+'" onclick="filterEmployee(document.getElementById(\'' + depId + '\').innerHTML)"></button><p class="get-employee-department-count"></p>';
          document.getElementById("departmentContainer").appendChild(new_department);
        }
      }
      for(i=0;i<departmentType.length;i++)
      {
        if(i<=3){
            document.getElementsByClassName("get-employee-department")[i].style.display="inline-block";
        document.getElementsByClassName('get-employee-department')[i].innerHTML=departmentType[i];
        document.getElementsByClassName("get-employee-department-count")[i].style.display="inline-block";
        document.getElementsByClassName('get-employee-department-count')[i].innerHTML="("+departmentCount[i]+")";
        }
          else{
            document.getElementsByClassName('view-more')[0].style.display="inline-block";
            document.getElementsByClassName('get-employee-department')[i].innerHTML=departmentType[i];
            document.getElementsByClassName('get-employee-department-count')[i].innerHTML="("+departmentCount[i]+")";
          }
      }

      var officeType = [],
        officeCount = [],
        previousOffice;
    
      var officeList=employeesOffice.slice(0);
      officeList.sort();
      for (var i = 0; i < officeList.length; i++) {
        if (officeList[i] != previousOffice) {
          officeType.push(officeList[i]);
          officeCount.push(1);
        } else {
            officeCount[officeCount.length - 1]++;
        }
        previousOffice = officeList[i];
      }
      for(i=0;i<officeType.length;i++){
        if(i>0){
            var offId="off"+uniqueOffId;
            uniqueOffId++;
          var new_office = document.createElement("div");
          new_office.setAttribute("class", "office-list");
          new_office.innerHTML+='<button class="get-employee-office" id="'+offId+'" onclick="filterEmployee(document.getElementById(\'' + offId + '\').innerHTML)"></button><p class="get-employee-office-count"></p>';
          document.getElementById("officeContainer").appendChild(new_office);
        }
      }
      for(i=0;i<officeType.length;i++)
      {
          if(i<=3){
            document.getElementsByClassName("get-employee-office")[i].style.display="inline-block";
        document.getElementsByClassName('get-employee-office')[i].innerHTML=officeType[i];
        document.getElementsByClassName("get-employee-office-count")[i].style.display="inline-block";
        document.getElementsByClassName('get-employee-office-count')[i].innerHTML="("+officeCount[i]+")";
          }
          else{
            document.getElementsByClassName('view-more')[1].style.display="inline-block";
        document.getElementsByClassName('get-employee-office')[i].innerHTML=officeType[i];
        document.getElementsByClassName('get-employee-office-count')[i].innerHTML="("+officeCount[i]+")";
          }
      }

      var jobType = [],
        jobCount = [],
        previousJob;
    
      var jobList=employeesJobTitle.slice(0);
      jobList.sort();
      for (var i = 0; i < jobList.length; i++) {
        if (jobList[i] != previousJob) {
          jobType.push(jobList[i]);
          jobCount.push(1);
        } else {
            jobCount[jobCount.length - 1]++;
        }
        previousJob = jobList[i];
      }
      for(i=0;i<jobType.length;i++){
        if(i>0){
            var jobId="job"+uniqueJobId;
            uniqueJobId++;
          var new_job = document.createElement("div");
          new_job.setAttribute("class", "job-title-list");
          new_job.innerHTML+='<button class="get-employee-job-title" id="'+jobId+'" onclick="filterEmployee(document.getElementById(\'' + jobId + '\').innerHTML)"></button><p class="get-employee-job-title-count"></p>';
          document.getElementById("jobTitleContainer").appendChild(new_job);
          }
      }
      for(i=0;i<jobType.length;i++)
      {
          if(i<=3){
            document.getElementsByClassName("get-employee-job-title")[i].style.display="inline-block";
        document.getElementsByClassName('get-employee-job-title')[i].innerHTML=jobType[i];
        document.getElementsByClassName("get-employee-job-title-count")[i].style.display="inline-block";
        document.getElementsByClassName('get-employee-job-title-count')[i].innerHTML="("+jobCount[i]+")";
          }
          else{
              document.getElementsByClassName('view-more')[2].style.display="inline-block";
            document.getElementsByClassName('get-employee-job-title')[i].innerHTML=jobType[i];
            document.getElementsByClassName('get-employee-job-title-count')[i].innerHTML="("+jobCount[i]+")";
          }
      }
}

function updateEmployeeForm(id) {
    for(var i=0;i<employeesPreferredName.length;i++)
    {
        if((id-1)==i){
            employeesFirstName[i]=document.getElementById('displayFirstName').value;
            employeesLastName[i]=document.getElementById('displayLastName').value;
            employeesPreferredName[i]=document.getElementById('displayPreferredName').value;
            employeesEmail[i]=document.getElementById('displayEmail').value;
            employeesJobTitle[i]=document.getElementById('displayJobTitle').value;
            employeesOffice[i]=document.getElementById('displayOffice').value;
            employeesDepartment[i]=document.getElementById('displayDepartment').value;
            employeesPreferredName[i]=document.getElementById('displayPreferredName').value;
            employeesPhone[i]=document.getElementById('displayPhone').value;
            employeesSkypeId[i]=document.getElementById('displaySkypeId').value;
        }
    }
    for(var i=0;i<employeesPreferredName.length;i++){
        
           document.getElementsByClassName("employee-card")[i].style.display="inline-block";
           document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
           document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
           document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i]+" Department";
        
        }
        closeForm();
  }


function updateEmployeeForm(id) {
    for(var i=0;i<employeesPreferredName.length;i++)
    {
        if((id-1)==i){
            employeesFirstName[i]=document.getElementById('displayFirstName').value;
            employeesLastName[i]=document.getElementById('displayLastName').value;
            employeesPreferredName[i]=document.getElementById('displayPreferredName').value;
            employeesEmail[i]=document.getElementById('displayEmail').value;
            employeesJobTitle[i]=document.getElementById('displayJobTitle').value;
            employeesOffice[i]=document.getElementById('displayOffice').value;
            employeesDepartment[i]=document.getElementById('displayDepartment').value;
            employeesPreferredName[i]=document.getElementById('displayPreferredName').value;
            employeesPhone[i]=document.getElementById('displayPhone').value;
            employeesSkypeId[i]=document.getElementById('displaySkypeId').value;
        }
    }
    for(var i=0;i<employeesPreferredName.length;i++){
        
           document.getElementsByClassName("employee-card")[i].style.display="inline-block";
           document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
           document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
           document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i]+" Department";
        
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
        var atPositionEmail=email.indexOf("@");  
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
         employeesFirstName.push(firstName);
         employeesLastName.push(lastName);
         employeesEmail.push(email);
         employeesJobTitle.push(jobTitle);
         employeesDepartment.push(department);
         employeesOffice.push(office);
         employeesPhone.push(phone);
         employeesSkypeId.push(skypeId);
         employeesPreferredName.push(preferredName);
         var elements=document.getElementsByClassName("field-input");
        for(var i=0;i<elements.length;i++){
        elements[i].value="";
        }
        for(var i=0;i<employeesPreferredName.length;i++){
            document.getElementById('noEmployeeAdded').style.display="none";
            if(i>0){
                var preferred_name=employeesPreferredName[i];
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
                document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
                document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
                document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i]+" Department";
            }
                    else{
                        document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                    document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
                    document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
                    document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i]+" Department";
                    }
            }
        closeForm();
         return true;
    }

    function filterEmployee(type){
        var elements=document.getElementsByClassName("employee-card");
    for(var i=0;i<elements.length;i++){
        document.getElementsByClassName("employee-card")[i].style.display="none";
    }
        for(var i=0;i<employeesDepartment.length;i++){
         if(employeesDepartment[i]==type){
            document.getElementsByClassName("employee-card")[i].style.display="inline-block";
            document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
            document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
            document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i]+" Department";
         }
         }
        for(var i=0;i<employeesDepartment.length;i++){
            if(employeesOffice[i]==type){
                document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
                document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
                document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i]+" Department";
            }
         }
        for(var i=0;i<employeesDepartment.length;i++){
            if(employeesJobTitle[i]==type){
                document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
                document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
                document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i]+" Department";
            }
         }
        }

    function getData(){
        var elements=document.getElementsByClassName("employee-card");
    for(var i=0;i<elements.length;i++){
        document.getElementsByClassName("employee-card")[i].style.display="none";
    }
        var enteredData=document.getElementsByName('searchEntry');
        currentFilterType=document.getElementById('selectType').value;
        if(currentFilterType=='Last Name'){
            for(var i=0;i<employeesLastName.length;i++){
                if(employeesLastName[i].includes(enteredData[0].value)){
                document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
                document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
                document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i];
            }
        }
        }
        else if(currentFilterType=='Preffered Name'){
            for(var i=0;i<employeesPreferredName.length;i++){
                if(employeesPreferredName[i].includes(enteredData[0].value)){
                document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
                document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
                document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i];
            }
        }
        }
        else if(currentFilterType=='Department'){
            for(var i=0;i<employeesDepartment.length;i++){
                if(employeesDepartment[i].includes(enteredData[0].value)){
                document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
                document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
                document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i];
            }
        }
        }
        else if(currentFilterType=='Office'){
            for(var i=0;i<employeesOffice.length;i++){
                if(employeesOffice[i].includes(enteredData[0].value)){
                document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
                document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
                document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i];
            }
        }
        }
        else if(currentFilterType=='Job Title'){
            for(var i=0;i<employeesJobTitle.length;i++){
                if(employeesJobTitle[i].includes(enteredData[0].value)){
                document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
                document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
                document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i];
                }
        }
        }
        else if(currentFilterType=='Email'){
            for(var i=0;i<employeesEmail.length;i++){
                if(employeesEmail[i].includes(enteredData[0].value)){
                document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
                document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
                document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i];
                }
        }
        }
        else if(currentFilterType=='Phone'){
            for(var i=0;i<employeesPhone.length;i++){
                if(employeesPhone[i].includes(enteredData[0].value)){
                document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
                document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
                document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i];
                }
        }
        }
        else if(currentFilterType=='Skype ID'){
            for(var i=0;i<employeesSkypeId.length;i++){
                if(employeesSkypeId[i].includes(enteredData[0].value)){
                document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
                document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
                document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i];
                }
        }
        }
        else{
            for(var i=0;i<employeesFirstName.length;i++){
                if(employeesFirstName[i].includes(enteredData[0].value)){
                document.getElementsByClassName("employee-card")[i].style.display="inline-block";
                document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
                document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
                document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i];
            }
        }
    }
}

function clearData(){
    var elements=document.getElementsByClassName("employee-card");
    for(var i=0;i<elements.length;i++){
        document.getElementsByClassName("employee-card")[i].style.display="none";
    }
    for(var i=0;i<employeesFirstName.length;i++){
        document.getElementsByClassName("employee-card")[i].style.display="inline-block";
        document.getElementsByClassName("name")[i].innerHTML = employeesFirstName[i]+" "+employeesLastName[i];
        document.getElementsByClassName("employee-job-title")[i].innerHTML = employeesJobTitle[i];
        document.getElementsByClassName("employee-department")[i].innerHTML = employeesDepartment[i]+" Department";
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
function filterJobTitleByViewMore(){
    var jobType = [],
        jobCount = [],
        previousJob;
    
      var jobList=employeesJobTitle.slice(0);
      jobList.sort();
      for (var i = 0; i < jobList.length; i++) {
        if (jobList[i] != previousJob) {
          jobType.push(jobList[i]);
          jobCount.push(1);
        } else {
            jobCount[jobCount.length - 1]++;
        }
        previousJob = jobList[i];
      }
      for(i=4;i<jobType.length;i++)
      {
            document.getElementsByClassName("get-employee-job-title")[i].style.display="inline-block";
        document.getElementsByClassName("get-employee-job-title-count")[i].style.display="inline-block";
      }
}
function filterDepartmentByViewMore(){
    var departmentType = [],
    departmentCount = [],
    previousDepartment;

  var departmentList=employeesDepartment.slice(0);
  departmentList.sort();
  for (var i = 0; i < departmentList.length; i++) {
    if (departmentList[i] != previousDepartment) {
      departmentType.push(departmentList[i]);
      departmentCount.push(1);
    } else {
        departmentCount[departmentCount.length - 1]++;
    }
    previousDepartment = departmentList[i];
  }
  for(i=4;i<departmentType.length;i++)
  {
        document.getElementsByClassName("get-employee-department")[i].style.display="inline-block";
    document.getElementsByClassName("get-employee-department-count")[i].style.display="inline-block";
      
  }
}
function filterOfficeByViewMore(){
    var officeType = [],
        officeCount = [],
        previousOffice;
    
      var officeList=employeesOffice.slice(0);
      officeList.sort();
      for (var i = 0; i < officeList.length; i++) {
        if (officeList[i] != previousOffice) {
          officeType.push(officeList[i]);
          officeCount.push(1);
        } else {
            officeCount[officeCount.length - 1]++;
        }
        previousOffice = officeList[i];
      }
      for(i=4;i<officeType.length;i++)
      {
        document.getElementsByClassName("get-employee-office")[i].style.display="inline-block";
        document.getElementsByClassName("get-employee-office-count")[i].style.display="inline-block";
      }
}