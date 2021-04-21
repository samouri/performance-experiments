import PerfLeaderboard from 'performance-leaderboard';
import { printTable } from 'console-table-printer';
import express from 'express';

// HTTP Server Setup
const app = express();
app.use(express.static('.'));
app.listen(8080);

let urls = {
  'http://localhost:8080/experiments/declarative-shadow-dom/carousel-default.amp.html':
    'Default',
  'http://localhost:8080/experiments/declarative-shadow-dom/carousel-dsd.amp.html': 'DSD',
  'http://localhost:8080/experiments/declarative-shadow-dom/carousel-polyfill.amp.html':
    'DSD Polyfill',
  'http://localhost:8080/experiments/declarative-shadow-dom/carousel-light.amp.html':
    'Light DOM',
};
const runs = 10;

async function run() {
  const scores = await PerfLeaderboard(Object.keys(urls), runs);
  const table = scores
    .map((s) => ({
      rank: s.ranks.performance,
      runs: runs,
      version: urls[s.url],
      'FCP (mean)': s.firstContentfulPaint,
      'LCP (mean)': s.largestContentfulPaint,
      'CLS (mean)': s.cumulativeLayoutShift,
    }))
    .sort((a, b) => a.rank - b.rank);
  printTable(table);
}

run();
