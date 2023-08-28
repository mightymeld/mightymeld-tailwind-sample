import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { UserProvider } from "./context/user.context";
import { PostProvider } from "./context/post.context";

function App() {
  return (
    <UserProvider>
      <PostProvider>
        <RouterProvider router={router} />
      </PostProvider>
    </UserProvider>
  );
}

export default App;
