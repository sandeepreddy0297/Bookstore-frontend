import axios from 'axios';
import React, { Component } from 'react';
class ContentDisplay extends Component {
    constructor() {
        super();
        this.state = {
            books: [],
            Bid:""
        }
    }

    keys;

    getAllBooks = () => {
        if (this.state.books.length > 0) {
           
            let allBooks = this.state.books.map(book => {
                return   <tr key={book._id}><th scope="row">{book.Bid}</th><td>{book.title}</td><td>{book.author}</td><td>{book.price}</td><td><button onClick={()=>{axios.delete("http://localhost:8080/book/remove", { data: { Bid: book.Bid } }).then(res => {this.setState({Bid:res.data.Bid}); console.log(res); console.log("state",this.state.remove)}, err => {console.log(err)} )}} className="btn btn-danger"><i  className="fa fa-trash fa-2x"></i></button></td></tr>
            })
            return allBooks;
        }
        
    }

    componentDidMount() {
        axios.get("http://localhost:8080/book/allbooks").then(
            response => {
                //console.log(response.data)
                this.setState({ books: response.data })
                console.log("this is from componentdidmount", this.state);
            },
            error => { console.log(error) }
        )

    }

    render() {
        //console.log("this is from state",this.state);
        return (

            <table className="table"><thead><tr><th scope="col">Bid</th><th scope="col">Title</th><th scope="col">Author</th><th scope="col">Price</th></tr ></thead><tbody>{this.getAllBooks()}</tbody></table>
        );
    }
}

export default ContentDisplay;
 /* <tr>
    <th scope="col">1</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
    <td>edit</td>
    <td>delete</td>
  </tr>
  <tr>
    <th scope="row">2</th>
    <td>Jacob</td>
    <td>Thornton</td>
    <td>@fat</td>
    <td>edit</td>
    <td>delete</td>
  </tr>
  <tr>
    <th scope="row">3</th>
    <td>Larry</td>
    <td>the Bird</td>
    <td>@twitter</td>
    <td>edit</td>
    <td>delete</td>
  </tr>*/