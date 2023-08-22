import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { UserProvider } from "./context/user.context";

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
