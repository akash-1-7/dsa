/*
Name : DESHMUKH VIRAJ
Div : A
ROllNo. : 2301030
22.Write a program to count all possible unique paths from top left to bottom right of
a mXn matrix
*/
// Number of Paths


function numberOfPaths(m, n)
    {
     
      
        if (m == 1 || n == 1)
            return 1
         
       
        return numberOfPaths(m - 1, n) + numberOfPaths(m, n - 1)
        
       
    }
     
    console.log(numberOfPaths(3, 3))