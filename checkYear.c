#include <stdio.h>
#include <cs50.h>
#include <math.h>

int main(void){
    
    int givenMonth;
    printf("What month from the past?");
    scanf("%i", givenMonth);
    
    int givenYear;
    printf("What year from the past?");
    scanf("%i", givenMonth);
    
        int currentYear;
    printf("What is the current year?");
    scanf("%i", currentYear);
    
    int currentMonthNumber;
    printf("What is the current month(number)?");
    scanf("%i", givenMonth);

//int givenMonth = get_int("What month from the past?");
//int givenYear = get_int("What year from the past?");

//int currentYear = get_int("What is the current year?");
//int currentMonthNumber = get_int("What is the current month(number)?")

int monthDifference = currentMonthNumber - givenMonth;
int yearDifference = currentYear - givenYear;
printf( "This is the difference between the given date and the current date %i years and %i  months\n", abs(yearDifference), abs(monthDifference));
}
