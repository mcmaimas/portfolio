import React from "react";
import ReactDOM from "react-dom";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import "./styles.css";

// Little helpers ...
const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;
const Pink = ({ children }) => (
  <span style={{ color: "#FF6AC1" }}>{children}</span>
);
const Yellow = ({ children }) => (
  <span style={{ color: "#EFF59B" }}>{children}</span>
);
const Lightblue = ({ children }) => (
  <span style={{ color: "#9AEDFE" }}>{children}</span>
);
const Green = ({ children }) => (
  <span style={{ color: "#57EE89" }}>{children}</span>
);
const Blue = ({ children }) => (
  <span style={{ color: "#57C7FF" }}>{children}</span>
);
const Gray = ({ children }) => (
  <span style={{ color: "#909090" }}>{children}</span>
);

class MyParallax extends React.Component {
  render() {
    return (
      <Parallax ref={(ref) => (this.parallax = ref)} pages={5}>
        <ParallaxLayer
          offset={0}
          speed={1}
          style={{ backgroundColor: "#3c3b5c" }}
        />
        <ParallaxLayer
          offset={0}
          speed={0}
          style={{ backgroundColor: "#3c3b5c" }}
        />
        <ParallaxLayer
          offset={0.5}
          speed={0}
          style={{ backgroundColor: "#3c3b5c" }}
        />
        <ParallaxLayer
          offset={0.5}
          speed={0}
          style={{ backgroundColor: "#3c3b5c" }}
        />
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: "#3c3b5c" }}
        />
        <ParallaxLayer
          offset={1.5}
          speed={0}
          style={{ background: "linear-gradient(#3c3b5c, #7b3c59)" }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{ backgroundColor: "#7b3c59" }}
        />
        <ParallaxLayer
          offset={2.5}
          speed={0}
          style={{ background: "linear-gradient(#7b3c59, #d53939)" }}
        />
        <ParallaxLayer
          offset={3}
          speed={1}
          style={{ backgroundColor: "#d53939" }}
        />
        <ParallaxLayer
          offset={3.5}
          speed={0}
          style={{ background: "linear-gradient(#d53939, #ff9900)" }}
        />
        <ParallaxLayer
          offset={4}
          speed={1}
          style={{ background: "linear-gradient(#ff9900, #7b3c59)" }}
        />
        <ParallaxLayer
          offset={4}
          speed={0}
          style={{ background: "linear-gradient(#ff9900, #7b3c59)" }}
        />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={5}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(1)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Intro
          <img src={url("bash")} style={{ width: "40%" }} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(2)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Deutsche
          <img src={url("bash")} style={{ width: "40%" }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(3)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Fonbnk
          <img src={url("bash")} style={{ width: "40%" }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={-0.1}
          onClick={() => this.parallax.scrollTo(4)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          NC State
          <img src={url("bash")} style={{ width: "40%" }} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={4}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(0)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Mountain
          <img src={url("bash")} style={{ width: "40%" }} />
        </ParallaxLayer>
      </Parallax>
    );
  }
}

export default MyParallax;
