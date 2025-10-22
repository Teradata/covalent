// import { ListItemBase } from '@material/mwc-list/mwc-list-item-base';
// import { css, html } from 'lit';
// import { property } from 'lit/decorators';

// export class CovalentListItemBase extends ListItemBase {
//   @property({ type: Boolean, reflect: true })
//   threeline = false;

//   @property({ type: Boolean, reflect: true })
//   twoline = false;

//   @property({ type: String })
//   graphic: 'avatar' | 'icon' | null = null;

//   // ... (agrega aquí otras propiedades que necesites pasar, como 'disabled')

//   static styles = css`
//     :host {
//       display: block;
//       width: 100%;
//     }

//     /* Contenedor para que el conjunto parezca un solo item */
//     .container {
//       width: 100%;
//     }

//     /* Estilos para la tercera línea que añadimos por fuera */
//     ::slotted([slot='threeline']) {
//       display: block;
//       font-size: 0.875rem;
//       line-height: 1.25rem;
//       /* Ajusta el padding para que se alinee con el texto del mwc-list-item */
//       padding: 0px 16px 12px 16px;
//       color: var(--mdc-theme-text-secondary-on-surface, rgba(0, 0, 0, 0.54));
//     }
//   `;

//   render() {
//     return html`
//       <div class="container">
//         <!-- Usamos el componente mwc-list-item original -->
//         <mwc-list-item
//           .twoline=${this.twoline || this.threeline}
//           .graphic=${this.graphic}
//         >
//           <!-- Pasamos los slots al componente interno -->
//           <slot></slot>
//           <slot name="secondary" slot="secondary"></slot>
//           <slot name="graphic" slot="graphic"></slot>
//           <slot name="meta" slot="meta"></slot>
//         </mwc-list-item>

//         <!-- Añadimos nuestro slot para la tercera línea por fuera -->
//         ${this.threeline ? html`<slot name="threeline"></slot>` : ''}
//       </div>
//     `;
//   }
// }
