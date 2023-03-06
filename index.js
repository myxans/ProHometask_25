let table = document.getElementById("table");

let count = 1;

for (let i = 1; i <= 10; i++) {
    let row = table.insertRow();
    for (j = 1; j <= 10; j++) {
        let cell = row.insertCell();
        cell.innerText = count++
    }
}


