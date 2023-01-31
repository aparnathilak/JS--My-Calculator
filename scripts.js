var flag = true;

function changetheme(){
    let myLink=document.querySelector("#theme")
    let curTheme=myLink.getAttribute("href")
    console.log(curTheme);
    if(curTheme=="./lightmode.css"){
        myLink.href="darkmode.css"
    }
    if(curTheme=="darkmode.css"){
        myLink.href="./lightmode.css"

    }
}  

function displayNumbr(event){
    if(flag){
    result.value += event.target.value
}
else{
    result.value = event.target.value
    flag = true;
}
}

function clearBox(){
    result.value=""
}

function evaluateExpression(){
    let curExp =result.value
    let out = eval(curExp)
    result.value = out
    flag = false;
}