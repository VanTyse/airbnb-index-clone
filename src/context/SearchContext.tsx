import { createContext, useReducer } from "react";
import { SearchAction, SearchContextType, SearchDetails } from "../lib/types";

const INITIAL_STATE: SearchDetails = {
  region: "flexible",
  date: [null, null],
  people: {
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  },
};

const reducer = (
  state: SearchDetails,
  action:
    | SearchAction<"update_person">
    | SearchAction<"update_date">
    | SearchAction<"update_region">
) => {
  return state;
};

export const SearchContext = createContext<SearchContextType>({
  data: INITIAL_STATE,
});

export const SearchContextProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <SearchContext.Provider value={{ data: state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};
