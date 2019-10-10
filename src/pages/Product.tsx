import React from 'react';
import Description from '../components/product/Description';

export default function Product() {
    return (
        <div className="Product">
            <Description breadCrumbs="Menu / Hot Coffees / Caffè Americano" title="Caffè Americano" description="Espresso shots are topped with hot water to produce a light layer of crema. The result is this wonderfully rich cup with depth and nuance. Pro tip: for additional caffeine, ask your barista to try this with an extra shot (75 mg caffeine per shot).." location="Available at Lakewood, NJ" />
        </div>
    );
}
