import calendar from "./calendar.png";
import "./App.css";
import Users from './components/Users';
import Events from './components/Events';

function App() {
  return (
    <div className="App">
      <header>
        <img src={calendar} alt="Calendar Star Logo" />
        <h1>Eventonica</h1>
      </header>

      <div className="main-div">
        
        <div className="users-div">
          <Users />
        </div>

        <div className="events-div">
          <Events />
        </div>

        {/* <aside className="search-toolbar">
          <div className="find-events">
            <h3>Find Events</h3>
            <form id="search" action="#">
              <fieldset>
                <label htmlFor="date-search">Date</label>
                <input type="text" id="date-search" placeholder="YYYY-MM-DD" />
              </fieldset>
              <fieldset>
                <label htmlFor="category-search">Category</label>
                <input type="text" id="category-search" />
              </fieldset>

              <input type="submit" value="Search" />
            </form>
          </div>
        </aside> */}
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default App;