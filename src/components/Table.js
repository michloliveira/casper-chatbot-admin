import News from "../components/News";

function Table(Data){
    const dataView = Data.map((data) => {
        return(
            <News image={data.image} title={data.title} description={data.description} link={data.description}/>
        );
    })

    return(
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Imagem</th>
                    <th scope="col">Título</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Tema</th>
                    <th scope="col">Link</th>
                </tr>
            </thead>
            <tbody>
                {dataView}
            </tbody>

        </table>

    );
}

export default Table;