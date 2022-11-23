
function News(props){
    let imageHeight = {
        height: 100,
    }
    return(
        <tr>
            <td><div><img src={props.image} alt="imagem da notícia" style={imageHeight}></img></div></td>
            <td>{props.title}</td>
            <td>{props.description}</td>
            <td>{props.theme}</td>
            <td><a href={props.link}>{props.link}</a></td>
            <td><button type="button" class="btn btn-outline-danger">Remover</button></td>
        </tr>
    );
}

export default News;