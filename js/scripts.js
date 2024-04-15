function newItem() {

  let list = $('#list');
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  let text = document.createTextNode(inputValue);

  li.append(text);

  if (inputValue === '') {
    alert('you must write something!')
  } else {
    list.append(li);
  }


  function crossOut() {
    li.toggleClass('strike')
  }

  li.dblclick(crossOut);

  let deleteButton = $('<button></button>');

  deleteButton.append(document.createTextNode('X'));
  li.append(deleteButton);

  deleteButton.on('click', deleteListItem);

  function deleteListItem() {
    li.addClass('delete');
  }

  list.sortable();

}