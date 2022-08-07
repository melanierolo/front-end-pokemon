import React from "react";
import { Col } from "react-bootstrap";
import "./SidebarMyPokemons.css";

export interface IAplicationProps {}

const SidebarMyPokemons: React.FunctionComponent<IAplicationProps> = (
  props
) => {
  return (
    <Col className="m-0 p-0 sidebar" sm={4}>
      <h2 className="sidebar__title text-center m-5 ">
        LISTOS PARA EL COMBATE
      </h2>
      <p className="sidebar__paragraph text-center m-5 p-5 m-md-3 p-md-3 m-sm-1 p-sm-1">
        Lista vacía, no hay pokémones para luchar
      </p>
    </Col>
  );
};

export default SidebarMyPokemons;
