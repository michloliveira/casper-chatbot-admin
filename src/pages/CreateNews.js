import { useEffect, useState } from "react";
import NewsLogo from "../assets/news.jpg";

import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../services/Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const CreateNews = () =>{
    let imageHeight = {
        height: 175
    }

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [link, setLink] = useState("");
    const [imagem, setImagem] = useState("");
    const [tema, setTema] = useState("");




    const [file, setFile] = useState(null);

    useEffect(() => {
        if(file){

            const name = new Date().getTime() + file.name
            const storageRef = ref(storage, name); 
            console.log(name);


            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed', 
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                        break;
                }
            }, 
            (error) => {
                // Handle unsuccessful uploads
            }, 
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                });
            }
            );
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
                <div className="mb-4 d-flex justify-content-center">
                    {file ? <img src={URL.createObjectURL(file)} style={imageHeight} alt="imagem anuncio"/> : <img src={NewsLogo} style={imageHeight} alt="imagem anuncio"/>}
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
                    <select className="form-select" aria-label="Default select example">
                        <option selected value= "0" >Entretenimento</option>
                        <option value="1">Música</option>
                        <option value="2">Esportes</option>
                        <option value="3">Three</option>
                    </select>
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" >Descrição</label>
                    <textarea className="form-control"  rows="4"></textarea>
                </div>



                <button type="submit" className="btn btn-primary btn-block mb-4">Enviar</button>
            </form>
        </main>
        </>
    )
}

export default CreateNews;