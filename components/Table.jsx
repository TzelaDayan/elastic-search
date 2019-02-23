import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.div`
    margin: 5% 0;
    width: 70%;
`
const StyledTableHead = styled.div`
    display: flex;
    justify-content: space-between;    
    color: #1f5577;    
    font-weight: bolder;
    border-bottom: 3px solid #1f5577;
`
const StyledTableRow = styled.div`
    display: flex;
    justify-content: space-between;    
    color: black;
    border-bottom: 1px solid black;
    &:hover {
      background-color: #9ac8fb;
      cursor: pointer;
    }
` 
const StyledCell = styled.span`
    padding: 15px 30px;
    flex-grow: 1;
    flex-basis: 0;
    font-size: 1.5vw;
`
const StyledTableBody = styled.div`

`



class Table extends React.Component {

    handleEntityClicked = (entety) => {
        this.props.onEntityClick(entety);
    }

    renderTableBody = (entety, fields, entityIndex) => {
        return (
            <StyledTableRow key={entityIndex} data={entety} onClick={() => this.handleEntityClicked( entety)}>
                {fields.map((fName, index) => 
                    <StyledCell key={index+entityIndex} fieldName={fName}>{entety[fName]}</StyledCell>
                )}
            </StyledTableRow>
            );
    } 

    render() {
        const { enteties, fields } = this.props;
        return (
            <StyledTable>
                <StyledTableHead>
                {fields.map((fName, index) => 
                <StyledCell key={index} fieldName={fName}>{fName}</StyledCell>
                )}
                </StyledTableHead>
                <StyledTableBody>
                    {enteties.map((entety, index) =>
                    this.renderTableBody(entety["_source"], fields, index)
                )}
                </StyledTableBody>
            </StyledTable>
        );        
    }
}

export default Table;
   