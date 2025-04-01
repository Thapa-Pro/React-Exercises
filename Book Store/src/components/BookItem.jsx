

const BookItem = ({ book }) => {
    return (
        <div className="book-card">
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Genre:</strong> {book.genre}</p>
            <p><strong>Pages:</strong> {book.pages}</p>
            <p>{book.desc}</p>       {/*Book Description*/}
            <button>Add to cart</button>
        </div>
    );
};

export default BookItem;
