"use client"

import ReactVisibilitySensor from "react-visibility-sensor";
import { useRoute } from "../providers/router-provider.provider";
import { PropsWithChildren } from "react";

export default function RouteSection({
    route
}: {
    route: string
} & PropsWithChildren) {
    const { setRoute } = useRoute();

    return (
        <ReactVisibilitySensor partialVisibility={false}
            onChange={(visible: boolean) => {
                if (visible) {
                    setRoute(route);
                }
            }} offset={{ bottom: 400 }}>
            <section style={{ height: 1 }}></section>
        </ReactVisibilitySensor>
    )
}