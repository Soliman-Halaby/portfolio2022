import React, { useState, useRef, useEffect } from "react";

import {Engine, Render, Composite, World, Bodies, Mouse, MouseConstraint, Runner} from 'matter-js'

import { SceneContainer, Container, Title} from "./style";


const MatterComponent = ({}) => {

    const scene = useRef()
    const engine = useRef(Engine.create({}))


    // Variables

    const GRAVITY = 1;
    const WIREFRAMES = false;

    const COLOR = {
        BACKGROUND: 'transparent',
        GROUND: '#1E1E1E'
    }

    // Scene walls
    const wall = (x,y, width, height, stroke, fill) => {
        return Bodies.rectangle(x, y, width, height, {
            render:{
                strokeStyle: stroke,
                fillStyle: fill,
                lineWidth: 1
            },
            isStatic: true,
        })
    }

    // Function to generate rectangles in scene
    const rect = (x, y, width, height, angle, color) => {
        return Bodies.rectangle(x, y, width, height, {
            restitution: 0.3,
            angle: angle,
            render:{
                fillStyle: color
            },
            mass: 10,
            // inverseMass: 1/10,
            // density: 0.01,
            // restitution: 0.9,
            // friction: 0.1,
            // frictionAir: 0.01
        })
    }

    useEffect(() => {
        let clientWidth = document.body.clientWidth
        let clientHeight = document.body.clientHeight
        
        const render = Render.create({
            element: scene.current,
            engine: engine.current,
            options:{
                width: clientWidth ,
                height: clientHeight,
                wireframes: WIREFRAMES,
                background: 'transparent',
            }
        })

        const wallTop = wall(clientWidth / 2, 17, clientWidth, 150, 'red', 'blue')
        const wallLeft = wall(-100, clientHeight / 2, 200, clientHeight, 'blue', 'red')
        const wallRight = wall(clientWidth + 100, clientHeight / 2, 200, clientHeight, 'purple', 'pink')
        const ground = wall(clientWidth / 2, clientHeight + 50, clientWidth, 250, COLOR.GROUND, COLOR.BACKGROUND)

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


        // Datas to generate block
        const datas = [
            'test', 'blabla'
        ]

        console.log(datas.length)
        // Gravity on World
        engine.current.gravity.y = GRAVITY;

        // Add rectangles surface
        Composite.add(engine.current.world, [wallTop, wallLeft, ground, wallRight,
            // Rectangle elements

            // rect(280, 60, 100, 20, 30, 'red'),
            rect(290, 150, 290, 100, 100, 'white'),
        
          ])
          

          World.add(engine.current.world, mouseConstraint)
          // run the engine
        Runner.run(engine.current)
        Render.run(render)
        render.mouse = mouse
   

        if(typeof window !== 'undefined' && render.canvas && render.options){
            console.log(render.canvas)
            window.addEventListener('resize', () => { 
                clientWidth = document.documentElement.clientWidth
                
                clientHeight = document.documentElement.clientHeight
                // render.bounds.max.x = window.innerWidth;
                // render.bounds.max.y = window.innerHeight;
                // render.options.width = window.innerWidth;
                // render.options.height = window.innerHeight;
                // render.canvas.width = window.innerWidth;
                // render.canvas.height = window.innerHeight;
              });
        }

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
        <Container>
            {/* <Title>Get to know<br/>me better</Title> */}
            <SceneContainer ref={scene}/>
        </Container>
    )
}

export default MatterComponent
