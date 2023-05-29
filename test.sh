#!/bin/bash
echo "Compiling Typescript"
npx tsc run_ts.ts
echo "Running Typescript script"
node run_ts.js
echo "Running Javascript script"
node run_js.js
echo "Running Tests"
npm test