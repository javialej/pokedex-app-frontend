import React from "react";

import { Translator } from "../../../Language/Translator";
import { withRouter } from "react-router";

const NotFound = (props: any) => {

    return (
        <div>
            <div className={``}>
                <div >
                    <h1><Translator text={"Error.NotFound.Title"} /></h1>
                    <p> <Translator text={"Error.NotFound.Body"} /></p>
                    <button onClick={() => props.history.goBack()}>
                        <span >
                            <Translator text={"Error.Return"} />
                        </span>
                    </button>
                </div>
                <div >
                    <img src={``} alt="Not Found" />
                </div>
            </div>
        </div>
    );
};

export default withRouter(NotFound);