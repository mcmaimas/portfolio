import React from "react";

const Deutsche = () => {
  return (
    <div>
      <h1>Full Stack Engineer for the AI/ML team at Deutsche Bank.</h1>
      <ul>
        <li>
          <h3>
            Our team is focused on building machine learning (ML) models for
            front office users in the global Origination & Advisory division at
            Deutsche Bank. We strive to make our infrastructure reusable so
            other dev teams across the bank can easily get started with their
            own ML projects. My job consists of 2 main aspects. Developing
            microservices (FastApi) for uploading/storing/serving these models.
            Developing the UI (React.js) where users can provide input to a
            model, receive feedback from the model in the form of graphs/charts
            (D3/Chart.js), and upload ML models of their own.
          </h3>
        </li>
        <li>
          <h5>
            My favorite project I've worked on was setting up health checks for
            our scikit-learn models. What I designed was a system where the user
            has to include a test suite when they upload one of their models.
            The test suite runs against the model at the time of upload to make
            sure the model functions as expected. The test suite is also run
            when the model is asked to make a prediction.
          </h5>
        </li>
      </ul>
    </div>
  );
};

export default Deutsche;
