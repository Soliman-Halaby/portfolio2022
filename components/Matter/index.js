// import React, { useState, useRef, useEffect } from "react";

// import {
//   Engine,
//   Render,
//   Composite,
//   World,
//   Bodies,
//   Mouse,
//   MouseConstraint,
//   Runner,
// } from "matter-js";

// import { SceneContainer, Container, Title } from "./style";

// const MatterComponent = ({}) => {
//   const scene = useRef();
//   const engine = useRef(Engine.create({}));

//   // Variables

//   const GRAVITY = 1;
//   const WIREFRAMES = false;

//   const COLOR = {
//     BACKGROUND: "transparent",
//     GROUND: "#1E1E1E",
//   };

//   // Scene walls
//   const wall = (x, y, width, height, stroke, fill) => {
//     return Bodies.rectangle(x, y, width, height, {
//       render: {
//strokeStyle: stroke,
//         fillStyle: fill,
//         lineWidth: 1,
//       },
//       isStatic: true,
//     });
//   };

//   // Function to generate rectangles in scene
//   const rect = (x, y, width, height, angle, color) => {
//     return Bodies.rectangle(x, y, width, height, {
//       angle: angle,
//       render: {
//         fillStyle: color,
//       },
//       mass: 7,
//       restitution: 0.3,
//       friction: 0.2,
//       frictionAir: 0.01,
//     });
//   };

//   useEffect(() => {
//     let clientWidth = document.body.clientWidth;
//     let clientHeight = document.body.clientHeight;

//     const render = Render.create({
//       element: scene.current,
//       engine: engine.current,
//       options: {
//         width: clientWidth,
//         height: clientHeight,
//         wireframes: WIREFRAMES,
//         background: "transparent",
//       },
//     });

//     // const wallTop = wall(
//     //   clientWidth / 2,
//     //   17,
//     //   clientWidth,
//     //   150,
//     //   "red",
//     //   "transparent"
//     // );

//     // Scene walls
//     const wallLeft = wall(
//       -100,
//       clientHeight / 2,
//       200,
//       clientHeight * 2,
//       "blue",
//       "red"
//     );
//     const wallRight = wall(
//       clientWidth + 100,
//       clientHeight / 2,
//       200,
//       clientHeight * 2,
//       "purple",
//       "pink"
//     );
//     const ground = wall(
//       clientWidth / 2,
//       clientHeight + 50,
//       clientWidth,
//       250,
//       COLOR.GROUND,
//       COLOR.BACKGROUND
//     );

//     // Add mouse control
//     let mouse = Mouse.create(render.canvas),
//       mouseConstraint = MouseConstraint.create(engine.current, {
//         mouse: mouse,
//         constraint: {
//           stiffness: 0.2,
//           render: {
//             visible: false,
//           },
//         },
//       });

//     // Data structure to store all rectangles
//     const datas = ["Paris", "test", "tigran"];

//     // Create rectangles with random position and size (depending on the data)
//     const generateBlock = () => {
//       return Composite.add(
//         engine.current.world,
//         rect(
//           Math.random() * clientWidth,
//           Math.random() * -clientHeight,
//           290,
//           100,
//           Math.random() * 180,
//           "white"
//         )
//       );
//     };

//     // Add all generated rectangles to the scene
//     datas.map((data, i) => {
//       generateBlock();
//     });

//     // Gravity on World
//     engine.current.gravity.y = GRAVITY;

//     // Add rectangles surface
//     Composite.add(engine.current.world, [
//       // wallTop,
//       wallLeft,
//       ground,
//       wallRight,
//     ]);

//     // Add mouse mouse control to the scene
//     Composite.add(engine.current.world, mouseConstraint);

//     // Run the engine
//     Runner.run(engine.current);
//     Render.run(render);

//     render.mouse = mouse;
//     render.options.showPerformance = true;
//     // if (typeof window !== "undefined" && render.canvas && render.options) {
//     //   console.log(render.canvas);
//     //   window.addEventListener("resize", () => {
//     //     clientWidth = document.documentElement.clientWidth;

//     //     clientHeight = document.documentElement.clientHeight;
//     //     // render.bounds.max.x = window.innerWidth;
//     //     // render.bounds.max.y = window.innerHeight;
//     //     // render.options.width = window.innerWidth;
//     //     // render.options.height = window.innerHeight;
//     //     // render.canvas.width = window.innerWidth;
//     //     // render.canvas.height = window.innerHeight;
//     //   });
//     // }

//     return () => {
//       Render.stop(render);
//       Composite.clear(engine.current.world);
//       Engine.clear(engine.current);
//       render.canvas.remove();
//       render.canvas = null;
//       render.context = null;
//       render.mouse = null;
//     };
//   }, []);

//   return (
//     <Container>
//       <Title>
//         Get to know
//         <br />
//         me better
//       </Title>
//       <SceneContainer ref={scene} />
//     </Container>
//   );
// };

// export default MatterComponent;
import React, { useState, useRef, useEffect, Fragment } from "react";

import {
  Engine,
  Render,
  Composite,
  World,
  Bodies,
  Mouse,
  Events,
  MouseConstraint,
  Runner,
} from "matter-js";

import {
  SceneContainer,
  Container,
  Title,
  MatterContainer,
  Box,
  Ground,
} from "./style";

const MatterComponent = ({}) => {
  const requestRef = useRef();
  const boxRef = useRef([]);

  //   // Variables

  const GRAVITY = 1;
  const WIREFRAMES = false;

  const COLOR = {
    BACKGROUND: "transparent",
    GROUND: "#1E1E1E",
  };

  // Scene walls
  const wall = (x, y, width, height, stroke, fill) => {
    return Bodies.rectangle(x, y, width, height, {
      render: {
        strokeStyle: stroke,
        fillStyle: fill,
        lineWidth: 1,
      },
      isStatic: true,
    });
  };

  // Function to generate blocks in scene
  const rect = (x, y, width, height, angle, color) => {
    return Bodies.rectangle(x, y, width, height, {
      angle: angle,
      render: {
        fillStyle: color,
      },
      mass: 7,
      restitution: 0.3,
      friction: 0.2,
      frictionAir: 0.01,
    });
  };

  //     // Data structure to store all rectangles

  const engine = useRef(Engine.create({}));

  const bodies = [];

  useEffect(() => {
    let clientWidth = document.body.clientWidth;
    let clientHeight = document.body.clientHeight;

    for (let i = 0; i < datas.length; i++) {
      const box = {
        body: rect(
          Math.random() * clientWidth,
          Math.random() * -clientHeight,
          250,
          75,
          Math.random() * 180,
          "white"
        ),

        elem: boxRef.current[0],

        render() {
          console.log(boxRef);
          // console.log(this.body);
          box.elem.textContent = "Ultranoir";
          const { x, y } = box.body.position;
          box.elem.style.top = `${y - 20}px`;
          box.elem.style.left = `${x - 20}px`;
          box.elem.style.transform = `rotate(${box.body.angle}rad)`;
        },
      };
      bodies.push(box);
    }

    console.log("boies", bodies);
    // Scene walls

    const ground = wall(
      clientWidth / 2,
      clientHeight + 50,
      clientWidth,
      250,
      "pink",
      "pink"
    );

    const wallLeft = wall(
      -250,
      clientHeight / 2,
      200,
      clientHeight * 2,
      "blue",
      "red"
    );
    const wallRight = wall(
      clientWidth + 50,
      clientHeight / 2,
      200,
      clientHeight * 2,
      "purple",
      "pink"
    );

    // Controls box with mouse
    const mouseConstraint = MouseConstraint.create(engine.current, {
      element: document.body,
    });

    // Add elements in the world
    Composite.add(engine.current.world, [
      bodies[0].body,
      ground,
      wallLeft,
      wallRight,
      mouseConstraint,
    ]);
    // Re render elements to get box position
    const rerender = () => {
      // bodies.forEach((body, i) => {
      //   console.log(bodies[i]);
      //   bodies[i].render();
      // });
      Engine.update(engine.current);
      bodies[0].render();
      requestRef.current = requestAnimationFrame(rerender);
    };

    rerender();

    return () => {
      Engine.clear(engine.current);
      Composite.clear(engine.current.world);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const datas = ["Paris", "test", "tigran"];

  return (
    <MatterContainer>
      <Fragment>
        {datas.map((data, i) => {
          return <Box key={i} ref={(el) => (boxRef.current[i] = el)} />;
        })}
        <Ground />
      </Fragment>
      <Title>
        Get to know
        <br />
        me better
      </Title>
    </MatterContainer>
  );
};

export default MatterComponent;
