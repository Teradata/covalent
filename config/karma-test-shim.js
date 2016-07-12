/*global jasmine, __karma__, window*/
Error.stackTraceLimit = Infinity;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;

__karma__.loaded = function () {
};

var distPath = '/base/dist/';
var appPath = distPath + 'app/';

function isJsFile(path) {
  return path.slice(-3) == '.js';
}

function isSpecFile(path) {
  return path.slice(-8) == '.spec.js';
}

function isAppFile(path) {
  return isJsFile(path) && (path.substr(0, appPath.length) == appPath);
}

var allSpecFiles = Object.keys(window.__karma__.files)
  .filter(isSpecFile)
  .filter(isAppFile);

// Load our SystemJS configuration.
System.config({
  baseURL: distPath
});

System.import('system-config.js').then(function() {
  // Load and configure the TestComponentBuilder.
  return Promise.all([
    System.import('@angular/core/testing'),
    System.import('@angular/platform-browser-dynamic/testing'),
    System.import('@angular/router'),
    System.import('@angular/http'),
    System.import('@angular/forms'),
    System.import('@angular2-material/icon')
  ]).then(function (providers) {
    var testing = providers[0];
    var testingBrowser = providers[1];
    var testingRouter = providers[2];
    var testingHttp = providers[3];
    var testingForms = providers[4];
    var testingIcon = providers[5];
    testing.setBaseTestProviders(testingBrowser.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
      testingBrowser.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
      );
    testing.beforeEachProviders(function(){
      return [
        testingRouter.ROUTER_DIRECTIVES,
        testingRouter.RouterOutletMap,
        testingHttp.HTTP_PROVIDERS,
        testingForms.disableDeprecatedForms(),
        testingForms.provideForms(),
        testingIcon.MdIconRegistry
      ];
    });
  });
}).then(function() {
  // Finally, load all spec files.
  // This will run the tests directly.
  return Promise.all(
    allSpecFiles.map(function (moduleName) {
      return System.import(moduleName);
    }));
}).then(__karma__.start, __karma__.error);