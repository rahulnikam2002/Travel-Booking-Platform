import React from 'react';
import { Button } from './Button';

// Simple examples for the Button component
export const ButtonExamples = () => {
    const handleClick = () => {
        console.log('Button clicked!');
    };

    // Simple icons (you can use ReactSVG, images, or any React element)
    const CheckIcon = () => <span>✓</span>;
    const StarIcon = () => <span>★</span>;
    const PlusIcon = () => <span>+</span>;

    return (
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Basic Usage */}
            <section>
                <h3>Basic Usage</h3>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <Button title="Basic Button" onClick={handleClick} />
                    <Button onClick={handleClick}>Button with children</Button>
                </div>
            </section>

            {/* Sizes */}
            <section>
                <h3>Sizes</h3>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Button size="small" title="Small" onClick={handleClick} />
                    <Button size="medium" title="Medium" onClick={handleClick} />
                    <Button size="large" title="Large" onClick={handleClick} />
                </div>
            </section>

            {/* Types */}
            <section>
                <h3>Types</h3>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <Button type="filled" title="Filled" onClick={handleClick} />
                    <Button type="outlined" title="Outlined" onClick={handleClick} />
                    <Button type="text" title="Text" onClick={handleClick} />
                </div>
            </section>

            {/* Shapes */}
            <section>
                <h3>Shapes</h3>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <Button isSquare={false} title="Rounded" onClick={handleClick} />
                    <Button isSquare={true} title="Square" onClick={handleClick} />
                </div>
            </section>

            {/* Icons */}
            <section>
                <h3>With Icons</h3>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <Button
                        leftIcon={<CheckIcon />}
                        title="With Left Icon"
                        onClick={handleClick}
                    />
                    <Button
                        rightIcon={<StarIcon />}
                        title="With Right Icon"
                        onClick={handleClick}
                    />
                    <Button
                        leftIcon={<PlusIcon />}
                        rightIcon={<StarIcon />}
                        title="Both Icons"
                        onClick={handleClick}
                    />
                </div>
            </section>

            {/* Disabled State */}
            <section>
                <h3>Disabled State</h3>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <Button title="Normal" onClick={handleClick} />
                    <Button title="Disabled" disabled onClick={handleClick} />
                </div>
            </section>
        </div>
    );
};

export default ButtonExamples;