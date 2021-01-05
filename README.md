# Performance Experiments


Questions

- Does iframe=lazy work? Must not vs. should not. If not good enough, then we at a minimum need to add a Runtime for lazy loading.
- Preact 1 vs. many mount point performance:
  - Cost/Savings of sharing State/Context using Mitt vs. single mount.
  - Cost/Saving of initial hydration if all nodes must be mounted.
  - Cost/Saving of initial hydration if there are large gaps of static html elements which do not need to be mounted
