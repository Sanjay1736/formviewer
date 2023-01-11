import './App.css';
import FormData from './Components/FormViewers';

function App() {
  const yourformDataObject = {
    id: "41210f34-f037-4641-bb94-87470d94e292",
    formName: "Order Details",
    filledByInfos: [
      {
        fieldNo: 103010,
        defaultValue: "",
        display: {
          inputType: "TEXT",
          label: "Article",
        },
        validation: {
          errorMessage: "Article can not be blank",
        },
        required: true,
      },
      {
        fieldNo: 103020,
        defaultValue: "",
        display: {
          inputType: "TEXT",
          label: "Color",
        },
        validation: {
          errorMessage: "Color can not be blank",
        },
        required: true,
      },
      {
        fieldNo: 103030,
        defaultValue: "",
        display: {
          inputType: "TEXT",
          label: "Material",
        },
        validation: {
          errorMessage: "Material can not be blank",
        },
        required: true,
      },
      {
        fieldNo: 103040,
        defaultValue: "",
        display: {
          inputType: "TEXT",
          label: "Sole",
        },
        validation: {
          errorMessage: "Sole can not be blank",
        },
        required: true,
      },
      {
        fieldNo: 104006,
        defaultValue: "0",
        display: {
          inputType: "NUMBER",
          label: "Size 6",
        },
        validation: {
          errorMessage: "Size can not be blank",
        },
        required: true,
      },
      {
        fieldNo: 104007,
        defaultValue: "2",
        display: {
          inputType: "NUMBER",
          label: "Size 7",
        },
        validation: {
          errorMessage: "Size can not be blank",
        },
        required: true,
      },
      {
        fieldNo: 104008,
        defaultValue: "3",
        display: {
          inputType: "NUMBER",
          label: "Size 8",
        },
        validation: {
          errorMessage: "Size can not be blank",
        },
        required: true,
      },
      {
        fieldNo: 104009,
        defaultValue: "3",
        display: {
          inputType: "NUMBER",
          label: "Size 9",
        },
        validation: {
          errorMessage: "Size can not be blank",
        },
        required: true,
      },
      {
        fieldNo: 104010,
        defaultValue: "2",
        display: {
          inputType: "NUMBER",
          label: "Size 10",
        },
        validation: {
          errorMessage: "Size can not be blank",
        },
        required: true,
      },
      {
        fieldNo: 104011,
        defaultValue: "2",
        display: {
          inputType: "NUMBER",
          label: "Size 6",
        },
        validation: {
          minValue: 0.0,
          maxValue: 50.0,
          errorMessage: "Size can not be blank",
          regex: null,
        },
        required: true,
      },
      {
        fieldNo: 104012,
        defaultValue: "0",
        display: {
          inputType: "NUMBER",
          label: "Size 6",
        },
        validation: {
          errorMessage: "Size can not be blank",
        },
        required: true,
      },
    ],
  };
  return (
    <div className="App">
      <FormData formData={yourformDataObject} />
    </div>
  );
}

export default App;
