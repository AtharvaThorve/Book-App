import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import BookList from './Components/BookList/BookList';
import AddBook from './Components/AddBook/AddBook';

// Apollo client set up
const client = new ApolloClient({
	uri: 'http://localhost:4000/graphql'
});

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<div id='main'>
					<h1>Reading List</h1>
					<BookList />
					<AddBook />
				</div>
			</ApolloProvider>
		);
	}
}

export default App;
