import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

class App extends Component {
  render() {
    return (
            <section className="kwitterapp">
                <header className="header">
                    <h1>Welcome to Kwitter!</h1>
                </header>
                <section className="register">
                    <h2>New to Kwitter?  Register here!</h2>
                        <form>
                            <label>
                                <input type="text" placeholder="Email Address" />
                            </label>
                            <label>
                                <input type="text" placeholder="Password" />
                            </label>
                            <label>
                                <input type="text" placeholder="Password" />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                </section>
                <section className="login">
                    <h2>Already a member?  Login</h2>
                        <form>
                            <label>
                                <input type="text" placeholder="Email Address" />
                            </label>
                            <label>
                                <input type="text" placeholder="Password" />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                </section>
            </section>
    );
  }
}

export default App;
