let problems = [
{
  problem: "Write a program that stores the integers 50 and 100 in variables, and stores the sum of the variables in a
            variable named total.",
  answer: "int num1 = 50; int num2 = 100; int total = num1 + num2;",
  studentAnswer: " "
}

{
  problem: "Write a program that will compute the total sales tax on a $95 purchase. Assume the state sales tax is
            4 percent and the county sales tax is 2 percent.",
  answer: "int purchase = 95; const double stateTax = .04; const double countyTax = .02; double total = purchase + 
           (purchase * stateTax) + (purchase * countyTax);"
  studentAnswer = ""
}
];

print(problems);