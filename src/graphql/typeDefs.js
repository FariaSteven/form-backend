import { mergeTypeDefs } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import path from 'path';

const typesArray = loadFilesSync(path.join(__dirname, 'modules', '**', '*.gql'));
const typeDefs = mergeTypeDefs(typesArray);

export default typeDefs;