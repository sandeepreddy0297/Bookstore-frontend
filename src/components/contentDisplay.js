import React, { Component } from 'react';
class ContentDisplay extends Component {

    renderbooks=()=>{

    }
   
    render() { 
        return ( 
            <div>
                <table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Book Title</th>
      <th scope="col">Author</th>
      <th scope="col">Price</th>
      <th >Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
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
    </tr>
  </tbody>
</table>
            </div>
         );
    }
}
 
export default ContentDisplay;