import React, { useMemo, useState, useEffect } from 'react';
import Header from '../shared/Header';
import axios from 'axios';

const Data = () => {
  const APILINK = 'https://jsonplaceholder.typicode.com/posts';
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
      const regex = new RegExp(value);
      setData([...resp.data.filter(datum => (regex.test(datum.title) || regex.test(datum.body)))]);
    }
    else {
      const num = Number(value);
      setData([...resp.data.filter(datum => (Number(datum.userId) === num || Number(datum.id) === num))]);
    }
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
        <Header title="Team Info"/>
        <div className="container">
            <div className="row my-3 align-items-center justify-content-end">
              <div className="col-auto">
                <b><label htmlFor="filter" className="col-form-label">Filter</label></b>
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