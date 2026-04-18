Event Loop Visualizer

A JavaScript-based interactive tool that demonstrates how the JavaScript runtime handles code execution using the call stack, microtask queue, callback queue, and event loop.

Overview

This project simulates how JavaScript executes synchronous and asynchronous operations. It helps in understanding:

How the call stack works
How asynchronous tasks are scheduled
Difference between microtasks and callback (macrotask) queues
How the event loop processes tasks

The application provides a step-by-step visualization of how functions move through different parts of the runtime.

Features
Call stack visualization
Separate microtask and callback queues
Step-by-step execution control
Auto-run execution mode
Execution logs showing output order
Highlighting of the currently executing function
Adjustable execution speed
Modular architecture (engine, controller, UI separation)
How It Works
A main function is pushed to the call stack
Synchronous code executes immediately
Asynchronous operations are scheduled:
Promises go to the microtask queue
setTimeout goes to the callback queue
The event loop checks:
Microtask queue first
Then callback queue
Tasks are moved back to the call stack and executed
