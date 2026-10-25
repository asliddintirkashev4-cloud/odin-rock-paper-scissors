# Rock Paper Scissors

The Odin Project Foundations project by Asliddin Tirkashev, RNU group 4230Z.

[Live project](https://asliddintirkashev4-cloud.github.io/odin-rock-paper-scissors/) · [Assignment](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors)

## Run

Serve this folder with `python3 -m http.server 8765` and open http://localhost:8765. No build step or external dependencies are needed.

Run the logic tests with `npm test` or `node --test game.test.cjs`.

## Files

`index.html` defines the interface. `style.css` uses Flexbox for the layout. The logic file contains the rules and validation; `app.js` connects them to DOM events and rendering.

## Plan

Choose a random computer move, compare the pair, update one score and render the result. Draws leave scores unchanged. Stop the interface when a score reaches five. The original console version plays exactly five rounds and remains available at console.html.

## Check in the browser

Try all three choices, play until a player reaches five, check that the move buttons lock and start a new match. Open the console version and complete five valid prompts.
