require('es6-promise').polyfill();
require('isomorphic-fetch');

import { localDb } from '../dbSetup';

export const getDocId = () => localDb.allDocs()
  .then(result => result.rows[0].id)
  .catch(handleError);

export const makeFetch = docId => localDb.get(docId)
  .then(doc => doc)
  .catch(handleError);

export const makePut = content => localDb.put(content)
  .then(data => data)
  .catch(handleError);

const handleError = error => {
  throw new Error(error);
};
