import React, { useMemo, useState, useEffect } from 'react';
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

  const isolateC = event => {
    axios.get(APILINK).then(resp=>{
    event.persist();
    setData([...resp.data.filter(datum => (Number(datum.chips) >= 1))]);
  });
  };

  const isolateNC = event => {
    axios.get(APILINK).then(resp=>{
    event.persist();
    setData([...resp.data.filter(datum => (Number(datum.chips) === 0))]);
  });
  };

  useEffect(() => {
    axios.get(APILINK)
    .then(resp => {
      setData(resp.data);
    });
  }, []);

  return (
    <>
        <Header title="NBA Teams"/>
        <div className="container">
            <div className="d-flex bd-highlight py-2">
              <div className="mr-auto bd-highlight">
                <div className="btn-group">
                  <button name="isolate" className="btn btn-primary" onClick = {isolateC}>Isolate Champions</button>
                  <button name="isolate" className="btn btn-secondary" onClick = {isolateNC}>Isolate Non-Champions</button>
                </div>
              </div>
                <div className="bd-highlight pr-2">
                  <b><label htmlFor="search" className="col-form-label">Search</label></b>
                  </div>
                <div className="bd-highlight">
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