<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture

- Services routes: `services.tsx` is a layout that only renders `<Outlet />` (no head, no page body); the listing lives in `services.index.tsx` and each service detail in `services.$slug.tsx`. A dot-nested child under a leaf page renders blank because the leaf has no Outlet — keep new service sub-pages in this structure. Canonical links sit on the leaf routes only (`services.index.tsx` and each detail), never on the layout, because TanStack concatenates `links` across matched routes and would emit duplicates.
- Per-service copy and the delivery-process steps live in `src/lib/business.ts` (`SERVICE_DETAILS`, `PROCESS_STEPS`, `INDUSTRIES`); detail pages and the footer link to `/services/$slug` rather than `/services`.
