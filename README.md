# JavaScript Null Handling Bug

This repository demonstrates a common but subtle bug in JavaScript related to null value handling within a simple addition function. The original code (`bug.js`) returns null if either input is null.  The improved version (`bugSolution.js`) offers a more robust solution that provides better clarity and control over null input.

## Bug Description

The function `foo` is intended to add two numbers together. However, it prematurely returns `null` if either input is `null`, even if the other input is a valid number.  This leads to unexpected behavior and potential errors in applications.

## Solution

The solution (`bugSolution.js`) provides two alternative approaches:

1. **Treating Null as Zero:**  The function now treats `null` inputs as 0, resulting in a more predictable outcome.
2. **Throwing an Error:** For situations where handling `null` as 0 isn't appropriate, the function throws an error, providing clearer feedback to the caller.

Choose the approach best suited to your application's requirements.