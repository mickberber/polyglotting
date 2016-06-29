// # Your Mission
//
// Modify your solution from the previous lesson to set bar = true inside zip(),
// then return the function zip as the result of foo()
//


function foo() {
  var bar;
  quux = 'value';
  function zip() {
    bar = true;
    let quux = 'diffrentvalue';
  }
  return zip;
}
