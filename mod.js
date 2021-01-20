import { daggy } from "./deps.js";

/**
 * @typedef {Object} Free
 * @property {function} Impure
 * @property {function} Pure
 */
export const Free = daggy.taggedSum("Free", {
  Impure: ["x", "f"],
  Pure: ["x"],
});


Free.of = Free.Pure;

const kleisli_comp = (f, g) => (x) => f(x).chain(g);

Free.prototype.fold = function () {
  return this.x.fold.apply(this.x, arguments);
};

Free.prototype.map = function (f) {
  return this.cata({
    Impure: (x, g) => Free.Impure(x, (y) => g(y).map(f)),
    Pure: (x) => Free.Pure(f(x)),
  });
};

Free.prototype.ap = function (a) {
  return this.cata({
    Impure: (x, g) => Free.Impure(x, (y) => g(y).ap(a)),
    Pure: (f) => a.map(f),
  });
};

Free.prototype.chain = function (f) {
  return this.cata({
    Impure: (x, g) => Free.Impure(x, kleisli_comp(g, f)),
    Pure: (x) => f(x),
  });
};

/**
 * @param {any} command
 * @returns {Free}
 */
export const liftF = (command) => Free.Impure(command, Free.Pure);

Free.prototype.foldMap = function (interpreter, of) {
  return this.cata({
    Pure: (a) => of(a),
    Impure: (instruction_of_arg, next) =>
      interpreter(instruction_of_arg).chain((result) =>
        next(result).foldMap(interpreter, of)
      ),
  });
};
