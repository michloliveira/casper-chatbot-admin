import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import Header from "../components/Header";
import News from "../components/News";
import { db } from "../services/Firebase";

function Dashboard(){
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        let list = []
        const fetchData = async () =>{
            try{
                const querySnapshot = await getDocs(collection(db,"news"));
                querySnapshot.forEach((doc) => {
                    list.push({id: doc.id, ...doc.data()});
                });
                setData(list);

            
            }
            catch(err){
                console.log(err);
            }
        }
        fetchData();
    }, []);

const handleDelete = async(id) => {
    try{
        await deleteDoc(doc(db,"news", id));
        setData(data.filter((item) => item.id !== id));
    }
    catch(err){
        console.log(err);
    }
}
console.log(data);
    const dataView = data.map((data) => {
        return(
            <News image={data.image} title={data.title} description={data.description} theme={data.theme} link={data.description} id={data.id} delete ={handleDelete}/>
        );
    })

    return(
        <>
        <main className="col-md-9  col-lg-12">
            <Header/>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h4 className="h4 ">Casper Dashboard</h4>
                <button type="button" class="btn btn-outline-dark" onClick={()=>{navigate("/create")}}>Adicionar Notícia</button>

            </div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Imagem</th>
                        <th scope="col">Título</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Tema</th>
                        <th scope="col">Link</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {dataView}
                </tbody>

            </table>

        </main>
        </>
    );
}

export default Dashboard;