import { useState } from "react";
import NewsLogo from "../assets/news.jpg";

const CreateNews = () =>{
    let imageHeight = {
        height: 175
    }

    const [imageNews, setImageNews] = useState(NewsLogo);

    return(
        <>
        <main className="col-md-6  col-lg-6 m-auto">
            <form>
            <div>
                <label className="form-label">Imagem</label>
                <div class="mb-4 d-flex justify-content-center">
                    <img src={imageNews} style={imageHeight}
                    alt="Imagem da notícia" />
                </div>
                <div class="d-flex justify-content-center">
                    <div class="btn btn-primary btn-rounded btn-sm">
                        <label class="form-label text-white m-1" for="File1">Choose file</label>
                        <input type="file" class="form-control d-none" id="File1" onChange={(e) => setImageNews(URL.createObjectURL(e.target.files[0]))}/>
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