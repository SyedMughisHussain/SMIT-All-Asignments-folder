// Q1. write a object that have student info & after that Write a method that returns a deep array like [[key, value]] from that object

const studentInfo = {
    stuName: "Syed Mughis Hussain",
    stuAge: 20,
    stuId: "1509-2021",
    stuClass: "9th Standards", 
    }

    function objectConvertIntoArray(object){
        return Object.entries(object);
    }

    objectConvertIntoArray(studentInfo);


// Q2. Write a JavaScript program to create a object called "person" with properties for name, age and country. Include a method to display the person's details.

const person = {
    name: "Syed Mughis Hussain",
    age: 20,
    country: "Pakistan",
    properties: function(){
        return `Name: ${this.name} Age: ${this.age} Country: ${this.country}`
    }
}
person.properties();

// Q3. Write a JavaScript program to create a object called 'rectangle' with properties for width and height.Include two methods to calculate rectangle area and perimeter.

const rectangle = {
  height: 4,
  width: 6,
  getArea: function () {
    return this.height * this.width;
  },
  getPerimeter: function () {
    return (this.height + this.width) * 2;
  }
};
const area = rectangle.getArea();
const perimeter = rectangle.getPerimeter();


// Q4. Write a JavaScript program that creates a object called 'vehicle' with properties for make, model, and year. Include a method to display vehicle details.

const vehicle = {
    make: "Toyota",
    model: "Land Cruiser",
    year: 2023,
    vehicleDetails: function(){
        return `Vehicle name: ${this.make}, Vehicle Model: ${this.model}, Vehicle Year: ${this.year}`
    }
}
vehicle.vehicleDetails();


// Q5. Write a JavaScript program that creates a object called "bankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account.

const bankAccount = {
    accountNumber: 1509202190534567,
    balance: 100000,
    deposit: function(depositCash){
        this.balance+=depositCash; 
    },
    withdraw: function(withdrawCash){
        this.balance-=withdrawCash;
    }
}
bankAccount.deposit(5000);
bankAccount.withdraw(10000);
bankAccount.balance;


// Q6. Write a JavaScript program that creates a object called 'employee' with properties for name and salary. Include a method to calculate annual salary.

const employee = {
    name: "Syed Mughis Hussain",
    salary: 1000000,
    annualSalary: function(){
        return this.salary * 12;
    }
}
employee.annualSalary();

// Q7. Write a JavaScript program that creates a object `book` with properties for title, author, and publication year. Include a method to display book details.

const book = {
    title: "Head First Java",
    author: "Syed Mughis Hussain",
    publicationYear: 2018,
    bookDetails: function(){
        return `Title: ${this.title}, Author: ${this.author}, Publication Year: ${this.publicationYear} `
    }
}
book.bookDetails();

// Q8. Write a JavaScript program that creates a object called 'animal' with properties for species and sound. Include a method to make the animal's sound.

const animal = {
    species: "Dog",
    sound: "Bow bow bow bow!",
    dogSound: function(){
        return this.sound
    }
}
animal.dogSound();

// Q9. Write a JavaScript program that creates a object called bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches.

let bank = {
    bankNames: '',
    branches: [],
    addBranch: function(branch){
        if(this.branches.includes(branch)){
            return `Already Exist!`
        }
        else{
            this.branches.push(branch);
        }
        return `After adding ${branch} ` + this.branches;
    },
    removeBranch: function(branch){
        if(this.branches.includes(branch)){
            for(let i=0; i<this.branches.length; i++){
                if(this.branches[i] === branch){
                    this.branches.splice(i,1);
                }
        }
        return `After Removing branch ${branch} ${this.branches}`
    } else{
        return `${branch} Not exist in the ${this.branches}.`
    }
},
    displayAllBranches: function(){
        return `All branches ${this.branches}`
    }
}  
let add = bank.addBranch('Branch A');
let add1 =bank.addBranch('Branch B');
let add2 =bank.addBranch('Branch C');
let add3 =bank.addBranch('Branch D');
let all = bank.displayAllBranches();
let remove = bank.removeBranch('Branch C');
console.log(add);
console.log(add1);
console.log(add2);
console.log(add3);
console.log(all);
console.log(remove);

// Q10. Write a JavaScript program that creates a object called product with properties for product ID, name, and price. Include a method to calculate the total price by multiplying the price by the quantity.

const product = {
    pID: 1,
    pName: "Banana",
    pPrice: 80,
    totalPrice: function(quantity){
         return  `Total Price: ` + this.pPrice * quantity;
    }
}
product.totalPrice(5);

// Q11. Write a JavaScript program that creates a object called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments.

let university = {
    uniName: 'Indus University, Karchi',
    uniDepartments: [],
    addDepartment: function(department){
        if(this.uniDepartments.includes(department)){
            return `Already Exist!`
        }
        else{
            this.uniDepartments.push(department);
        }
        return `After adding ${department} ` + this.uniDepartments;
    },
    removeDepartment: function(department){
        if(this.uniDepartments.includes(department)){
            for(let i=0; i<this.uniDepartments.length; i++){
                if(this.uniDepartments[i] === department){
                    this.uniDepartments.splice(i,1);
                }
        }
        return `After Removing department ${department} ${this.uniDepartments}`
    } else{
        return `${department} Not exist in the ${this.uniDepartments}.`
    }
},
    displayAllDepartments: function(){
        return `All departments ${this.uniDepartments}`
    }
}  
let add4 = university.addDepartment('Computer Science');
let add5 =university.addDepartment('Textile Engineering');
let add6 =university.addDepartment('Mechanical Engineering');
let add7 =university.addDepartment('Electrical Engineering');
let alldepartments = university.displayAllDepartments();
let removeDepartment = university.removeDepartment('Mechanical Engineering');
console.log(add4);
console.log(add5);
console.log(add6);
console.log(add7);
console.log(alldepartments);
console.log(removeDepartment);