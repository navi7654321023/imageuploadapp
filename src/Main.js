import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import { storage } from "./firebase/config";
import PermMediaOutlinedIcon from "@mui/icons-material/PermMediaOutlined";
import "./App.css";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import usePagination from "./hooks/usePagination";
const Main = () => {
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);
  const [progress, setProgress] = useState(0);
  let [page, setPage] = useState("1");

  // const count = Math.ceil(urls.length / PER_PAGE);
  // const url = usePagination(urls, PER_PAGE);

  const handleChange = (e) => {
    for (let i = 0; i < e?.target?.files?.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }
    setPage(parseInt(e.currentTarget.textContent));
    _Data.jump(page);
    console.log(page, "fdcghvjk");
  };
  useEffect(() => {
    const promises = [];
    images.map((image) => {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      promises.push(uploadTask);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        async () => {
          await storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((urls) => {
              setUrls((prevState) => [...prevState, urls]);
            });
        }
      );
    });

    Promise.all(promises)
      // .then(() => alert("All images uploaded"))
      .catch((err) => console.log(err));
  }, [images]);

  console.log("images: ", images);
  console.log(urls, "url");
  const _Data = usePagination(urls, 6);
  console.log(_Data.currentData(), "currentdataisconsoled");
  console.log(urls, "consoleofUrl");

  return (
    <div>
      <div className="background">
        <div className="title">
          <div className="header">
            <PermMediaOutlinedIcon
              className="gallery"
              style={{ color: "white" }}
            />
            <h1>My Gallery</h1>
          </div>
          <h2>Your Pictures</h2>
          <p>
            Inspirational designs, illustrations, and graphic elements from the
            world’s best designers.
          </p>
        </div>
      </div>
      <progress className="progress" value={progress} max="100" />
      <br />
      <br />
      <form>
        <label>
          <input type="file" multiple page={page} onChange={handleChange} />
          <AddPhotoAlternateIcon
            style={{ color: "#1a73e8" }}
          ></AddPhotoAlternateIcon>
        </label>
        <h4 className="select">Select</h4>
      </form>

      <br />
      {_Data &&
        _Data.currentData()?.map((url, i) => (
          <>
            {console.log(url, "fsjahsjfah")}
            <img
              key={i}
              style={{
                width: "300px",
                height: "300px",
                padding: "30px",
                marginLeft: "80px",
              }}
              src={url || "http://via.placeholder.com"}
              alt="firebase-image"
            />
          </>
        ))}
      <Stack spacing={2}>
        <Pagination
          count={8}
          color="primary"
          page={page}
          onChange={(e) => handleChange(e)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </Stack>
    </div>
  );
};

export default Main;
