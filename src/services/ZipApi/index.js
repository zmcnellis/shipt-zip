import apiConfig from './config';

// returns true if a string is a valid zip code (5 digits)
export const isValidZip = (zipCode) => {
  return /(^\d{5}$)/.test(zipCode);
}

// catch errors not handled by fetch(). by default, fetch() rejects a promise only when a network error is encountered
export const handleErrors = (response) => {
  if (!response.ok) {
    throw Error();
  }
  return response;
};

// provided a zip code, return all nearby stores using the zip code api
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

// comparator used for sorting stores according to their name
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
