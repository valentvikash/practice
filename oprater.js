const a = +prompt("enter first number: ");
const o = prompt("enter operator");
const b =+prompt("enter second number: ");

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
