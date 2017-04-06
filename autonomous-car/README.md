# autonomous-car assignment

Points is developing an autonomous vehicle program. It's going well, but we
need to iron out a few bugs. The Engineering Team would like to demo our
progress to the Product Team, so we need to develop a tool that can take track
and travel log data, and then determine whether our autonomous vehicle
successfully navigated the track.

Track and travel log data are encoded as JSON. The "track" array contains
entries for any position of the track where there is an obstacle in any of the
3 lanes (`"a"`, `"b"` or `"c"`). The "travelLog" array contains entries for any position of
the track where the car has changed lanes, either to the `"left"` or `"right"`.

The autonomous car starts at position `0` on lane`"b"`, and can shift only one
lane per position. The simulation should end when the car hits an obstacle,
goes out-of-bounds, or when all "track" and "travelLog" entries have been processed.

When the car navigates successfully, such as in the 
[success.json](./input/success.json) input data, then the simulator should
respond with:

    {"status": "success"}
    
When an error is encountered, such as in the
[out-of-bounds.json](./input/out-of-bounds.json) input data, then the simulator
should respond with:

    {"status": "error", "position": 2}

## Instructions

Clone this repository and then submit your solution to your contact at Points.
Please **do not submit pull requests** to this repository.

## Requirements

* Target [NodeJS](https://nodejs.org/en/) >= 6.10.2
* Do not use 3rd party libraries or frameworks
* Tests are required

## Getting started

    # Install dependencies
    $ npm install
    
    # Run the simulator
    $ npm start
    
    # Test the simulator
    $ npm test
