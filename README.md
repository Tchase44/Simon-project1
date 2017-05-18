
# Simon
### that simple kids game from the 80's

It is a game that test your memeroy with an ever increasing sequence of colors.


## How this was created

This game was built with the basics: javaScript with some help from jQuery.
The orirginal plan was to create a Game object/class to contain all the logic. Bugs caused that plan to be scraped and a replaced with "just make it work". 

So the code is a bit messy but i did my best to comment so one can fallow along.

CSS design was to make the game as simple and as self explainitory as possible.
I found inspiration for the hard mode style after hex-grid games. I found a few tutorials of making hexagons with pure css and used relative positioning to get every hexagon in pixel perfect placement.

## INSTALLATION INSTRUCTIONS

- Step one: Go to the link [https://tchase44.github.io/Simon-project1/](https://tchase44.github.io/Simon-project1/)
- Step two: Play

## Unresolved issues
1. JS needs some serious DRY reworking
2. Game only works online (by design it uses localStorage which causes errors when run locally)
3. Only checks for correntness after the number of user inputs = the length of the computer sequence.
  * ie. if the 1st click of 3 is worng, the game wont evaluate right/wrong until click 3
4. Not mobile friendly
5. Never got to add sound to the flashing or user clicks

