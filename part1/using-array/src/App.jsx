import SayHello from './SayHello';

const App = () => {
    let persons = [
        {firstName: 'Anu', lastName: 'Magar', id: 201},
        {firstName: 'Mahesh', lastName: 'Chaudhary', id: 2050},
        {firstName: 'Manoj', lastName: 'Rai', id: 275}
    ];

    return (
        <>
            <h1 className='anjanClass'>Hello World</h1>
            {persons.length > 0 ? (
                persons.filter(el => el.id > 205).map(person => <SayHello person={person} key={person.id} />)
            ): (
                <p>There are no people</p>
            )}
        </>
    );
};

export default App;