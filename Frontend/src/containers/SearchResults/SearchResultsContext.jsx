// /**
//  *
// * @author Saloni Raythatha(sl768578@dal.ca)  (all the frontend functionality for Search, Filter and Display)
// *
// */

import { createContext } from "react";

const searchResultsContext = createContext({
  searchResults: [],
  setSearchResults: () => {},
  isFetching: false,
  setIsFetching: () => {}
});

export default searchResultsContext;