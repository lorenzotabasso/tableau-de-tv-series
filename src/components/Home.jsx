import { Link } from "react-router-dom";
import { tables } from "../data/couples.js";

function Home() {
  return (
    <div className="row">
      <div className="d-flex flex-wrap justify-content-around">
        {tables.map((table) => {
          return (
            <div
              key={table.key}
              className="m-2 p-0 col-xs-12 col-md-4 card"
              style={{ width: "18rem" }}
            >
              <Link
                to={{
                  pathname: "couple",
                  search: `?id=${table.key}`,
                }}
              >
                <img src={table.imgPath} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{table.name}</h5>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
