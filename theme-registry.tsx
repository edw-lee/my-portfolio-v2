"use client"

import createCache, { Options } from '@emotion/cache';
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { useServerInsertedHTML } from "next/navigation";
import { PropsWithChildren, useEffect, useState } from "react";
import { darkTheme, greyTheme, lightTheme } from './theme';

export default function ThemeRegistry(props: { options: Options } & PropsWithChildren) {
    const { options, children } = props;
        
    const [{ cache, flush }] = useState(() => {
        const cache = createCache(options);

        cache.compat = true;
        const prevInsert = cache.insert;
        let inserted: { name: string; isGlobal: boolean }[] = [];

        cache.insert = (...args) => {
            const [selector, serialized] = args;
            if (cache.inserted[serialized.name] === undefined) {
                inserted.push({ name: serialized.name, isGlobal: selector === "" });
            }

            return prevInsert(...args);
        };

        const flush = () => {
            const prevInserted = inserted;
            inserted = [];
            return prevInserted;
        };

        return { cache, flush };
    });

    useServerInsertedHTML(() => {
        const names = flush();
        if (names.length === 0) {
            return null;
        }
        let styles = '';
        let dataAttribute = cache.key;

        const globals: { name: string; style: string }[] = [];

        for (const { name, isGlobal } of names) {
            const style = cache.inserted[name];

            if (typeof style !== "boolean") {
                if (isGlobal) {
                    globals.push({ name, style });
                } else {
                    styles += style;
                    dataAttribute += ` ${name}`;
                }
            }
        }

        return (
            <>
                {
                    globals.map(({ name, style }) => (
                        <style
                            key={cache.key}
                            data-emotion={`${cache.key}-global ${name}`}
                            dangerouslySetInnerHTML={{ __html: style }}
                        />
                    ))
                }
                {
                    styles !== '' && (
                        <style
                            key={cache.key}
                            data-emotion={dataAttribute}
                            dangerouslySetInnerHTML={{ __html: styles }}
                        />
                    )
                }
            </>
        );
    });

    return (
        <CacheProvider value={cache}>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </CacheProvider>
    );
}