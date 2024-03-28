import React from "react";
// import styles from '@/styles/homeView.module.css'
import styles from "@/styles/Home.module.css";
import Login from "../Login";


function HomeView() {
  return (
    <div className={styles.mainContainer}>
    <Login/>
    </div>
  );
}

export default HomeView;
