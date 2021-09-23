import "./firstScreen.scss"
import SearchBar from "./searchBar";

const FirstScreen = () => {
  return (
    <section className="first__screen">
      <div className="container">
        <div className="first-screen__main">
          <h2 className="main__subtitle title">Serenity</h2>
          <h2 className="main__title title">
            Stay with us feel <br /> like <span>home</span> .
          </h2>
          <div className="main__dcr description">
            Pet-friendly hotels are becoming increasingly popular; appealing to
            travellers who can’t bear to be parted.
          </div>
          <button className="btn main__btn">Read more</button>
        </div>
      </div>
      <SearchBar/>
    </section>
  );
}
 
export default FirstScreen;