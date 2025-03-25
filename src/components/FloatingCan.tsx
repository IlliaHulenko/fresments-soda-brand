"use client";
import { forwardRef } from 'react';
import { Float } from '@react-three/drei'

import { SodaCan, SodaCanProps } from '@/components/SodaCan'
import { Group } from 'three';

type FloatingCanProps = {
    flavor?: SodaCanProps['flavor'];
    floatSpeed?: number;
    rotationIntensity?: number;
    floatIntentsity?: number;
    floatingRange?: [number, number];
    children?: React.ReactNode;
};

const FloatingCan = forwardRef<Group, FloatingCanProps>(
    ({
        flavor = 'blackCherry',
        floatSpeed = 1.5,
        rotationIntensity = 1,
        floatIntentsity = 1,
        floatingRange = [-.1, .1],
        children,
        ...props
    }, ref ) => {
        return (
            <group ref={ref} {...props}>
                <Float
                    speed={floatSpeed} // Animation speed, defaults to 1
                    rotationIntensity={rotationIntensity} // XYZ rotation intensity, defaults to 1
                    floatIntensity={floatIntentsity} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
                    floatingRange={floatingRange} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
                >
                    {children}
                    <SodaCan flavor={flavor}/>                    
                </Float>
            </group>
        );
    });

FloatingCan.displayName = 'FloatingCan';

export default FloatingCan