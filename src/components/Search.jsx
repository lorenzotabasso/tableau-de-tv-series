import { Component } from "react";
import { Link } from "react-router-dom";

import { tables } from "../data/couples";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personToFind: "",
      tables: [],
      error: false,
    };

    this.setPersonToFind = this.setPersonToFind.bind(this);
    this.findPersonInTables = this.findPersonInTables.bind(this);
    this.renderTableOrError = this.renderTableOrError.bind(this);
  }

  setPersonToFind(event) {
    this.setState({ personToFind: event.target.value });
  }

  findPersonInTables() {
    let result = [];
    let personLowerCase = this.state.personToFind.toLowerCase();

    result = tables.filter((table) => {
      let tablePeopleLowerCase = table.peopleInTheTable.map((person) =>
        person.toLowerCase()
      );
      
      let foundPerson = false;
      tablePeopleLowerCase.forEach(person => {
        if (person.includes(personLowerCase)) {
          foundPerson = true;
        }
      })
      return foundPerson;
    });

    if (result.length > 0) {
      this.setState({ tables: result, error: false });
    } else {
      this.setState({ tables: [], error: true });
    }
  }

  renderTableOrError() {
    if (this.state.error) {
      return (
        <p>
          Scusaci! A causa di un errore, il nostro sito web non riesce a trovarti nei tavoli, controlla il Tableau de TV series cartaceo!
        </p>
      );
    } else {
      return this.state.tables.map((table) => {
        return (
          <div
            key={table.key}
            className="m-2 p-0 col-xs-12 col-md-3 card"
            style={{ width: "18rem" }}
          >
            <Link
              to={{
                pathname: "couple",
                search: `?id=${table.key}`,
              }}
              replace={true}
            >
              <img src={table.imgPath} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{table.name}</h5>
              </div>
            </Link>
          </div>
        );
      });
    }
  }

  render() {
    return (
      <>
        <div className="row">
          <div className="col-xs-12">
            <h3 className="mt-2">Dove sono seduto? &#129292;</h3>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nome e cognome"
                aria-label="Nome e cognome"
                aria-describedby="search-person"
                onChange={this.setPersonToFind}
              />
              <button
                className="btn btn-outline-success"
                type="button"
                id="search-person"
                onClick={this.findPersonInTables}
              >
                Cerca
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-wrap justify-content-around">
            {this.renderTableOrError()}
          </div>
        </div>
      </>
    );
  }
}

export default Search;
