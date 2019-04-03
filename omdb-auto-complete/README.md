# omdb-auto-complete assignment

Points wants to build a reusable auto-complete search widget for all of its
front-end apps and is asking you to lead the development.

The widget should actively query the api endpoint and return search results as the user is typing.
The user should be able to select an item from the auto-complete list. 

Once selected the page should render the full details of the movie.


## Instructions

Use this OMDB movie search endpoint as your backend API:

    http://www.omdbapi.com/?s=love

You should include an API key in your request. An API key is
provided in the [index.html](https://github.com/Points/developer-assignments/blob/master/omdb-auto-complete/index.html#L13)
file.

Clone this repository and then submit your solution to your contact at Points.
Please **do not submit pull requests** to this repository.

## Requirements

* Implement your solution in JavaScript, without transpilation or build steps
* Do not use 3rd party libraries or frameworks
* Target the latest stable version of [Google Chrome](https://www.google.com/chrome/)
    * you can use any language features and APIs that it supports, such as
    [es6](http://caniuse.com/#search=es6) and
    [fetch](https://developer.mozilla.org/en/docs/Web/API/Fetch_API)
* Tests are not required

## Getting started

    # Open the omdb-auto-complete webpage
    $ google-chrome ./index.html
