# lcbo-auto-complete assignment

Points wants to build a reusable auto-complete search widget for all of its
front-end apps and is asking you to lead the development.

The widget should return search results as the user is typing.

## Instructions

Use this LCBO products search endpoint as your backend API:

    http://lcboapi.com/products?q=red+wine

You should include an API token in your requests' HTTP headers. An API token is
provided in the [index.html](https://github.com/Points/developer-assignments/blob/master/lcbo-auto-complete/index.html#L13)
file.

Clone this repository and then submit your solution to your contact at Points.
Please **do not submit pull requests** to this repository.

## Requirements

* Target the latest stable version of [Google Chrome](https://www.google.com/chrome/)
    * you can use any language features and APIs that it supports, such as
    [es6](http://caniuse.com/#search=es6) and
    [fetch](https://developer.mozilla.org/en/docs/Web/API/Fetch_API)
* Do not use 3rd party libraries or frameworks
* Keyboard navigation is not required
* Tests are not required

## Getting started

    # Open the lcbo-auto-complete webpage
    $ google-chrome ./index.html
