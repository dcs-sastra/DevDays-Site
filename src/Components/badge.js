import { Container, Button } from "react-bootstrap";
import Badgelogo from "../assets/Badge.svg"
import { useRef, useState, useEffect} from 'react';


const Badge = () =>{
    const [image, setImage] = useState();
    const [preview, setpreview]  = useState();
    useEffect(() => {
        if(image){
            const reader = new FileReader();
            reader.onloadend = () => {
                    setpreview(reader.result)
            }
            reader.readAsDataURL(image);
        }else{
                setpreview(null)
        }
    },[image])
    return(
        <div>
        <Container className="pb-5">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-12 my-5 pt-5 pl-2 ">
              <h1 className="pe-3 font">
                DevDay <span className="colortext"> Badge</span>
              </h1>
              <p className="pt-2 pb-2 font h6">
                Now that you are here, how getting your DevDays 2022
                Badge? Upload an image and generate a personalised badge with
                the DevDays 2022 frame. Also share your image using
                <span className="colortext">#DevDays</span> on different social platforms.
              </p>
              <div className="pt-3">

                <input type="file"
                 accept = "images/*"
                 id = "imageUploader"
                 onChange={ (event) =>{
                    const file = event.target.files[0];
                    if(file && file.type.substring(0,5) == "image"){
                        setImage(file);
                    }else{
                        setImage(null);
                    }
                }} />
              </div>
            </div>

            <div className="col-lg-5 col-md-5 col-sm-12 my-5 ">
              <div className="pt-5"></div>
              <img src={preview} alt="Badgelog" className="img-fluid ml-5" />
            </div>
          </div>
        </Container>
        </div>
    )
}


export default Badge