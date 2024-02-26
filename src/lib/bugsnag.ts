import Bugsnag from "@bugsnag/js";
import BugsnagPluginReact from "@bugsnag/plugin-react";
import React from "react";

if (import.meta.env.VITE_BUGSNAG_KEY) {
  if (import.meta.env.DEV) {
    console.warn("[bug-reporter] Bugsnag is enabled in dev environment");
  }
}
const bugsnagClient = Bugsnag.start({
  apiKey: import.meta.env.VITE_BUGSNAG_KEY || "",
  releaseStage: import.meta.env.NODE_ENV,
  plugins: [new BugsnagPluginReact()],
});

export const ErrorBoundary = bugsnagClient
  .getPlugin("react")!
  .createErrorBoundary(React);
