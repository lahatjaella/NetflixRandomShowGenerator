# Netflix Random Show Generator

Welcome to the GitHub repository for the Netflix Random Show Generator. This project is a prototype feature for suggesting random shows from various genres to users. The goal is to enhance the user experience by providing a random show suggestion based on the selected genre.

## Overview

The project involves completing two functions in `script.js` to enable the random show suggestion feature. Users can select a genre from a dropdown menu, and a random show from that genre will be displayed. If the user selects "Random," a show from any genre will be shown.

## Contents

- [Introduction](#introduction)
- [Starter Code](#starter-code)
- [Provided Functions](#provided-functions)
- [Deliverable](#deliverable)

## Introduction

For this milestone, I helped prototype a new feature: the random show suggestion. The Global Career Accelerator team wrote code that presents a collection of shows in various genres, as well as code that displays a single show on the webpage. My objective was to complete the two functions in `script.js` and ensure that the correct outcome is shown on the page based on the user's selection.

## Starter Code

At the top of `script.js`, there are three arrays that correspond to the genres of drama, fantasy, and comedy shows. Each array holds five shows. Additionally, two empty functions were declared in `script.js` for me to complete.

## Provided Functions

The Global Career Accelerator devs wrote two helper functions you'll need to use to complete the feature. These functions are defined in `provided.js` but can be called from `script.js`.

### getRandomNumber(min, max)

This function accepts two numbers: min and max. It returns a randomly generated number between the supplied min and max (inclusive). 

### displayShow(show)

This function accepts the name of a show (such as "The Witcher") and displays it on the page. It uses the exact formatting of the strings in the arrays to find and display the correct show.

## Deliverable

Below are the the requirements that were provided for me for each of the two functions in `script.js`.

### 1. chooseRandomGenre()

This function should return a random genre that is either "drama", "fantasy", or "comedy". You can use the provided `getRandomNumber()` function to randomly select one of the three possibilities.

### 2. displayRandomShow(genre)

The parameter genre will be a string that is either "drama", "fantasy", "comedy", or "random". If the parameter is "random", you'll use the `chooseRandomGenre()` function to reassign the parameter to one of the three possibilities. Otherwise, based on the genre parameter, you should display a random show from the corresponding array.

## Technologies Used

- **HTML5 & CSS3:** For structuring and styling the web pages.
- **JavaScript:** For adding interactivity and enhancing the user experience.

