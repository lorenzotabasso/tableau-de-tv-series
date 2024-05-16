import { useSearchParams } from "react-router-dom";
import { tablesMap } from "../data/couples";

function Couple() {
  const [searchParams] = useSearchParams();
  let id = searchParams.get("id");

  let localCouple = tablesMap.get(id);

  return (
    <>
      <div className="row mt-2">
        <div className="col-xs-12 col-md-12">
          <h3>
            {localCouple.name}
          </h3>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-xs-12 col-md-4">
          <div className="d-flex justify-content-evenly">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={localCouple.imgPath}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{localCouple.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Da: {localCouple.from}
                </h6>
                {/* <p className="card-text">{localCouple.story}</p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-md-8">
          <h2>Persone nel tavolo</h2>
          <p><b>Nota</b>: l'elenco di seguito <b>non è ordinato</b>, per trovare il proprio posto all'interno del tavolo <b>cercare il proprio segnaposto</b>.</p>
          <ul>
            {localCouple.peopleInTheTable.map((person) => {
              return <li key={person}>{person}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Couple;
