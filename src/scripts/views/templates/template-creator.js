import '../../components/search-bar-content';
import '../../components/hospital-list';

const createSearchBarTemplate = () => {
  const searchBarContent = '<search-bar-content></search-bar-content>';
  return searchBarContent;
};

const createSearchResultTemplate = (hospitals) => {
  const hospitalListElem = document.createElement('hospital-list');
  hospitalListElem.hospitals = hospitals;
  return hospitalListElem;
};

export {
  createSearchResultTemplate,
  createSearchBarTemplate,
};
