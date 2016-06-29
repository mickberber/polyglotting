/*
Given a floating point number(up to 2 past the deciaml), return the least number of coins it would take to creat that change
Q:25 D:10 N:5 P:1
*/

#include <stdio.h> 
//check for values within our range
int checker(float i) 
{
    if(i >= 0 && i <= 1) {
        return 1;
    }
    else {
        return 0;
    }
}

float getinput(void) 
{
    //inits as an array
    float arr[BUFSIZ];
    printf("How much change is  owed? ");
    scanf("%f", arr);
    //take 1st element of input array && use checker for 
    //determining if height is acceptable
    float newnum = arr[0];
    if(checker(newnum)) {
        return newnum;
    }

    return getinput();
}

int main(void) {
    //get input, perform check for if it is within range
    float num = getinput();
    float q, d, n, p; 
    int totalcoins = 0;
    
    q = 0.25;
    d = 0.10;
    n = 0.05;
    p = 0.01;

    while(num >= q) {
        totalcoins++;
        num = num - q;
    }
    while(num >= d) {
        totalcoins++;
        num = num - d;
    }
    while(num >= n) {
        totalcoins++;
        num = num - n;
    }
    while(num >= p) {
        totalcoins++;
        num = num - p;
    }

    printf("%d\n", totalcoins);
    return 0;
;}