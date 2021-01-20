import type {ContactItem} from './types';

export {t} from './i18n';

export const sortByNameAscending = (a: ContactItem, b: ContactItem) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};

export const groupBy = (array: Array<any>, byPropertyName: string) =>
  array.reduce((accumulator, currentValue) => {
    if (!accumulator[currentValue[byPropertyName]])
      accumulator[currentValue[byPropertyName]] = [];
    accumulator[currentValue[byPropertyName]].push(currentValue);
    return accumulator;
  }, {});

export const isThisLastRow = (index: number, length: number) => {
  return index === length - 1;
};