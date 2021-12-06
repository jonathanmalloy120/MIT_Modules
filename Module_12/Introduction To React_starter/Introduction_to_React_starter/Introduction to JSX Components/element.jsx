const name = 'Billy';
const Element = <h1> Hello {name} </h1>;
const Newelement = (props) => {
    const lady = props.lady
    return (<h2> and this is {lady} she is also in the movie</h2>)
}

ReactDOM.render(Element, document.getElementById('root')); //getting overwritten for some reason? Will try to fix this later
ReactDOM.render(<Newelement lady = "Sally Hotstuff"/>, document.getElementById('root'));
