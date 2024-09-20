import { createClient } from 'contentful-management';
require('dotenv').config()

const client = createClient({
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_ACCESS_TOKEN || ''
});

export default client;