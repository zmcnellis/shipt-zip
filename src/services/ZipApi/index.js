import apiConfig from './config';

export const isValidZip = (zipCode) => {
  return /(^\d{5}$)/.test(zipCode);
}

export const handleErrors = (response) => {
  if (!response.ok) {
    throw Error();
  }
  return response;
};

export const getNearestStores = (zipCode) => {
  const url = `${apiConfig.url}/${zipCode}`;

  return fetch(url)
    .then(handleErrors)
    .then(results => {
      return results.json();
    })
    .then(data => {
      return data.stores;
    });
};

export const comparator = (storeA, storeB) => {
  const nameA = storeA.name.toUpperCase();
  const nameB = storeB.name.toUpperCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  }
  else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
};
