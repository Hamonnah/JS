const addItem = () => {
    let list = document.querySelector('ul');
    let numberOfElements = list.childElementCount;

    let liElement = document.createElement('li');
    let txtNode = document.createTextNode(`Item  ${++numberOfElements}`);

    let attrNode = document.createAttribute('class');
    attrNode.value = 'item';
    console.log(txtNode)
    liElement.appendChild(txtNode);
    liElement.setAttributeNode(attrNode);
    
    list.appendChild(liElement);
    console.log(numberOfElements);
}

let btnAddItem = document.getElementById('add-item');

btnAddItem.addEventListener('click', addItem);