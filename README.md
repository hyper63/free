<h1 align="center">free</h1>
<p align="center">
  Free is a functional type designed to wrap other types and enable interfaces to plugin or apply interpreters to a functional
  application pipeline. This enables the adapter pattern for functional applications where the side effects can be injected into
  the program flow using `foldMap`.
</p>
<p align="center">
  <a href="https://github.com/hyper63/free/tags/"><img src="https://img.shields.io/github/tag/hyper63/free" alt="Current Version" /></a>
  <img src="https://github.com/hyper63/free/workflows/.github/workflows/deno.yml/badge.svg" />
  
  </p>

---

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Features](#features)
- [Methods](#methods)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

```js
import { Task } from 'https://x.nest.land/task@1.0.0/mod.js'
import { liftF } from 'https://x.nest.land/free@1.0.3/mod.js'

liftF(Task.of(() => Promise.resolve(':tada:')))
.fold(
  e => assertEquals(true, false),
  task => task.fork(
    e => assertEquals(true, false),
    r => assertEquals(r, ':tada:')
  )
)
```

## Installation

This is a Deno module available to import from 
https://nest.land/package/free 

deps.js

```
export { liftF } from 'https://x.nest.land/free@1.0.3/mod.js'
```

## Features

* liftF 

## Methods

* fold - folds over value and returns value to first and second function handlers
* foldMap - maps over values with and interpreter function then folds them into a single type

## Contributing

Pull Requests are welcome

## License

MIT

## Acknowledgements

The core code for this library was initiated from code shared by Brian Lonsdorf in a course from frontend masters. If you want to learn more about functional programming in javascript check it out: https://frontendmasters.com/courses/hardcore-js-v2/

