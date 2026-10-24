import { useState } from "react";
import classes from "../modal/Modal.module.scss"

export default function Modal({ onClose, children }) {
    return(
        <>
            <div className={classes.containers} onClick={onClose}>
                <div className={classes.containers2} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </>
    )
}