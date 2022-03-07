import { Config } from './config.interface';

const config: Config = {
  nest: {
    port: 3000,
  },
  cors: {
    enabled: true,
  },
  graphql: {
    playground: true,
    debug: true,
    autoSchemaFile: './src/schema.graphql',
    sortSchema: true,
  },
  mongodb: {
    uri: 'mongodb://mongoadmin:mongoadmin@localhost:27017/',
  },
};

export default (): Config => config;
