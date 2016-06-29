#include <stdio.h>

/*
Print Fahrenheit-Celsius table
    for fahr = 0, 20 etc
*/ 

int main() 
{
    float fahr, celsius;
    int lower, upper, step;

    lower = 0; /*Lower limit of table*/
    upper = 300; /*Upper limit of table*/
    step = 20; /*Step size*/

    fahr = lower;

    while(fahr <= upper) {
        celsius = (5.0 / 9.0) * (fahr - 32.0);
        printf("%3.0f %6.1f\n", fahr, celsius);
        fahr = fahr + step;
    }
}

/*
Print 
%d print decimal integer
%6d print       "       at least 6 chars wide
%f print as floating point
%6f print       "               "
%%.2f print     "       2 chars after the decimal point
%6.2f print floating point, 6 wide, 2 after decimal
*/
