import axios from 'axios';
import React from 'react';
class Content extends React.Component{
    constructor() {
        super();
        this.state = {
            Bid: "",
            title: "",
            author: "",
            price: ""
        }
    }

    capturedata = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({[name]:value});
    }

    submit = (event) => {
        event.preventDefault();
        //console.log("Book data :", this.state)
        axios.post("http://localhost:8080/book/create", this.state).then(
           response=>{
               console.log(response.data);
           },
           error=>{
               console.log(error)
           }
        )
    }
    
    render() {
        return (
            <div>

                <form>
                    <label>Id</label> :  <input type="text" onChange={this.capturedata} name="Bid" />  <br></br><br></br>
                    <label>Title</label> :  <input type="text" name="title" onChange={this.capturedata} placeholder="book name" />  <br></br><br></br>
                    <label>Author</label> : <input type="text" name="author"onChange={this.capturedata} placeholder="author" />  <br></br><br></br>
                    <label>Price</label> : <input type="number" name="price" onChange={this.capturedata} placeholder="price" />  <br></br><br></br>
                    <button onClick={this.submit}>submit</button>
                </form>
            </div>
        );
    }
}

export default Content;