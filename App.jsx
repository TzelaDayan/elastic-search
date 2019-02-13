import React from 'react';
import PrimaryTitle from './components/PrimaryTitle.jsx';
import SecondaryTitle from './components/SecondaryTitle.jsx';
import styled from 'styled-components';
import TextFields from './components/TextField.jsx';
import SimpleSelect from './components/Select.jsx';
import Table from './components/Table.jsx';
import {ApolloClient} from 'apollo-client';
import {RestLink} from 'apollo-link-rest';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from "graphql-tag";

// const restLink = new RestLink({ uri: "https://swapi.co/api/" });
const restLink = new RestLink({ uri: "http://stlpbg26:30403" });
// setup client
const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

// const query = gql`
//   query {
//     person @rest(type: "Person", path: "people/2/") {
//       name
//     }
//   }
// `;
const query = gql`
  query {
    person @rest(type: "Person", path: "people/2/") {
      name
    }
  }
`;

client.query({ query }).then(response => {
  console.log(`data from gql ` + response.data.person.name);
});

let imgUrl = 'img/background.jpg'; 
let backgroundStyle = {
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: 'cover',
        margin: '-7px',
}

const Wrapper = styled.div` 
  margin: 0 30px;
  font-size: 70px;
`
const handleStateChanged= (state) =>{
  console.log(state);
}
 
const data = {
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
const fields = ['firstname', 'lastname', 'account_number', 'state']
const App = () => {
  

  return (
    <div style={backgroundStyle}>
      <Wrapper>
        <PrimaryTitle/>
        <SecondaryTitle/>       
        <TextFields fieldName='Account Number'></TextFields>
        <TextFields fieldName='Last Name'></TextFields>
        <TextFields fieldName='Employer'></TextFields>
        <TextFields fieldName='Address'></TextFields>
        <SimpleSelect onStateSelected={handleStateChanged} fieldName='State'></SimpleSelect>
        <Table fields={fields} enteties={data["hits"]["hits"]}></Table>
        {/* <EnhancedTable></EnhancedTable> */}

        
      </Wrapper>
    </div>
  );
}

export default App;
