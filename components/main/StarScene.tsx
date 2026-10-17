"use client";

import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarPoints = () => {
    const ref = useRef<any>(null);
    const [sphere] = useState(() =>
        random.inSphere(new Float32Array(1200), { radius: 1.2 })
    );

    useFrame((_, delta) => {
        ref.current.rotation.x -= delta / 14;
        ref.current.rotation.y -= delta / 20;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled>
                <PointMaterial
                    transparent
                    color="#ffffff"
                    size={0.0018}
                    sizeAttenuation
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const StarScene = () => (
    <div className="pointer-events-none fixed inset-0 -z-10 h-auto w-full overflow-hidden">
        <Canvas
            camera={{ position: [0, 0, 1] }}
            dpr={[1, 1.2]}
            gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
        >
            <Suspense fallback={null}>
                <StarPoints />
            </Suspense>
        </Canvas>
    </div>
);

export default StarScene;