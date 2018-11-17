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
  let selected = document.querySelector('#grand-node div div div div');
  return selected;
}
