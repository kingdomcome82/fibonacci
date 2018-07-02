function displayNumber() {
  var numberOfPlaces = document.querySelector('input');
  var displayParagraph = document.querySelector('ul');
  displayParagraph.innerHTML = "";

var previousPreviousNumber = 0;
var previousNumber = 0;
var currentNumber = 1;

  for (var i=0;i<numberOfPlaces.value;i++) {
      var li = document.createElement('li');
      var displayNumber = document.createTextNode(currentNumber);
      li.appendChild(displayNumber);
      displayParagraph.appendChild(li);

      previousPreviousNumber = previousNumber;
      previousNumber = currentNumber;
      currentNumber = previousNumber + previousPreviousNumber;

}
}
