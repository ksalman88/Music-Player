import { Button, TextField } from "@mui/material"
import { Formik } from "formik"
import React, { useState } from "react";
import Swal from "sweetalert2";
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';


const Addmusic = () => {
  const [selThumbnail, setSelThumbnail] = useState("");
  const [selFile, setSelFile] = useState("");

  const userSubmit = async (formdata) => {
    formdata.image = selThumbnail;
    formdata.musicfile = selFile;

    console.log(formdata);

    const response = await fetch('http://localhost:5000/music/add', {
      method: 'POST',
      body: JSON.stringify(formdata),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response.status === 200) {
      console.log('success');
      Swal.fire({
        icon: "success",
        title: "Well Done👍",
        text: "You have done a wonderfull Job!!"
      });


    } else {
      console.log('error occured');
    }
  }

  const uploadFile = (e) => {
    const file = e.target.files[0]
    setSelFile(file.name)
    const fd = new FormData()
    fd.append("myfile", file)
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("uploaded")
      }
    })
  }

  const uploadThumbnail = (e) => {
    const file = e.target.files[0]
    setSelThumbnail(file.name)
    const fd = new FormData()
    fd.append("myfile", file)
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      console.log(res.status)
      if (res.status === 200) {
        console.log("uploaded")
      }
    })
  }


  return (
    <div className="container">
      <h1>Add New Music Here</h1>
      <hr />

      <Formik
        initialValues={{
          title: "",
          description: "",
          author: "",
          lyrics: "",
          image: "",
          musicfile: "",
          createdate: "",
          year: "",
          publisher: "",
        }}
        onSubmit={userSubmit}>
        {({ values, handleChange, handleSubmit, errors }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              value={values.title}
              onChange={handleChange}
              id="title"
              sx={{ mt: 5 }}
              fullWidth
              label="title"
              helperText={errors.title}
              error={errors.title ? true : false}
            />
            <TextField
              value={values.description}
              onChange={handleChange}
              id="description" sx={{ mt: 3 }}
              fullWidth
              label="description" />
            <TextField
              value={values.author}
              onChange={handleChange}
              id="author"
              sx={{ mt: 3 }}
              fullWidth
              label="author" />
            <label className="mt-3">Song Lyrics</label>
            <textarea
              value={values.lyrics}
              onChange={handleChange}
              id="lyrics"
              className="form-control"
            >

            </textarea>
            <div className="row mt-4">
              <div className="col-md">
                <label>Upload Image</label>
                <input type="file" className="mb-4 form-control" onChange={uploadThumbnail} />

              </div>
              <div className="col-md">

                <label>Upload Music</label>
                <input type="file" className="mb-4 form-control" onChange={uploadFile} />
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-md">

                <TextField
                  value={values.year}
                  onChange={handleChange}
                  id="year"
                  fullWidth
                  label="year"
                  type="year"
                />
              </div>
              <div className="col-md">

                <TextField
                  value={values.publisher}
                  onChange={handleChange}
                  id="publisher"
                  fullWidth
                  label="publisher"
                  type="text"
                />
              </div>
            </div>

            <Button type="submit" sx={{ mt: 5 }}>Submit</Button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default Addmusic;