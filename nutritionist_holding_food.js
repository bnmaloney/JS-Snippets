let receive = ['banana', 'egg', 'granola bar','steak','bread','cheesestick']

const printReceived = () => {
  let receivedString = receive.join(', ');
 	return receivedString;
}

const addList = (x) => {
  receive.push(x);
  console.log("Current received items:", printReceived());
}

const removeList = () => {
  let give = receive.pop();
  console.log("Giving back:",give);
  return give;
}

addList('cookie');
removeList();
removeList();
removeList();
removeList();
removeList();
addList("potato");
