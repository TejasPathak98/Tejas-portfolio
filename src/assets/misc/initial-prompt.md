## Using ChatGPT to get started

Prompt: Can you show me the react code for a personal portfolio website using create-react-app and react-router-dom. It should have pages for Home, About, Portfolio, and Contact

Response Below:

1. First, make sure you have react-router-dom installed by running the following command in your terminal:

```bash
npm install react-router-dom
```

1. Then, create a new file called `App.js` in the `src` directory of your project and paste the following code:

```jsx
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
```

Next, create a new directory called `pages` in the `src` directory of your project and create four files inside it called `Home.js`, `About.js`, `Portfolio.js`, and `Contact.js`. Paste the following code into each file:

`Home.js`:

```jsx
import React from "react";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to my personal portfolio website!</p>
    </div>
  );
}

export default Home;
```

`About.js`:

```jsx
import React from "react";

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>Learn more about me and my skills.</p>
    </div>
  );
}

export default About;
```

`Portfolio.js`:

```jsx
import React from "react";

function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <p>Check out my previous work and projects.</p>
    </div>
  );
}

export default Portfolio;
```

`Contact.js`:

```jsx
import React from "react";

function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Get in touch with me!</p>
    </div>
  );
}

export default Contact;
```

1. Finally, create a new directory called `components` in the `src` directory of your project and create a file inside it called `Navbar.js`. Paste the following code into the file:

```jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
```
