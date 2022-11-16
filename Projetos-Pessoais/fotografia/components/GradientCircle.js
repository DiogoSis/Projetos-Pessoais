import styles from "../styles/GradientCircle.module.scss";
import useBackground from "../context/BackgroundContext";

const GradientCircle = () =>{
    const { background } = useBackground();
    return( 
        <div>
            <div className={`${styles.container}`} />
            <div className={styles.black} style={!background ? {opacity: "1", zIndex: "5"} : undefined}/>
        </div>
    );
};

export default GradientCircle;
