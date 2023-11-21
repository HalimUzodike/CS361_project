import React from 'react';

type InspectProps = {
  book: {
    title: string;
    author: string;
    description: string;
    // Add other book properties as needed
  };
};


const Inspect: React.FC<InspectProps> = ({ book }) => {

    const instructions = () => {
        return (
            <div>
                <h3>Tips</h3>
                <ul>
                    <li>You can add this book to a list of favorites</li>
                    <li>You can revert changes by clicking the undo/back button</li>
                </ul>
            </div>
        );
    };


  return (
    <div>
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p>{book.description}</p>
      {/* Render other book details */}
        {instructions()}
    </div>
  );
};

export default Inspect;
