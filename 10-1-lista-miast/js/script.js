const makeList = () => {
    let listData = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'],
    
    listElement = document.createElement('ol'),
    //attrNode = document.createAttribute('class'),
   
    numberOfListItems = listData.length,
    listItem,
    i;

    document.getElementsByTagName('body')[0].appendChild(listElement);
   
    for (i = 0; i < numberOfListItems; ++i) {
        //attrNode.value = 'city';
        listItem = document.createElement('li');
        listItem.setAttribute('class', 'city');
        listItem.innerHTML = listData[i];
        listElement.appendChild(listItem);
    }
}

makeList();