import React from "react";
import Header from "./layout/Header";
import Banner from "./components/banner/Banner";
import Main from "./components/main/Main";
import Footer from "./layout/Footer";
import PostView from "./components/post/PostView";
import "./css/reset.css";
import "./css/global.css";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Route
          path="/"
          exact
          render={() => (
            <>
              <Banner />
              <Main />
            </>
          )}
        />
        <Route
          path="/post-view.html"
          exact
          render={() => (
            <>
              <PostView />
            </>
          )}
        />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
