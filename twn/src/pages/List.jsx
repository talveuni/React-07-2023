import React, { useEffect, useState } from 'react'
import { Pagination, Table } from 'react-bootstrap';
//import tableData from '../data/table.json'

function List() {
    const [list, setList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Number of rows to display per page

    useEffect(() => {
        fetch("https://midaiganes.irw.ee/api/list?limit=500")
          .then((response) => response.json())
          .then((data) => setList(data.list) || []);
      }, []);

    // useEffect(() => {
    //     fetch("https://midaiganes.irw.ee/api/list?limit=500")
    //       .then((res) => {
    //         if (!res.ok) {
    //           throw new Error("Network response was not ok");
    //         }
    //         return res.json(); 
    //       })
    //       .then((json) => setList(json) || []) // data from the API if possible
    //       .catch((error) => {
    //         console.error("Error fetching data from the API:", error);
    //         console.log("Fetching data from local file: table.json");
    //         setList(tableData); // using local data table.json
    //       });
    //   }, []);

    const calcBirthday = (personalCode) => {
        personalCode = personalCode.toString(); // Convert to string

        const birthYearPrefix = parseInt(personalCode.charAt(0));

        let birthYear = birthYearPrefix <= 4 ? "19" : "20";
        birthYear += personalCode.substr(1, 2);

        const birthMonth = personalCode.substr(3, 2);
        const birthDay = personalCode.substr(5, 2);

        return `${birthDay}.${birthMonth}.${birthYear}`;
    };

    const sortAsc = (key) => {
       list.sort((a, b) => {
        if (key === 'personal_code') {
            const datePartsA = calcBirthday(a[key]).split('.');
            const datePartsB = calcBirthday(b[key]).split('.');
            
            // Compare years
            if (datePartsA[2] !== datePartsB[2]) {
                return parseInt(datePartsB[2]) - parseInt(datePartsA[2]);
            }
            // Compare months
            if (datePartsA[1] !== datePartsB[1]) {
                return parseInt(datePartsB[1]) - parseInt(datePartsA[1]);
            }
            // Compare days
            return parseInt(datePartsB[0]) - parseInt(datePartsA[0]);
        } else {
            return b[key].localeCompare(a[key]);
        }
    });
        setList(list.slice());
    }

    const sortDesc = (key) => {
        list.sort((a, b) => {
         if (key === 'personal_code') {
             const datePartsA = calcBirthday(a[key]).split('.');
             const datePartsB = calcBirthday(b[key]).split('.');
             
             // Compare years
             if (datePartsA[2] !== datePartsB[2]) {
                 return parseInt(datePartsA[2]) - parseInt(datePartsB[2]);
             }
             // Compare months
             if (datePartsA[1] !== datePartsB[1]) {
                 return parseInt(datePartsA[1]) - parseInt(datePartsB[1]);
             }
             // Compare days
             return parseInt(datePartsA[0]) - parseInt(datePartsB[0]);
         } else {
             return a[key].localeCompare(b[key]);
         }
     });
         setList(list.slice());
        
     }

    const totalPages = Math.ceil(list.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
        }
    };
        

  return (
    <div className='page'>
        <h1>Nimekiri</h1>
        <Table striped className='table'>
            <thead>
                <tr>
                    <th>
                        Eesnimi 
                        <img className='arrow' src='/down.png' onClick={()=>sortDesc('firstname')} alt=''/>
                        <img className='arrow' src='/up.png' onClick={()=>sortAsc('firstname')} alt=''/>
                    </th>
                    <th>
                        Perekonnanimi
                        <img className='arrow' src='/down.png' onClick={()=>sortDesc('surname')} alt=''/>
                        <img className='arrow' src='/up.png' onClick={()=>sortAsc('surname')} alt=''/>
                    </th>
                    <th>
                        Sugu
                        <img className='arrow' src='/down.png' onClick={()=>sortDesc('sex')} alt=''/>
                        <img className='arrow' src='/up.png' onClick={()=>sortAsc('sex')} alt=''/>
                    </th>
                    <th>
                        Sünnikuupäev
                        <img className='arrow' src='/down.png' onClick={()=>sortDesc('personal_code')} alt=''/>
                        <img className='arrow' src='/up.png' onClick={()=>sortAsc('personal_code')} alt=''/>
                    </th>
                    <th>
                        Telefon
                        <img className='arrow' src='/down.png' onClick={()=>sortDesc('phone')} alt=''/>
                        <img className='arrow' src='/up.png' onClick={()=>sortAsc('phone')} alt=''/>
                    </th>
                </tr>
            </thead>
            <tbody>
                {list.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((person, index)=> 
                         <tr key={index}>
                        {<td>{person.firstname}</td>}
                        <td>{person.surname}</td>
                        {person.sex === "f"?<td>Naine</td>:<td>Mees</td>}
                        <td>{calcBirthday(person.personal_code)}</td>
                        <td>{person.phone}</td>
                    </tr>
                  )}
            </tbody>
            
        </Table>
        <Pagination>
        <Pagination.Prev onClick={handlePrevPage} disabled={currentPage === 1} />
        {Array.from({ length: totalPages }, (_, index) => (
          <Pagination.Item
            key={index}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={handleNextPage} disabled={currentPage === totalPages} />
      </Pagination>
        
    </div>
  )
}

export default List