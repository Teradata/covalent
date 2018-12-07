// This file is required by karma.conf.js
import { setupTestEnv } from '../../setupTestEnv';

declare const require: any;

setupTestEnv(require.context('./', true, /\.spec\.ts$/));
