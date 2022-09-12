import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";
import createEmotionCache from "utils/createEmotionCache";
import lightTheme from "styles/theme/lightTheme";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";

const clientSideEmotionCache = createEmotionCache();

type AppWithEmotionCache = AppProps & {
    emotionCache: EmotionCache;
};

function MyApp({
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
}: AppWithEmotionCache) {
    const queryClient = new QueryClient({
        queryCache: new QueryCache(),
    });
    return (
        <QueryClientProvider client={queryClient}>
            <CacheProvider value={emotionCache}>
                <ThemeProvider theme={lightTheme}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </CacheProvider>
        </QueryClientProvider>
    );
}

export default MyApp;
