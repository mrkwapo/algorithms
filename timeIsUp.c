#include <stdio.h>
#include <cs50.h>

int main(void)
{
    int startingHour = get_int("Starting Hour: ");
    int hoursPassed = get_int("Hours passed: ");
    int days = hoursPassed/24;
    int timeNow = startingHour + hoursPassed%12;

    if(timeNow >= 13)
    {
           printf("The time is now %i:00\n", timeNow%12 );
           printf(" %i Day(s) has passed\n", days); 
    } else {
           printf("The time is now %i:00\n", timeNow);
           printf(" %i Day(s) has passed\n", days); 
    }
}
