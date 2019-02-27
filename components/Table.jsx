import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.div`
    margin: 5% 0;

`
const StyledTableHead = styled.div`   
    color: #1f5577;    
    font-weight: bolder;
    border-bottom: 3px solid #1f5577;
`
const StyledTableRow = styled.div` 
    color: black;
    border-bottom: 1px solid black;
    &:hover {
      background-color: #9ac8fb;
      cursor: pointer;
    }
` 
const StyledCell = styled.span`
    display: inline-block;
    width: 4%;
    padding: 15px 30px;
    font-size: 1vw;
`
const StyledTableBody = styled.div`

`



class Table extends React.Component {

    handleEntityClicked = (entety) => {
        this.props.onEntityClick(entety);
    }

    renderTableBody = (entety, tableFields, entityIndex, editMode) => {
        return (
            <StyledTableRow key={entityIndex} data={entety["_source"]} onClick={() => this.handleEntityClicked( entety)}>
                {tableFields.map((fName, index) => 
                    <input type="text" value={entety["_source"][fName]} key={index+entityIndex} fieldName={fName} disabled={!editMode}/>
                )}
            </StyledTableRow>
            );
    } 

    render() {
        const { enteties, tableFields, editMode } = this.props;
        // const tableFields = Object.keys(enteties[0]);
        return (
            <StyledTable>
                <StyledTableHead>
                {tableFields.map((fName, index) => 
                <StyledCell key={index} fieldName={fName}>{fName}</StyledCell>
                )}
                </StyledTableHead>
                <StyledTableBody>
                    {enteties.map((entety, index) =>
                    this.renderTableBody(entety, tableFields, index, editMode)
                )}
                </StyledTableBody>
            </StyledTable>
        );        
    }
}

export default Table;
   