import {createClient} from 'contentful';

export default createClient({
  space: process.env.REACT_APP_API_SPACE,
  // accessToken: "ZAnD948oSBJS8TrFQ4lyyWPhz-Nu4lahYcjtT9Q6b0c"
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
});