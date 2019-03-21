import React, { Component,useState } from 'react';
import cls from '../index.css';




const ErrorMsg = (props) => {

		if(props.err && props.err.length !== 0){
			return (<p className={cls.err}>{props.err}</p>)
		}else{
			return null;
		}
}
export default ErrorMsg;
