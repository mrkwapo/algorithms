#include <stdio.h>
#include <math.h>
#include <cs50.h>

int main(void)
{
  int startingHour = get_int("Starting Hour: ");
  int hoursPassed = get_int("Hours passed: ");

  int days = hoursPassed / 24;

  printf("The time is now %i:00\n", startingHour + hoursPassed % 24);
  printf(" %i Days have passed\n", days);
}
