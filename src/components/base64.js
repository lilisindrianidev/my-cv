import React, {useState} from "react";

function ImageBlob(){
    const [imgs, setings]=useState()
    const handleChange=(e)=>{
        console.log(e.target.files)
        const data =new FileReader()
        data.addEventListener('load',()=>{
            setings(data.result)
        })
        data.readAsDataURL(e.target.files[0])
        
    }
    console.log(imgs)
    return(
        <div>
            <input type="file" onChange={handleChange}/>
            <img src={imgs} style={{width:"200px", height:"200px"}}/>
        </div>
    )
}
export default ImageBlob 