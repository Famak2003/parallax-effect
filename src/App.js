import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";

function App() {
  const ref = useRef();
  return (
    <div>
      <Parallax className="paraHead" pages={4} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{ backgroundImage: "url(moon.png)", backgroundSize: "cover" }}
        />
        <ParallaxLayer sticky={{ start: 0.9, end: 2.5 }}>
          <img src="cat.gif" alt="cat" />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{ backgroundImage: "url(land.png)", backgroundSize: "cover" }}
        ></ParallaxLayer>
        <ParallaxLayer
          className="paralax"
          offset={0.2}
          speed={0.05}
          onClick={() => ref.current.scrollTo(3)}
        >
          <h2>Hello There</h2>
        </ParallaxLayer>
        <ParallaxLayer
          className="paralax
          "
          offset={3.2}
          speed={2}
          onClick={() => ref.current.scrollTo(0)}
        >
          <h2>How is your day going</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
