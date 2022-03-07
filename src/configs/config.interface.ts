export interface Config {
  nest: NestConfig;
  cors: CorsConfig;
  graphql: GraphqlConfig;
  mongodb: MongodbConfig;
}

export interface NestConfig {
  port: number;
}

export interface CorsConfig {
  enabled: boolean;
}

export interface GraphqlConfig {
  playground: boolean;
  debug: boolean;
  autoSchemaFile: string;
  sortSchema: boolean;
}

export interface MongodbConfig {
  uri: string;
}
