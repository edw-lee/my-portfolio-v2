"use client"

import ReactVisibilitySensor from "react-visibility-sensor";
import { useRoute } from "../providers/router-provider.provider";
import { CSSProperties, PropsWithChildren } from "react";

export default function RouteSection({
    id,
    style,
    children
}: {
    id: string,
    style?: CSSProperties
} & PropsWithChildren) {
    const { route, setRoute } = useRoute();

    return (
        <ReactVisibilitySensor partialVisibility={false}
            onChange={(visible: boolean) => {
                if (visible) {
                    setRoute(id);
                }
            }} offset={{ bottom: 400 }}>
            <section id={id} style={{
                height: 1,
                ...style
            }}>
                {children}
            </section>
        </ReactVisibilitySensor>
    )
}