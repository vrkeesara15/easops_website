declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_SITE_URL?: string;
    SANITY_PROJECT_ID?: string;
    SANITY_DATASET?: string;
    SANITY_API_VERSION?: string;
    SANITY_TOKEN?: string;
  }
}
