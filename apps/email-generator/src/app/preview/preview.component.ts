import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  inject,
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
  private elementRef = inject(ElementRef);

  @Input() html = '';

  sanitizedHtml!: SafeHtml;

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
