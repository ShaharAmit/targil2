import React from "react";
import { Route } from "react-router-dom";
import BorrowedBooks from "../Components/borrowedBooks";
import BorrowedBooksByCat from "../Components/borrowedBooksByCat";
import BorrowedBooksByCP from "../Components/borrowedBooksByCP";
import Header from "../Header";

const ReactRouter =()=>{
    return (
        <React.Fragment>
            <Header />
            <Route exact path="/" component={BorrowedBooks} />
            <Route  path="/borrowed_books_by_cat" component={BorrowedBooksByCat} />
            <Route  path="/borrowed_books_by_cp" component={BorrowedBooksByCP} />
        </React.Fragment>
    );}

export default ReactRouter;
