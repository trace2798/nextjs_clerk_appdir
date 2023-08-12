export const createPostMutation = `
	mutation CreatePost($input: PostCreateInput!) {
		postCreate(input: $input) {
			post {
				id
				title
				description
				createdBy {
					email
					name
				}
			}
		}
	}
`;

export const updatePostMutation = `
	mutation UpdatePost($id: ID!, $input: PostUpdateInput!) {
		postUpdate(by: { id: $id }, input: $input) {
			post {
				id
				title
				description
				createdBy {
					email
					name
				}
			}
		}
	}
`;

export const deletePostMutation = `
  mutation DeletePost($id: ID!) {
    postDelete(by: { id: $id }) {
      deletedId
    }
  }
`;

export const createUserMutation = `
	mutation CreateUser($input: UserCreateInput!) {
		userCreate(input: $input) {
			user {
				name
				email
				imageUrl
				description
				id
			}
		}
	}
`;

export const updateUserMutation = `
mutation UpdateUser($id: ID!, $input: UserUpdateInput!) {
	userUpdate(by: { id: $id }, input: $input) {
    user {
      name
      description
      imageUrl
      id
    }
  }
}
`;

export const deleteUserMutation = `
mutation DeleteUser($id: ID!) {
  userDelete(by: { id: $id }) {
    deletedId
  }
}
`;

export const postsQuery = `
  query getPosts {
    postSearch(first: 10) {
      edges {
        node {
          title
          description
          id
          image
          category
          createdBy {
            id
            email
            name
            imageUrl
          }
        }
      }
    }
  }
`;

export const getPostByIdQuery = `
  query GetPostById($id: ID!) {
    post(by: { id: $id }) {
      id
      title
      description
      image
      category
      createdBy {
        id
        name
        email
        imageUrl
      }
    }
  }
`;

export const getUserQuery = `
  query GetUser($email: String!) {
    user(by: { email: $email }) {
      id
      name
      email
      imageUrl
      description
    }
  }
`;

export const getPostsOfUserQuery = `
  query getUserPosts($id: ID!, $last: Int = 4) {
    user(by: { id: $id }) {
      id
      name
      email
      imageUrl
      description
      posts(last: $last) {
        edges {
          node {
            id      
            title      
            image 
          }
        }
      }
    }
  }
`;
