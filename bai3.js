// bai 1

// var array = [1,5,7,8,9,15];


// var arrle = array.filter(function(item){
//     return item % 2 == 1
// });
// console.log(arrle);

// function tang1DV(mang){
//     var newarr1 = mang.filter(function(item){
//         return item > 5
//     })
//     var newarr2 = [];
//     for(var i = 0; i < newarr1.length; i++){
//         newarr1[i] = newarr1[i] + 1;
//         newarr2.push(newarr1[i]);
//     }

//     return newarr2
// }
// console.log(tang1DV(array));

// var newarr = array.slice(3,6);
// console.log(newarr);

// var newarr = array.splice(2,1);
// console.log(array);

// bai 2
// var  arr = [1,8,5,2,7,6,9,2,6];
// console.log(arr.sort(function(a,b){
//     return a - b
// }));

// bai 3

// var array = [
//     {
//         name: "Trung",
//         class: "Nodemy01",
//         dateJoin: "05-02-2020",
//         age: 20
//     },
//     {
//         name: "Phong",
//         class: "Nodemy01",
//         dateJoin: "06-01-2020",
//         age: 19
//     }, 
//     {
//         name: "Nam",
//         class: "Nodemy02",
//         dateJoin: "25-01-2020",
//         age: 20
//     }
// ];
// ý 1
// sắp xếp theo tuổi tăng dần
// console.log(array.sort(function(a,b){
//     if(a.age > b.age ){
//         return 1
//     }
//     if(a.age < b.age ){
//         return -1
//     }
//     if(a.age == b.age ){
//         return 0
//     }
// }));
// những học viên tham gia trước tháng 2

// function getNewDate(date){
//     var dateArray = date.split("-");
//     var newDate = dateArray[2] + "-" + dateArray[1] + "-" + dateArray[0];    
//     return new Date(newDate);
// }
// ý 2
// console.log(array.filter(function(item){
//     return getNewDate(item.dateJoin).getMonth() >= 1;
// }));

// ý 3

// console.log(array.sort(function(item1, item2){
//     var a = getNewDate(item1.dateJoin);
//     var b = getNewDate(item2.dateJoin);
//     if(a > b){
//         return 1
//     }
//     if(a < b){
//         return -1
//     }
//     if(a == b){
//         return 0
//     }
// }));

// ý 4
// console.log(array.map(function(item){
//     item.name.toUpperCase();
//     return item
// }));

// bai 4

// var doan = {
//     name: 'Doan',
//     age: 22,
//     salary: 1000
// }
// var trung = {}
// var trung = doan;
// doan.clone = true
// console.log(doan);

// bài 5
// var greeting = "Welcome to Nodemy, Nodemy is stand for Nodejs Academy";
// var greeting1 = "    Welcome to Nodemy, Nodemy is stand for Nodejs Academy    ";
// console.log(greeting.length);
// console.log(greeting.indexOf("nodemy"));
// console.log(greeting.indexOf("Nodemy"));
// console.log(greeting.startsWith("Welcome"));
// console.log(greeting.substring(greeting.length-7,greeting.length));
// console.log(greeting.split(","));
// console.log(greeting1.trim());
// console.log(greeting.includes("Nodemy"));
// console.log(greeting.replace("Nodemy","NODEMY"));
// console.log(greeting.toUpperCase());
// console.log(greeting.charAt(4));

// bài 6

// var phucBirthday = "26-11-1992";
// var cuongBirthday = "27-11-1994";
// function convertDate(dateString){
//     let date = dateString.split("-");
//     let newDate = date[2] + "-" + date[1] + "-" + date[0];
//     return new Date(newDate)
// }
// if(convertDate(phucBirthday) < convertDate(cuongBirthday)){
//     console.log("phúc lớn tuổi hơn");
// }else{
//     console.log("cường lớn tuổi hơn");
// }

// var dateAdd100 = convertDate(phucBirthday).getDate() + 100;

// console.log(new Date(convertDate(phucBirthday).setDate(dateAdd100)));
// var current_day = new Date(convertDate(phucBirthday).setDate(dateAdd100)).getDay()
// var day_name = "";
// switch (current_day) {
//     case 0:
//         day_name = "Chủ nhật";
//         break;
//     case 1:
//         day_name = "Thứ hai";
//         break;
//     case 2:
//         day_name = "Thứ ba";
//         break;
//     case 3:
//         day_name = "Thứ tư";
//         break;
//     case 4:
//         day_name = "Thứ năm";
//         break;
//     case 5:
//         day_name = "Thứ sau";
//         break;
//     case 6:
//         day_name = "Thứ bảy";
// }
// console.log(day_name);

// bài 7

// var radomNumber1 = Math.random() * 10;
// var radomNumber2 = Math.random() * 100;
// var radomNumber3 = Math.random() * 50 + 50;
// console.log(radomNumber1);
// console.log(radomNumber2);
// console.log(radomNumber3);

// var num = 7.434345;

// console.log(Math.round(num));
// console.log(Math.ceil(num));
// console.log(Math.floor(num));
// console.log(num.toFixed(2));

// var a = "8";
// var b = "5";
// console.log(parseInt(a) + parseInt(b));

// console.log(Math.pow(2,10));
