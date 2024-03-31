import React from "react";
import home from "./home.jpg"

function Home() {
  return (
<div className="home">
    <div className="home-content">
        <div className="image">
            <img src={home} alt="img" />
        </div>
        <div className="content">
            <div className="container">
                <section id="about">
                    <div className="section-header">
                        <h2>About Real-Time Power Grid Risk Assessment</h2>
                    </div>
                    <div className="section-content">
                        <p>Real-Time Power Grid Risk Assessment is your essential tool for evaluating and managing risks in power grid infrastructure across the nation. Leveraging advanced predictive models and real-time weather data, we provide actionable insights to power departments for assessing risks in substations.</p>
                    </div>
                </section>

                <section id="explore">
                    <div className="section-header">
                        <h2>Insights: Real-Time Risk Assessment</h2>
                    </div>
                    <div className="section-content interests">
                        <p>Select a state to view real-time risk assessments for substations in that state. Our predictive model factors in current weather conditions, including temperature, pressure, humidity, wind speed, and more, obtained through OpenWeather API calls. Stay informed and make data-driven decisions to ensure grid resilience.</p>
                    </div>
                </section>

                <section id="customize">
                    <div className="section-header">
                        <h2>Join Our Community</h2>
                    </div>
                    <div className="section-content">
                        <p>Join the Real-Time Power Grid Risk Assessment community today and contribute to the vision of a unified, resilient power grid for the nation. Together, we can ensure reliable power supply and mitigate risks effectively, fostering stability and growth.</p>
                    </div>
                </section>
            </div>
        </div>
    </div>
</div>
  );
}

export default Home;
