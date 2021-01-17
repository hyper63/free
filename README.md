# hyper63 Free

A Free Monad for Deno

## Usage

```
import { Task } from 'https://raw.githubusercontent.com/hyper63/task/master/mod.js'
import { liftF } from 'https://raw.githubusercontent.com/hyper63/task/master/mod.js'
import { taggedSum } from 'https://jspm.dev/daggy'

const String = taggedSum('String', { Scream: ['s'] })



liftF(Task.of('Freedom')).foldMap(interpet, Task.of)
  .fork(
    e => console.log(e),
    r => console.log(r)
  )
```

## Test

```
deno test mod_test.js
```

