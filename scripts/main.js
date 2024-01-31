let users = [];

let userSelect = document.querySelector('.user');
let quantitySelect = document.querySelector('.quantity');
let userInput = document.querySelector('.input');
let userButton = document.querySelector('.button');
let table = document.querySelector('.table');

let nbrItems = 0;

function insertRow () {
    let name = userSelect.value;
    let quantity = quantitySelect.value;
    let input = userInput.value;

    let user = { name, quantity, input };
    
    users.push(user);

    console.table(users);

    if (input != "") {
        nbrItems++
           if (nbrItems != 0) {
               document.querySelector('.empty-message').innerText = "";
               table.innerHTML += `<tr class="row"><td class="left-cell">[${name}]</td><td class="left-cell">${quantity}x</td><td>${input}</td><td class="right-cell"><span class="cross">☠️</span></td></tr>`;
               let crosses = document.querySelectorAll('.cross');
               crosses.forEach(function(cross) {
                   cross.addEventListener('click', function() {
                       nbrItems--;
                       cross.closest(".row").remove()
                       crosses = document.querySelectorAll('.cross')
                       if (crosses.length == 0){
                            document.querySelector('.empty-message').innerText = "Votre liste est vide 😋";
                           nbrItems = 0;
                       }
                   });
               })
           }
           input = ""
       }
}

userButton.addEventListener('click', function() {
    insertRow()
})

userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        insertRow()
    } 
})
