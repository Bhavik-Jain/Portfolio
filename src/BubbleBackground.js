import React from "react";
import Particles from "react-particles-js";
import ParticleConfig from "./config/particle-config";


export default function BubbleBackground(){
    return(
        <Particles params={ParticleConfig}></Particles>
    )
}