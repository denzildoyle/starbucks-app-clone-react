import React from "react";

export interface props {
    breadCrumbs: string;
    title: string;
    description: string;
    location: string;
}

export default function Description({ title, description, breadCrumbs, location }: props) {
    return (
        <div>
            <p>{breadCrumbs}</p>
            <h1>{title}</h1>
            <p>{description}</p>
            <span>{location}</span>
        </div>
    );
}

