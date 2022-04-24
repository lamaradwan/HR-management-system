'use strict';
//Creaing the Employees constructor
function Employee(ID,fullName, department,level,imageUrl){
    this.ID = ID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
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
//Defining a function to generate a random number for IDs
let randomID = function randIDs(){
    let x = 0;
    x= Math.floor(Math.random()*(2000-1007)+1007);
    return x;
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
    emp = new Employee(randomID(),fnameInput,deptInput,levelInput,imageInput);
    emp.print();
}
//Defining a function to print the employees
Employee.prototype.print= function(){
    //Creating and styling the div
    let div = document.createElement('div');
    div.style.width = '250px';
    div.style.height = '290px';
    div.style.backgroundColor = 'rgb(145, 196, 255)';
    div.style.borderRadius = '10px'
    div.style.boxShadow = '0.5px 0.5px 5px gray'
    div.style.margin = '20px'
    div.style.overscrollBehaviorInline = 'backgroundColor=white;'
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
    let main = document.getElementById('grid');
    main.appendChild(div);
    div.appendChild(profileImage);
    div.appendChild(info);
}
//Calling the printing function for the selected employees
ghazi.print();
lana.print();
tamara.print();
safi.print();
omar.print();
rana.print();
hadi.print();
//Calling the handler submit button function
let submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', addEmployee);