function boiling(props){
    props.temperature = 150;
    if(props.temperature>100){
        return <p>Now, the water is boiling</p>
    }
    return <p>Now, the water is not boiling</p>
}
export default boiling;