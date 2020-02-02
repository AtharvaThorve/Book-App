import { gql } from 'apollo-boost';

const getAuthorsQuery = gql`
	{
		authors {
			name
			id
		}
	}
`;

const getBooksQuery = gql`
	{
		books {
			name
			id
		}
	}
`;

const getBookQuery = gql`
	query($id: ID!) {
		book(id: $id) {
			id
			name
			genre
			author {
				id
				name
				age
				books {
					name
					genre
					id
				}
			}
		}
	}
`;

const addBookMutation = gql`
	mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
		addBook(name: $name, genre: $genre, authorId: $authorId) {
			name
			id
		}
	}
`;

export { getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery };
