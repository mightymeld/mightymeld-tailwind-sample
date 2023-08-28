import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { IPost, post } from "../assets/data";

interface PostContextProps {
  children: ReactNode;
}

interface PostState {
  Posts: IPost[];
}

interface PostAction {
  type: string;
  payload?: IPost;
  postId?: string;
}

const PostReducer = (state: PostState, action: PostAction): PostState => {
  switch (action.type) {
    case "togglelike": {
      const updatedPosts = state.Posts.map((postItem) => {
        if (postItem.id === action.postId) {
          return {
            ...postItem,
            likes: !postItem.likes,
          };
        }
        return postItem;
      });

      return {
        ...state,
        Posts: updatedPosts,
      };
    }
    case "addPost": {
      const newPost = action.payload;
      const updatedPosts = [...state.Posts, newPost];

      return {
        ...state,
        Posts: updatedPosts as IPost[],
      };
    }

    default:
      return state;
  }
};

const initialPostState: PostState = {
  Posts: post,
};

export const PostContext = createContext<{
  state: PostState;
  dispatch: Dispatch<PostAction>;
}>({
  state: initialPostState,
  dispatch: () => {},
});

export const PostProvider = ({ children }: PostContextProps) => {
  const [state, dispatch] = useReducer(PostReducer, initialPostState);

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};
