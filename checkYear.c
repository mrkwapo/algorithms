//redoing this without using CS50 library. Still incomplete

#include <stdio.h>
#include <stdlib.h>

int main(void){

    char num1[1];
    printf("What month from the past?");
    scanf("%s", num1);

    int givenMonth = atoi(num1);

    char num2[1];
    printf("What year from the past?");
    scanf("%s", num2);

    int givenYear = atoi(num2);

    char num3[1];
    printf("What is the current month(number)?");
    scanf("%s", num3);

    int currentMonthNumber = atoi(num3);

    char num4[1];
    printf("What is the current year?");
    scanf("%s", num4);

    int currentYear = atoi(num4);



int monthDifference = currentMonthNumber - givenMonth;
printf("month difference %i \n", monthDifference);

int yearDifference = currentYear - givenYear;
printf("year difference %i \n", yearDifference);

printf( "This is the difference between the given date and the current date %i years and %i  months\n", abs(yearDifference), abs(monthDifference));
}
