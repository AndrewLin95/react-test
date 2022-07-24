import React, { Component } from 'react';

class Overview extends Component {

    render() {
        return(
         <ul>
             {this.props.tasks.map((task) => {
                return (
                <div key={task.id}>
                    <li>{task.text}</li>
                     <button onClick={() => this.props.onClick(task.id)}>Delete</button>
                     <button onClick={() => this.props.editTask(task.id)}>Edit</button>
                 </div>
                 )
             })}
         </ul>
        )
    }

}



export default Overview;



// import React from 'react';
// const Overview = (props) => {
//     const { tasks } = props;

//     return (
//         <ul>
//             {tasks.map((task) => {
//                 return (
//                 <div key={task.id}>
//                     <li>{task.text}</li>
//                     <button onClick={this.props.onClick}>Delete</button>
//                 </div>
//                 )
//             })}
//         </ul>
//     );
// };