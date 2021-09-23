
const SearchBar = () => {
  return (
    <div className="searchbar">
      <form action="" className="searchbar__form">
        <div className="searchbar__raw">
          <div className="searchbar__colum">
            <label htmlFor="" className="searchbar__lable lable-text">Check in<input type="date" className="searchbar__input" /></label>
          </div>
          <div className="searchbar__colum">
            <label htmlFor="" className="searchbar__lable lable-text">Check out<input type="date" className="searchbar__input" /></label>
          </div>
          <div className="searchbar__colum">
            <label htmlFor="" className="searchbar__lable lable-text">Person<input type="text" className="searchbar__input" /></label>
          </div>
          <div className="searchbar__colum">
            <input type="submit" className="searchbar__btn btn" value="Find room" />
          </div>
        </div>
      </form>
    </div>
    );
}
 
export default SearchBar;