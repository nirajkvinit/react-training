import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//let index_para = "This is a paragraph from index.js";
const index_para = {
    text: "This is a paragraph from index.js"
}

class Hello extends React.Component {
    render() {
        index_para.new_para = "Another paragraph in index.js"
        return (
            <div>
                <h2>{index_para.text}</h2>
                <p>{index_para.new_para}</p>
            </div>
        )
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'));
registerServiceWorker();
