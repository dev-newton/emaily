import React from "react";

const SurveyField = ({ input, label, meta }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} autoComplete="off" style={{ marginBottom: "5px" }} />
      <div
        className="red-text"
        style={{
          marginBottom: "20px"
        }}
      >
        <i>{meta.touched ? meta.error : null}</i>
      </div>
    </div>
  );
};

export default SurveyField;
