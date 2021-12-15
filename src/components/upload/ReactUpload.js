import React from "react";
import {Upload} from  'antd';
import 'antd/dist/antd.css'
const RUpload = ({ ...props }) => {
  return (
    <div className="form-control-upload">
      <Upload
        {...props}
      > {props?.value?.length < 1 && '+ Upload'} </Upload>
    </div>
  );
};

export default RUpload;
