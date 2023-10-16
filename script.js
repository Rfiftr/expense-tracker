const expense = []

function addExpense() {
    

    let nameItem = document.getElementById("item-name").value
    let cost = parseFloat(document.getElementById("cost").value)

    if(!isNaN(cost)) {
        let item = {
            nameItem: nameItem,
            cost: cost
        }

        expense.push(item)
        updateExpenseList()
    }

    document.getElementById("item-name").value = ""
    document.getElementById("cost").value = ""
}

function updateExpenseList() {
    const ul = document.getElementById("list-items")
    ul.innerHTML = ""
    

    for(let i=0; i < expense.length; i++) {
        const li = document.createElement("li")
        li.classList.toggle("list-group-item")
        li.classList.toggle("list-group-item-dark")
        li.innerHTML += "Name item: " + expense[i].nameItem + "<br>Cost: " + expense[i].cost + "$"
        ul.appendChild(li)
    }

    updateTotalExpense()
} 


function updateTotalExpense() {
    let sumCost = 0

    for(let i=0; i < expense.length; i++) {
        sumCost += expense[i].cost
    }

    document.getElementById("expense").innerHTML = "Total Expense: " + sumCost + "$"
}