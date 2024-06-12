import styles from "./CompletedBox.module.css"
import { Star } from "../SVG/icon/Icon";
import { Circle } from "../circles/Circle"
import { Submit } from "../submitBtn/SubmitBtn";
import { useState } from "react";
import Link from "next/link";

export const CompletedBox = () => {
    
    return (
        <div className={styles.box}>
        <div className={styles.content}>
            <Star />
            <div className={styles.txt}>
                <h1>How did we do?</h1>
                <p>Please let us know how we did with your support<br />
                    request. All feedback is appreciated to help us<br />
                    improve our offering!</p>
            </div>
            <div className={styles.rateCircles}>
                <Circle number={'1'}/>
                <Circle number={'2'}/>
                <Circle number={'3'}/>
                <Circle number={'4'}/>
                <Circle number={'5'}/>
            </div>
            <div className="btnDiv">
                <Submit />
            </div>
        </div>
    </div>
    )
}