import React from 'react';

const SayHello = (props) => {
    return React.createElement('p', { className: 'class' }, `Hello ${props.name}`);
}

export default SayHello;