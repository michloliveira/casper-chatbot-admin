import { useEffect, useState } from "react";
import NewsLogo from "../assets/news.jpg";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../services/Firebase";

const CreateNews = () =>{
    let imageHeight = {
        height: 175
    }

    const [file, setFile] = useState(null);

    useEffect(() => {
        if(file){

            console.log(file.name);
        }

    },[file]);


    const handleAdd = async(e) =>{
        e.preventDefault();
        const docRef = await addDoc(collection(db, "cities"), {
            name: "Tokyo",
            country: "Japan"
          });

          console.log("Document written with ID: ", docRef.id);
    }

    return(
        <>
        <main className="col-md-6  col-lg-6 m-auto">
            <form onSubmit={handleAdd}>
            <div>
                <label className="form-label">Imagem</label>
                <div class="mb-4 d-flex justify-content-center">
                    {file ? <img src={URL.createObjectURL(file)} style={imageHeight}/> : <img src={NewsLogo} style={imageHeight}/>}
                </div>
                <div className="d-flex justify-content-center">
                    <div className="btn btn-primary btn-rounded btn-sm">
                        <label className="form-label text-white m-1" htmlFor="File1">Choose file</label>
                        <input type="file" className="form-control d-none" id="File1" onChange={(e) => setFile(e.target.files[0])} />
                    </div>
                </div>
            </div>

                <div className="form-outline mb-4">
                    <label className="form-label" >Título</label>
                    <input type="text"  className="form-control" />
                </div>


                <div className="form-outline mb-4">
                    <label className="form-label" >Descrição</label>
                    <textarea className="form-control"  rows="4"></textarea>
                </div>



                <button type="submit" className="btn btn-primary btn-block mb-4">Send</button>
            </form>
        </main>
        </>
    )
}

export default CreateNews;