#!/bin/bash

# Process SVG files
npx babel-node bin/process-svgs.js

# Create dist directory
npx rimraf dist
mkdir dist

# Build icons.json
npx babel-node bin/build-icons-json.js

# Build SVG sprite
# npx babel-node bin/build-sprite.js

# Create dist/icons directory
npx rimraf dist/icons
mkdir dist/icons

# Build SVG icons
npx babel-node bin/build-svgs.js

# Add Index.js
npx babel-node bin/build-root-files.js

# Create names.txt
# npx babel-node bin/build-svg-names-list.js

# Build JavaScript library
# npx webpack --output-filename pixelspindle.js --mode development
# npx webpack --output-filename pixelspindle.min.js --mode production
