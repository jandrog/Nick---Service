import React from "react"
import styles from "./styles.css"
import PaginationButtons from "./PaginationButtons"

function ControlBar(props) {
    return (
        <div className={`controlBar2 ${styles.controlBar2}`}>
            <div className={`controlBarCount2 ${styles.controlBarCount2}`}>
                <div className={`contentPaginationPagesCurrent2 ${styles.contentPaginationPagesCurrent2}`}>
                    {props.page}-{props.pages} of {props.total} Reviews
                </div>
            </div>
            <PaginationButtons previousPage={props.previousPage} nextPage={props.nextPage} />
        </div>
    )
}


export default ControlBar