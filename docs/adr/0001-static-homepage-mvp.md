# Homepage MVP is fully static

The homepage MVP ships as a front-end showcase only: every CTA anchor-scrolls to a page section, all section content comes from local data files, and there is no backend, database, or auth. Anchor-only CTAs were chosen over stub routes so nothing 404s before real pages exist; data files (courses, testimonials) were chosen over hardcoding so real content replaces mock content without UI changes. When real routes (e.g. /courses) or an API arrive, swap CTA destinations and data sources — the component contracts stay the same.
