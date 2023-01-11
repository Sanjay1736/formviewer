import React, { useState } from "react";

const FormData = (props) => {
  const [formData, setFormData] = useState(props.formData);
  const { filledByInfos } = formData;
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <h1>{formData.formName}</h1>
      <form onSubmit={handleSubmit}>
        {filledByInfos.map((field) => (
          <div key={field.fieldNo}>
            <label>{field.display.label}</label>
            <input
              type={field.display.inputType}
              defaultValue={field.defaultValue}
              required={field.required}
              pattern={field.validation.regex}
              min={field.validation.minValue}
              max={field.validation.maxValue}
              onChange={(event) => {
                let updatedFormData = { ...formData };
                updatedFormData.filledByInfos.map((formField) => {
                  if (formField.fieldNo === field.fieldNo) {
                    formField.defaultValue = event.target.value;
                  }
                });
                setFormData(updatedFormData);
              }}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormData;
