import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
// import Entry from "./Entry";
import "./share.css";
import { PermMedia, Room } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import "./entry.css";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";

const Share = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
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

  const validateData = () => {
    console.log("validate data");
    let newErrorData = {};
    let success = true;
    for (const property in formData) {
      if (property === "__v") {
      } else if (formData[property]) {
        newErrorData[property] = null;
      } else {
        newErrorData[property] = "Cannot be empty";
        success = false;
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

  const handleSubmitClick = async (e) => {
    e.preventDefault();
    if (validateData()) {
      console.log(user._id);
      console.log(formData);
      try {
        await axios.post("/posts", formData);
        navigate("/");
      } catch (err) {
        console.log(err);
      }
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
        userId: user._id,
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
  const [selectedEntry, setSelectedEntry] = useState({});

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/Portrait.jpg" alt="" />
          <form className="shareInput" onSubmit={handleSubmitClick}>
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
            <div className="shareBottom">
              <div className="shareOptions">
                <div className="shareOption">
                  <PermMedia htmlColor="tomato" className="shareIcon" />
                  <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                  <Room htmlColor="blue" className="shareIcon" />
                  <span className="shareOptionText">Location</span>
                </div>
              </div>
              <button className="shareButton" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
        <hr className="shareHr" />
      </div>
    </div>
  );
};

export default Share;
