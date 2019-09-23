import React from "react";

export interface props {
    name: string;
    description: string;
}

// Return template for rendering Repo component
export default function Description({ name, description }: props) {
    return (
        <div>
            <p>menu/location</p>
            <h1>{name}</h1>
            <p>{description}</p>
            <span></span>
        </div>
    );
}

