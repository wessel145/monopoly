import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRingsWedding} from "@fortawesome/pro-solid-svg-icons";

export default class SuperTax extends React.Component{

    render() {
        return (<div className={"super-tax board-card " + this.props.boardPos}>
            <div className="title">Super Tax</div>
            <div className="icon">
                <FontAwesomeIcon icon={faRingsWedding} />
            </div>
            <div className="price">Pay $200</div>
        </div>);
    }
}
