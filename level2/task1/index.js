function BACKSPC(){
    var a= document.calculator.result.value;
    document.calculator.result.value = a.substr(0,a.length-1);
}
function square(){
    document.calculator.result.value = Math.pow(document.calculator.result.value, 2);
}
function number(value){
    document.calculator.result.value += value;
}
function remv(){
    document.calculator.result.value =" ";
}
function equal(){
    document.calculator.result.value =eval(document.calculator.result.value);
}
function solve(){
    ans=document.calculator.result;
    str=ans.value;

    n=ans.value.length;
    
    a="",b="";
    f=false;
   
    for(i=0;i<n;i++){
        if(f==true){
            b+=str[i];
        }
        if(str[i]=='^'){
            f=true;
         }
        if(f==false){
a+=str[i];
        }
    }
     ans.value=Math.pow(a,b);
}