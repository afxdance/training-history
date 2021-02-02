# Getting started

Welcome! This is the training team project for History. In this project, you will be recreating a simple version of our AFX [https://afx.dance/](website) using React and Typescript

To set up your environment, do the following: \

1. Install [https://nodejs.org/en/download/](nodejs), if you haven't already \
2. On your terminal, under the root directory (training-history/), run `npm install` (npm stands for node package manager, and is installed with NodeJS) \
3. Run `npm start`, which will open [http://localhost:3000](http://localhost:3000)! You will see a very bare bones website...very soon it will be a lot livelier! 

## Project Structure

### src/App.tsx

For our purposes, this is the root of our application. \
Upon completing all components, remove all un-commented out sections to see the app come to life!

### src/App.css

We have implemented all necessary css for you (don't mess with the pre-existingclass names!) \
If you have spare time, you can experiment with this file to make your app look prettier :)

### src/types.tsx

Since we use typescript, we store all our types in this file. \
The types you see in this file are comprehensive, so you don't have to worry about writing new types (only how to properly use them!)

### src/components/SpotlightComponent

This component "spotlights" a single person. \
We've already implemented most of this for you, but right now we only display a static ID (though this component is meant to be dynamic) \
We recommend implementing this last, as this will require a state change in the App.

### src/components/PersonComponent

Represents a single person. \
This is a really important component (think, what other components might need it?), so we recommend you tackle this one first!

### src/components/BoardComponent

Represents AFX Board. \
For simplicity sake, we only have **one** board in our data.tsx file (whereas in AFX each semester is a different board)

### src/components/TeamComponent

Represents a single team. 

### src/components/TeamsComponent

Represents all teams in the data.tsx 

## Approaching the project

Starting out, this may look intimidating, but as you may already see, you can break this entire project down into manageable chunks! \

To finish this project, we suggest following a set of deliverables: \

1. Think about, and then draw/map out the relationships between each component in the App. We suggest using a tree structure, with App.tsx at the top. \
Before you start coding, show your work to one of the training leads! \
2. Get familiar with the skeleton code. Look back to concepts introduced in our slide deck and see if you can identify places where these concepts have already been used (or may be needed!) \
3. Start coding! Our recommended order in implementation is PersonComponent --> BoardComponent --> TeamComponent --> TeamsComponent --> SpotlightComponent \
However, feel free to approach this project in any way you want (it's doable if you put enough thought into step 1!!) \
4. If you are ever stuck or have any questions, **ask**. The training leads are here as a resource for you to use <3 \

Good luck on the project! Go History and Go React :D










