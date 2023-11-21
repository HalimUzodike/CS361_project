import React, { useState } from 'react';
import Inspect from './Inspect'; // Import the Inspect component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

type HomePageProps = {
    onNavigate: () => void;
};

type Book = {
    title: string;
    author: string;
    description: string;
    // Additional properties if needed
};

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);

    // Example books data
    const books: Book[] = [
        { title: 'Book 1', author: 'Author 1', description: 'Description 1' },
        { title: 'Book 2', author: 'Author 2', description: 'Description 2' },
        // ...other books
    ];

    const handleSearch = () => {
        console.log("Searching for:", searchQuery);
        // Implement the search logic or redirection
    };

    const handleBookSelect = (book: Book) => {
        setSelectedBook(book);
    };

    const instructions = () => {
        return (
            <div>
                <h3>Features-------------</h3>
                <ul>
                    <li>Search for a book by ISBN</li>
                    <li>Click on a book to inspect it</li>
                    <li>Click the "Go to Login" button to go to the Login page</li>
                </ul>
                <h3>Instructions-------------</h3>
                <ol>
                    <li>Create a user account in order to use all features.</li>
                    <li>Search for a book.</li>
                    <li>Add the book to a list of favorites.</li>
                </ol>
            </div>
        );
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
    
                    {/* Book list */}
                    <div>
                        <h2>Books</h2>
                        {books.map((book, index) => (
                            <div key={index} onClick={() => handleBookSelect(book)}>
                                <p><strong>{book.title}</strong> - {book.author}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <button onClick={onNavigate}>
                <FontAwesomeIcon icon={faSignInAlt} /> Go to Login
            </button>
            {instructions()}
        </div>
    );
};

export default HomePage;
