/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig = {
  productionBrowserSourceMaps: true,
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
