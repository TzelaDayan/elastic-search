import React from 'react'
import styled from 'styled-components';

const Text = styled.div`
    font-size: 3vh;
    color: black;
`

const FieldTitle = (props) => (
    <Text>{props.fieldName}</Text>
);


export default FieldTitle;