import { Container, Button } from "react-bootstrap";
import Badgelogo from "../assets/Badgeone.png"
import { useRef, useState, useEffect} from 'react';
import axios from "axios";

const Badge = () =>{
  const imageRef = useRef(null)
  const downloadRef = useRef(null)
  const something = e => {
    let files = e.target.files;
    console.log(files[0])
    let reader = new FileReader();

    reader.readAsDataURL(files[0]);
    reader.onload = r => {
         console.log(r.target.result);
    var res = r.target.result.split("base64,")
    var bodyFormData = new FormData();
    bodyFormData.append("image",res[1]);
    axios({
  method: "post",
  url: "https://devfest-badge-api.herokuapp.com/getbadge",
  data: bodyFormData,
  headers: { "Content-Type": "multipart/form-data" },
})
  .then(function (response) {
    //handle success
    // console.log("image",response);
    // document.getElementById('img').src = response.data.image
    imageRef.current.src = "data:image/png;base64,"+response.data.image
    downloadRef.current.href = "data:image/png;base64,"+response.data.image
    console.log(response.data.image)
  })
  .catch(function (response) {
    //handle error
    console.log(response);
  });

     };
}
    return(
        <div>
        <Container className="pb-5">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-12 my-5 pt-5 pl-2 ">
              <h1 className="pe-3 font">
                DevDays <span className="colortext"> Badge</span>
              </h1>
              <p className="pt-2 pb-2 font h6">
                Now that you are here, how getting your DevDays 2022
                Badge? Upload an image and generate a personalised badge with
                the DevDays 2022 frame. Also share your image using 
                <span className="colortext"> #DevDays</span> on different social platforms.
              </p>
              <div className="pt-3">
                <input type="file"
                 accept = "images/*"
                 id = "imageUploader"
                 onChange={
                   something
                 }
                 
                />

              </div>
            </div>

            <div className="col-lg-5 col-md-5 col-sm-12 my-5 ">
              <div className="pt-5"></div>
              <img src={Badgelogo} ref={imageRef} alt="Badgelog" className="img-fluid ml-5 img" id="img" />
              <a href="" ref={downloadRef} download="Badge.jpg">
                <button>Download</button>
              </a>
            </div>
          </div>
        </Container>
        </div>
    )
}


export default Badge