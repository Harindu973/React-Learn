import React, { Component } from "react";
import axios from "axios";

export default class user extends Component {
  state = {
    users: [
      { name: "John", age: 20 },
      { name: "Jill", age: 30 },
      { name: "Peter", age: 40 },
      { name: "Techsith", age: 30 },
      { name: "Jackson", age: 50 },
    ],
    title: "Users List",
  };

  // Handle to modify state
  makeMeYounger = async () => {


    

         await axios.get('https://api.publicapis.org/entries')

        .then(res=>{
            console.log(res.data);

            this.setState({
                users: [
                    { name: "John", age: res.data.count },
                    { name: "Jill", age: 10 },
                    { name: "Peter", age: 40 },
                    { name: "Techsith", age: 50 },
                    { name: "Jackson", age: 60 },
                  ],
            })
        }

        ).catch(err=>{
            console.log(err);
        })

    

    

  };

  render() {
    return (
      <div>
        <button onClick={this.makeMeYounger}>Make Us 10 Years Younger</button>
        <br />
        <h1>{this.state.title}</h1>
        <p>{this.state.users[0].name}  {this.state.users[0].age}</p>
        <p>{this.state.users[1].name}  {this.state.users[1].age}</p>
        <p>{this.state.users[2].name}  {this.state.users[2].age}</p>
        <p>{this.state.users[3].name}  {this.state.users[3].age}</p>
        <p>{this.state.users[4].name}  {this.state.users[4].age}</p>



      </div>
    );
  }
}
