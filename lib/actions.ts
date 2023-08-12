import { GraphQLClient } from "graphql-request";
import { useAuth } from "@clerk/nextjs";

const isProduction = process.env.NODE_ENV === "production";
const apiUrl = isProduction
  ? process.env.NEXT_PUBLIC_GRAFBASE_API_URL!
  : "http://127.0.0.1:4000/graphql";
const apiKey = isProduction
  ? process.env.NEXT_PUBLIC_GRAFBASE_API_KEY!
  : "cbsjhsbcbkscjbsckjbkjcssjcbsjcskjksjcbksjbsjcjs";


const client = new GraphQLClient(apiUrl);

export const fetchToken = async () => {
  try {
    const { getToken } = useAuth();
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
