import styles from "./Circle.module.css"
import { useState } from "react"

interface Props{
    number: string
}

export const Circle = (props: Props) => {

    const [bgColor, setBgColor] = useState('rgba(36, 44, 55, 0.603)')
    const [numColor, setNumColor] = useState('hsl(0, 0%, 59%)')

    return(
        <div className={styles.nums}  style={{backgroundColor: bgColor, color: numColor}} onClick={() =>{
            setNumColor(prevColor => (prevColor === 'hsl(0, 0%, 59%)' ? 'white' : 'hsl(0, 0%, 59%)'))
            setBgColor(prevColor => (prevColor === 'rgba(36, 44, 55, 0.603)' ? 'hsl(25, 97%, 53%)' : 'rgba(36, 44, 55, 0.603)'))
        }}>
            <p>{props.number}</p>
        </div>
    )
}