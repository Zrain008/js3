---
layout: default
---





# Header 1
<div>
    <h2 style="font-size: 18px; font-family: 微软雅黑;"> 第一题：查找资料，总结.value ,innerHtml, innerText, textContent 的区别和用法</h2>
        <p style="font-family: 微软雅黑; font-size: 14px;">value：应用于表单的输入框（textarea除外）</br>
        innerHTML:可以写入HTML代码，写入的HTML代码可以被解析，获得时候也可以获得HTML代码</br>
        innerText：获得内容的时候，会忽略HTML代码，写入HTML代码不能解析。获得内容与HTML解析的内容一样</br>
        textContent：获得内容的时候，会忽略HTML代码，写入HTML代码不能解析。获取的内容与源码内容一样
    </p>
</div>
<br>
第二题</br>
<input style=" margin-top: 15px; margin-bottom: 15px" type="button" value="测试函数" onclick="f4()"></br>

第三题</br>
<input style=" margin-top: 15px; margin-bottom: 15px" type="button" value="测试函数" onclick="f5()"></br>

第四题</br>
<input style=" margin-top: 15px; margin-bottom: 15px" type="button" value="测试函数" onclick="f6()"></br>

第五题</br>

<input type="file" class="file" id="uploadPath" name="uploadPath" accept="image/gif,image/png,image/bmp,image/jpeg" onchange="previewImage(this,'img')" />
<input type="submit" name="submit" onclick="javascript:return checkForm();" value="点击提交" style="font-size:14px;width:98px;height:28px;background:#ffffff;  border: 1px solid #2e82ff;" />

<script>


   /* function my$(id) {
        return document.getElementById(id);
    };

    */
</script>

<script>
  /* my$("btn").onclick = function () {
        my$("dv").innerText = "哈哈";//设置文本
        my$("dv").innerText = "<p>这是一个p</p>";//设置html标签的代码
    };

   /*my$("btn").onclick = function () {
       my$("dv").innerHTML = "哈哈";
       my$("dv").innerHTML = "<p>这是一个p</p>";//设置Html标签的
   };

    */


</script>

<script src="script/js8.js"></script>
