/*var a=8;
 var flag=true;
 // 从2到a-1之间找，如果有某个数能整除，就说明不是素数
 for (var i=2;i<a;i++){
     if (a%i==0){
         console.log("这个数不是素数");
         flag=false;
         break;
     }
 }
 if (flag){
     console.log("这个数是素数");
 }

  */


/*for (var i=1;i<=10;i++){
    console.log("我跑的是第"+i+"圈");
    if (i==6){
        //break;   //continue;结束本次，直接到下一次循环
        continue;
    }
    console.log("……");
}

 */

/*var i=1;
var sum2=0;
while( i<=100){
    sum2+=i;
    i++;
}
console.log(sum2);


 */
/*function add(a=0,b=0,c=0) {
    if (a > b) {
        return;
    }
    console.log(a + b + c);
}
 */


/*var x=function (a,b) {
    return a+b; //有返回值
}
var z=x(3,4);
console.log(z);
 */
/*function introduce(name,age,province) {
    return "我是"+name+"，今年"+age+"岁，来自"+province+"。";
}
var str=introduce("小明",20,"湖南");
console.log(str);
 */
/*var person={name:"小明",gender:"男",age: 25,province:"湖南"};
console.log(person.name);
console.log(person["age"]);
for (x in person){
    console.log(x+person[x]);
}
 */

/*var myObject = {
    firstName:"陈",
    lastName: "明",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
console.log( myObject.fullName());

 */

/*var str="123abc Abcdfad";
console.log(str.length);
var ind=str.indexOf("a");
console.log("a第一次出现时的下标："+ind);
var str2=str.replace("123","456");
console.log(str2);
console.log(str.toUpperCase());
 */
/*var str_s="12/45/78/45612";
var res=str_s.split("/");
console.log(res);//分割后返回字符串数组
 */
function f4()
{
    var num = 1;
    do {
        if (num % 7 == 0)
        {
            console.log(num+",");
        }
        num++;
    } while (num <= 300);
    console.log(num);
}
function f5()
{
    for(var a=100;a<200;a++){
        if(a%3==1 && a%4==2 && a%5==3){
            document.write("操场上共有"+a+"个人");
        }
    }
}

function f6() {

    for(var i=1; i<=200; i++){
        //flag 为标志位
        var flag = true;
        // 所以我们从2开是循环 如果2到本身之间有一个数能被其整除那么这个数就不是素数，就跳出循环
        for(var j=2; j<i; j++){
            if(i%j==0){
                //不是素数标志位设为 flase
                flag = false;
                break;
            }
        }
        //标志位是true时才会输出 i
        if(flag){
            console.log(i);
        }
    }

}
/*function checkPhoto(){
    var type="";
    if(document.getElementById("newphoto").value!=''){
        type=document.getElementById("newphoto").value.match(/^(.*)(\.)(.{1,8})$/)[3];
        type=type.toUpperCase();
    }

    if(type!="JPEG"   &&   type!="PNG"   &&   type!="JPG"   &&   type!="GIF"){
        alert("上传图片类型错误");
        return false;
    }
}

 */


/*
function photoCheck(obj){

    var ff = $("#photoSrc").val();
    if(ff == null || ff == ""){
        alert("请选择文件");
        return;
    }else if(!/.(gif|jpg|jpeg|png|gif|jpg|png)$/.test(ff)){
        alert("图片类型必须是.gif,jpeg,jpg,png中的一种");
        return;
    }
    photo_flag = true;
    //设置限制图像的大小为10MB，这里你可以自己设置
    var fSize = 1024 * 1024 *10;
    //限制图片宽高
    var fHeight = 3000;
    var fWidth = 3000;

    var fileType;
    var fileSize;
    var filePath;
    var img = new Image();
    //显示图片
    if (obj.files) {
        //用来把文件读入内存，并且读取文件中的数据，要注意的是只有 Firefox 3.6+ 和 Chrome 6.0+ 实现了 FileReader 接口。
        var reader = new FileReader();
        //获取文件的对像
        var thisFile = obj.files[0];
        //获取上传文件的类型，一般来说，如果类型是image/jpeg,.jpg,.gif等等图片格式的话就是合理的
        fileType = thisFile.type;
        //获取当前上传的文件的大小
        fileSize=thisFile.size;
        readAsDataURL：该方法将文件读取为一段以 data: 开头的字符串，这段字符串的实质就是 Data URI，Data URI是一种将小
        文件直接嵌入文档的方案。这里的小文件通常是指图像与 html 等格式的文件
        reader.readAsDataURL(thisFile);
        //文件读取成功完成时触发
        reader.onloadend = function(event){
            // 图像的路径
            img.src = event.target.result;
            // 图片加载完毕后
            img.onload = function(event) {
                //效验图片规格
                specification(img);
                filePath = this.src;
                if(photo_flag){
                    //设置图片为当前上传的图片路径
                    $("#imgShow").attr("src", filePath);
                }else{
                    //否则设置默认的图片
                    $("#imgShow").attr("src", "default.jpg");
                }
            }
        }

    }else{// 如果是ie浏览器

        //选择当前全部文本内容
        obj.select();
        /*
            为选择的内容创建一个Range对象，在.text转换成文本
            什么是Range？https://my.oschina.net/122612475/blog/286302
            所谓"Range"，是指HTML文档中任意一段内容。一个Range的起始点和结束点位置任意，甚至起始点和结束点可
            以是一样的（也就是空Range）。最常见的Range是用户文本选择范围(user text selection)。当用户选择了
            页面上的某一段文字后，你就可以把这个选择转为Range。当然，你也可以直接用程序定义Range

        var path = document.selection.createRange().text;
        img.src = path;
        //效验图片规格
        specification(img);
        //取出文件后缀
        var fileType = path.substring(path.length-4,path.length);
        if(img.readyState == "complete") {
            //图片加载完毕,获取图片的大小
            fileSize = img.fileSize;
        }else{
            //当的该对象的 load state 改变时，会触发此事件
            img.onreadystatechange = function(){
                // 当图片load完毕
                if(img.readyState=='complete'){
                    fileSize = img.fileSize;
                    if(fileSize > fSize){
                        photo_flag = false;
                        $("#imgShow").attr("src", "default.jpg");
                        return;
                    }
                }
            }
        }
        if (path) {
            filePath = path;
        }
    }

    //图片格式的判断
    if(
        fileType != ".jpg" && fileType != ".JPG" && fileType != "image/jpeg" &&
        fileType != ".png" && fileType != ".PNG" && fileType != "image/png"  &&
        fileType != ".gif" && fileType != ".GIF" && fileType != "image/gif"
    ){
        alert("图片类型必须是.gif,jpeg,jpg,png中的一种");
        photo_flag = false;
        $("#imgShow").attr("src", "default.jpg");
        return;
    }
    //效验图片内存大小
    if(fileSize > fSize){
        alert("图片太大了！");
        photo_flag = false;
        $("#imgShow").attr("src", "default.jpg");
        return;
    }
    if(photo_flag){
        $("#imgShow").attr("src", filePath);
    } else {
        $("#imgShow").attr("src", "default.jpg");
    }
    // 匿名函数:效验图片规格
    var specification = function(image){
        if(image.width >= fWidth || image.height >= fHeight){
            alert("*提示：文件大小不对。您只能上传小于等于"+fWidth+"*"+fHeight+"尺寸的图片");
            $("#imgShow").attr("src", "default.jpg");
            return;
        }
    }
}
*/


function checkForm(){
    var idcard =document.getElementById("servertypename").value;
    var fileName = $('#uploadPath').val();
    var check_flag = false;
    if(idcard==""){
        alert("类型名称不能为空！");
    }else if(fileName==""){
        alert("请上传图标！");
    }else {
        if(flag==1)
            alert("您只能输入GIF,BMP,PNG,JPG,JPEG格式的文件");
        else if(flag==2)
            alert("请上传指定格式的图片！");
        else
            check_flag = true;
    }
    return check_flag;
};







