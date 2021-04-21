# Performance Experiments

## Declarative Shadow DOM

For the simplest AMP Document with just a carousel, compare the performance regular, and variants on SSRing (Default, DSD Native, DSD Polyfill, Light DOM).
``` 
┌──────┬──────┬──────────────┬────────────┬────────────────────┬───────────────────────┐
│ rank │ runs │      version │ FCP (mean) │         LCP (mean) │            CLS (mean) │
├──────┼──────┼──────────────┼────────────┼────────────────────┼───────────────────────┤
│    1 │   30 │ DSD Polyfill │    634.904 │            634.904 │                     0 │
│    2 │   30 │    Light DOM │    642.949 │            642.949 │                     0 │
│    3 │   30 │   DSD Native │    633.782 │ 2102.3459999999995 │  0.011207217261904762 │
│    4 │   30 │      Default │   1376.819 │           2236.319 │ 0.0007318767903415672 │
└──────┴──────┴──────────────┴────────────┴────────────────────┴───────────────────────┘
```
