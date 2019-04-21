import React from "react";
import { Button } from "reactstrap";

export default class Example extends React.Component {
  render() {
    return (
      <div>
        {/* Componentes de Reactstrap */}
        <Button color="primary">primary</Button>{" "}
        <Button color="secondary">secondary</Button>{" "}
        <Button color="success">success</Button>{" "}
        <Button color="info">info</Button>{" "}
        <Button color="warning">warning</Button>{" "}
        <Button color="danger">danger</Button>{" "}
        <Button color="link">link</Button>
        {/* Componentes de bootstrap tradicional */}
        <button type="button" class="btn btn-primary">
          Primary
        </button>
        <button type="button" class="btn btn-secondary">
          Secondary
        </button>
        <button type="button" class="btn btn-success">
          Success
        </button>
        <button type="button" class="btn btn-danger">
          Danger
        </button>
        <button type="button" class="btn btn-warning">
          Warning
        </button>
        <button type="button" class="btn btn-info">
          Info
        </button>
        <button type="button" class="btn btn-light">
          Light
        </button>
        <button type="button" class="btn btn-dark">
          Dark
        </button>
        <button type="button" class="btn btn-link">
          Link
        </button>
      </div>
    );
  }
}
