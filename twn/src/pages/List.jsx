import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TablePagination from "../components/TablePagination";

function List() {
  const [list, setList] = useState([]);
  const [defaultList, setDefaultList] = useState([]);
  const [openRow, setOpenRow] = useState(null);
  const [firstnameSorted, setFirstNameSorted] = useState("default")
  //const [sortedState, setSortedState] = useState("default");
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetch("https://midaiganes.irw.ee/api/list?limit=500")
      .then((response) => response.json())
      .then((data) => {
        setList(data.list);
        setDefaultList(data.list); 
      });
  }, []);

  const calcBirthday = (personalCode) => { 
    personalCode = personalCode.toString();
    const birthYearPrefix = parseInt(personalCode.charAt(0));
    
    let birthYear = birthYearPrefix <= 4 ? "19" : "20";
    birthYear += personalCode.substr(1, 2);

    const birthMonth = personalCode.substr(3, 2);
    const birthDay = personalCode.substr(5, 2);
    return `${birthDay}.${birthMonth}.${birthYear}`;
  };

  const sortAsc = (key) => {
    list.sort((a, b) => {
      if (key === "personal_code") {
        const datePartsA = calcBirthday(a[key]).split(".");
        const datePartsB = calcBirthday(b[key]).split(".");

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
  };

  const sortDesc = (key) => {
    list.sort((a, b) => {
      if (key === "personal_code") {
        const datePartsA = calcBirthday(a[key]).split(".");
        const datePartsB = calcBirthday(b[key]).split(".");

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
  };

  const resetToDefault = () => {
    setList(defaultList.slice());
  };

  const toggleFirstNameSorting = () => {
    if (firstnameSorted === "default" ) {
        setFirstNameSorted("asc")
        sortAsc("firstname");
    } else if (firstnameSorted === "asc") {
        setFirstNameSorted("desc") 
        sortDesc("firstname");
    } else if (firstnameSorted === "desc") {
        resetToDefault();  
        setFirstNameSorted("default");
        
    }
  }
  
  const renderParagraphs = (htmlString) => {
    const paragraphs = htmlString.split("\n");
    return paragraphs.map((paragraph, index) => (
      <React.Fragment key={index}>
        {index > 0 && <br />} 
        <span dangerouslySetInnerHTML={{ __html: paragraph }} />
      </React.Fragment>
    ));
  };

  const truncateText = (text) => {
    if (text.length > 300) {
      return renderParagraphs(text.substring(0, 300) + "...");
    }
    return renderParagraphs(text);
  };


  const toggleDetailRow = (index) => {
    setOpenRow((prevOpenRow) => (prevOpenRow === index ? null : index));
  };

  const showArticle = (person) => {
    navigate("/article/" + person.id);
  };

  return (
    <div className="page">
      <h1>Nimekiri</h1>
      <Table responsive striped className="table">
        <thead>
          <tr>
            <th>
              <span onClick={toggleFirstNameSorting}>Eesnimi</span>
              <img className="arrow" src="/down.png" onClick={() => sortDesc("firstname")} alt=""/>
              <img className="arrow" src="/up.png" onClick={() => sortAsc("firstname")} alt=""/>
            </th>
            <th>
              Perekonnanimi
              <img className="arrow" src="/down.png" onClick={() => sortDesc("surname")} alt=""/>
              <img className="arrow" src="/up.png" onClick={() => sortAsc("surname")} alt=""/>
            </th>
            <th>
              Sugu
              <img className="arrow" src="/down.png" onClick={() => sortDesc("sex")} alt=""/>
              <img className="arrow" src="/up.png" onClick={() => sortAsc("sex")} alt=""/>
            </th>
            <th>
              Sünnikuupäev
              <img className="arrow" src="/down.png" onClick={() => sortDesc("personal_code")} alt=""/>
              <img className="arrow" src="/up.png" onClick={() => sortAsc("personal_code")} alt=""/>
            </th>
            <th>
              Telefon
            </th>
          </tr>
        </thead>
        <tbody>
          {list.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((person, index) => (
              <React.Fragment key={index}>
                <tr className={openRow === index ? "open_tab" : "closed_tab"} onClick={() => toggleDetailRow(index)}>
                  <td>{person.firstname}</td>
                  <td>{person.surname}</td>
                  {person.sex === "f" ? <td>Naine</td> : <td>Mees</td>}
                  <td>{calcBirthday(person.personal_code)}</td>
                  <td>{person.phone}</td>
                </tr>
                {openRow === index && (
                <tr className="open_tab">
                    <td colSpan="5">
                      <div>
                        <img className="image" src={person.image.small} alt={person.image.alt}/>
                        <div className="tab_text">
                          <span>{truncateText(person.body)}</span>
                          <button className="tab_text_btn" onClick={() => showArticle(person)}>
                            Loe rohkem
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
        </tbody>
      </Table>

      <TablePagination
       list = {list}
       currentPage = {currentPage}
       itemsPerPage = {itemsPerPage}
       setCurrentPage = {setCurrentPage}
       />
    </div>
  );
}

export default List;
