import React, { useState } from "react";
import { storage } from "../../FirabaseConfig";
import axios from "../../axios";
import "./AddrentHouse.style.css";

function AddService() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleImageSelect = (e) => {
    setImgUrl(URL.createObjectURL(e.target.files[0]));
    setImg(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const storageRef = storage.ref();

    const uploadTask = storageRef.child(`apartment-hunt/${img.name}`).put(img);

    uploadTask.on(
      "state_changed",
      function (snapshot) {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      function (error) {
        alert(error.message);
      },
      function () {
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          console.log("File available at", downloadURL);
          axios
            .post("/api/services", {
              title: title,
              image: downloadURL,
              location,
              bathroom,
              bedroom,
              price,
            })
            .then((response) => {
              alert(response.data);
              window.location.reload(false);
            })
            .catch((error) => alert(error.message));
        });
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="addService__form">
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="">
            <strong>Service Title</strong>
          </label>
          <input
            required
            className="form-control mb-4"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="">
            <strong>Location</strong>
          </label>
          <input
            required
            className="form-control mb-4"
            placeholder="Enter Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <label htmlFor="">
            <strong>No of Bathroom</strong>
          </label>
          <input
            required
            className="form-control mb-4"
            placeholder="Enter bathroom"
            value={bathroom}
            onChange={(e) => setBathroom(e.target.value)}
          />
        </div>
        <div className="col-md-6 ">
          <label htmlFor="">
            <strong>Price</strong>
          </label>
          <input
            required
            className="form-control mb-4"
            placeholder="Enter Location"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label htmlFor="">
            <strong>No of Bedroom</strong>
          </label>
          <input
            required
            className="form-control mb-4"
            placeholder="Enter bathroom"
            value={bedroom}
            onChange={(e) => setBedroom(e.target.value)}
          />
          <div className="my-2 p-3 d-flex justify-content-between">
            <label htmlFor="coverImg" className="uploadImg">
              <i class="fas fa-cloud-upload-alt"></i> Upload Image
            </label>
            <input
              type="file"
              accepts="image/*"
              id="coverImg"
              className="d-none"
              onChange={handleImageSelect}
            />
            <img src={imgUrl} alt="" className="selectedImg" />
          </div>
        </div>
      </div>

      <button type="submit" className="btn px-4 my-3">
        SUBMIT
      </button>
    </form>
  );
}

export default AddService;
