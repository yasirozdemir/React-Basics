import logo from "./logo.svg";
import "./App.css";
import "./MyStyle.css";
import ButtonComponent from "./components/ButtonComponent";
import ButtonComponentTwo from "./components/ButtonComponentTwo";
import ImageComponent from "./components/ImageComponent";
import Header from "./components/HeaderComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <section id="contentWrapper">
          <Header
            hdrClass="headerTypeH1"
            hdrText="Buttons Created using React"
          />
          <ButtonComponent
            btnClass="btn"
            btnLabel="This button created as a 'function' component using React."
          />
          <ButtonComponentTwo
            btnClass="btn"
            btnLabel="This button created as a 'function' component using React but in a different way, check it out!"
          />

          <Header
            hdrClass="headerTypeH1"
            hdrText="Images Created using React"
          />
          <div className="imgWrapper">
            <ImageComponent
              imgSrc="https://placedog.net/300"
              imgAlt="This image created as a 'class' component using React."
            ></ImageComponent>
            <ImageComponent
              imgSrc="https://placekitten.com/300"
              imgAlt="This image created as a 'class' component using React."
            ></ImageComponent>
            <ImageComponent
              imgSrc="https://placekitten.com/400"
              imgAlt="This image created as a 'class' component using React."
            ></ImageComponent>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
