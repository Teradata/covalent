const fs = require('fs');
const path = require('path');

// Paths
const componentsJsonPath = path.resolve(
  __dirname,
  '../libs/components/component-config.json'
);
const reactWrappersDir = path.resolve(
  __dirname,
  '../libs/components-react/src'
);
const indexFilePath = path.join(reactWrappersDir, 'index.ts');

// Clear the contents of index.ts file if it exists
if (fs.existsSync(indexFilePath)) {
  fs.writeFileSync(indexFilePath, '', 'utf8'); // Clear or initialize the file
}

// Ensure the React components directory exists
if (!fs.existsSync(reactWrappersDir)) {
  fs.mkdirSync(reactWrappersDir, { recursive: true });
}

// Function to convert a string to PascalCase
const toPascalCase = (str) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w|\s+|-)/g, (match, index) =>
      index === 0 ? match.toUpperCase() : match.toUpperCase()
    )
    .replace(/-+/g, '') // Remove hyphens
    .replace(/\s+/g, ''); // Remove spaces
};

const getEventList = (events) => {
  const content = events
    .map((event) => {
      const key = `on${event
        .split('-')
        .map((word, index) =>
          index === 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join('')}`;
      return `    ${key}: '${event}'`; // Indent each line
    })
    .join(',\n'); // Add newlines between entries

  return `{\n${content},\n  },`; // Wrap with braces and add newlines
};

// Function to generate React wrapper for each component
const generateWrapper = (componentName, tagName, componentPath, events) => {
  const pascalCaseFolderName = toPascalCase(componentPath.split('/')[1]);
  const reactFolderPath = path.join(reactWrappersDir, pascalCaseFolderName);
  const reactFileName = `${componentName}.tsx`;
  const specFilePath = path.join(reactFolderPath, `${componentName}.spec.ts`);
  const reactFilePath = path.join(reactFolderPath, reactFileName);

  // Ensure the React folder for the component exists
  if (!fs.existsSync(reactFolderPath)) {
    fs.mkdirSync(reactFolderPath, { recursive: true });
  }

  // Wrapper content for the React component
  const wrapperContent = `import * as React from 'react';
import { createComponent } from '@lit/react';
import { ${componentName} as ${componentName}Web } from '@covalent/components';
export const ${componentName} = createComponent({
  tagName: '${tagName}',
  elementClass: ${componentName}Web,
  react: React,${events.length ? `\n  events: ${getEventList(events)}` : ''}
});
`;

  // Test file for the React component
  const specContent = `import { ${componentName} } from './${componentName}';

describe('${componentName}', () => {
  it('should work', () => {
    expect(${componentName}).toBeTruthy();
  });
});
`;

  fs.writeFileSync(reactFilePath, wrapperContent, 'utf8');

  fs.writeFileSync(specFilePath, specContent, 'utf8');

  // Add export statement to the index.ts file
  const exportStatement = `export * from './${pascalCaseFolderName}/${componentName}';\n`;
  fs.appendFileSync(indexFilePath, exportStatement);
};

// Read the components JSON file
if (fs.existsSync(componentsJsonPath)) {
  const componentsJson = JSON.parse(
    fs.readFileSync(componentsJsonPath, 'utf8')
  ).sort((a, b) => a.name.localeCompare(b.name));

  componentsJson.forEach((component) => {
    const {
      name: componentName,
      selector: tagName,
      path: componentPath,
      events: events,
    } = component;

    if (componentName && tagName && componentPath) {
      generateWrapper(componentName, tagName, componentPath, events || []);
      console.log(`Generated wrapper for ${componentName}`);
    } else {
      console.log(
        `Invalid component entry in JSON: ${JSON.stringify(component)}`
      );
    }
  });
} else {
  console.error(`Components JSON file not found at ${componentsJsonPath}`);
}

console.log('React wrapper generation complete.');
