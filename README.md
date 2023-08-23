# SVG Logo Maker

A Node.js command-line application that takes in user input to generate a logo and save it as an SVG file.

## Installation

**Please note:** You must have Node.js installed on your computer to run this app.  To install it, please consult [their website](https://nodejs.org/en/download) for details.

Once you have Node.js installed on your computer, please follow these steps:

1. Clone this repo into a folder on your computer.
2. From the command line, run ``npm install`` to install all needed packages.  (You only have to do this the first time you run the app!)
3. Invoke the app using the command ``node index.js``.

## Usage

As noted above, run the app with the command ``node index.js``.  The typical program flow is shown a video that is available [in the example folder](), and [on GoogleDrive]().

Here is a screenshot showing a terminal in which the program is running:

![A terminal in which the program was invoked with the command node index.js]()

A sample output file can be found [here]().

## Sources

* Some code was copied from my first Node.js project, the [Readme Generator](https://github.com/giancarlow333/readme-generator).
* [This StackOverflow thread](https://stackoverflow.com/questions/22894540/creating-circles-with-svg-and-javascript) explained how to add SVG elements via JavaScript.  Hats off to [Sirko](https://stackoverflow.com/users/1169798/sirko) in particular!
* The code for creating a directory with JavaScript comes from the [Node.js documentation](https://nodejs.dev/en/learn/working-with-folders-in-nodejs/).
* The equilateral triangle code is based on [this StackOverflow thread](https://stackoverflow.com/questions/54955165/create-a-equilateral-triangle-using-svg-in-html-with-base-and-height-100px).  However, having noticed an error in the formula, I consulted [Quora](https://www.quora.com/How-do-I-find-the-length-of-the-side-of-an-equilateral-triangle-if-only-the-perpendicular-height-is-given) to properly get the side length of an equilateral triangle, given the height.
* To center text properly, I consulted [StackOverflow](https://stackoverflow.com/questions/5546346/how-to-place-and-center-text-in-an-svg-rectangle), and [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/dominant-baseline).

---

(c) 2023 Giancarlo Whitaker