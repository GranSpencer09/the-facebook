# The-Facebook

## Description

This back-end app is intended to empower all social-media companies to scale their growth and maintain an effecient unstructured database. Using MongoDB, Express.js and Mongoose ODM, I've created the entire back-end structure to create and seed a database as well as routes to preform many different actions common to social-media apps.

While working on this, I learned the common file strucutre for creating NoSQL databases as well as how functions can be triggered when a route is hit. I also learned how virtuals can work in the real world.

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to
find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Features](#features)
- [Tests](#tests)

## Installation

1. Navigate to the code repository
2. Press the green code button, located near the about section
3. Copy either the HTTPS, Git CLI, download the zip, open with GitHub desktop, or copy the SSH link.
4. Depending on download method, use Git, executable, or the desktop application to open the content files.
5. All of the content of the repository will be available after completion of the previous state.

## Usage

[Link to video walkthrough](https://app.castify.com/view/b533869a-6446-429b-b63b-f810457c431a)

Once you've installed the code, you need to install packages, seed the database, open Insomnia, add the routes and begin executing the functions you need. Refer to the walkthrough video and screenshots, below, for more informaation.

- [Screenshot of createUser route](/images/createUser.png)
- [Screenshot of getAllUsers route](/images/getAllUsers.png)
- [Screenshot of findAllThoughts route](/images/findAllThoughts.png)

## Credits

I worked with classmates of mine and my tutor to develop this project. I also got the name from the movie 'The Social Network'.

## Features

The primary features come from the file strucutre allowing the user to call functions by hitting specific routes. There are also virtuals used to reduce the strain on the database for scaling companies while still providing data to the user.

## Tests

The best informal test to run on this app is to create all of the following: User, Friend, Reaction and Thought. With all of those in the database, you can then test all the other routes, but I'd recommend starting with an empty database while testing.
