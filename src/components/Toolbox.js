import React, {Component} from 'react';

class Toolbox extends Component {

  render() {
    return (
        <div className="Toolbox-Container">
            <div 
                id='div'
                draggable
                onDragStart={(ev) => {
                    ev.dataTransfer.setData("text/html", ev.target.id);
                }}
            >Item</div>
            <div className='dropinside' 
                onDragOver={(ev) => {
                    ev.preventDefault()
                }}
                onDrop={(ev) => {
                    ev.preventDefault();
                    let data = ev.dataTransfer.getData("text/html");
                    ev.target.appendChild(document.createElement(data));
                }} 
                style={{width: '1000px', height:'1000px', background: 'grey'}}> </div>
        </div>
    );
  }
}

export default Toolbox;