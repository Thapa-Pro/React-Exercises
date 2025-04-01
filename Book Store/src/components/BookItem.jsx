import Counter from './Counter';

const BookItem = ({ book, onCountChange }) => {

    console.log("Rendering BookItem:", book.title);
    return (
        <div className="book-card">
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Genre:</strong> {book.genre}</p>
            <p><strong>Pages:</strong> {book.pages}</p>
            <p>{book.desc}</p>
            <Counter onCountChange={onCountChange} />
        </div>
    );
};

export default BookItem;
