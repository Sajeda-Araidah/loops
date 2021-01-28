var order = prompt('what do you want turkish or cappuccino');

while (order !== 'turkish' && order !== 'cappuccino') {
  order = prompt('what do you want turkish or cappuccino');
}

var itemOrder = '';

if (order === 'cappuccino') {
  itemOrder = '<img src="images/cappuccino.jpg"/>';
} else if (order === 'turkish') {
  itemOrder = '<img src="images/turkish.jpg"/>';
}

var noCups = prompt('how many cups do you want?');

var result = '';

for (var i = 0; i < noCups; i++) {
  result = result + itemOrder;
}

document.write(result);
