import React from "react";
import styles from "./Homepage.module.css";

const Homepage = () => {
  return (
    <React.Fragment>
      <section className={styles["main-section"]}>
        <div>
          <h1>Search your next Holiday!</h1>
          <input type="text" />
        </div>
      </section>
      <section className={styles["reccomendation-section"]}>
        <h1>Our reccomendations</h1>
        <hr />
        <div className={styles["rec-content"]}>
          <div className={styles["location-cards__container"]}>
            <div className={styles["location-cards"]}>
              <div className={styles["card-top"]}></div>
              <div className={styles["card-bottom"]}>
                <h4>MahaBaleshwar</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Homepage;
