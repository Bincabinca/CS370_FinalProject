class Component extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mimic: "This react component will mimic what you type!"
        };
    }
    
    inputChange = (event) => {
        this.setState({mimic: event.target.value});
        return;
    }

    render(){
        return(
            <div id="reactComponent">
                <h3>React Component</h3>
                <h5 id="result">{this.state.mimic}</h5>
                <div id="entry">
                    <input type="text" id="mimicEntry" onChange={this.inputChange}/>
                </div>
            </div>
        )
    }
}