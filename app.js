const authorSelect = document.querySelector('.auteurs');
const categorieSelect = document.querySelector('.categories');

getBooks();

function getBooks() {
    fetch('./books.json')
    
    .then(response => response.json())
        
    .then(function (data){
        pushAuthors(data);
        pushCategories(data);
    })

}

function getAuthors(books){
    let authors = [];
    for (const book of books) {
        // console.log(book.authors);
        for (const author of book.authors) {
            if (author != "") {
                authors.push(author);
            }
        }
    };
    authors = [...new Set(authors)];
    authors.sort();
    return authors
}

function pushAuthors(data){
    let authors = getAuthors(data);
    for (const author of authors) {
        const option = document.createElement("option");
        option.textContent = author;

        authorSelect.appendChild(option);
        
    }

}

function getCategories(books){
    let categories = [];
    for (const book of books) {
        // console.log(book.authors);
        for (const categorie of book.categories) {
            if (categorie != "") {
                categories.push(categorie);
            }
        }
    };
    categories = [...new Set(categories)];
    categories.sort();
    return categories;
}

function pushCategories(data){
    let categories = getCategories(data);
    for (const categorie of categories) {
        const option = document.createElement("option");
        option.textContent = categorie;

        categorieSelect.appendChild(option);
        
    }

}

function displayCard(books){
    const template = document.querySelector("#template");

    for (const book of books) {
        let clone = document.importNode(template.textContent, true);
        
    
    }
}