import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

const locales = ["en", "ru", "de"];
const defaultLocale = "en";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const locale = cookieStore.get("locale")?.value;
  const resolvedLocale =
    locale && locales.includes(locale) ? locale : defaultLocale;
  return {
    locale: resolvedLocale,
    messages: (await import(`../../messages/${resolvedLocale}.json`)).default,
  };
});
