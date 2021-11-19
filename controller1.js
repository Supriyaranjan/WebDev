window.onload = function () {

	let AddBtn = document.getElementById('AddItemBtn');
	AddBtn.addEventListener('click', addItem);
	
	let SortBtn = document.getElementById('SortBtn');
	SortBtn.addEventListener('click', sortItem);
	
	let DelItemsBtn = document.getElementById('DelItemBtn');
	DelItemsBtn.addEventListener('click', delItems);
	
	let addBtns = document.querySelectorAll('.SelItemBtn');
	for(let btn of addBtns ){
		btn.addEventListener('click',addToCart);
	}
  
  }
  
  function delItems()
  {
	  let chkLst = document.querySelectorAll('input[type=checkbox]');
  
	  for(let chkBox of chkLst)
	  {
		  if(chkBox.checked)
		  {
			  chkBox.parentNode.remove();	
		  }
	  }		
  }
  
  function sortItem()
  {
	  let itemArr = [];
	  let itemLst = document.querySelectorAll(".item-text");
	  
	  for(let item of itemLst )
	  {
		  let itemName = item.innerHTML;
		  itemArr.push(itemName);		
	  }
	  
	  //sort the items
	  itemArr.sort();
	  
	  //Now write the sorted item back to labels
	  let count = 0;
	  for(let item of itemLst )
	  {
		  
		  item.innerHTML = itemArr[count];
		  
		  count = count + 1;
	  }
  }
  
  function addToCart(evt)
  {
	  let btnClicked = evt.target;
	  let divClicked = btnClicked.parentNode;
	  //get the text of the label child node
	  let itemName = divClicked.children[1].innerHTML;	
	  
	  addItm(itemName);
	  
	  btnClicked.innerHTML = "Added";
  }
  
  function addItem()
  {
	  let itemName = document.getElementById("itemname").value;
	  
	  addItm(itemName);
	  
	  document.getElementById("itemname").value = "";
  }
  
  function addItm(itemName)
  {
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
	  
	  let selCheckBox = document.createElement('input');
	  selCheckBox.setAttribute('type', 'checkbox');
	  
	  div.appendChild(labelItem);
	  
	  labelItem.insertAdjacentElement('afterend', selCheckBox);
	  
	  selCheckBox.insertAdjacentElement('afterend', deleteButton);
	  
	  if(cartDiv.children.length === 0)
		  cartDiv.insertBefore(div, cartDiv.lastElementChild);
	  else
		  cartDiv.insertBefore(div, cartDiv.lastElementChild.nextSibling);
  }
  
  function deleteItem(evt)
  {
	  evt.target.parentNode.remove();	
  }