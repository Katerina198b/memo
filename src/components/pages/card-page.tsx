import React from "react";
import './index.styl';
import {connect} from "react-redux";
import {DefinitionsContainer} from "../definitions-container";

export const CardPage = connect(
    ({cards}, router) => {
        return {card: cards.find((card) => card.id === router.match.params.id)}
    }
    , () => {},
)(DefinitionsContainer);

