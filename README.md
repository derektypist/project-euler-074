# Project Euler 074 - Digit Factorial Chains

The number 145 is well known for the property that the sum of the factorial of its digits is equal to 145: 1! + 4! + 5! = 1 + 24 + 120 = 145.

Perhaps less well known is 169, in that it produces the longest chain of numbers that link back to 169; it turns out that there are only three loops that exist:

169 → 363601 → 1454 -> 169, 871 → 45361 → 871, 872 → 45362 → 872

It is not difficult to prove that EVERY starting number will eventually get stuck in a loop.  For example, 69 → 363600 → 1454 → 169 → 363601 (→ 1454), 78 → 45360 → 871 → 45361 (→ 871), 540 → 145 (→ 145)

Starting with 69 produces a chain of five non-repeating terms, but the longest non-repeating chain with a starting number below one million is sixty terms.

How many chains, with a starting number below n, contain exactly sixty non-repeating terms?

Information at [Project Euler 074](https://projecteuler.net/problem=74)

## UX

**Getting Started**

In the input field, enter a whole number between 3 and 1000000 (without leading zeros) and select the Submit Button.  Unless you have made an invalid input, you will get the number of chains with a starting number below the number you have entered, contain exactly sixty non-repeating terms.  Select the Reset Button to clear the information or to start again.

**User Stories**

As a user, I expect to get an error message, if I do any of:

- Not enter anything in the input field
- Entering text other than a number
- Entering a number less than 3 or greater than 1000000
- Including leading zeros such as 03
- Entering a number, but it is not an integer

As a user, if I select the Reset Button, I can clear the information or start again.

As a user, if I enter 2000 and select Submit, I expect the function `digitFactorialChains(2000)` to return a number.

As a user, if I enter 2000 and select Submit, I expect the function `digitFactorialChains(2000)` to return 6.

As a user, if I enter 100000 and select Submit, I expect the function `digitFactorialChains(100000)` to return 42.

As a user, if I enter 500000 and select Submit, I expect the function `digitFactorialChains(500000)` to return 282.

As a user, if I enter 1000000 and select Submit, I expect the function `digitFactorialChains(1000000)` to return 402.

User Stories on function `digitFactorialChains(n)` taken from [FreeCodeCamp - Coding Interview Prep - Project Euler 074](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-74-digit-factorial-chains)

**Information Architecture**

The function `digitFactorialChains(n)` returns a number, where `n` is a number between 3 and 1000000.

## Features

Allows the user to enter a number in order to get the number of chains with a starting number below the number entered, that contain exactly sixty non-repeating terms.  Performs checks on valid input.  If the input is not valid, an error message is displayed.

## Technologies

Uses HTML5, CSS3, JavaScript, Bootstrap 5.3.0-alpha1 and Google Fonts.

## Testing

Ensure all user stories have been met.  In the terminal, enter:

    python3 -m http.server

Select `Open Preview` to preview.  Enter the numbers and select the Submit Button as per user story.  Select the Reset Button to confirm that the information has been cleared.  If any or all of the user stories have not been met, check typing.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/project-euler-074) at the main branch.  Go to `Settings` then `Pages`.  Select a source to enable GitHub Pages and then select `Save`.

## Credits

### Content

Written by me.

### Acknowledgements

- [Project Euler](https://projecteuler.net)
- [FreeCodeCamp](https://www.freecodecamp.org)



