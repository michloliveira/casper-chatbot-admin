
function News(props){
    let imageHeight = {
        height: 80,
    }
    return(
        <tr>
            <td className="align-middle"><img src={props.image} alt="imagem da notícia" style={imageHeight}></img></td>
            <td className="align-middle">{props.title}</td>
            <td className="align-middle">{props.description}</td>
            <td className="align-middle">{props.theme}</td>
            <td className="align-middle"><a href={props.link}>{props.link}</a></td>
            <td className="align-middle"><button type="button" class="btn btn-outline-danger">Remover</button></td>
        </tr>
    );
}

export default News;