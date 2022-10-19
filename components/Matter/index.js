import React, { useState, useRef, useEffect } from "react";

import {Engine, Render, Composite, World, Bodies, Mouse, MouseConstraint, Runner} from 'matter-js'

import { SceneContainer } from "./style";


const MatterComponent = ({}) => {

    const scene = useRef()
    const engine = useRef(Engine.create({}))

    console.log('mouse', Mouse, 'mouseConstraint', MouseConstraint)
    useEffect(() => {
        const clientWidth = document.body.clientWidth
        const clientHeight = document.body.clientHeight
        
        const render = Render.create({
            element: scene.current,
            engine: engine.current,
            options:{
                width: clientWidth - 100,
                height: clientHeight  - 100,
                wireframes: false,
                background: '#999999',
            }
        })


        const wallTop = Bodies.rectangle(clientWidth / 2, 17, clientWidth, 30, { isStatic: true, 
            render: {
                fillStyle: 'red',
                strokeStyle:'green',
                lineWidth:3
            } 
        })

        const wallLeft = Bodies.rectangle(17, clientHeight / 2, 30, clientHeight, { isStatic: true, 
            render: {
                fillStyle: 'red',
                strokeStyle:'blue',
                lineWidth:3
            }
        })

        const ground = Bodies.rectangle(clientWidth / 2, clientHeight - 117, clientWidth, 30, { isStatic: true, 
            render: {
                fillStyle: 'red',
                strokeStyle:'yellow',
                lineWidth:3
            }
        })

        const wallRight = Bodies.rectangle(clientWidth - 117, clientHeight / 2, 30, clientHeight, { isStatic: true, 
            render: {
                fillStyle: 'pink',
                strokeStyle:'purple',
                lineWidth:3,
            },
        })

        // Add mouse control
        let mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine.current, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
            visible: false
            }
        }
        });

        // Gravity on World
        engine.current.gravity.y = 1;

        // Add rectangles surface
        Composite.add(engine.current.world, [wallTop, wallLeft, ground, wallRight,
            // Rectangle elements
            Bodies.rectangle(
                280,
                60,
                100,
                20,
                {
                    mass: 2,
                    restitution: 0.9,
                    friction: 0.1,
                    frictionAir: 0.01,
                    render:{
                        fillStyle:'transparent',
                        strokeStyle:'black',
                    }
                }
            ),
            Bodies.rectangle(
                290,
                60,
                290,
                100,
                {
                    mass: 10,
                    restitution: 0.1,
                    friction: 0.1,
                    frictionAir: 0.02,
                    render:{
                        strokeStyle: '#4a485b',
                        fillStyle:'white'
                    }
                }
            )
          ])
          

          World.add(engine.current.world, mouseConstraint)
          // run the engine
        Runner.run(engine.current)
        Render.run(render)
        render.mouse = mouse
   

        return () => {
            Render.stop(render)
            Composite.clear(engine.current.world)
            Engine.clear(engine.current)
            render.canvas.remove()
            render.canvas = null
            render.context = null
            render.mouse = null
            render.textures = {}
        }
    }, [])

    return(
        <SceneContainer ref={scene}/>
    )
}

export default MatterComponent
