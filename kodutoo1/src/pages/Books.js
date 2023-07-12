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

    const sortBySecondLetter = () => {
        books.sort((a,b) => a[1].localeCompare(b[1]), 'fi')
        updateBooks(books.slice());

    }

    const sortByNumberOfWords = () => {
        const sortedBooks = books.sort((a, b) => {
            const aWordCount = a.split(' ').length;
            const bWordCount = b.split(' ').length;
            return aWordCount - bWordCount;
          });
          
        updateBooks(sortedBooks.slice());

    }
    const sortByPenultimateLetter = () => {
        const sortedBooks = books.sort((a, b) => {
            const aPenultimateLetter = a[a.length - 2]; // Get the penultimate letter of string 'a'
            const bPenultimateLetter = b[b.length - 2]; // Get the penultimate letter of string 'b'
          
            return aPenultimateLetter.localeCompare(bPenultimateLetter); // Compare the penultimate letters
          });
        updateBooks(sortedBooks.slice());

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
    
    const filterThreeOrMoreWords = () => {
        const result = books.filter((book) => {
            const wordCount = book.split(' ').length; // Count the number of words in the book title
            return wordCount >= 3; // Filter elements with three or more words
        })
        updateBooks(result);
    }
    
    const filterPenultimateLetterC = () => {
        const result = books.filter((book) => {
            const penultimateLetter = book[book.length - 2];
            return penultimateLetter.toLocaleLowerCase() === 'c'
        })
        updateBooks(result);
    }



  return (
    <div>
        {books.map((book) => <div key={book}>{book}</div> )} <br />
        <button onClick={reset}>Reset</button> <br />
        <button onClick={sortAZ}>Soorteeri A-Z</button>
        <button onClick={sortZA}>Soorteeri Z-A</button>
        <button onClick={sortByTitleLenght}>Sorteeri: pealkirja pikkus</button>
        <button onClick={sortBySecondLetter}>Sorteeri: teine täht</button>
        <button onClick={sortByNumberOfWords}>Sorteeri: sõnade arv</button>
        <button onClick={sortByPenultimateLetter}>Sorteeri: eelviimane täht</button>
        
        <br /><br />
        <button onClick={filterStartWithThe}>Algab The-ga</button>
        <button onClick={filterMiddleAnd}>Keskel on and</button>
        <button onClick={filterLongerThan10}>Pikem kui 10 märki</button>
        <button onClick={filtershorterThan7}>Lühem kui 7 märki</button>
        <button onClick={filterThreeOrMoreWords}>3 või rohkem sõna</button>
        <button onClick={filterPenultimateLetterC}>Eelviimane täht on C</button>



    </div>
  )
}

export default Books