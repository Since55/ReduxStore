import React, { Component } from "react";
import { connect } from "react-redux";

import ErrorIndicator from "../error-indicator";
import { withBookstoreService } from "../hoc";
import { fetchBooks, bookAddedToCart } from "../../actions";
import { compose } from "../../utils";

import BookListItem from "../book-list-item";

import "./book-list.css";
import Spinner from "../spinner";

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="list-group book-list">
      {books.map((book) => {
        return (
          <li key={book.id} className="list-group-item-action">
            <BookListItem 
              book={book} 
              onAddedToCart={ () => onAddedToCart(book.id) } />
          </li>
        );
      })}
    </ul>
  );
}

class BookListContainer extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {

    const { books, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList books={books} onAddedToCart={onAddedToCart}/>

  }
}

const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: (id) => dispatch( bookAddedToCart(id) )
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
