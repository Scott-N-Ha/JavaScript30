# JavaScript 30 - Scott's Repo
This is my repo for Wes Bos' JavaScript 30 course. I'm using this to learn more and hone my skills about JavaScript.

## Why React?
Throwing in some React. Furthermore, I plan on translating all of the exercises into TypeScript to learn more about that as well.

## Why Vite?
Seems easier to set up and run than Webpack. I'm not sure if I'll need to use Webpack for anything, but I'll cross that bridge when I get there.

### Building for Production
I'm not sure on how to make Vite read from ```index.html``` when not in the root directory. For now, I make changes to the one located in ```./src``` and then copy it out into ```root```.

1. Copy ```./src/index.html``` to ```./index.html```
2. ```npm run build```