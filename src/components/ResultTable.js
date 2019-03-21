import React, { Component } from 'react';
import st from './File.css';

const ResultTable = (props) => {

		const _result = props.data;
		// "idx":"1","name":"1.pdf","title":"Intro-1","tagged":"Yes","lan":"English"
    let _tableHeader;
		let _tableBody;
		if (Array.isArray(_result)) {
      _tableHeader = ["S.No", "Name", "Title", "Tagged", "Language"]
        .map((val, i) => <th key={i}>{val}</th>);
      _tableBody = _result.map((val, i) => {
        return (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{val.name}</td>
            <td>{val.title}</td>
            <td>{val.tagged}</td>
            <td>{val.lan}</td>
          </tr>
        )
      });
		}



  return(
    <table>
      <thead>
        <tr>
          {_tableHeader}
        </tr>
      </thead>
      <tbody>
        {_tableBody? _tableBody: null}
      </tbody>
    </table>
  );
}

export default ResultTable;
