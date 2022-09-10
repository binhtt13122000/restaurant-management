import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";
import createEmotionCache from "../utils/createEmotionCache";
import darkTheme from "../styles/theme/darkTheme";

const clientSideEmotionCache = createEmotionCache();

type AppWithEmotionCache = AppProps & {
    emotionCache: EmotionCache;
};

function MyApp({
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
}: AppWithEmotionCache) {
    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    );
}

export default MyApp;
