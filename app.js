'use strict';
//Creaing the Employees constructor
let allEmp =[];
function Employee(ID,fullName, department,level,imageUrl){
    this.ID = ID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    allEmp.push(this);
}
//Adding the Employees
let ghazi = new Employee(1000,'Ghazi Samer','Administration','Senior','Assets/Ghazi.jpeg');
let lana = new Employee(1001,'Lana Ali','Finance','Senior','Assets/Lana.jpeg');
let tamara = new Employee(1002,'Tamara Ayoub','Marketing','Senior','Assets/Tamara.jpeg');
let safi = new Employee(1003,'Safi Walid','Marketing', 'Mid-Senior','Assets/Safi.jpeg');
let omar = new Employee(1004,'Omar Zaid','Development','Senior','Assets/Omar.jpeg');
let rana = new Employee(1005,'Rana Saleh','Development','Junior','Assets/Rana.jpeg');
let hadi = new Employee(1006,'Hadi Ahmad','Finance','Mid-Senior','Assets/Hadi.jpeg');
//Defining a function to calculate the net salary after deducting the tax value
Employee.prototype.salary = function(){
    let netSalary;
    let tax = 7.5/100;
    let value;
    if(this.level =='Junior'){
        netSalary = Math.floor(Math.random()*(1001-500)+500);
        value = netSalary*tax;
        netSalary -= value;
    }
    else if(this.level =='Mid-Senior'){
        netSalary = Math.floor(Math.random()*(1501-1000)+1000);
        value = netSalary*tax;
        netSalary -= value;
    }
    else if(this.level =='Senior'){
        netSalary = Math.floor(Math.random()*(2001-1500)+1500);
        value = netSalary*tax;
        netSalary -= value;
    }
    return Math.floor(netSalary);
}
//Defining a function to generate a sequence number for IDs
let seqID = 1007;
function sequenceID(){
return seqID++;
}
//Defining a function for getting the values in the fields then add it in the DOM
let addEmployee = function(event){
    event.preventDefault();
    let emp;
    console.log('submit clicked');
    let fnameInput = document.getElementById('fullName').value;
    let deptInput = document.getElementById('department').value;
    let levelInput = document.getElementById('level').value;
    let imageInput = document.getElementById('imageURL').value;
    emp = new Employee(sequenceID(),fnameInput,deptInput,levelInput,imageInput);
    emp.print();
    setData(allEmp);
}
//Defining a function to print the employees
Employee.prototype.print= function(){
    //Creating and styling the div
    let div1 = document.createElement('div');
    div1.style.width = '250px';
    div1.style.height = '290px';
    div1.style.backgroundColor = 'rgb(145, 196, 255)';
    div1.style.borderRadius = '10px'
    div1.style.boxShadow = '0.5px 0.5px 5px gray'
    div1.style.margin = '20px'
    div1.style.overscrollBehaviorInline = 'backgroundColor=white;'
    //Creating and styling the images 
    let profileImage = document.createElement('img');
    profileImage.setAttribute('src',this.imageUrl);
    profileImage.style.width= '180px';
    profileImage.style.height= '180px';
    profileImage.style.marginLeft = '36px';
    profileImage.style.marginTop = '20px';
    //Creating and styling the employee information
    let info = document.createElement('p');
    info.innerHTML = `${this.fullName} - ID:${this.ID} - Department: ${this.department} - Level:${this.level} - Salary: ${this.salary()}`;
    info.style.fontSize = '14px';
    info.style.marginLeft = '30px';
    info.style.marginTop = '5px';
    //Inserting the element into the HTML page
    // let main1 = document.getElementById('grid');
    


    let main1 = document.getElementById('grid');
    if(main1) {
    main1.appendChild(div1);
    }
    
    div1.appendChild(profileImage);
    div1.appendChild(info);
}
//Calling the printing function for the selected employees

//Calling the handler submit button function
let submitBtn = document.getElementById('submitBtn');
if(submitBtn){
submitBtn.addEventListener('click', addEmployee);
}
//Defining a function to save the data to the local storage
function setData(empArray){
    let stringObj = JSON.stringify(empArray);
    localStorage.setItem('Employee', stringObj);

}
//Defining a function to retrieve the data from the local storage
function getData(){
    let retrievedData = localStorage.getItem('Employee');
    console.log(retrievedData);

    //return back the string array to it's original format (array of object)
    let dataArray = JSON.parse(retrievedData);
    console.log(dataArray);

    //Overwrite the array of employees
    if(dataArray==null){
        ghazi.print();
        lana.print();
        tamara.print();
        safi.print();
        omar.print();
        rana.print();
        hadi.print();
    }
    if(dataArray!=null){
        allEmp = [];
        let overWrittenEmp;
    for(let i=0; i<dataArray.length;i++){
        overWrittenEmp = new Employee(
            dataArray[i].ID,
            dataArray[i].fullName,
            dataArray[i].department,
            dataArray[i].level,
            dataArray[i].imageUrl
            ); 
            overWrittenEmp.print();
        }
}
}
getData();

// -------------------------------------------------- Accounting page scripts ----------------------------------------------------------

// Defining a function to count the no of employees
//no of employees variables
let administrationTotal =0;
let marketingTotal =0;
let developmentTotal =0;
let financeTotal =0;
//avg Salaries variables
let administrationTotalSalAvg =0;
let marketingTotalSalAvg =0;
let developmentTotalSalAvg =0;
let financeTotalSalAvg =0;
let totalAvgsSal =0;
//total Salaries variables
let administrationTotalSal =0;
let marketingTotalSal =0;
let developmentTotalSal =0;
let financeTotalSal =0;
let totalSal =0;
function countTheEmployees(allEmp){
    for(let i=0; i<allEmp.length; i++){
        if(allEmp[i].department === 'Administration'){
            administrationTotal+=1;
            administrationTotalSal+= allEmp[i].salary();
            administrationTotalSalAvg = Math.floor(administrationTotalSal/administrationTotal);
        }
        else if(allEmp[i].department =='Marketing'){
            marketingTotal+=1;
            marketingTotalSal += allEmp[i].salary();
            marketingTotalSalAvg = Math.floor(marketingTotalSal/marketingTotal);
        }
        else if(allEmp[i].department =='Development'){
            developmentTotal+=1;
            developmentTotalSal += allEmp[i].salary();
            developmentTotalSalAvg = Math.floor(developmentTotalSal/developmentTotal);
        }
        else if(allEmp[i].department =='Finance'){
            financeTotal+=1;
            financeTotalSal += allEmp[i].salary();
            financeTotalSalAvg = Math.floor(financeTotalSal/financeTotal);
        }
        totalAvgsSal = administrationTotalSalAvg + marketingTotalSalAvg + developmentTotalSalAvg + financeTotalSalAvg;
        totalSal = administrationTotalSal + marketingTotalSal + developmentTotalSal + financeTotalSal;
    }
}
countTheEmployees(allEmp);
// Defining a function to count the total of the salaries
function avgSalaries(){
    
}
// Defining a function to count the avg of the salaries
function avgSalaries(){

}

//defining the rendering function for all the fields
function renderNumOfEmployees(){
    //No. of Employees Column
    //administration no. of employees
    let administrationDept = document.getElementById('administrationDept')
    let dep1 = document.createElement('td')
    if(administrationDept)
    administrationDept.appendChild(dep1);
    dep1.innerHTML = administrationTotal;
    //Marketing no. of employees
    let marketingDept = document.getElementById('marketingDept')
    let dep2 = document.createElement('td')
    marketingDept.appendChild(dep2);
    dep2.innerHTML = marketingTotal;
    //Development no. of employees
    let developmentDept = document.getElementById('developmentDept')
    let dep3 = document.createElement('td')
    developmentDept.appendChild(dep3);
    dep3.innerHTML = developmentTotal;
    //Finance mo. of employees
    let financeDept = document.getElementById('financeDept')
    let dep4 = document.createElement('td')
    financeDept.appendChild(dep4);
    dep4.innerHTML = financeTotal;
    
    let totalEmployees = allEmp.length;
    //total employees
    let totalAll = document.getElementById('totalAll')
    let tot = document.createElement('td')
    totalAll.appendChild(tot);
    tot.innerHTML = totalEmployees;

    // avg salaries Column
    let dep11 = document.createElement('td')
    administrationDept.appendChild(dep11);
    dep11.innerHTML = administrationTotalSalAvg
    
    let dep12 = document.createElement('td')
    marketingDept.appendChild(dep12);
    dep12.innerHTML = marketingTotalSalAvg;

    let dep13 = document.createElement('td')
    developmentDept.appendChild(dep13);
    dep13.innerHTML = developmentTotalSalAvg

    let dep14 = document.createElement('td')
    financeDept.appendChild(dep14);
    dep14.innerHTML = financeTotalSalAvg

    let tot2 = document.createElement('td')
    totalAll.appendChild(tot2)
    tot2.innerHTML = totalAvgsSal;

    //total salaries column
    let dep15 = document.createElement('td')
    administrationDept.appendChild(dep15);
    dep15.innerHTML = administrationTotalSal;
    
    let dep16 = document.createElement('td')
    marketingDept.appendChild(dep16);
    dep16.innerHTML = marketingTotalSal;

    let dep17 = document.createElement('td')
    developmentDept.appendChild(dep17);
    dep17.innerHTML = developmentTotalSal;

    let dep18 = document.createElement('td')
    financeDept.appendChild(dep18);
    dep18.innerHTML = financeTotalSal;

    let tot3 = document.createElement('td')
    totalAll.appendChild(tot3);
    tot3.innerHTML = totalSal;
}
renderNumOfEmployees()