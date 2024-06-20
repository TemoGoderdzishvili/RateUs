import styles from "./Circle.module.css"
import { useState } from "react"
import { ratingState } from "../states/states"
import { useRecoilState } from "recoil"

interface Props{
    number: string
}

export const Circle: React.FC<Props> = ({number}) => {

    const [bgColor, setBgColor] = useState('rgba(36, 44, 55, 0.603)')
    const [numColor, setNumColor] = useState('hsl(0, 0%, 59%)')
    const [rating, setRating] = useRecoilState(ratingState)

    return(
        <div className={styles.nums}  style={{backgroundColor: bgColor, color: numColor}} onClick={() =>{
            setNumColor(prevColor => (prevColor === 'hsl(0, 0%, 59%)' ? 'white' : 'hsl(0, 0%, 59%)'))
            setBgColor(prevColor => (prevColor === 'rgba(36, 44, 55, 0.603)' ? 'hsl(25, 97%, 53%)' : 'rgba(36, 44, 55, 0.603)'))
            setRating(`${number}`)
            {console.log(rating)}
        }}>
            <p>{number}</p>
        </div>
    )
}