import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import createEmotionCache from "utils/createEmotionCache";
import lightTheme from "styles/theme/lightTheme";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import DefaultLayout from "components/Layout/DefaultLayout";
import { AppPropsWithLayout } from "utils/common";

const clientSideEmotionCache = createEmotionCache();

type AppWithEmotionCache = AppPropsWithLayout & {
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
    const getLayout =
        Component.getLayout ??
        ((page) => {
            return (
                <DefaultLayout
                    sx={{
                        pt: 3,
                    }}
                >
                    {page}
                </DefaultLayout>
            );
        });

    return (
        <QueryClientProvider client={queryClient}>
            <CacheProvider value={emotionCache}>
                <ThemeProvider theme={lightTheme}>
                    <CssBaseline />
                    {getLayout(<Component {...pageProps} />)}
                </ThemeProvider>
            </CacheProvider>
        </QueryClientProvider>
    );
}

export default MyApp;
