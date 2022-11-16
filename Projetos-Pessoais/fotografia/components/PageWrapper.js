import React from "react";
import styles from "../styles/PageWrapper.module.scss";
import { BackgroundContext } from "../context/BackgroundContext";
import GradientCircle from "./GradientCircle";

const PageWrapper = ({children}) =>{
    return (
        <div className={styles.container}>
            <BackgroundContext>
                {/* NAVBAR */}
                <GradientCircle />
                <div className= {styles.page}>
                    {children}

                </div>
            </BackgroundContext>
            {/* FOOTER */}
        </div>
    );    
};

export default PageWrapper;