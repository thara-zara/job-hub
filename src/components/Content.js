import "./Content.css";

function Content(props){
    return(
    <>
        <h2><span>{props.heading1}</span>{props.heading2}</h2>
        <h1>{props.subheading}</h1>
        <p>{props.pargraph}</p>
    </>
    )
}
export default Content;
