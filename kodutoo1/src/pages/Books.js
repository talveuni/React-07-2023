import React, { useState } from 'react'

function Books() {
    const [books, updateBooks] = useState(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Animal Farm", "Faust"]) 

    const reset = () => {
        updateBooks(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Animal Farm", "Faust"])
    }

    const sortAZ = () => {
        books.sort((a,b) => a.localeCompare(b), 'fi')
        updateBooks(books.slice());
    }

    const sortZA = () => {
        books.sort((a,b) => b.localeCompare(a), 'fi')
        updateBooks(books.slice());
    }

    const sortByTitleLenght = () => {
        books.sort((a,b) => a.length - b.length)
        updateBooks(books.slice());
    }

    const filterStartWithThe = () => {
        const result = books.filter(book => book.startsWith("The"));
        updateBooks(result);
    }
    
    const filterLongerThan10 = () => {
        const result = books.filter(book => book.length > 10);
        updateBooks(result);
    }

    const filtershorterThan7 = () => {
        const result = books.filter(book => book.length < 7);
        updateBooks(result);
    }

    const filterMiddleAnd = () => {
        const result = books.filter(book => book.includes(" and"));
        updateBooks(result);
    }
    



  return (
    <div>
        {books.map((book) => <div key={book}>{book}</div> )}

        <button onClick={reset}>Reset</button> <br />
        <button onClick={sortAZ}>Soorteeri A-Z</button>
        <button onClick={sortZA}>Soorteeri Z-A</button>
        <button onClick={sortByTitleLenght}>Pealkirja pikkus</button>

        <button onClick={filterStartWithThe}>Algab The-ga</button>
        <button onClick={filterMiddleAnd}>Keskel on the</button>
        <button onClick={filterLongerThan10}>Pikem kui 10 märki</button>
        <button onClick={filtershorterThan7}>Lühem kui 7 märki</button>



    </div>
  )
}

export default Books