# Unit Tests

## Creating the file

This project uses jasmine for running its Unit Tests. Jasmine works on the
idea of having specification which are directly tested by the code. To make
a new Unit Test for our project, create a file titled

`<Thing you are testing>Spec.js`

## How jasmine files are organized

```javascript
/* global describe */
/* global it */
/* global expect */

/* Imports for test */
const NodeForest = require("../src/backend/NodeForest.js");
const Operators = require("../src/backend/Operators.js");
const NumberNode = require("../src/backend/NumberNode.js");

/* 
 * Write the test suite as:
 * describe(Name)
 * Where Name is a name, likely the filename you are testing with spaces.
 * I.E. NodeForest.js would have a spec in a file NodeForestSpec.js and
 * the describe would have the name "Node Forest"
 */
describe("Test Suite", () => {
    /* A setup function, like in JUnit
    beforeEach(() => {
    });
    */

    /* A specification */
    it("shall be able to perform an action and do something", () => {
        /*
         * Test code goes here
         * ...
         * ...
         * ...
         */
        expect(/* The result value */).toBe(/* What you thought it should be */);
    });
});
```

## Running the test code

A single file can be run from the root using:

> $ .\node_modules\.bin\jasmine .\spec\NodeForestSpec.js

There is also support for globbing and regex. You can read about these
from <a href="https://www.npmjs.com/package/jasmine">jasmine's npm page</a>

## Auto running in GitHub for branch validation

This has not yet been configured. Stay tuned!
