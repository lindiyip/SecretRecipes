import { useState, useEffect, useRef } from "react";
import Rating from "@mui/material/Rating";
import "./entry.css";

const Entry = ({ data }) => {
  const defaultFormData = {
    title: "",
    ingredients: "",
    currentDate: "",
    desc: "",
    difficulty: 0,
    duration: "",
  };
  const [formData, setFormData] = useState(defaultFormData);
  const [errorData, setErrorData] = useState({});
  const [viewOnly, setViewOnly] = useState(false);

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      setFormData(data);
      setViewOnly(true);
    } else {
      setFormData(defaultFormData);
      setViewOnly(false);
    }
  }, [data]);

  const validateData = () => {
    console.log("validate data");
    let newErrorData = {};
    let success = false;
    for (const property in formData) {
      // newErrorData[property] = formData[property] ? null : "Cannot be empty";

      if (formData[property]) {
        newErrorData[property] = null;
        success = true;
      } else {
        newErrorData[property] = "Cannot be empty";
      }
    }
    setErrorData(newErrorData);
    return success;
  };

  const clearForm = (e) => {
    setFormData(defaultFormData);
    setErrorData({});
    e.target.reset();
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (validateData()) {
      clearForm(e);
    }
  };

  const handleInputChange = (e) => {
    setFormData((prevState) => {
      console.log(`target name: ${e.target.name}`);
      console.log(`target value: ${e.target.value}`);

      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const ratingOnChange = (e, newValue) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        difficulty: newValue,
      };
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmitClick}>
        <div className="entryInput">
          <label>Title</label>
          <div>
            <input
              placeholder="Title of Recipe"
              type="text"
              disabled={viewOnly}
              name="title"
              onChange={handleInputChange}
              className={`custom-input ${
                errorData?.title ? "red-border" : ""
              } ${viewOnly ? "input-disabled" : ""}`}
              value={formData.title}
            />
            <div className="custom-error">
              {errorData.title ? errorData.title : null}
            </div>
          </div>
        </div>
        <div className="entryInput">
          <label>Date</label>
          <div>
            <input
              type="date"
              disabled={viewOnly}
              name="currentDate"
              onChange={handleInputChange}
              className={`custom-input ${
                errorData?.currentDate ? "red-border" : ""
              } ${viewOnly ? "input-disabled" : ""}`}
              value={formData.currentDate}
            />
            <div className="custom-error">
              {errorData.currentDate ? errorData.currentDate : null}
            </div>
          </div>
        </div>
        <div className="entryInput">
          <label>Ingredients</label>
          <div>
            <input
              placeholder="Ingredients"
              type="text"
              disabled={viewOnly}
              name="ingredients"
              onChange={handleInputChange}
              className={`custom-input ${
                errorData?.ingredients ? "red-border" : ""
              } ${viewOnly ? "input-disabled" : ""}`}
              value={formData.ingredients}
            />
            <div className="custom-error">
              {errorData.ingredients ? errorData.ingredients : null}
            </div>
          </div>
        </div>
        <div className="entryInput">
          <label>Description</label>
          <div>
            <div className="flex">
              <textarea
                name="desc"
                disabled={viewOnly}
                onChange={handleInputChange}
                className={`custom-input ${
                  errorData?.desc ? "red-border" : ""
                } ${viewOnly ? "input-disabled" : ""}`}
                value={formData.desc}
              />
            </div>
            <div className="custom-error">
              {errorData.desc ? errorData.desc : null}
            </div>
          </div>
        </div>
        <div className="entryInput">
          <label>Difficulty</label>
          <div>
            <div className="flex">
              <Rating
                disabled={viewOnly}
                value={formData.difficulty}
                onChange={ratingOnChange}
              ></Rating>
            </div>
          </div>
        </div>
        <div className="entryInput">
          <label>Duration</label>
          <div>
            <input
              type="text"
              disabled={viewOnly}
              name="duration"
              onChange={handleInputChange}
              className={`custom-input ${
                errorData?.duration ? "red-border" : ""
              } ${viewOnly ? "input-disabled" : ""}`}
              value={formData.duration}
            />
            <div className="custom-error">
              {errorData.duration ? errorData.duration : null}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Entry;
