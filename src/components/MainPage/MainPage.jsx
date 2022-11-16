import { Link } from "react-router-dom";

function MainPage() {


return (
  <div>
    <h1>Hér er forsíða</h1>
    <Link to="/eventPage">
      EventPage
    </Link>
    <Link to="/locationPage">
      LocationPage
    </Link>
  </div>
);
}

export default MainPage;
