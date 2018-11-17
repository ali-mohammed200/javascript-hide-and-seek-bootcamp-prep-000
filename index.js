function getFirstSelector(selector){
  let selected = document.querySelector(selector);
  return selected;
}

function nestedTarget(){
  let selected = document.querySelector('#nested .target');
  return selected;
}

function increaseRankBy(n){
  let lis = document.querySelectorAll('ul.ranked-list li');
  for(let i = 0; i < lis.length; i++){
    lis[i].innerHTML = +lis[i].innerHTML + n;
  }
}

function deepestChild(){
  let node = document.getElementById('grand-node');
  let nextNode = node.children[0];

  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }

  return node;
}
