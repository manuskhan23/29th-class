// var table = +prompt("please enter table number:-")
// var tablerange=+prompt("please enter range:-")
// for (var a = 1; a <= tablerange; a++) {
//     document.write(table+" x" + a +" =" +a*table+"<br>")
// }
// var city=prompt("enter your city name:-")
// var ctya=['karachi','lahore','multan']
// for (var i=0; i <= 2; i++){
//     if (city==ctya[i]) {
//         document.write("allow")
//     }
//     else{
//         document.write("not allow<br>")
//     }
// }
var city=prompt("enter your city name:-")
var ctya=['karachi','lahore','multan']
var me=true;
for (var i=0; i <= 2; i++){
    if (city==ctya[i]) {
        me = false
        document.write("allow")
    }
}
if(me==true){
    document.write("not allow")
}