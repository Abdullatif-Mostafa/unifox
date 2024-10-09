// let bars =document.querySelector(".bar");
// let navList =document.querySelector(".nav-list");
// // console.log(navList)
// let head=document.querySelector(".head")
// // console.log(head)
// function ShowNav()
// {
//     navList.style.display="block";
// }
// function hideNav()
// {
//     navList.style.display="none";
// }

// // let y= window.scrollY;
// // // console.log(y)
// // function getScrolled(y)
// // {
// //     if(y>=100)
// //     {
// //         head.addClassList("stecky")
// //     }
// //     // else
// //     // {
// //     //     head.ClassList("stecky")
// //     // }
// // }
// // getScrolled(y);
// // onload

// (window.scroll(()=>
// {
//     let y= this.scrollY; 
//     if(y>100)
//     {
//         head.addClass("sticky")
//     }
//     // return y
// }));
// scroll()

// // Owl Carousel
// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:false,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })






// function sumMul(n,m){
// let result=[];
//  if(n<=0 || m<=0)
//  {
//     return "Invalid"
//  }
//  else
//  {
//     for (let i = 1; i <m; i++) {
//        result.push(n*i)
//  }
// }
// return result.filter((item)=>item<=m)
// //  return result.filter((item)=>item<=m).reduce((x,y)=>x+y,0)
// }
// console.log(sumMul(2,9));

// var circleArea = function(radius) {
//     // return typeof(radius)
//     // if(isNaN(radius) && radius <0)
//     // {
//     //     return false
//     // }
//     // else
//     // {
        
//     //     return ((Math.pow(radius,2)*Math.PI).toFixed(2))
//     // }
//     if(radius <= 0.0 || radius == NaN)
//     {
//         return false
      
//     }
//     else
//     {
//         return ((Math.pow(radius,2)*Math.PI).toFixed(2))
//     }
//   };
//   console.log(circleArea('1485.86'))
// //   let x="234345"
//   let y=23
//   if(typeof(x) === Number) 
//   {
//     console.log("yes its string")
//   }
//   console.log(isNaN(x))
// console.log('234'>0)
// console.log(typeof(x))

function greet(language) {

	let lan=[ ("english", "Welcome")
            , ("czech", "Vitejte")
            , ("danish", "Velkomst")
            , ("dutch", "Welkom")
            , ("estonian", "Tere tulemast")
            , ("finnish", "Tervetuloa")
            , ("flemish", "Welgekomen")
            , ("french", "Bienvenue")
            , ("german", "Willkommen")
            , ("irish", "Failte")
            , ("italian", "Benvenuto")
            , ("latvian", "Gaidits")
            , ("lithuanian", "Laukiamas")
            , ("polish", "Witamy")
            , ("spanish", "Bienvenido")
            , ("swedish", "Valkommen")
            , ("welsh", "Croeso")
            ]

}
// function upper(name)
// {
//     // console.log("hello sir "+name)
//     console.log(name.toUpperCase())
// }
// // (upper("tifa"))
// function naming(x,fn)
// {
//     return fn(x)
// }
// console.log(naming("data is core of information ewrrwerwe",upper))
// let x="data"
// console.log(x.toUpperCase())
// let naming=(name)=>
// {
//     console.log("hello sir "+name)
// }
// naming("abdo")

// let obj={name:"tifa",age:23,address:"Minia",id:'23241'}
// let {name,id}=obj
// console.log(obj.age)
// console.log(name,id)
// // console.log(obj(name))
// let ss={...obj}
// console.log(ss.address)
// let arr=[1,2,3,4,5,6,7,8]
// let [,,,,,x]=arr
// console.log(x)
// console.log(arr[5])
// let arr1=[...arr]
// let arr2=[...arr1,'a','b','c']
// console.log(arr2)

// let upper=(str)=>
// {
//     // console.log("fdsf")
//     var x=()=>
//     {
//         // console.log(vv.toUpperCase()) 
//         console.log("from inside the function")
//     }
//     return x
// }
// let xx=upper()
// console.log(xx)
// console.log(x("love"))

// let mypro=new Promise((resolve,reject)=>
// {
     
// })

// function mystery() {
//     var results = {sanity: 'Hello'};
//     return results;
//   }
//   console.log(mystery())

// let arr=[1,3,4,5,13,8,9]
// let x=Math.max(...arr)
// console.log(arr.splice(x,1))
// let newarr=[]
// for (let i = 0; i <2; i++) {
//     // const element = array[i];
//     let mafx=Math.max(...arr)
//     newarr.push(mafx)
// }
// console.log(newarr)

// function getTheValue(arr)
// {
//     let ss=[]
//     for (let i = 0; i <2; i++) {
//         // const element = array[i];
//         ss.push(Math.max(...arr))
//     }
//     return ss
// }
// console.log(getTheValue([1,3,4,5,13,8,9]))

// let sd=[1,3,4,5,13,8,9]
// // console.log(sd.filter((item)=>
// // {
// //     item=Math.max(...sd)
// // }))
// console.log(sd.splice(1,1))
// let x="Creating kata is fun"
// console.log(x.length)

let arr=[1,2,3,4]
let xx=[5,6,7]
let ss=arr.concat(xx,'a','b','c')
// console.log(ss) 
// console.log(arr.fill(0,5,5))
console.log(arr.find((i)=>i>2
))
// (6-6+3)
console.log(2023-15)
// 30209152402997