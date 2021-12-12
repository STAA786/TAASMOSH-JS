for (let i=0; i<5; i++)   //  for (); minor change like ; if we add to paranthesis in for loop then it print only one time.
                          // in condition <= give again one time run loop it runs  additional one time , so declare only "<" or ">";
                           // if we  terminate or remove i++  the loop continue to indefinite time.
                          // (if i=0 and i<5 ,then i--  declareation also indefinite times)
                           //declare with "CONST" variable the loop will stop , it is not execute.
                           // decalre variable with "var" it scope is global and we not want our loop to execute outsied of block {}
{
    //console.log('Hello JOHN how are you');
    console.log('Hello JOHN how are you',i);     // if we declare i in console then we get index value of same.
}

// initialize  variable from 1

for (let j=1; j<5; j++)     // here in this we initialize our data from 1 and print to 5 by = operator,if we remove = then the output goes to 4 only.
{
    console.log("Happy New Year",j);
}

// reverse loop 
for (let z=5; z>=1; z--)
{
    console.log("Reverse way to road",z);
}