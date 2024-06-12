'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { CompletedBox } from "./components/completed-box/CompletedBox";

export default function Main(){
  return(
    <div className="mainWrapper">
      <CompletedBox />
    </div>
  )
}