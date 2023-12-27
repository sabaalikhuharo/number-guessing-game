import inquirer from 'inquirer';


type anstype = {
 userGuess :number
}


const systemGeneratedNo = Math.floor(Math.random () * 10);

console.log(systemGeneratedNo)

const answers :anstype = await inquirer.prompt([
        {
type : "number",
name :"userGuess",
message :"write you guess:"

}
])

const {userGuess} = answers
console.log(userGuess , "userGuess", systemGeneratedNo,'SYs')

if (userGuess === systemGeneratedNo){
    console.log("yeaa you nswer is correct")
}else{
    console.log("please try again")
}
