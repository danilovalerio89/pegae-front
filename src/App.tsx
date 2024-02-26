import i18n from "@/lib/i18n";
import { I18nextProvider } from "react-i18next";
import { RouterProvider } from "react-router-dom";
import { router } from "@/routes/routes";
import { ErrorBoundary } from "@/lib/bugsnag";

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </I18nextProvider>
  );
}
