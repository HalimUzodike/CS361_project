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
    genre?: string; // Add genre to the Book type
    cover?: string;
};

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [books, setBooks] = useState<Book[]>([]); // Store books

    const handleSearch = async () => {
        try {
            // Fetch book genre from Python microservice
            const genreResponse = await fetch(`http://localhost:5000/get_genre/${searchQuery}`);
            const genreData = await genreResponse.json();
    
            // Handle the scenario where the book is not found
            if (genreResponse.status === 404) {
                console.log('Book not found');
                return; // Exit the function if no book is found
            }
    
            // Fetch cover image from the existing API
            const coverResponse = await fetch(`http://localhost:3923/cover_image?isbn=${searchQuery}`);
            const coverData = await coverResponse.json();
    
            const newBook = {
                isbn: searchQuery,
                title: 'Unknown Title', // Replace with actual title if available
                author: 'Unknown Author', // Replace with actual author if available
                description: 'No description available', // Replace with actual description if available
                genre: genreData.genre || 'Unknown Genre',
                cover: coverData.url || null,
            };
    
            setBooks([...books, newBook]);
        } catch (error) {
            console.error("Error fetching book data:", error);
            // Handle errors
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
                            <p><strong>{book.title}</strong> by {book.author}</p>
                            <p>Genre: {book.genre}</p>
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
