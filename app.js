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
let ghazi = new Employee(1000,'Ghazi Samer','Administration','Senior','//imgURL');
let lana = new Employee(1001,'Lana Ali','Finance','Senior','//imgURL');
let tamara = new Employee(1002,'Tamara Ayoub','Marketing','Senior','//imgURL');
let safi = new Employee(1003,'Safi Walid','Marketing', 'Mid-Senior','//imgURL');
let omar = new Employee(1004,'Omar Zaid','Development','Senior','//imgURL');
let rana = new Employee(1005,'Rana Saleh','Development','Junior','//imgURL');
let hadi = new Employee(1006,'Hadi Ahmad','Finance','Mid-Senior','//imgURL');

//Defining a function to calculate the net salary after deducting the tax value
Employee.prototype.salary = function(level){
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
    return netSalary;
}

//Defining a function to print the employees
Employee.prototype.print= function(){
    document.write(`<h2>${this.fullName}  - ${this.salary()} <br>`);
}


//Calling the printing function for the selected employees
ghazi.print();
lana.print();
tamara.print();
safi.print();
omar.print();
rana.print();
hadi.print();
