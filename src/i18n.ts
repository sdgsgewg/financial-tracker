import { getRequestConfig } from "next-intl/server";
import { routing } from "./navigation";

async function getMessages(locale: string) {
  const theme = (await import(`./messages/${locale}/theme.json`)).default;
  const lang = (await import(`./messages/${locale}/lang.json`)).default;
  const navigation = (await import(`./messages/${locale}/navigation.json`))
    .default;
  const footer = (await import(`./messages/${locale}/footer.json`)).default;
  const common = (await import(`./messages/${locale}/common.json`)).default;
  const auth = (await import(`./messages/${locale}/auth.json`)).default;
  const entities = (await import(`./messages/${locale}/entities.json`)).default;

  const publicMessages = {

  };

  const dashboardMessages = {

  };

  return {
    theme,
    lang,
    navigation,
    footer,
    common,
    auth,
    public: publicMessages,
    dashboard: dashboardMessages,
    entities,
  };
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as "en" | "id")) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: await getMessages(locale),
  };
});
