import News from "../components/News";

function Panel(){
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
                <News image="image" title="tilte2" description="jhdjfhsakfja" theme="Musica" link="www.soundcloud.com"/>
                <News image="image" title="tilte2" description="jhdjfhsakfja" theme="Musica" link="www.soundcloud.com"/>
                <News image="image" title="tilte2" description="jhdjfhsakfja" theme="Musica" link="www.soundcloud.com"/>
            </tbody>

        </table>

    );
}

export default Panel;