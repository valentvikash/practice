let a = +("enter first number: ");
let o = opr("enter operator");
let b =+("enter second number: ");

switch(o){
    case "+":
        console.log(a+b);
        break;
    case "-":
        console.log(a-b);
        break;
        case "*":
        console.log(a*b);
        break;
        case "/":
        console.log(a/b);
        break;
        default:
        console.log("Invaild Operator ");

}
