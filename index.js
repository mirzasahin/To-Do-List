let form = document.querySelector('#form');
let reset = document.querySelector('#reset');
let myList = document.querySelector('#myList');
let text = document.querySelector('#text');
let submit = document.querySelector('#submit');

submit.addEventListener('click', function (e) {
    e.preventDefault();
    let liDOM = document.createElement('li')
    liDOM.className = 'list-group-item'
    liDOM.innerHTML = `${text.value[0].toUpperCase()}${text.value.slice(1)}`;
    myList.appendChild(liDOM);
    document.getElementById("text").value = "";

    var span = document.createElement('span');
    var spanText = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(spanText);
    liDOM.appendChild(span);

    span.addEventListener('click', function () {
        myList.removeChild(liDOM);
    })
});

myList.addEventListener('click', function (item) {
    if (item.target.tagName = 'li') {
        item.target.classList.toggle('checked');
    }
})

let counter = 0;
reset.addEventListener('click', function myFunction() {
    while (counter < myList.childElementCount) {
        myList.removeChild(myList.firstChild);
    }
})