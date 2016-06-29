/*
Itsa Mario
Toward the end of World 1-1 in Nintendo’s Super Mario Brothers, Mario must ascend a "half-pyramid" of blocks before leaping (if he wants to maximize his score) toward a flag pole. 

Write, in a file called mario.c in your ~/workspace/pset1 directory, a program that recreates this half-pyramid using hashes (#) for blocks. However, to make things more interesting, first prompt the user for the half-pyramid’s height, a non-negative integer no greater than 23. (The height of the half-pyramid pictured above happens to be 8.) If the user fails to provide a non-negative integer no greater than 23, you should re-prompt for the same again. Then, generate (with the help of printf and one or more loops) the desired half-pyramid. Take care to align the bottom-left corner of your half-pyramid with the left-hand edge of your terminal window, as in the sample output below, wherein underlined text represents some user’s input.

*/
#include <stdio.h>
#include <string.h>

int checker(int i) 
{
    if(i >= 0 && i <= 23) {
        return 1;
    }
    else {
        return 0;
    }
}

int getinput(void) 
{
    //inits as an array
    int arr[BUFSIZ];
    printf("Height: ");
    scanf("%d", arr);
    //take 1st element of input array && use checker for 
    //determining if height is acceptable
    int newnum = arr[0];
    if(checker(newnum)) {
        return newnum;
    }

    return getinput();
}

int printHeight(int i, int k) {
    while(i > 0) {
        printf(" ");
        i--;
    }
    while(k > 0) {
        printf("#");
        k--;
    }
    return 0;
}

int main(void) 
{
    int num = getinput();
    int total = num + 1;
    int whtspc = total - 2;
    int pounds = total - whtspc;
    while(whtspc >= 0) {
        printHeight(whtspc, pounds);
        printf("\n");
        whtspc--;
        pounds++;
    }
    return 0;
}