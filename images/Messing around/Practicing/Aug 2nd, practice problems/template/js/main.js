//https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php


//1.
function displayLarger(num1,num2){
    if (num1 > num2){
        console.log(num1)
    } else {
        console.log(num2)
    }
}
displayLarger(8,5)

//2.
function addAndSaySign(num1,num2,num3){
    let sum = num1 + num2 + num3
    if (sum > 0){
        return "+"
    } else if (sum < 0){
        return "-"
    } else {
        return "0"
    }
}
console.log(addAndSaySign(1,-8,3))


//3.
function sortThreeNumbers(num1,num2,num3){
    if ((num1 > num2) && (num1 > num3)){
        if (num2 > num3){
            console.log(num1, num2, num3)
        } else {
            console.log(num1, num3, num2)
        }
    } else if (num2 > num1 && num2 > num3){
        if (num1 > num3){
            console.log(num2, num1, num3)
        } else{
            console.log(num2, num3, num1)
        }
    } if (num3 > num1 && num3 > num2){
        if (num1> num2){
            console.log(num3 > num1> num2)
        } else{
            console.log(num3, num2, num1)
        }
    }
   
}

sortThreeNumbers(4,5,6)

//4.
function findTheLargest(num1, num2, num3, num4, num5){
    return Math.max(num1,num2,num3,num4,num5)
}

console.log(findTheLargest(10,14,-7,4,1))

//5.
function oddsAndEven(num){
    for (let i = 0; i <= num; i++){
        if (i % 2 == 0){
            console.log("Even")
        } else{
            console.log("Odd")
        }
    }
}

oddsAndEven(1)

//

//Playful Sort. sort can be used on numbers, but it has to be an array. As for changing the array back to numbers... that I dunno how to do. So i need to practice arrays on code wars.

// function sortNumbers(num1, num2, num3){
//     let numbersArrayed = [num1, num2, num3]
//     return numbersArrayed.sort();
// }

// console.log(sortNumbers(10,24,1))



//6. 

function findTheAverage(stu1, stu2 ,stu3 ,stu4 ,stu5){
    let average = (stu1 + stu2 + stu3 +stu4 + stu5) / 5
    if (average < 60){
        return "F"
    } else if (average < 70){
        return "D"
    } else if (average < 80){
        return "C"
    } else if (average < 90){
        return "B"
    } else if (average < 100){
        return "A"
    }
}
console.log(findTheAverage(80, 77, 88, 95, 68))

//7. 

function fizzBuzz(num){
    for (let i = 1; i<=num; i++){
        if (i % 3 == 0 && i % 5 == 0){
            console.log("fizzBuzz")
        } else if (i % 5 == 0){
            console.log("buzz")
        } else if (i % 3 == 0){
            console.log("fizz")
        } else {
            console.log(i)
        }
       
      
    } 
}

fizzBuzz(15)

//9.

//P.R.E.P PARAMETER, RETURN, EXAMPLE, PSEUDO CODE

function three_digit_armstrong_number() 
{
 for (var i = 1; i < 10; ++i) 
 {
   for (var j = 0; j < 10; ++j) 
     {
        for (var k = 0; k < 10; ++k)
        {
            //Math.pow returns a value of a base raised to the power. 
          var pow = (Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3)); 
          var plus = (i * 100 + j * 10 +  k);
          if (pow == plus) 
           {     
             console.log(pow);
            }
         }
       }
    }
  }
three_digit_armstrong_number();

