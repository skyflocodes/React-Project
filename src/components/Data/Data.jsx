import React, { useMemo, useState, useEffect } from 'react';
//import data from './data.json';
import Header from '../shared/Header';
import axios from 'axios';

const Data = () => {
  const APILINK = 'https://skyflocodes.github.io/NBAAPI/NBATEAMS.json';
  const [data, setData] = useState([]);
  const teams = useMemo(() => data, [data]);

  const filter = event => {
    axios.get(APILINK).then(resp=>{
    event.persist();
    const value = event.target.value;
    if (value.length === 0) {
      setData([...resp.data]);
    } 
    else if (isNaN(value)) {
      const regex = new RegExp(value.toString().toLowerCase());
      setData([...resp.data.filter(datum => (regex.test(datum.name.toString().toLowerCase()) || regex.test(datum.location.toString().toLowerCase()) || regex.test(datum.abbreviation.toString().toLowerCase())))]);
    }
    else {
      const num = Number(value);
      setData([...resp.data.filter(datum => (Number(datum.chips) === num))]);
    }
  });
  };

  useEffect(() => {
    axios.get(APILINK)
    .then(resp => {
      setData(resp.data);
    });
  }, []);

// const Data = () => {
//   const teams = useMemo(() => data, []);
//   const [data, setData] = useState([""]);

//   const filter = event => {
//     event.persist();
//     const value = event.target.value;
    
//     if (value.length === 0) {
//       setData([...data]);
//     } else if (isNaN(value)) {
//       const regex = new RegExp(value);
//       setData([...data.filter(datum => (regex.test(datum.title) || regex.test(datum.body)))]);
//     } else {
//       const num = Number(value);
//       setData([...data.filter(datum => (Number(datum.userId) === num || Number(datum.id) === num))]);
//     }
//   };

  return (
    <>
        <Header title="Team Info"/>
        <div className="container">
            <div className="row my-2 justify-content-end">
              <div className="col-auto">
                <b><label htmlFor="search" className="col-form-label">Search</label></b>
              </div>
              <div className="col-auto">
                <input type="text" name="filter" className="form-control" onChange = {filter}/>
              </div>
            </div>
            
            <table className="table">
              <thead class="thead-light">
                <tr>
                  <th scope="col">Abbreviation</th>
                  <th scope="col">Name</th>
                  <th scope="col">Location</th>
                  <th scope="col">Championship Wins</th>
                </tr>
              </thead>
              {teams.map((postorder, i) => (
              <tbody className="text-dark">
                <td>{postorder.abbreviation}</td>
                <td>{postorder.name}</td>
                <td>{postorder.location}</td>
                <td>{postorder.chips}</td>
              </tbody>
              ))}
            </table>
        </div>
    </>
  );
}
 
export default Data;