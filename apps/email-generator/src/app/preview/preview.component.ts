import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.scss',
})
export class PreviewComponent implements AfterViewInit, OnChanges {
  @Input() html = '';

  sanitizedHtml!: SafeHtml;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.updateIframeContent();
  }

  ngOnChanges(): void {
    this.updateIframeContent();
  }

  private updateIframeContent() {
    const iframe: HTMLIFrameElement =
      this.elementRef.nativeElement.querySelector('iframe');
    if (iframe) {
      iframe.srcdoc = this.html as string;
    }
  }
}
