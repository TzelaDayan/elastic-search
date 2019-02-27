import React from 'react';
import PrimaryTitle from './components/PrimaryTitle.jsx';
import SecondaryTitle from './components/SecondaryTitle.jsx';
import styled from 'styled-components';
import TextField from './components/TextField.jsx';
import SimpleSelect from './components/Select.jsx';
import Table from './components/Table.jsx';
import {ApolloClient} from 'apollo-client';
import {RestLink} from 'apollo-link-rest';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from "graphql-tag";

// connector to REST endpoint
const restLink = new RestLink({ uri: "https://swapi.co/api/" });

// setup client
const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

const query = gql`
  query {
    person @rest(type: "Person", path: "people/2/") {
      name
    }
  }
`;

let imgUrl = 'img/luca-zanon-1953-unsplash.jpg'; 
let backgroundStyle = {
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        margin: '-7px 0 50px 0',
}

const Wrapper = styled.div` 
  margin: 30px 30px;
`
const StyledButton = styled.button`
  padding: 20px;
  margin: 30px 0;
  font-size: 30px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  border: none;
`

class App extends React.Component {
  state = {
    searchFields: ['firstname', 'lastname', 'account_number'],
    tableFields: ['firstname', 'lastname', 'account_number'],
    data: null,
    editMode: false
  };
  
  constructor(props) {
    super(props);
    this.handleStateChanged = this.handleStateChanged.bind(this);
    this.handleEntityClicked = this.handleEntityClicked.bind(this);
  }

  handleStateChanged = (state) => {
    console.log(state);
   let temData = 
   {
   "took": 1,
   "timed_out": false,
   "_shards": {
     "total": 5,
     "successful": 5,
     "failed": 0
   },
   "hits": {
     "total": 17,
     "max_score": 4.366913,
     "hits": [
       {
         "_index": "bank",
         "_type": "doc",
         "_id": "595",
         "_score": 4.366913,
         "_source": {
           "account_number": 595,
           "balance": 12478,
           "firstname": "Mccall",
           "lastname": "Britt",
           "age": 36,
           "gender": "F",
           "address": "823 Hill Street",
           "employer": "Cablam",
           "email": "mccallbritt@cablam.com",
           "city": "Vernon",
           "state": "CA"
         }
       },
       {
         "_index": "bank",
         "_type": "doc",
         "_id": "116",
         "_score": 4.366913,
         "_source": {
           "account_number": 116,
           "balance": 21335,
           "firstname": "Hobbs",
           "lastname": "Wright",
           "age": 24,
           "gender": "M",
           "address": "965 Temple Court",
           "employer": "Netbook",
           "email": "hobbswright@netbook.com",
           "city": "Strong",
           "state": "CA"
         }
       },
       {
         "_index": "bank",
         "_type": "doc",
         "_id": "68",
         "_score": 4.055505,
         "_source": {
           "account_number": 68,
           "balance": 44214,
           "firstname": "Hall",
           "lastname": "Key",
           "age": 25,
           "gender": "F",
           "address": "927 Bay Parkway",
           "employer": "Eventex",
           "email": "hallkey@eventex.com",
           "city": "Shawmut",
           "state": "CA"
         }
       },
       {
         "_index": "bank",
         "_type": "doc",
         "_id": "437",
         "_score": 4.055505,
         "_source": {
           "account_number": 437,
           "balance": 41225,
           "firstname": "Rosales",
           "lastname": "Marquez",
           "age": 29,
           "gender": "M",
           "address": "873 Ryerson Street",
           "employer": "Ronelon",
           "email": "rosalesmarquez@ronelon.com",
           "city": "Allendale",
           "state": "CA"
         }
       },
       {
         "_index": "bank",
         "_type": "doc",
         "_id": "325",
         "_score": 4.055505,
         "_source": {
           "account_number": 325,
           "balance": 1956,
           "firstname": "Magdalena",
           "lastname": "Simmons",
           "age": 25,
           "gender": "F",
           "address": "681 Townsend Street",
           "employer": "Geekosis",
           "email": "magdalenasimmons@geekosis.com",
           "city": "Sterling",
           "state": "CA"
         }
       },
       {
         "_index": "bank",
         "_type": "doc",
         "_id": "413",
         "_score": 4.0047326,
         "_source": {
           "account_number": 413,
           "balance": 15631,
           "firstname": "Pugh",
           "lastname": "Hamilton",
           "age": 39,
           "gender": "F",
           "address": "124 Euclid Avenue",
           "employer": "Techade",
           "email": "pughhamilton@techade.com",
           "city": "Beaulieu",
           "state": "CA"
         }
       },
       {
         "_index": "bank",
         "_type": "doc",
         "_id": "704",
         "_score": 4.0047326,
         "_source": {
           "account_number": 704,
           "balance": 45347,
           "firstname": "Peters",
           "lastname": "Kent",
           "age": 22,
           "gender": "F",
           "address": "871 Independence Avenue",
           "employer": "Extragen",
           "email": "peterskent@extragen.com",
           "city": "Morriston",
           "state": "CA"
         }
       },
       {
         "_index": "bank",
         "_type": "doc",
         "_id": "999",
         "_score": 4.0047326,
         "_source": {
           "account_number": 999,
           "balance": 6087,
           "firstname": "Dorothy",
           "lastname": "Barron",
           "age": 22,
           "gender": "F",
           "address": "499 Laurel Avenue",
           "employer": "Xurban",
           "email": "dorothybarron@xurban.com",
           "city": "Belvoir",
           "state": "CA"
         }
       },
       {
         "_index": "bank",
         "_type": "doc",
         "_id": "967",
         "_score": 3.8572147,
         "_source": {
           "account_number": 967,
           "balance": 19161,
           "firstname": "Carrie",
           "lastname": "Huffman",
           "age": 36,
           "gender": "F",
           "address": "240 Sands Street",
           "employer": "Injoy",
           "email": "carriehuffman@injoy.com",
           "city": "Leroy",
           "state": "CA"
         }
       },
       {
         "_index": "bank",
         "_type": "doc",
         "_id": "477",
         "_score": 3.8572147,
         "_source": {
           "account_number": 477,
           "balance": 25892,
           "firstname": "Holcomb",
           "lastname": "Cobb",
           "age": 40,
           "gender": "M",
           "address": "369 Marconi Place",
           "employer": "Steeltab",
           "email": "holcombcobb@steeltab.com",
           "city": "Byrnedale",
           "state": "CA"
         }
       }
     ]
   }
}
    client.query({ query }).then(response => {
      console.log(`data from gql ` + response.data.person.name);
      this.setState({
        tableFields: ['firstname', 'lastname', 'account_number'],
        data: temData.hits.hits,
        editMode: false
      });
    }); 
  }

  handleEntityClicked = (entity) => {
    let selectedEntity = [];
    selectedEntity.push(entity);
    this.setState({
      tableFields: Object.keys(entity["_source"]),
      data: selectedEntity,
      editMode: true
    });
  }

  render() {
    const {searchFields, tableFields, data, editMode} = this.state;
    console.log('editMode app: '+ editMode);
    return (
      <div style={backgroundStyle}>
        <Wrapper>
          <PrimaryTitle/>
          <SecondaryTitle/>
          {Object.keys(searchFields).map((key) =>
            <TextField fieldName={searchFields[key]} key={key}/>
          )}       
          <SimpleSelect onStateSelected={this.handleStateChanged} fieldName='State'/>
          { data &&
            <Table editMode={editMode} tableFields={tableFields} enteties={data} onEntityClick={this.handleEntityClicked}/>
          }
          {editMode &&
            <StyledButton>Submit</StyledButton>
          }
          <TextField></TextField>
        </Wrapper>
      </div>
    );
  }
}

export default App;
