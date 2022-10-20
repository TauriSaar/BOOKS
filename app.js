const form = document.querySelector("#contact")
const titleForm = document.querySelector("#titleForm");
const authorForm = document.querySelector("#authorForm");
const isbnForm = document.querySelector("#isbnForm");
const masterTable = document.querySelector('#masterTable')

masterTable.addEventListener('click', deleteBook)

function deleteBook(event){
    let selectedBook

    if (event.target.textContent === "X") {
        if (confirm("Are you sure you want to remove the book?")) {
            selectedBook = event.target.parentElement.parentElement.rowIndex
            masterTable.deleteRow(selectedBook)
        }
    }
}}