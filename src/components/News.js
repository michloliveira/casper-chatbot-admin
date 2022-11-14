
function News(props){
    return(
        <tr>
            <td>{props.image}</td>
            <td>{props.title}</td>
            <td>{props.description}</td>
            <td>{props.theme}</td>
            <td>{props.link}</td>
        </tr>
    );
}

export default News;