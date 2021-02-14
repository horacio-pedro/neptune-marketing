import * as dotenv from 'dotenv';
import memoryStorage from 'erxes-inmemory-storage';

// load environment variables
dotenv.config();

const { REDIS_HOST, REDIS_PORT } = process.env;

let client;

export const initMemoryStorage = () => {
  client = memoryStorage({
    host: REDIS_HOST,
    port: REDIS_PORT
  });
};

export default function() {
  return client;
}
