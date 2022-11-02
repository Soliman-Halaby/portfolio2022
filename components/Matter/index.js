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
import React, {
  useState,
  useRef,
  useEffect,
  Fragment,
  useLayoutEffect,
} from "react";

import {
  Engine,
  Render,
  Composite,
  World,
  Body,
  Bodies,
  Mouse,
  Events,
  MouseConstraint,
  Runner,
} from "matter-js";

import {
  Title,
  MatterContainer,
  Box,
  Detail,
  CloseBtnContainer,
  CloseBtn,
  DetailContainer,
  Ground,
  Label,
  Description,
  OtherFactsContainer,
  ControlWrapper,
  ControlContainer,
  Control,
  SceneContainer,
} from "./style";

const MatterComponent = ({}) => {
  const requestRef = useRef();
  const boxRef = useRef([]);


  const [detail, setDetail] = useState('closed')
  const detailRef = useRef(null)
  //   // Variables

  const GRAVITY = 1;

  const WIREFRAMES = true;
  // Scene walls
  const wall = (x, y, width, height) => {
    return Bodies.rectangle(x, y, width, height, {
      render: {
        lineWidth: 1,
      },
      isStatic: true,
    });
  };

  // Function to generate blocks in scene
  const rect = (x, y, width, height, angle) => {
    return Bodies.rectangle(x, y, width, height, {
      angle: angle,
      render: {},
      mass: 7,
      restitution: 0.3,
      friction: 0.2,
      frictionAir: 0.01,
    });
  };

  //     // Data structure to store all rectangles

  const engine = useRef(Engine.create({}));

  const scene = useRef();

  const bodies = [];
  const datas = [
    {
      label: "Paris",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet viverra in nisl pellentesque nullam. Porttitor pellentesque pharetra, suspendisse at arcu. Netus tempus, pulvinar vel commodocondimentum turpis cursus semper. Dignissim commodo amet eleifendlibero, risus. Aliquam risus vestibulum facilisis urna tempus idcongue ac, arcu. Enim dictum nec malesuada in faucibus id nuncnec. A nisl at accumsan at vitae, vulputate odio morbi quam.Magnis ullamcorper fermentum donec tellus, vitae enim morbi egetcongue. Dictum dictumst sit vel placerat tincidunt vitae nunc.Pulvinar pharetra lectus tristique aliquam pulvinar eget.",
    },
    { label: "Ultranoir" },
    { label: "Hetic" },
  ];


  const closeDetail = () => {
    console.log('clsoe')
    setDetail('closed')
  }

  const openDetail = () => {
    console.log('opene')
    setDetail('opened')
  }


  useEffect(() => {
    let clientWidth = document.body.clientWidth;
    let clientHeight = document.body.clientHeight;

    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: clientWidth,
        height: clientHeight,
        wireframes: WIREFRAMES,
        background: "transparent",
      },
    });

    Render.run(render);

    for (let i = 0; i < datas.length; i++) {
      const box = {
        body: rect(
          Math.random() * clientWidth,
          Math.random() * -clientHeight,
          boxRef.current[i].offsetWidth,
          60,
          Math.random() * 180
        ),

        elem: boxRef.current[i],

        render() {
          const { x, y } = box.body.position;
          box.elem.style.top = `${y - boxRef.current[i].offsetHeight / 2}px`;
          box.elem.style.left = `${x - boxRef.current[i].offsetWidth / 2}px`;
          box.elem.style.transform = `rotate(${box.body.angle}rad)`;
        },
      };
      bodies.push(box);
      // console.log(box.body.position);
      Composite.add(engine.current.world, [bodies[i].body]);
    }
    // Scene walls

    const ground = wall(
      clientWidth / 2,
      clientHeight + 50,
      clientWidth * 2,
      250
    );

    const wallTop = wall(
      clientWidth / 2,
      -clientHeight * 1.5,
      clientWidth,
      500
    );
    const wallLeft = wall(-100, clientHeight / 2, 200, clientHeight * 3);
    const wallRight = wall(
      clientWidth + 100,
      clientHeight / 2,
      200,
      clientHeight * 3
    );

    // Controls box with mouse
    const mouseConstraint = MouseConstraint.create(engine.current, {
      element: document.body,
    });

    // Add elements in the world
    Composite.add(engine.current.world, [
      ground,
      wallTop,
      wallLeft,
      wallRight,
      mouseConstraint,
    ]);

    // Re render elements to get box position
    const rerender = () => {
      Engine.update(engine.current);
      for (let i = 0; i < datas.length; i++) {
        bodies[i].render();
        // console.log(bodies[1].body.position);
      }
      requestRef.current = requestAnimationFrame(rerender);
    };

    rerender();

    return () => {
      Engine.clear(engine.current);
      Composite.clear(engine.current.world);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);


  useEffect(() => {

    let clientWidth = document.body.clientWidth;
    let clientHeight = document.body.clientHeight;


    const detailBox = {
      body: wall(
        clientWidth - 420,
        clientHeight - 290,
        detailRef.current.offsetWidth,
        detailRef.current.offsetHeight,
      ),
  
      elem: detailRef.current,
      
    }

    Composite.add(engine.current.world, [detailBox.body]);

    detail === 'opened' ? Body.scale(detailBox.body, 1, 1) : Body.scale(detailBox.body, 0, 0)
  }, [detail])
  return (
    <MatterContainer>
      <SceneContainer ref={scene} />
      <Fragment>
        {datas.map((data, i) => {
          return (
            <Box
              className={i % 2 !== 0 ? "rounded" : ""}
              key={i}
              ref={(el) => (boxRef.current[i] = el)}
              onClick={() => openDetail()}
            >
              {data.label}
            </Box>
          );
        })}
        <Detail className={detail} ref={detailRef}>
          <DetailContainer>
            <CloseBtnContainer>
              <CloseBtn onClick={() => closeDetail()} src="/close.svg" layout="fill"></CloseBtn>
            </CloseBtnContainer>
            <Label>{datas[0].label}</Label>
            <Description>{datas[0].description}</Description>
            <OtherFactsContainer>
              Other facts
              <ControlWrapper>
                <ControlContainer>
                  <Control
                    src="/facts-prev.svg"
                    width="24px"
                    height="24px"
                  ></Control>
                </ControlContainer>
                <ControlContainer>
                  <Control
                    src="/facts-next.svg"
                    width="24px"
                    height="24px"
                  ></Control>
                </ControlContainer>
              </ControlWrapper>
            </OtherFactsContainer>
          </DetailContainer>
        </Detail>
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
