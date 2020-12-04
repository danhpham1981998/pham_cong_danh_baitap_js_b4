/**
 * BT1
 * Sắp xếp tăng dần
 * input: a: số thứ nhất
 *        b: số thứ hai
 *        c: số thứ ba  
 * recipe: so sánh từng phần tử
 * output: dãy số được sắp xếp theo chiều tăng dần
 */


var btnSort = document.getElementById("btnSort");
btnSort.addEventListener("click", function(){
   var inputFirst = document.getElementById("inputFirst");
   var inputSecondary = document.getElementById("inputSecondary");
   var inputThird = document.getElementById("inputThird");
   var resultSort = document.getElementById("resultSort");

   var a = parseFloat(inputFirst.value);
   var b = parseFloat(inputSecondary.value);
   var c = parseFloat(inputThird.value);
   
   if(a == parseInt(a) && b == parseInt(b) && c == parseInt(c)){
       if(a > b){
           if(b > c)
               resultSort.innerHTML = "Kết quả sau khi sắp xếp: " + c + " < " +  b + " < " + a;
           else if (a > c)
               resultSort.innerHTML = "Kết quả sau khi sắp xếp: " + b + " < " +  c + " < " + a;
           else
               resultSort.innerHTML = "Kết quả sau khi sắp xếp: " + b + " < " +  a + " < " + c;
       }else if (b > c){
           if(a > c)
               resultSort.innerHTML = "Kết quả sau khi sắp xếp: " + c + " < " +  a + " < " + b;
           else
           resultSort.innerHTML = "Kết quả sau khi sắp xếp: " + a + " < " +  c + " < " + b;
       }else {
           resultSort.innerHTML = "Kết quả sau khi sắp xếp: " + a + " < " +  b + " < " + c;
       }

   }else {
       resultSort.innerHTML = "Yêu cầu nhập lại số nguyên"
   }
});


 /**
 * BT2
 * Nhận diện "Chào hỏi"
 * input: radioBo: Bố
 *        radioMe: Mẹ
 *        radioAnh: Anh trai
 *        radioEm: Em gái
 * output: Lời chào hỏi sau khi nhận dạng
 */
var btnChao = document.getElementById("btnChao");
btnChao.addEventListener("click", function(){
    var radioBo = document.getElementById("radioBo");
    var radioMe = document.getElementById("radioMe");
    var radioAnh = document.getElementById("radioAnh");
    var radioEm = document.getElementById("radioEm");
    var resultTxt = document.getElementById("resultTxt");

    if(radioBo.checked)
       resultTxt.innerHTML = "Chào Bố!" + "<br>Chúc Bố một ngày tốt lành";
    else if(radioMe.checked)
       resultTxt.innerHTML = "Chào Mẹ Yêu!" + "<br>Chúc Mẹ một ngày tốt lành";
    else if(radioAnh.checked)
       resultTxt.innerHTML = "Hello my brother!" + "<br>Have a nice day";
    else
       resultTxt.innerHTML = "Hello younger sister!" + "<br>Have a nice day";
       
});


  /**
 * BT3
 * Tìm số chẳn lẻ
 * input: num1: số thứ nhất
 *        num2: Số thứ hai
 *        num3: Số thứ ba
 * recipe: num%2 = 0 là số chẳn. Ngược lại, là số lẻ
 * output: Đếm số chẳn lẻ trong 3 số vừa nhập
 */
var btnEvenOdd = document.getElementById("btnEvenOdd");
btnEvenOdd.addEventListener("click", function(){
    var num1 = parseFloat(document.getElementById("inputNum1").value);
    var num2 = parseFloat(document.getElementById("inputNum2").value);
    var num3 = parseFloat(document.getElementById("inputNum3").value);
    var result = document.getElementById("resultEvenOdd");

    var countOdd = 0;
    var countEven = 0;

   if(num1 == parseInt(num1) && num2 == parseInt(num2) && num3 == parseInt(num3)){
       if(num1%2 == 0){
          countEven++;
           if(num2%2 == 0){
               countEven++;
               if(num3%2 == 0)
                   countEven++;
           }
       }
   }else {
       result.innerHTML = "Yêu cầu nhập lại số nguyên"
   }

   countOdd = 3 - countEven;
   result.innerHTML = "Có " + countEven + " số chẳn" + "<br>Có " + countOdd + " số lẻ";
});


 /**
 * BT4
 * Tìm tam giác
 * input: c1: cạnh thứ nhất
 *        c2: cạnh thứ hai
 *        c3: cạnh thứ ba
 * recipe: tam giác cân 2 cạnh bằng nhau
 *         tam giác đều 3 cạnh bằng nhau
 *         tam giác vuông theo định lý Py-ta-go
 * output: Tam giác cân hoặc tam giác đều hoặc tam giác vuông hoặc tam giác thường
 */
var btnTriangle = document.getElementById("btnTriangle");
btnTriangle.addEventListener("click", function(){
    var c1 = parseFloat(document.getElementById("inputCanh1").value);
    var c2 = parseFloat(document.getElementById("inputCanh2").value);
    var c3 = parseFloat(document.getElementById("inputCanh3").value);
    var result = document.getElementById("resultTriangle");
   console.log(c1, c2, c3);
   if(c1 > 0 && c2 > 0 && c3 > 0){
       if(c1 == c2 || c1 == c3 || c2 == c3){
           if(c1 == c2 && c2 == c3){
               result.innerHTML = "Đây là tam giác đều" + "<br>(Vì có 3 cạnh bằng nhau)";
           }else{
               result.innerHTML = "Đây là tam giác cân" + "<br>(Vì có 2 cạnh bằng nhau)";
           }
       }
       else if(c1*c1 == c2*c2 + c3*c3 || c2*c2 == c1*c1 + c3*c3 || c3*c3 == c2*c2 + c1*c1){
           result.innerHTML = "Đây là tam giác vuông" + "<br>(Theo định lý Py-ta-go)";
       }else
          result.innerHTML = "Đây là tam giác thường";
   }else{
       result.innerHTML = "Yêu cầu nhập lại số dương";
   }
});