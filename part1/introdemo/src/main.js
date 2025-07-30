import ReactDOM from 'react-dom/client';
import React from 'react';
import SayHello from './SayHello';

const root = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(root);


const App = () => {
    const myDiv = React.createElement('div', {}, [
        React.createElement('h1', {className: 'class'}, 'Hello TEJ'),
        React.createElement(SayHello, {name: 'Bijay'}),
        React.createElement(SayHello, {name: 'Mahesh'}),
        React.createElement(SayHello, {name: 'Lokesh'})
    ]);

    return myDiv;
};

reactRoot.render(React.createElement(App));
