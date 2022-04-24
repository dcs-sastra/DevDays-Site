import { Button } from 'bootstrap';
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
            <img src={preview} style={{objectFit: "cover"}}/>
            <form>
                <input type="file"
                 accept = "images/*"
                 onChange={ (event) =>{
                    const file = event.target.files[0];
                    if(file && file.type.substring(0,5) == "image"){
                        setImage(file);
                    }else{
                        setImage(null);
                    }
                }} />
            </form>
        </div>
    )
}


export default Badge