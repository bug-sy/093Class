// function greetPerson(name){
//     // const greet = null;
//     var greet ;

//     if(name == "Chandler"){
//          greet ="hello Chandler"
//     }else{
//          greet ="Hi there"
//     }
//     console.log(greet)
// }

//  greetPerson("Chandler")

// var getRegValue = function() { 10};

// console.log(getRegValue())


// const getArrowvalue = () =>  10;




// console.log(getArrowvalue())

// let displayColors = (message, ...colors) => {
//     console.log(message);

//     for(let i in colors){
// console.log(colors[i])
//     }
// }
//  let message ="List of Colors"
// let anotherArray = ["hi","bye"]
//  let colorArray = ["orange","yellow","indigo"]
//  displayColors(message, ...colorArray,...anotherArray)

// displayColors(message,"Red")//["Red"]
// displayColors(message,"Red","Blue")//["Red","Blue"]
// displayColors(message,"Red","Blue","Green")





// class Common{

//     constructor(name,year){

//     this.name = name;
//     this.year = year;

//     }

//     age(x){
//     return x - this.year;
//     }
//     }

//     const date = new Date(); //2021-12-01
//  const year = date.getFullYear();//2021

//     const myCar = new Common("Ford",2014);
//     var myCarr = new Common("Ford",2013);

//     console.log("The car is " +myCarr.age(year) +" years old");


// let employee = ["Chandler","Bing"]
// let [fname,lname,gender="Male"] = employee

// console.log(fname);
// console.log(lname);
// console.log(gender);


// class ErrorHandling {

//     constructor() {

//         this.errorExample()

//     }

//     errorExample = () => {
//         let x = ""
//         try {
//             // if (x == "") throw "empty"
//             if(!isNaN(x)) throw " number"
//         }
//         catch (err) {
//             console.log("the error thrown is ---> ", err)
//         }
//     }
// }


// let exceptionHandle = new ErrorHandling()





// let mapArray =  ["bridge","labz","section"]

// mapArray.map((element)=>{
//     console.log("elements are ", element)
// })

// let employee = 
// {
//     fname :"Chandler",
//     lname :"Bing",
//     gender : "Male"
// }



// let {fname,lname,gender} = {fname :"Chandler",lname :"Bing",gender : "Male"}

// console.log(fname);
// console.log(lname);
// console.log(gender);

// function(){
//     //access this keyword
// }

// () =>{
//     this
// }

// class Person{
//     constructor(name){
//         console.log(name + " Person constructor")
//     }
// }

// class Employee extends Person{
//     constructor(name){
//         super(name);
//         console.log(name + " Employee constructor")

//     }
// }

// let e = new Employee("VSCode")


// let mySet = new Set([1,2,3])
// mySet.forEach(setFunction);
// function setFunction(value,key,callingSet){
//     console.log(key+" "+value);
//  console.log(mySet === callingSet);   
// }



// //const arrayEx = new Array("India","Germany","China","Japan")

// arrayEx.map((value,index) => {
//     console.log("Array element ->",value)
// })

// array2.map(x=>console.log("---->",x*10))

// let newArray = []
// array2.forEach((value,i) => {
//     newArray[i] = value *5
// })

// console.log("new Array",newArray);

// const array2 = [10,20,30,40]
// const arrayEx = ["India","Germany","China","Japan"] 

// const reducer = (accumulator,currentValue) => accumulator + currentValue
// console.log(array2.reduce(reducer))

// let total = 0;

// array2.forEach(function(num){
//     total +=num
// })

// console.log("result -> ",total)

// const values = array2.filter(number => number<30)

// console.log("filter ->",values)
// console.log("sorted array -> ",arrayEx.sort())
// console.log("reverse array -> ",arrayEx.reverse())


// Stack implementation

// A LIFO data structure

// implementing stack using class called node



// class Stack {
//     constructor(){
//         this.first = null;
//         this.last = null;
//         this.size = 0;
//     }


//     enqueue(val){
//         var newNode = new Node(val);
//         if(!this.first){
//             this.first = newNode;
//             this.last = newNode;
//         }else{
//             this.last.next = newNode;
//             this.last = newNode
//         }

//         return ++this.size
//     }

//     dequeue(){
//         if(!this.first) return null;

//         var temp = this.first;
//         if(this.first == this.last){
//             this.last = null;
//         }

//         this.first = this.first.next;
//         this.size--;
//         return temp.value;
//     }



    // push(val){
    //     var newNode = new Node(val);
    //     if(!this.first){
    //         this.first = newNode;
    //         this.last = newNode
    //     }
    //     else{
    //         var temp = this.first;
    //         this.first = newNode;
    //         this.first.next = temp;
    //     }
    //     return ++this.size;
    // }

    // pop(){
    //     if(!this.first) return null;
    //     var temp = this.first;

    //     if(this.first === this.last){
    //         this.last =null
    //     }

    //     this.first = this.first.next
    //     this.size--
    //     return temp.value;

    // }


// }

// let exampleStack = new Stack()

// exampleStack.enqueue(24)//first--->
// exampleStack.enqueue(14)
// exampleStack.enqueue(44)// last

// exampleStack.pop()


// console.log("stack elements are ----> ",exampleStack)


//insertion = O(1)
//removal = O(1)
//Searching - O(N)
//Access - O(N)


// for(i=0;i<n;i++){
    
// }


// queue

// a FIFO data structure

// First In First out

// var q = []

// q.push("FIRST")

// q.push("SECOND")

// q.push("Third")

// console.log("q",q)


// q.shift()
// q.shift()


// console.log("q shift",q)

// q.unshift("FIRST")

// q.unshift("SECOND")

// q.unshift("Third")

// console.log("q unshift --->",q)


//-------------------------------------------------------------------------------------------------------------
//----------------------------------------Linked list---------------------------------------------------------

// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }


// class SinglyLinkedList{
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.length = 0;
//     }

//     push(val){
//         var newNode = new Node(val);
//         if(!this.head){
//             this.head = newNode
//             this.tail = this.head;
//         }

//         else{
//             this.tail.next = newNode
//             this.tail = newNode;
//         }

//         this.length++;
//         return this;
//     }

//    pop(){
//        if(!this.head) {
//            console.log("the linked list is empty")
//            return true
//        }
//        var current = this.head;
//        var newTail = current;
//        while(current.next){
//            newTail = current
//            current = current.next
//        }

//        this.tail = newTail;
//        this.tail.next = null;
//        this.length--;

//        if(this.length == 0){
//            this.head = null;
//            this.tail = null;
//        }
//        return current;

//    }


//    shift(){
//        if(!this.head) {
//         console.log("the linked list is empty")
//         return true
//        }

//        var currentHead = this.head
//        this.head = currentHead.next;

//        this.length--;
//        if(this.length === 0){
//            this.tail =null;
//        }

//        return currentHead;
//    }




// }


// let first = new Node("hi")
//  first.next = new Node("there")
//  first.next.next = new Node("how")
//  first.next.next.next = new Node("are")
//  first.next.next.next.next = new Node("you")

// var list = new SinglyLinkedList()
// list.push(2)
// list.push(4)
// list.push(1)
// list.push(1)
// list.push(8)

// list.pop()
// list.pop()






//  console.log("shift",list.shift())


// ["sjfljdsf","ldjlsjfds","dskfjlsjflsjdf"]
//   pink        orange      cyan
























