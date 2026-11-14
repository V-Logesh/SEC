import { Outlet, createFileRoute } from "@tanstack/react-router";

/**
 * Layout route for /services — wraps the services listing (services.index.tsx)
 * and the per-service detail pages (services.$slug.tsx) in one branch.
 */
export const Route = createFileRoute("/services")({
  component: ServicesLayout,
});

function ServicesLayout() {
  return <Outlet />;
}
