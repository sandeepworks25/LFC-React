import React from 'react';
import './../../../Components/pages/Regdump.css';
const RegDumpFunc = ({ data }) => {
  if (data && data.url && data.documentname) {
    return (
      <div className="regdump">
        <a className="regdump-link" style={{ fontSize: '30px' }} href={data.url} target="_blank">
          {data.documentname}
        </a>
      </div>
    );
  }
};

export default RegDumpFunc;
