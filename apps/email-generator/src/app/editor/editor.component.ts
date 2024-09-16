import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CovalentCodeEditorModule } from '@covalent/code-editor';
import { PreviewComponent } from '../preview/preview.component';
import { editor } from 'monaco-editor';
import { getHtmlTemplate } from '@covalent/email-templates';
import * as prettier from 'prettier';
import parserHtml from 'prettier/parser-html'; // Use 'html' parser while working with MJML

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [CommonModule, CovalentCodeEditorModule, PreviewComponent],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss',
})
export class EditorComponent {
  @Input() mjml = '';
  @Input() value = '';

  editorInstance!: editor.IStandaloneCodeEditor;
  htmlContent = '';

  handleCopyClick(type = ''): void {
    const value = this.editorInstance.getValue();
    if (value) {
      const content = type === 'mjml' ? value : getHtmlTemplate(value);
      navigator.clipboard.writeText(content).then(
        () => {
          console.log('Copying to clipboard was successful!');
        },
        (err) => {
          console.error('Could not copy text: ', err);
        }
      );
    }
  }

  handleEditorInitialisation(
    editorInstance: editor.IStandaloneCodeEditor
  ): void {
    this.editorInstance = editorInstance;
    this.editorInstance?.setValue(this.value);
  }

  handleValueChange(): void {
    if (this.editorInstance) {
      this.htmlContent = getHtmlTemplate(this.editorInstance.getValue());
    }
  }

  formatCode() {
    if (this.editorInstance) {
      const unformattedCode = this.editorInstance.getValue();
      try {
        const formattedCode = prettier.format(unformattedCode, {
          parser: 'html', // Use 'html' parser for MJML
          plugins: [parserHtml],
        });
        this.editorInstance.setValue(formattedCode);
      } catch (error) {
        console.error('Formatting error:', error);
      }
    }
  }
}
