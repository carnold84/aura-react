import React, { useReducer } from "react";
import uuidV5 from "uuid/v5";

import Api from "../api";

const DataContext = React.createContext(null);

const api = new Api();

const DataProvider = ({ children }) => {
  init();

  const [state, dispatch] = useReducer(dataReducer, {
    projects: []
  });

  return (
    <DataContext.Provider value={dispatchMiddleware(dispatch)}>
      {children}
    </DataContext.Provider>
  );
};

const init = async () => {
  await api.init();
};

const useProject = () => {
  const context = React.useContext(DataContext);
  if (context === undefined) {
    throw new Error(`useProject must be used within a DataProvider`);
  }
  return context;
};

const dispatchMiddleware = (state, dispatch) => {
  return async action => {
    switch (action.type) {
      case "CREATE_PROJECT":
        const { data } = action;

        const project = {
          ...data,
          id: uuidV5()
        };

        const response = await api.createProject(project);

        if (response) {
          dispatch({ ...action, data: response });
        }
        break;

      default:
        return dispatch(action);
    }
  };
};

const dataReducer = async (state, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      const { data } = action;

      return {
        ...state,
        projects: [...state.projects, data]
      };

    default:
      return state;
  }
};

export { DataProvider, useProject };
