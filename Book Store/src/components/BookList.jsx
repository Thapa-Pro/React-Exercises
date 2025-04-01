import books from '../assets/books.json';
import BookItem from './BookItem';

const BookList = ({ onCountChange }) => {
  return (
    <div className="book-list">
      {books.map((book, index) => (
        <BookItem
          key={index}
          book={book}
          onCountChange={(newCount) => onCountChange(index, newCount)}
        />
      ))}
    </div>
  );
};

export default BookList;
