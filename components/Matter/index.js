import React, { useState, useRef, useEffect } from "react";

import {Engine, Render, Composite, World, Bodies} from 'matter-js'

import { SceneContainer } from "./style";


const MatterComponent = ({}) => {

    const scene = useRef()
    const engine = useRef(Engine.create({}))

    console.log(Composite)
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

        // Gravity on World
        engine.current.gravity.y = 3;

        // Add rectangles surface
        Composite.add(engine.current.world, [
            Bodies.rectangle(clientWidth / 2, 17, clientWidth, 30, { isStatic: true, 
                render: {
                    fillStyle: 'red',
                    strokeStyle:'green',
                    lineWidth:3
                } 
            }),
            Bodies.rectangle(17, clientHeight / 2, 30, clientHeight, { isStatic: true, 
                render: {
                    fillStyle: 'red',
                    strokeStyle:'blue',
                    lineWidth:3
                }
            }),
            Bodies.rectangle(clientWidth / 2, clientHeight - 117, clientWidth, 30, { isStatic: true, 
                render: {
                    fillStyle: 'red',
                    strokeStyle:'yellow',
                    lineWidth:3
                }
            }),
            Bodies.rectangle(clientWidth - 117, clientHeight / 2, 30, clientHeight, { isStatic: true, 
                render: {
                    fillStyle: 'pink',
                    strokeStyle:'purple',
                    lineWidth:3
                }
            }),
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
                    render:{
                        fillStyle:'lightblue'
                    }
                }
            ),
            Bodies.rectangle(
                290,
                60,
                290,
                100,
                {
                    mass: 2,
                    restitution: 0.9,
                    friction: 0.1,
                    frictionAir: 0.1,
                    render:{
                        fillStyle:'red'
                    }
                }
            )
          ])
          
          // run the engine
        Engine.run(engine.current)
        Render.run(render)
   

        return () => {
            Render.stop(render)
            Composite.clear(engine.current.world)
            Engine.clear(engine.current)
            
            render.canvas.remove()
            render.canvas = null
            render.context = null
            render.textures = {}
        }
    }, [])

    return(
        <SceneContainer ref={scene}/>
    )
}

export default MatterComponent