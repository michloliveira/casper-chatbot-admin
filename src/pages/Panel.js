import Header from "../components/Header";
import Table from "../components/Table";

function Panel(){
    return(
        <>
        <main className="col-md-9  col-lg-12">
            <Header/>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h4 className="h4 ">Casper Dashboard</h4>
                <button type="button" class="btn btn-outline-dark">Adicionar Notícia</button>

            </div>
            <Table/>

        </main>
        </>
    );
}

export default Panel;