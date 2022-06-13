const authorSelect = document.querySelector('.auteurs');
const categorieSelect = document.querySelector('.categories');

getBooks();

function getBooks() {
    fetch('./books.json')
    
    .then(response => response.json())
        
    .then(function (data){
        pushAuthors(data);
        pushCategories(data);
        displayCard(data);
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
    const bookList = document.querySelector('.books-list');

    for (const book of books) {
        const clone = document.importNode(template.content, true);

        //Image
        let img = clone.querySelector(".card-img-top");
        if (book.thumbnailUrl) {
            img.src = book.thumbnailUrl;
        } else{
            img.src = "https://p1.storage.canalblog.com/14/48/1145642/91330992_o.png";
        }

        //Titre
        let title =  clone.querySelector(".card-title");
        title.textContent = book.title;

        //ISBN
        let isbn =  clone.querySelector(".card-ISBN");
        isbn.textContent = "ISBN : " + book.isbn;

        //Date de publication
        const date =  clone.querySelector(".card-date");
        if (book.publishedDate.dt_txt) {
            let dateFR = new Date(book.publishedDate.dt_txt);
            date.textContent = "Date de publication : " + dateFR.toLocaleString("fr-FR");
        } else{
            date.textContent = "";
        }

        //Nombre de pages
        const pages =  clone.querySelector(".card-pages");
        if (book.pageCount && book.pageCount > 0) {
            pages.textContent = "Nombres de pages : " + book.pageCount;
        } else{
            pages.textContent = "";
        }

        //Description
        const description =  clone.querySelector(".card-description");
        if (book.shortDescription) {
            description.textContent = "Description : " + book.shortDescription;
        } else{
            description.textContent = "";
        }
        
        bookList.appendChild(clone);
    }
}

function FiltrerAuthors(authors) {
    
}