import React from "react";
import './index.styl';
import {connect} from "react-redux";
import {DefinitionsContainer} from "../definitions-container";
import {Definition} from "../definition";
import {Card} from "../card";

interface DefinitionsContainerProps {
    definitions: Definition[];
    card: Card;
    onClick: () => void;
}

export const DefinitionPage = connect(
    ({cards}, router) => {
        console.log(router.match.params.id, cards[0].id);
        return {card: cards.find((card) => card.id === router.match.params.id)}
    }
    , () => {},
)(DefinitionsContainer);

