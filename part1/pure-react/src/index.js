// const root = document.getElementById('root');

// const reactRoot = ReactDOM.createRoot(root);
// const myreactH1 = React.createElement('h1', { class: 'anjanaClass' }, 'Hello TEJ');

// reactRoot.render(myreactH1);

// This above things can be wrap inside the function for the readability

// const root = document.getElementById("root");
// const reactRoot = ReactDOM.createRoot(root);

// const App = () => {
//     return React.createElement("h1", { className: "anjanaClass" }, "Hello TEJ!");
// };

// reactRoot.render(React.createElement(App));

// We can add all multiple react element using the array

const root = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(root);

const SayHello = (props) => {
    return React.createElement('p', { className: 'class' }, `Hello ${props.name}`);
}
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
