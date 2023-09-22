import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TablePagination from "../components/TablePagination";
import { FaSort } from "react-icons/fa";
import { FaSortUp } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import listData from "../data/table.json"

function List() {
  const [list, setList] = useState([]);
  const [defaultList, setDefaultList] = useState([]);
  const [openRow, setOpenRow] = useState(null);
  const [firstNameSorted, setFirstNameSorted] = useState("default")
  const [lastNameSorted, setLastNameSorted] = useState("default")
  const [sexSorted, setSexSorted] = useState("default")
  const [birthdaySorted, setBirthdaySorted] = useState("default")

  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetch("https://midaiganes.irw.ee/api/list?limit=500")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json(); 
      })
      .then((data) => {
        setList((data.list) || []);
        setDefaultList(([...data.list]) || []); // data from the API if possible
      }) 
      .catch((error) => {
        console.error("Error fetching data from the API:", error);
        console.log("Fetching data from local file: table.json");
        setList((listData) || []);
        setDefaultList(([...listData]) || []); // using local data table.json
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

  const sortDesc = (key) => {
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

  const sortAsc = (key) => {
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
    setList([...defaultList]);
  };

  const toggleFirstNameSorting = () => {
    toggleDetailRow(null);

    if (firstNameSorted === "default" ) {
        setFirstNameSorted("asc")
        sortAsc("firstname");
    } else if (firstNameSorted === "asc") {
        setFirstNameSorted("desc") 
        sortDesc("firstname");
    } else if (firstNameSorted === "desc") {
        resetToDefault();  
        setFirstNameSorted("default");
    }
    setLastNameSorted("default");
    setSexSorted("default");
    setBirthdaySorted("default");
  }

  const toggleLastNameSorting = () => {
    toggleDetailRow(null);

    if (lastNameSorted === "default" ) {
        setLastNameSorted("asc")
        sortAsc("surname");
    } else if (lastNameSorted === "asc") {
        setLastNameSorted("desc") 
        sortDesc("surname");
    } else if (lastNameSorted === "desc") {
        resetToDefault();  
        setLastNameSorted("default");
    }
    setFirstNameSorted("default");
    setSexSorted("default");
    setBirthdaySorted("default");
  }

  const toggleSexSorting = () => {
    toggleDetailRow(null);

    if (sexSorted === "default" ) {
        setSexSorted("asc")
        sortAsc("sex");
    } else if (sexSorted === "asc") {
        setSexSorted("desc") 
        sortDesc("sex");
    } else if (sexSorted === "desc") {
        resetToDefault();  
        setSexSorted("default");
    }
    setFirstNameSorted("default");
    setLastNameSorted("default")
    setBirthdaySorted("default");

  }

  const toggleBirthdaySorting = () => {
    toggleDetailRow(null);

    if (birthdaySorted === "default" ) {
        setBirthdaySorted("asc")
        sortAsc("personal_code");
    } else if (birthdaySorted === "asc") {
        setBirthdaySorted("desc") 
        sortDesc("personal_code");
    } else if (birthdaySorted === "desc") {
        resetToDefault();  
        setBirthdaySorted("default");
    }
    setFirstNameSorted("default");
    setLastNameSorted("default");
    setSexSorted("default");
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

  const personGender = (gender) => {
    if (gender === "m") {
      return "Mees"
    } else if (gender === "f"){
      return "Naine"
    } else {
      return "Määramata"
    }
  }

  return (
    <div className="page">
      <h1>Nimekiri</h1>
      <Table responsive striped className="table">
        <thead>
          <tr>
            <th onClick={toggleFirstNameSorting}>
              Eesnimi
              {firstNameSorted==="default" && <FaSort/>}               
              {firstNameSorted==="asc" && <FaSortDown/>}               
              {firstNameSorted==="desc" && <FaSortUp/>}               
            </th>
            <th onClick={toggleLastNameSorting}>
              Perekonnanimi
              {lastNameSorted==="default" && <FaSort/>}               
              {lastNameSorted==="asc" && <FaSortDown/>}               
              {lastNameSorted==="desc" && <FaSortUp/>}     
            </th>
            <th onClick={toggleSexSorting}>
              Sugu
              {sexSorted==="default" && <FaSort/>}               
              {sexSorted==="asc" && <FaSortDown/>}               
              {sexSorted==="desc" && <FaSortUp/>}     
            </th>
            <th onClick={toggleBirthdaySorting}>
              Sünnikuupäev
              {birthdaySorted==="default" && <FaSort/>}               
              {birthdaySorted==="asc" && <FaSortDown/>}               
              {birthdaySorted==="desc" && <FaSortUp/>}     
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
                  <td>{personGender(person.sex)}</td>
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
