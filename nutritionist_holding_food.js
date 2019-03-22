

function addList(x) {
  let receive = ['banana', 'egg', 'granola bar','steak','bread','cheesestick']
  receive.push(x);
  console.log(receive);
}

function removeList() {
  let give = receive.pop();
  console.log(give);
}

addlist('cookie');
removeList();


let receive = ['banana', 'egg', 'granola bar','steak','bread','cheesestick']

const addList = (x) => {
  receive.push(x);
  console.log(receive);
}

const removeList = () => {
  let give = receive.pop();
  console.log(give);
}

addList('cookie');
removeList();
