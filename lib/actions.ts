import { GraphQLClient } from "graphql-request";

import {
  createPostMutation,
  createUserMutation,
  deletePostMutation,
  updatePostMutation,
  getPostByIdQuery,
  getPostsOfUserQuery,
  getUserQuery,
  postsQuery,
  updateUserMutation,
  deleteUserMutation,
} from "@/graphql";
import { PostForm, UserForm } from "@/common.types";
import { useAuth } from "@clerk/nextjs";

const isProduction = process.env.NODE_ENV === "production";
const apiUrl = isProduction
  ? process.env.NEXT_PUBLIC_GRAFBASE_API_URL!
  : "http://127.0.0.1:4000/graphql";
const apiKey = isProduction
  ? process.env.NEXT_PUBLIC_GRAFBASE_API_KEY!
  : "cbsjhsbcbkscjbsckjbkjcssjcbsjcskjksjcbksjbsjcjs";
const serverUrl = isProduction
  ? process.env.NEXT_PUBLIC_SERVER_URL
  : "http://localhost:3000";

const client = new GraphQLClient(apiUrl);

export const fetchToken = async () => {
  try {
    const { getToken } = useAuth();
    // const response = await fetch(`${serverUrl}/api/auth/token`);
    return getToken;
  } catch (err) {
    throw err;
  }
};

const makeGraphQLRequest = async (query: string, variables = {}) => {
  try {
    return await client.request(query, variables);
  } catch (err) {
    throw err;
  }
};

// export const fetchAllPosts = (
//   category?: string | null,
//   endcursor?: string | null
// ) => {
//   client.setHeader("x-api-key", apiKey);

//   return makeGraphQLRequest(postsQuery, { category, endcursor });
// };
export const fetchAllPosts = () => {
  client.setHeader("x-api-key", apiKey);

  return makeGraphQLRequest(postsQuery);
};

export const createNewPost = async (
  form: PostForm,
  creatorId: string,
  token: string
) => {
  client.setHeader("Authorization", `Bearer ${token}`);
  const variables = {
    input: {
      ...form,
      createdBy: {
        link: creatorId,
      },
    },
  };
  // console.log(variables);
  return makeGraphQLRequest(createPostMutation, variables);
};

export const updatePost = async (
  form: PostForm,
  postId: string,
  token: string
) => {
  let updatedForm = { ...form };
  // console.log(updatedForm, "UPDATED FORM API");
  client.setHeader("Authorization", `Bearer ${token}`);

  const variables = {
    id: postId,
    input: updatedForm,
  };
  // console.log(variables, "UPDATED FORM API Variables");
  return makeGraphQLRequest(updatePostMutation, variables);
};

export const deletePost = (id: string, token: string) => {
  client.setHeader("Authorization", `Bearer ${token}`);
  return makeGraphQLRequest(deletePostMutation, { id });
};

export const getPostDetails = (id: string) => {
  client.setHeader("x-api-key", apiKey);
  return makeGraphQLRequest(getPostByIdQuery, { id });
};

export const createUser = (
  name: string,
  email: string,
  imageUrl: string,
  description: string
) => {
  client.setHeader("x-api-key", apiKey);

  const variables = {
    input: {
      name: name,
      email: email,
      imageUrl: imageUrl,
      description: description,
    },
  };

  return makeGraphQLRequest(createUserMutation, variables);
};

export const updateUser = async (
  form: UserForm,
  userId: string,
  token: string
) => {
  let updatedUser = { ...form };
  // console.log(updatedUser, "API UPDATE USER");
  client.setHeader("Authorization", `Bearer ${token}`);

  const variables = {
    id: userId,
    input: updatedUser,
  };
  // console.log(variables, "UPDATED USER VARIABLES");
  return makeGraphQLRequest(updateUserMutation, variables);
};

export const deleteUser = (id: string, token: string) => {
  client.setHeader("Authorization", `Bearer ${token}`);
  return makeGraphQLRequest(deleteUserMutation, { id });
};

export const getUserPosts = (id: string, last?: number) => {
  client.setHeader("x-api-key", apiKey);
  return makeGraphQLRequest(getPostsOfUserQuery, { id, last });
};

export const getUser = (email: string) => {
  client.setHeader("x-api-key", apiKey);
  return makeGraphQLRequest(getUserQuery, { email });
};