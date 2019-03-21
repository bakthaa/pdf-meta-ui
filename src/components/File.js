import React, { Component,useState } from 'react';
import ResultTable from './ResultTable';
import ProgressBar from './ProgressBar';
import st from './File.css';
import cls from '../index.css';
import getResult from './PdfMetaService';
import ErrorMsg from './ErrorMsg';


const File = () => {

		// const [txtVal, setTxtVal] = useState('/Users/power-team/Downloads');
		const [txtVal, setTxtVal] = useState('');
		const [result, setResult] = useState({});
		const [error, setError] = useState('');

		const _onFomSumit = (e) => {
			e.preventDefault();
			ProgressBar.show();
			setResult({});
			getResult(txtVal)
				.then(res => {
					ProgressBar.hide();
					if (500 === res.status) {
						setError(res.message);
						setResult({});
					} else {
						setResult(res.files);
					}
				})
				.catch(error => {
					ProgressBar.hide();
					setError(error.error);
				});
		};

		const _onTxtChange = (e) => {
			setTxtVal(e.target.value);
			setError('');
		};
		const _onClear = (e) => {
      setTxtVal('');
			setResult({});
			setError('');
		};

    return (
      <form onSubmit={_onFomSumit.bind(this)}>
        <div className={cls.row + ' ' + cls.bb}>
          <div className={cls.col3}>
            <h1>PDF-Meta</h1>
          </div>
          <div className={cls.col9 + ' ' + cls.navTop}>
              <input type='text' id='folder' name='folder' value={txtVal} onChange={_onTxtChange}/>
              <input type='submit' value='Submit' />
              <input type='button' value='clear' onClick={_onClear}/>
							<ErrorMsg err={error}/>

          </div>
        </div>
				<ProgressBar.Component/>
        <div>
          <ResultTable data={result}/>
        </div>
      </form>
    )
}
export default File;
