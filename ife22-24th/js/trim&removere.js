/*
实现一个字符串头尾去除空格的函数
注意需要去除的空格，包括全角、半角空格
暂时不需要学习和使用正则表达式的方式
*/
function diyTrim(str) {
    var result = "";
    var len = str.length - 1;
    result = str;
    while (result.indexOf(" ") == 0) {
        result = result.slice(1);
    }
    while (result.indexOf(" ") == len) {
        result = result.slice(0, len-1);
        len -= 1;
    }
    return result;
}

// 测试用例
console.log(diyTrim(' a f b    ')); // ->a f b
console.log(diyTrim('    ffdaf    ')); // ->ffdaf
console.log(diyTrim('1    ')); // ->1
console.log(diyTrim('　　f')); // ->f
console.log(diyTrim('  　  a f b 　　 ')); // ->a f b
console.log(diyTrim(' ')); // ->
console.log(diyTrim('　')); // ->
console.log(diyTrim('')); // ->

/*
去掉字符串str中，连续重复的地方
*/
// function removeRepetition(str) {
//     var result = "";
//
//     // do something
//
//     return result;
// }
//
// // 测试用例
// console.log(removeRepetition("aaa")); // ->a
// console.log(removeRepetition("abbba")); // ->aba
// console.log(removeRepetition("aabbaabb")); // ->abab
// console.log(removeRepetition("")); // ->
// console.log(removeRepetition("abc")); // ->abc