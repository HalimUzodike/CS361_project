import React, { useState } from 'react';
import Inspect from './Inspect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

type HomePageProps = {
    onNavigate: () => void;
};

type Book = {
    isbn: string;
    title: string;
    author: string;
    description: string;
    cover?: string; // Optional property for cover image
};

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [books, setBooks] = useState<Book[]>([]); // Store books

    const handleSearch = async () => {
        try {
            const response = await fetch(`http://localhost:3923/cover_image?isbn=${searchQuery}`);
            const data = await response.json();
            if (data.url) {
                const newBook = {
                    isbn: searchQuery,
                    title: 'Book Title', // Placeholder, replace with actual title if available
                    author: 'Author Name', // Placeholder, replace with actual author if available
                    description: 'Book Description', // Placeholder, replace with actual description if available
                    cover: data.url,
                };
                setBooks([...books, newBook]); // Add the new book to the list
            }
        } catch (error) {
            console.error("Error fetching book cover:", error);
            // Handle errors (e.g., show error message)
        }
    };

    const handleBookSelect = (book: Book) => {
        setSelectedBook(book);
    };

    return (
        <div>
            {selectedBook ? (
                <Inspect book={selectedBook} />
            ) : (
                <div>
                    <h1>Book Finder</h1>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Enter Book ISBN"
                    />
                    <button onClick={handleSearch}>Search</button>
                    <div>
                        <h2>Books</h2>
                        {books.map((book, index) => (
                            <div key={index} onClick={() => handleBookSelect(book)}>
                                <p><strong>{book.title}</strong> - {book.author}</p>
                                {book.cover && <img src={book.cover} alt={`Cover of ${book.title}`} />}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <button onClick={onNavigate}>
                <FontAwesomeIcon icon={faSignInAlt} /> Go to Login
            </button>
        </div>
    );
};

export default HomePage;
