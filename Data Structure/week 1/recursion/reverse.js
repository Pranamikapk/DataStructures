function reverse(str){
    if(str === '' || str.length === 1){
        return str
    }
    return reverse(str.substring(1)) + str.charAt(0)
}

let str = "abcd"
console.log(reverse(str));

//reverse substring
function revSub(str,sub1,sub2){
    let i1 = str.indexOf(sub1)
    let i2 = str.indexOf(sub2)

    if(i1 === -1 || i2 === -1){
        return str
    }
     
    let revS1 = sub1.split('').reverse().join('')
    let revS2 = sub2.split('').reverse().join('')
    let before = str.substring(0,i1)
    let between = str.substring(i1+sub1.length , i2)
    let after = str.substring(i2+sub2.length)

    return before + revS1 + between + revS2 + after
}

const string = "john paul"
let str1 = "john"
let str2 = "paul"
console.log(revSub(string,str1,str2));
