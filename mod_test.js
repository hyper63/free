import { assertEquals } from './deps_test.js'
import { Free, liftF } from './mod.js'

const { test } = Deno

const Id = x => 
({
  x,
  fold: (_, g) => g(x)
})

test('freedom', () =>
  liftF(Id('test'))
    .map(x => x + '!')
    .fold(
      x => assertEquals(true, false),
      y => assertEquals(y, 'test')
    )
)
