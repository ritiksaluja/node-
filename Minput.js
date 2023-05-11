import readline from "readline"

const yash = readline.createInterface(process.stdin ,process.stdout)

yash.question("vinay ki age  \n" , (input)=>{
    // console.log(input)
    const number = input.split("")
    const squares = number.map((num)=> num*num);
    console.log(squares)
    // r1.write("squares:"+ squares.join(''));
    // r1.close();
    

});