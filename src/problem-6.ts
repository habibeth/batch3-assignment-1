{
    // get the boolean value is the book published in the last 5 years
    type Book = {
        title: string;
        author: string;
        publishedYear: number;
    }
    const isRecentBook=(book: Book): boolean=>{
        const currentYear = new Date().getFullYear();
        if((currentYear - book.publishedYear)<=5){
            return true;
        }
        else{
            return false;
        }
    }
    const book1: Book = {
        title: "Sample Book",
        author: "John Doe",
        publishedYear: 2019
    };
    const myBook = isRecentBook(book1);
    console.log(myBook);
    //
}