import React from 'react';
import styled from 'styled-components';

const TodoComponent = styled.div`
background-color: #44014C;
width: 300px;
min-height: 200px;
margin: 30px auto;
box-sizing: border-box;
color: white
`;
const Header = styled.h2`
  padding: 10px 20px;
  text-align: center;
  color: white;
  fontSize: 22px
`;
export const StyledComponent = props => (
    <TodoComponent>
        <Header>ToDo</Header>
        <div>
            This is styled using styled-component
        </div>
    </TodoComponent>
);
