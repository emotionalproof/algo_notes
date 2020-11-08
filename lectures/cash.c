//standard libary
#include <stdio.h>
//cs50 library
// #include <cs50.h>
#include <math.h>

//all code lives heres
int main(void)

//must use curlies to encapsulate code
{
    float change;
    
    do
    {
        change = get_float("How much change is owed?\n");
    }
    while (change < 0);

    int cents = round(change * 100);
    
    int count = 0;
    int quarters = 0;
    int dimes = 0;
    int nickels = 0;
    int pennies = 0;
    // while (cents > 0)
    // {
    //     if (cents > 25)
    //     {
    //         cents -= 25;
    //         count++;
    //         quarters++;
    //     }
    //     else if (cents >= 10 && cents < 25)
    //     {
    //         cents -= 10;
    //         count++;
    //         dimes++;
    //     }
    //     else if (cents >= 5 && cents < 10)
    //     {
    //         cents -= 5;
    //         count++;
    //         nickels++;
    //     }
    //     else if (cents >= 1 && cents < 5)
    //     {
    //         cents -= 1;
    //         count++;
    //         pennies++;
    //     }
    // }
    printf("%i\n", count);
    printf("%i cents\n", cents);
    printf("%f change\n", change);
    printf("%i quarters \n", quarters);
    printf("%i dimes \n", dimes);
    printf("%i nickels \n", nickels);
    printf("%i pennies \n", pennies);
}