import React from 'react';
const divStyle = {
    color: 'blue',
    padding: '1rem',
    border: '1px solid #ccc',
    borderBottom: '2px solid #ccc',
    fontWeight: 'bold'
};
export const InlineComponent = props => (
    <div>
        <div style={divStyle}>Inline Styled Element</div>
    </div>
);
