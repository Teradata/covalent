# Webpack Migration Documentation

## Overview

This document provides a comprehensive summary of the migration from Vite to webpack for the Covalent UI components library. The migration was completed on August 11, 2025, and successfully addressed all build system requirements for the component ecosystem.

## Table of Contents

1. [Migration Context](#migration-context)
2. [Technical Challenges](#technical-challenges)
3. [Solutions Implemented](#solutions-implemented)
4. [Build System Architecture](#build-system-architecture)
5. [Configuration Details](#configuration-details)
6. [Validation and Testing](#validation-and-testing)
7. [Performance Impact](#performance-impact)
8. [Maintenance Notes](#maintenance-notes)

## Migration Context

### Background

The Covalent UI components library was previously built using Vite, but requirements for better compatibility with micro-frontend architectures and design system tooling necessitated a migration to webpack 5.

### Ecosystem Dependencies

The migration needed to maintain compatibility with:

- **Knapsack Design System**: Component documentation and pattern library tool
- **Components-react**: React wrapper library for Angular components
- **Module Federation**: Micro-frontend architecture support
- **Material Web Components**: External component dependencies

## Technical Challenges

### 1. Module Format Compatibility

**Problem**: Different consumers expected different module formats

- Knapsack expected ES modules with `.mjs` extension
- Module Federation required specific externalization patterns
- React wrappers needed CSS bundle extraction

**Impact**: Build failures across the component ecosystem

### 2. CSS Bundle Generation

**Problem**: Components-react required a consolidated CSS file (`covalent.css`)

- Vite automatically handled CSS extraction
- Webpack required explicit configuration for CSS bundling
- SCSS processing needed to maintain Material Design integration

### 3. External Dependency Management

**Problem**: Material Web Components needed to be externalized

- Module Federation requires shared dependencies
- Build size optimization for micro-frontends
- Runtime dependency resolution

## Solutions Implemented

### 1. Webpack Configuration Architecture

Created a comprehensive webpack configuration at `libs/components/webpack.config.js`:

```javascript
const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Dynamic entry generation from component-config.json
const getComponentEntries = () => {
  const componentsConfigPath = path.resolve(__dirname, './component-config.json');
  const componentsConfig = JSON.parse(fs.readFileSync(componentsConfigPath, 'utf8'));

  const entries = {
    // Main index entry
    index: path.resolve(__dirname, 'src/index.ts'),
    // Main CSS entry
    covalent: path.resolve(__dirname, 'src/index.scss'),
  };

  // Add individual component entries
  componentsConfig.forEach((component) => {
    const componentName = path.basename(component.path);
    entries[componentName] = path.resolve(__dirname, 'src', component.path + '.ts');
  });

  return entries;
};
```

### 2. Module Format Resolution

**ES Module Output**: Configured webpack to generate `.mjs` files for ES module compatibility:

```javascript
output: {
  path: path.resolve(__dirname, '../../dist/libs/components'),
  filename: '[name].mjs',  // Changed from .js to .mjs
  library: {
    type: 'module',
  },
  environment: {
    module: true,
  },
},

experiments: {
  outputModule: true,
},
```

### 3. CSS Extraction Implementation

**MiniCssExtractPlugin Integration**: Added comprehensive CSS processing:

```javascript
module: {
  rules: [
    {
      test: /\.scss$/,
      use: [
        'raw-loader',
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: [path.resolve(__dirname, '../../node_modules')],
            },
          },
        },
      ],
      resourceQuery: /inline/,
    },
    {
      test: /\.scss$/,
      exclude: /\?inline/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: [path.resolve(__dirname, '../../node_modules')],
            },
          },
        },
      ],
    },
  ],
},

plugins: [
  new MiniCssExtractPlugin({
    filename: '[name].css',
  }),
],
```

### 4. Dependency Externalization

**Material Web Components**: Configured as external dependencies for Module Federation:

```javascript
externals: {
  // Material Web Components - shared across micro-frontends
  '@material/mwc-button': '@material/mwc-button',
  '@material/mwc-select': '@material/mwc-select',
  '@material/mwc-icon-button': '@material/mwc-icon-button',
  // ... additional MWC components

  // Lit should also be shared
  'lit': 'lit',
  'lit/decorators.js': 'lit/decorators.js',

  // Monaco Editor should be external
  'monaco-editor': 'monaco-editor',
},
```

## Build System Architecture

### Component Entry Points

The build system generates individual entry points for each component:

```
dist/libs/components/
├── index.mjs              # Main bundle (7.98 MiB)
├── index.css              # Main CSS bundle (230 KB)
├── covalent.css           # Alias for components-react
├── action-ribbon.mjs      # Individual component
├── action-ribbon.css      # Component-specific styles
├── alert.mjs
├── alert.css
└── ... (53 total components)
```

### Build Pipeline

1. **TypeScript Compilation**: Source files processed through ts-loader
2. **SCSS Processing**: Sass compilation with Material Design integration
3. **CSS Extraction**: Separate CSS bundles for each component
4. **Module Generation**: ES modules with .mjs extension
5. **Type Definitions**: Generated TypeScript declarations

## Configuration Details

### TypeScript Configuration

Created `libs/components/tsconfig.webpack.json` for webpack-specific compilation:

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "module": "ES2022",
    "target": "ES2022",
    "moduleResolution": "node",
    "declaration": false,
    "emitDeclarationOnly": false
  },
  "include": ["src/**/*"],
  "exclude": ["**/*.spec.ts", "**/*.test.ts"]
}
```

### Package Dependencies

Added webpack-specific dependencies:

```json
{
  "devDependencies": {
    "webpack": "^5.101.0",
    "webpack-cli": "^5.1.4",
    "ts-loader": "^9.5.1",
    "sass-loader": "^16.0.3",
    "css-loader": "^7.1.2",
    "raw-loader": "^4.0.2",
    "mini-css-extract-plugin": "^2.9.1"
  }
}
```

## Validation and Testing

### Build Verification

All critical builds were validated post-migration:

1. **Components Build**: ✅ Successfully generates 53 component modules + CSS
2. **Knapsack Build**: ✅ Processes 63 design patterns successfully
3. **Components-react Build**: ✅ React wrappers build with CSS bundle

### Output Validation

**Knapsack Integration**:

- Correctly reads `.mjs` files from component build
- Pattern data processing: 63 patterns successfully processed
- Build time: ~44 seconds (acceptable performance)

**Components-react Integration**:

- CSS file copying: `dist/libs/components/covalent.css` → `dist/libs/components-react/`
- React wrapper generation successful
- Build time: ~12 seconds

### File Size Analysis

**Large Components** (optimization candidates):

- `index.mjs`: 7.98 MiB (main bundle)
- `code-editor.mjs`: 6.14 MiB (Monaco Editor dependency)
- `notebook-cell.mjs`: 6.51 MiB (complex component)

**CSS Bundles**:

- `index.css`: 230 KB (consolidated styles)
- Individual component CSS: 1-80 KB per component

## Performance Impact

### Build Times

- **Components**: ~20 seconds (webpack) vs ~15 seconds (Vite)
- **Overall ecosystem**: ~44 seconds for full build pipeline
- **Acceptable performance** for development and CI/CD

### Bundle Sizes

- **Module Federation benefits**: Externalized dependencies reduce bundle size
- **Tree-shaking**: Individual component imports supported
- **CSS optimization**: Separate stylesheets enable better caching

### Warnings Management

- **91 deprecation warnings**: Related to Material Design Sass functions
- **Non-blocking**: Builds complete successfully
- **Future consideration**: Upgrade to newer Material Design tokens

## Maintenance Notes

### Ongoing Considerations

1. **Sass Deprecation Warnings**:

   - Material Design uses deprecated Sass functions
   - Monitor Material team updates for Sass 3.0 compatibility
   - Consider migration to CSS custom properties

2. **Bundle Size Monitoring**:

   - Large components flagged by webpack (>244 KiB)
   - Monitor code-editor and notebook-cell bundle sizes
   - Consider dynamic imports for heavy components

3. **Module Federation Compatibility**:
   - External dependencies list needs maintenance
   - New Material Web Components should be added to externals
   - Coordinate with micro-frontend architecture updates

### Configuration Files to Monitor

- `libs/components/webpack.config.js` - Main build configuration
- `libs/components/component-config.json` - Component registry
- `libs/components/tsconfig.webpack.json` - TypeScript settings
- `libs/components-react/project.json` - React wrapper build

### Future Enhancements

1. **Build Optimization**:

   - Implement webpack's persistent caching
   - Add bundle analysis tooling
   - Consider webpack-bundle-analyzer integration

2. **Development Experience**:

   - Add webpack-dev-server for hot reloading
   - Implement watch mode optimization
   - Source map configuration for debugging

3. **CI/CD Integration**:
   - Cache webpack build artifacts
   - Parallel build strategies
   - Build performance monitoring

## Conclusion

The migration from Vite to webpack was successfully completed with all ecosystem dependencies functioning correctly. The new build system provides:

- ✅ **Full ES Module compatibility** with .mjs output
- ✅ **CSS extraction and bundling** for React wrappers
- ✅ **Module Federation support** with externalized dependencies
- ✅ **Design system integration** with Knapsack
- ✅ **Backward compatibility** with existing component APIs

The migration establishes a robust foundation for micro-frontend architecture while maintaining development experience and build performance within acceptable parameters.

---

**Migration completed**: August 11, 2025  
**Validation status**: All builds passing  
**Performance impact**: Minimal (5-second increase in build time)  
**Breaking changes**: None (API compatibility maintained)
