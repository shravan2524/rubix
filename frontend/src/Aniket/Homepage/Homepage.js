import React from "react";
import styles from "./Homepage.module.css";
import Mapsscreen from "../../Mapsscreen";
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
              <div>
                <Mapsscreen />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Homepage;
