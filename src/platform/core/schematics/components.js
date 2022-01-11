"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.covalentPackages = exports.components = exports.MarkdownNavigator = exports.CodeEditor = exports.TextEditor = exports.Echarts = exports.FlavoredMarkdown = exports.Markdown = exports.Highlight = exports.Http = exports.DynamicForms = void 0;
class DynamicForms {
    enabled(options) {
        return options.dynamicForms;
    }
    dependency() {
        return '@covalent/dynamic-forms';
    }
}
exports.DynamicForms = DynamicForms;
class Http {
    enabled(options) {
        return options.http;
    }
    dependency() {
        return '@covalent/http';
    }
}
exports.Http = Http;
class Highlight {
    enabled(options) {
        return options.highlight;
    }
    dependency() {
        return '@covalent/highlight';
    }
}
exports.Highlight = Highlight;
class Markdown {
    enabled(options) {
        return options.markdown;
    }
    dependency() {
        return '@covalent/markdown';
    }
}
exports.Markdown = Markdown;
class FlavoredMarkdown {
    enabled(options) {
        return options.flavoredMarkdown;
    }
    dependency() {
        return '@covalent/flavored-markdown';
    }
}
exports.FlavoredMarkdown = FlavoredMarkdown;
class Echarts {
    enabled(options) {
        return options.echarts;
    }
    dependency() {
        return '@covalent/echarts';
    }
}
exports.Echarts = Echarts;
class TextEditor {
    enabled(options) {
        return options.textEditor;
    }
    dependency() {
        return '@covalent/text-editor';
    }
}
exports.TextEditor = TextEditor;
class CodeEditor {
    enabled(options) {
        return options.codeEditor;
    }
    dependency() {
        return '@covalent/code-editor';
    }
}
exports.CodeEditor = CodeEditor;
class MarkdownNavigator {
    enabled(options) {
        return options.markdownNavigator;
    }
    dependency() {
        return '@covalent/markdown-navigator';
    }
}
exports.MarkdownNavigator = MarkdownNavigator;
exports.components = [
    new DynamicForms(),
    new Http(),
    new Highlight(),
    new Markdown(),
    new FlavoredMarkdown(),
    new Echarts(),
    new TextEditor(),
    new CodeEditor(),
    new MarkdownNavigator(),
];
exports.covalentPackages = exports.components.map((c) => c.dependency());
//# sourceMappingURL=components.js.map