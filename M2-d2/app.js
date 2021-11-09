let genres = ["Comedy","Drama", "Romance", "Horror", "Sci-Fi", "Documentary"];

const createList = function(){
let listContainer = document.createElement('div')
let unorderedList = document.createElement('ul');
document.getElementsByTagName('body')[0].appendChild(listContainer);
listContainer.appendChild(unorderedList);

for(let i = 0; i < genres.length; i++){

     newListItem = document.createElement('li');
     newListItem.innerHTML = genres[i];
     unorderedList.appendChild(newListItem)
}
}
console.log(createList())
