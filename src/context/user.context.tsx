import { createContext, Dispatch, ReactNode, useReducer } from "react";

interface UserContextProps {
  children: ReactNode;
}

export interface UserType {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  plan: string;
  country: string;
  state: string;
}

interface UserState {
  Users: UserType;
}

interface UserAction {
  type: string;
  payload?: UserType;
  plan?: string;
}

const UserReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case "update":
      return {
        ...state,
        Users: {
          ...state.Users,
          ...action.payload,
        },
      };
    case "updatePlan":
      return {
        ...state,
        Users: {
          ...state.Users,
          plan: action.plan as string,
        },
      };
    default:
      return state;
  }
};

const UserList: UserType = {
  firstname: "John",
  lastname: "Mark",
  email: "mark@gmail.com",
  phone: "+2338918147586",
  plan: "free",
  country: "Ghana",
  state: "Loom",
};

const initialUserState: UserState = {
  Users: UserList,
};

export const UserContext = createContext<{
  state: UserState;
  dispatch: Dispatch<UserAction>;
}>({
  state: initialUserState,
  dispatch: () => {},
});

export const UserProvider = ({ children }: UserContextProps) => {
  const [state, dispatch] = useReducer(UserReducer, initialUserState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
