import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'td-layout-card-over',
  styleUrls: ['./layout-card-over.component.scss'],
  templateUrl: './layout-card-over.component.html',
  imports: [CommonModule, MatToolbar, MatCardModule, MatDivider],
})
export class TdLayoutCardOverComponent {
  /**
   * cardTitle?: string
   *
   * Title set in card.
   */
  @Input() cardTitle?: string;

  /**
   * cardSubtitle?: string
   *
   * Subtitle set in card.
   */
  @Input() cardSubtitle?: string;

  /**
   * cardWidth?: string
   *
   * Card flex width in %.
   * Defaults to 70%.
   */
  @Input() cardWidth? = 70;

  /**
   * color?: 'accent' | 'primary' | 'warn'
   *
   * toolbar color option: primary | accent | warn.
   * If [color] is not set, primary is used.
   */
  @Input() color?: 'accent' | 'primary' | 'warn';
}
