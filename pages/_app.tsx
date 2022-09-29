import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import createEmotionCache from "utils/createEmotionCache";
import lightTheme from "styles/theme/lightTheme";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import DefaultLayout from "components/Layout/DefaultLayout";
import { AppPropsWithLayout } from "utils/common";
import SnackbarProvider from "context/SnackbarProvider.context";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import GraphQLQueryClientContextProvider from "components/Table/context/QueryClientContext";

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
            <GraphQLQueryClientContextProvider>
                <CacheProvider value={emotionCache}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <ThemeProvider theme={lightTheme}>
                            <SnackbarProvider>
                                <CssBaseline />
                                {getLayout(<Component {...pageProps} />)}
                            </SnackbarProvider>
                        </ThemeProvider>
                    </LocalizationProvider>
                </CacheProvider>
            </GraphQLQueryClientContextProvider>
        </QueryClientProvider>
    );
}

export default MyApp;
