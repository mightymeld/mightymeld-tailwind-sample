import avatar from "../assets/image-avatar.png";

export interface Comment {
  id: string;
  image: string;
  author: string;
  time: string;
  message: string;
}

export interface IPost {
  id: string;
  image: string;
  author: string;
  time: string;
  likes: boolean;
  message: string;
  comments: Comment[];
}

export const post: IPost[] = [
  {
    id: "1",
    image: avatar,
    author: "Michelin",
    time: "4 hours",
    likes: false,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente est commodi neque officia dolorem veritatis quas voluptas repellat nisi porro ipsa nulla, unde, nobis enim nesciunt optio exercitationem blanditiis error.",
    comments: [],
  },
  {
    id: "2",
    image: avatar,
    author: "Tochi",
    time: "5 hours",
    likes: false,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente est commodi neque officia dolorem veritatis quas voluptas repellat nisi porro ipsa nulla, unde, nobis enim nesciunt optio exercitationem blanditiis error.",
    comments: [
      {
        id: "21",
        image: avatar,
        author: "Michelin",
        time: "4 hours",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente est commodi neque officia dolorem veritatis quas voluptas repellat nisi porro ipsa nulla, unde, nobis enim nesciunt optio exercitationem blanditiis error.",
      },
    ],
  },
  {
    id: "3",
    image: avatar,
    author: "Avery",
    time: "7 hours",
    likes: false,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente est commodi neque officia dolorem veritatis quas voluptas repellat nisi porro ipsa nulla, unde, nobis enim nesciunt optio exercitationem blanditiis error.",
    comments: [],
  },
];
