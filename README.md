# Shipt ZIP Code Demo
[https://shipt-zip-demo.herokuapp.com](https://shipt-zip-demo.herokuapp.com)

[![Build Status](https://travis-ci.org/zmcnellis/shipt-zip.svg?branch=master)](https://travis-ci.org/zmcnellis/shipt-zip)

## Installation
```
git clone https://github.com/zmcnellis/shipt-zip.git && cd shipt-zip
npm install     // installs package dependencies
npm start       // starts dev server
npm test        // run Jest test runner
npm run build   // creates deployment folder
```

## Overview
The goal of the assignment is to use the mockups and assets provided in the sketch file to build out a single page application. The design should stick as close as possible to the mockups, while also demonstrating modern and responsive design principles. The main focus of the page is a search box where the user can input a ZIP code in the form, and the page will display all nearby store information.

## Technical Design
The following sections explain the different frameworks I used and why I chose to use them.

#### React
I chose to use the React library for this project since it is highly focused on the front-end and view layers compared to other MV* frameworks such as Angular. Because the only dynamic content is provided through an API, I thought that a more robust framework like Angular was not needed in this case. I also decided to use Facebook's [Create React App](https://github.com/facebook/create-react-app) for this project as it requires very little setup.

#### Jest + Enzyme
I used the Jest test runner and Enzyme utility to test the React components I built. Given more time, I would have added more test cases. Although unit testing was not part of the assignment, I think it is always helpful to write tests while developing code in order to better understand the requirements.

#### Travis CI
I used the Travis CI tool for continuous integration. This CI tool makes it very simple to view previous builds and easily integrates with GitHub and Node.js. I also integrated my GitHub project with Heroku to automatically deploy the application if all tests succeed.

#### Font Awesome
One of the only design libraries I used was Font Awesome. The mockups provided a few icons for the search bar that I instead replaced with Font Awesome icons. The icons are very similar, although I find that the Font Awesome library is easier to use when frequently changing properties such as size and color.

## Project Structure
The project `src` directory is primarily broken down into `components`, `views`, and `services`. Views typically represent an entire page or partial view, whereas components (e.g. Button) represent more modular React components that can be shared across multiple views. Since this is a single page application, there is only a single view for the ZIP code search screen. Finally, services represent any modules dealing with business logic or data access. In this application, there is only one service to handle requests to the ZIP code API.

## Limitations
While I chose to implement the application as close to the mockups as possible, there were a few UI/UX considerations that I may have implemented differently if it were possible to clarify the initial requirements. Currently, the search bar will display an invalid message if no data can be found for a particular zip code. Ideally, there should be a distinction between a poorly formatted zip code and one that has no data available. Because the mockups only listed one validation message, I chose to treat these scenarios as the same. Finally, it was unclear what the intended function was for the "Get Started" buttons that do not appear in the hero. In my application, clicking these buttons will scroll the user back up to the search box. It may have been more appropriate to change the text of some of the buttons so that it is more clear what each button should do.

Due to the time constraint, there are a few things that I wish I had done differently or better. If given more time, I would have added more comments in my code. In addition, I would spend more time writing unit tests to improve code coverage. Finally if this were a production application where performance is a priority, it may be beneficial to cache user requests if they typically search for the same location more than once.

## Extras
Tested on the following browsers:
- Google Chrome v66.0.3359.181
- Firefox v60.0.1
- Safari v11
- Edge 42.17134.1.0

## Contact
- Zachary McNellis
- Email: [zacharymcnellis@gmail.com](zacharymcnellis@gmail.com)
- [Resume](https://zmcnellis.github.io/projects/resume/resume.pdf)
- Here is a link to my [personal website](https://zmcnellis.github.io) where you can view some of my recent work
