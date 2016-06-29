// Starting with your solution from the previous lesson, assign a value to quux
// inside foo() (don't use var or let). The value should be different to the
// value assigned when defining quux inside zip().

function foo() {
  var bar;
  quux = 'value';
  function zip() {
    let quux = 'diffrentvalue';
  }
}
