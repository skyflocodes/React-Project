import React, { useMemo, useState, useEffect } from 'react';
import Header from '../shared/Header';

const Data = () => {
  //const APILocation = '';

  return (
    <>
        <Header title="Data"/>
        <h2>Table</h2>
        <hr/>
              <b><label htmlFor="filter" className="col-form-label">Filter</label></b>
              <input type="text" name="filter" className="form-control" /*onChange = {filter}*//>
          
          <table className="table-bordered">
              <tr>
                <td><b>Col_1</b></td>
                <td><b>Col_2</b></td>
                <td><b>Col_3</b></td>
              </tr>

            {/* {posts.map((postorder, i) => (
            <tbody>
              <td>{postorder.Col_1}</td>
              <td>{postorder.Col_2}</td>
              <td>{postorder.Col_3}</td>
            </tbody>
            ))} */}
          </table>
    </>
  );
}
 
export default Data;