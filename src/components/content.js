import React, { Component } from 'react';
class Content extends Component {
    constructor() {
        super();
        this.state = {
            id: "1",
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
        console.log("Book data :", this.state)
    }

    render() {
        return (
            <div>

                <form>
                    <label>Id</label> :  <input type="text" onChange={this.capturedata} value="1" name="id" />  <br></br><br></br>
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