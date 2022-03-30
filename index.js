// let user={
//     name:'rahul'

// }


// const obj={
//     massage: 'hello,world'
// }
// function print (){
//     console.log(this.massage);
// }
// print()
// print.call(obj)
// print.apply(obj)
// print.bind(obj)()

// let obj={
//     fname:'grishma',
//     lname:'bansod',
//     // printFullName: function(){
//     //     console.log(this.fname +" "+ this.lname);

//     // }
// }
// obj.printFullName()


// printFullName: function(){
//         console.log(this.fname +" "+ this.lname);

//  }


//call and apply
let name={
    fname:'grishma',
    lname:'bansod',
    city:'nagpur',
    fullName: function (Rollno,state){
    console.log(this.fname +" "+ this.lname +" ,"+ this.city +" ,its my rollno "+  Rollno +" state is "+state
    );
    }
}
name.fullName(21,"maharashtra")

let obj={
    fname:'sayali',
    lname:'wasnik',
    city:'tumsar'
}
//name.fullName.call(obj,"tumsar",34,"uttarpradesh")

name.fullName.apply(obj, ["tumsar", 34, "uttarpradesh"])


//bind

let youtuber={
    name:'harry',
    content:'programming',
    feature: function(){
        console.log(this.name );
    }
}
youtuber.feature()

let youtuberFun= youtuber.feature.bind()




//map method
const arr=['grishma','bansod']
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
const newArr= arr.map(function(cvalue){
    return cvalue + "is a beautifull"
})
console.log(newArr);
console.log(arr);


const studentdata=[
    {id :1,  name: 'sayali', degree:'BE'},
    {id :1,  name: 'kumud', degree:'Ba'},

    {id :1,  name: 'palvi', degree:'BAMS'},

];
 const newData=studentdata.map((cvalue)=>{
     return cvalue.name + " my degree is "  + cvalue.degree
 })
 console.log(newData);


 











