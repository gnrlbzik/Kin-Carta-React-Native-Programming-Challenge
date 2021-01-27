import {t, sortByNameAscending, groupBy, isThisLastRow} from '../utils';

import {i18n} from '../i18n';

describe('t', () => {
  it('should return error message if it cant find value', () => {
    expect(t('not.found')).toEqual(i18n.appErrors.en.noTranslationFound);
  });

  it('should return correct translation value for one level key', () => {
    expect(t('loadingData')).toEqual(i18n.en.loadingData);
  });

  it('should return correct translation value for nested key', () => {
    expect(t('contactDetail.headings.phone')).toEqual(
      i18n.en.contactDetail.headings.phone,
    );
  });
});

describe('sortByNameAscending', () => {
  function makeItem(name: string) {
    return {
      name,
      id: '-',
      isFavorite: false,
    };
  }
  const input = [
    makeItem('zed'),
    makeItem('peet'),
    makeItem('anna'),
    makeItem('bob'),
  ];
  const output = input.sort(sortByNameAscending);

  it('should sort list of object by prop "name" in ascending order', () => {
    expect(output[0].name).toEqual('anna');
    expect(output[1].name).toEqual('bob');
    expect(output[2].name).toEqual('peet');
    expect(output[3].name).toEqual('zed');
  });
});

describe('groupBy', () => {
  it('should group array of object by specified property', () => {
    const input = [
      {name: 'bob', id: 1},
      {name: 'bob', id: 2},
      {name: 'anna', id: 3},
      {name: 'anna', id: 4},
      {name: 'anna', id: 5},
    ];
    const output = groupBy(input, 'name');

    expect(Object.keys(output).length).toBe(2);
    expect(output.bob.length).toBe(2);
    expect(output.anna.length).toBe(3);
  });
});

describe('isThisLastRow', () => {
  it('should return false if shifted index does not match length of array length', () => {
    expect(isThisLastRow(1, 10)).toBe(false);
  });
  it('should return false if shifted index does match length of array length', () => {
    expect(isThisLastRow(10, 10)).toBe(true);
  });
});
