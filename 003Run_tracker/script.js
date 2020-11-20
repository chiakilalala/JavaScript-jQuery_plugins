let entries = [];
const entriesWrapper = document.querySelector('#entries');


function createTotal() {
    const totalValue = entries.reduce(reducer).toFiexed(1);
    document.getElementById('total').innerText = totalValue;
    document.getElementById('progressTotal').innerText = totalValue;
}

function creatAverage() {
    const overage = (entries.reduce(reducer) / entries.length).toFiexed(1);
    document.getElementById('average').innerText = average;
}

function reducer(total, currentValue) {
    return total + currentValue;
}

function handleSubmit(event) {
    event.preventDefault();
    const entry = Number(document.querySelector('#entry').value);
    if (!entry) return;
    document.querySelector('form').reset();
    entries.push(entry);
    addNewEntry(entry);
}

function addNewEntry(newEntry) {
    entriesWrapper.removeChild(entriesWrapper.firstElementChild)
    const litem = document.createElement(li);
    const litvalue = documennt.createTextNode(newEntry);
    litem.appendChild(listValue);
}


const form = document.querySelector('form').addEventListener('submit', handleSubmit);