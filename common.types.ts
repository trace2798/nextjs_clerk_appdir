// import { UserResource  } from '@clerk/types';
// import { Session } from '@clerk/nextjs';


export type FormState = {
  title: string;
  description: string;
  image: string;
  category: string;
};

export interface PostInterface {
  title: string;
  description: string;
  image: string;
  category: string;
  id: string;
  createdBy: {
    name: string;
    email: string;
    imageUrl: string;
    id: string;
  };
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  description: string;
  imageUrl: string;
  posts: {
    edges: { node: PostInterface }[];
    pageInfo: {
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor: string;
      endCursor: string;
    };
  };
}

// export interface SessionInterface extends Session {
//   user: UserResource & {
//     id: string;
//     name: string;
//     email: string;
//     imageUrl: string;
//     description: string;
//   };
// }

export interface PostForm {
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface UserForm {
  name: string;
  description: string;
  imageUrl: string;
}
