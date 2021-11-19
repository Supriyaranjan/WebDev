window.onload = function () {

  let AddBtn = document.getElementById('AddItemBtn');
  AddBtn.addEventListener('click', addItem, false);

}

function addItem()
{
    let itemName = document.getElementById("itemname").value;
	
	//alert(itemName);
	
	let cartDiv = document.getElementById("cart");
	
	let div = document.createElement('div');
    div.setAttribute('class', 'cart-item');
    
    let labelItem = document.createElement('LABEL');
    labelItem.setAttribute('class', 'item-text');
	labelItem.innerHTML = itemName;
	
	let deleteButton = document.createElement('button');
	deleteButton.innerHTML = "Delete";
	deleteButton.setAttribute('class', 'cart-button')
	deleteButton.addEventListener('click', deleteItem);
	
	div.appendChild(labelItem);
	
	labelItem.insertAdjacentElement('afterend', deleteButton);
	
	if(cartDiv.children.length === 0)
        cartDiv.insertBefore(div, cartDiv.lastElementChild);
    else
        cartDiv.insertBefore(div, cartDiv.lastElementChild.nextSibling);
}

function deleteItem(evt)
{
	evt.target.parentNode.remove();	
}