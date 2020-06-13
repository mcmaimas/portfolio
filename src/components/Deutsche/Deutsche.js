import React from "react";

const Deutsche = () => {
  return (
    <div>
      <h1>I am the Front End Engineer for the AI/ML team at Deutsche Bank.</h1>
      <ul>
        <li>
          <h3>
            My responsibility is designing/building the UI/UX of our React
            applicaton. I use our internal version of bootstrap for the basic
            layout and feel. I use d3 and Chart.js as my vizualization
            libraries. We use FastAPI for our service layer. I touch all aspects
            of the client and server side.
          </h3>
        </li>
        <li>
          <h3>
            When I joined the team we had multiple disjointed JavaScript
            projects. I have since combined them into a SPA. Now my job is
            building UI's for the new models we create, and developing a
            reusable infrastructure to upload future models.
          </h3>
        </li>
        <li>
          <h3>
            The current problem I face is state management. Up to this point we
            have been small enough to handle state with hooks, but as we grow we
            need to think about scalability. DB's internal package manager does
            not allow for Apollo or Relay so I am researching Redux vs MobX to
            see which best fits our needs.
          </h3>
        </li>
      </ul>
    </div>
  );
};

export default Deutsche;
