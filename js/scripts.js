function newItem() {

  let li = $('<li></li>');
  let inputValue = $('#input').value;
  let text = document.createTextNode(inputValue);

  li.appendChild(text);
}