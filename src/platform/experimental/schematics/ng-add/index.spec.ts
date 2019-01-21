import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import * as path from 'path';

const collectionPath: string = path.join(__dirname, '../collection.json');

describe('schematics-test', () => {
  it('works', () => {
    const runner: SchematicTestRunner = new SchematicTestRunner('schematics', collectionPath);
    const tree: UnitTestTree = runner.runSchematic('schematics-test', {}, Tree.empty());

    expect(tree.files).toEqual([]);
  });
});
