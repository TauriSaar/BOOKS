const form = document.querySelector("#contact")
const titleForm = document.querySelector("#titleForm");
const authorForm = document.querySelector("#authorForm");
const isbnForm = document.querySelector("#isbnForm");
const masterTable = document.querySelector('#masterTable')

masterTable.addEventListener('click', deleteBook)
form.addEventListener('submit', addBook)


function addBook(){
    const row = masterTable.insertRow()
    const cell1 = row.insertCell()
    const cell2 = row.insertCell()
    const cell3 = row.insertCell()
    const cell4 = row.insertCell()

    const cross = document.createElement('a')
    cross.appendChild(document.createTextNode('X'))
    cross.className = 'red-text text-darken-2 secondary-content'
    cross.setAttribute('href', '#')

    cell1.innerHTML = titleForm.value
    cell2.innerHTML = authorForm.value
    cell3.innerHTML = isbnForm.value
    cell4.appendChild(cross)
}

function deleteBook(event){
    let selectedBook
    if (event.target.textContent === "X") {
        if (confirm("Are you sure you want to remove the book?")) {
            selectedBook = event.target.parentElement.parentElement.rowIndex
            masterTable.deleteRow(selectedBook)
        }
    }
}
