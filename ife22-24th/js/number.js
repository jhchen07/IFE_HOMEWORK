var b1 = document.querySelector("#btn1");
var b2 = document.querySelector("#btn2");
var b3 = document.querySelector("#btn3");
var b4 = document.querySelector("#btn4");
var b5 = document.querySelector("#btn5");
var b6 = document.querySelector("#btn6");
var b7 = document.querySelector("#btn7");
var b8 = document.querySelector("#btn8");
var p = document.querySelector("#result");
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

var getRadioValue = function () {
    var radios = document.getElementsByName("math-obj");
    var end = "";
    var input_w;
    for (var i = 0; i < radios.length; i++){
        if (radios[i].checked){
           if (radios[i].value){
               end = radios[i].value
           } else alert("Please enter a number!");
        }
    }
    input_w= document.getElementById("num-"+end);
    return input_w.value;
}

var string2num = function (str) {
    str = Number(str);
    if (isNaN(str)) return false;
    else return true;
}
var checknum = function () {
    if (getRadioValue()) {
        var content = getRadioValue();
        if ( !string2num(content)) {
            p.innerHTML = "输入框内容不为数字";
        }
        else  p.innerHTML = "输入框内容为数字";
    }
}

var afloor2b = function(){
    var numa = getA();
    var numb = getB();
    if (string2num(numa) && string2num(numb)){
        p.innerHTML = numa.toFixed(numb);
    }else alert("Please enter legal number!");
}

var num2abs = function(){
    var num = getRadioValue();
    if (string2num(num)){
        p.innerHTML = Math.abs(Number(num)).toString();
    }else alert("Please enter legal number!");
}

var ceilnum = function(){
    var num = getRadioValue();
    if (string2num(num)){
        p.innerHTML = Math.ceil(Number(num)).toString();
    }else alert("Please enter legal number!");
}

var floornum = function(){
    var num = getRadioValue();
    if (string2num(num)){
        p.innerHTML = Math.floor(Number(num)).toString();
    }else alert("Please enter legal number!");
}

var roundnum = function(){
    var num = getRadioValue();
    if (string2num(num)){
        p.innerHTML = Math.round(Number(num)).toString();
    }else alert("Please enter legal number!");
}

var maxnum = function(){
    var numa = getA();
    var numb = getB();
    if (string2num(numa) && string2num(numb)){
        p.innerHTML = Math.max(numa,numb).toString();
    }else alert("Please enter legal number!");
}

var minnum = function(){
    var numa = getA();
    var numb = getB();
    if (string2num(numa) && string2num(numb)){
        p.innerHTML = Math.min(numa,numb).toString();
    }else alert("Please enter legal number!");
}

EventUtil.addHandlers(b1, "click", checknum);
EventUtil.addHandlers(b2, "click", afloor2b);
EventUtil.addHandlers(b3, "click", num2abs);
EventUtil.addHandlers(b4, "click", ceilnum);
EventUtil.addHandlers(b5, "click", floornum);
EventUtil.addHandlers(b6, "click", roundnum);
EventUtil.addHandlers(b7, "click", maxnum);
EventUtil.addHandlers(b8, "click", minnum);