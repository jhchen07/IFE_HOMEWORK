var btns = document.querySelectorAll("button");
var p = document.querySelector("#result");
var text_a = document.querySelector("#str-a");
var text_b = document.querySelector("#str-b");
var a = document.querySelector("#num-a");
var b = document.querySelector("#num-b");

var getA = function () {
    if (typeof Number(a.value) == "number"){
        return Number(a.value);
    } else {
        alert("Please enter a legal number for number a!");
    }
}

var getB = function () {
    if (typeof Number(b.value) == "number"){
        return Number(b.value);
    } else {
        alert("Please enter a legal number for number b!");
    }
}
var gettext_a = function () {
    if (text_a.value != null){
        return text_a.value;
    } else {
        alert("Please enter text for string a");
    }
}

var gettext_b = function () {
    if (text_b.value != null){
        return text_b.value;
    } else {
        alert("Please enter text for string b");
    }
}

var getRadioValue = function () {
    var radios = document.getElementsByName("str-obj");
    var end = "";
    var input_w;
    for (var i = 0; i < radios.length; i++){
        if (radios[i].checked){
            if (radios[i].value){
                end = radios[i].value
            }
        }
    }
    input_w= document.getElementById("str-"+end);
    return input_w.value;
}

var gettextlength = function () {
    var content = getRadioValue().length;
    p.innerHTML = "文本框内容长度为：" + content;
}

var _3rdchar = function(){
    var content = getRadioValue();
    if (content.length >= 3){
        p.innerHTML = "当前输入内容第3个字符为：" + content.charAt(2);
    } else p.innerHTML = "当前输入内容不足3个字符";
}

var displaycontent =function(){
    p.innerHTML = "文本框内容拼接为：" + gettext_a().concat(gettext_b());
}

var bfromaindex = function(){
    var ta = gettext_a();
    var tb = gettext_b();
    if (ta.indexOf(tb) >= 0){
        p.innerHTML = "B中的内容，在输入A的内容中第一次出现的位置: "+ta.indexOf(tb);
    } else p.innerHTML ="B中的内容不含在A的内容中";
}

var afromblastindex = function(){
    var ta = gettext_a();
    var tb = gettext_b();
    if (tb.lastIndexOf(ta) >= 0){
        p.innerHTML = "输入A中的内容，在输入B的内容中最后一次出现的位置: "+tb.lastIndexOf(ta);
    } else p.innerHTML ="A中的内容不含在B的内容中";
}

var getslice = function(){
    var str = getRadioValue();
    var num_a = getA();
    var num_b = getB();
    if (str != null){
        p.innerHTML =str.slice(num_a, num_b);
    } else p.innerHTML ="输入的内容为空";
}

var getrows = function(){
    var radios = document.getElementsByName("str-obj");
    var end = "";
    var input_w;
    for (var i = 0; i < radios.length; i++){
        if (radios[i].checked){
            if (radios[i].value){
                end = radios[i].value
            }
        }
    }
    input_w= document.getElementById("str-"+end);
    p.innerHTML ="当前选中输入框的行数为："+ input_w.rows;
}

var getsubstr = function(){
    var str = getRadioValue();
    var num_a = getA();
    var num_b = getB();
    if (str != null){
        p.innerHTML =str.substr(num_a, num_b);
    } else p.innerHTML ="输入的内容为空";
}

var _tolowercase = function(){
    var content = getRadioValue();
    p.innerHTML ="当前选中输入框的内容小写为："+ content.toLowerCase();
}
var _touppercase = function(){
    var content = getRadioValue();
    p.innerHTML ="当前选中输入框的大写为："+ content.toUpperCase();
}

var trimall= function(){
    var content = getRadioValue();
    while (content.indexOf(" ") != -1){
        content.replace(" ", "");
    }
    p.innerHTML ="当前选中输入框的内容去掉空格为："+ content;
}

var replaceabyb = function(){
    var content = getRadioValue();
    var ta = gettext_a();
    var tb = gettext_b();

    if (content.search("a" != -1)){
        if (content == ta)  {
            p.innerHTML = content.split("a").join(tb);
        }else p.innerHTML = content.split("a").join(ta);
    }
}

EventUtil.addHandlers(btns[0], "click", gettextlength);
EventUtil.addHandlers(btns[1], "click", _3rdchar);
EventUtil.addHandlers(btns[2], "click", displaycontent);
EventUtil.addHandlers(btns[3], "click", bfromaindex);
EventUtil.addHandlers(btns[4], "click", afromblastindex);
EventUtil.addHandlers(btns[5], "click", getslice);
EventUtil.addHandlers(btns[6], "click", getrows);
EventUtil.addHandlers(btns[7], "click", getsubstr);
EventUtil.addHandlers(btns[8], "click", _touppercase);
EventUtil.addHandlers(btns[9], "click", _tolowercase);
EventUtil.addHandlers(btns[10], "click", trimall);
EventUtil.addHandlers(btns[11], "click", replaceabyb);