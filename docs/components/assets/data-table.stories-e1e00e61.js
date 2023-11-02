import{t as y}from"./table.content-6c0ad423.js";import{t as S}from"./table-row-selection.content-2dc6f2e9.js";import{t as f}from"./table-progress-indicator.content-0a2fcc9f.js";const C=`<div class="mdc-data-table" style="display: flex">
  <div class="mdc-data-table__table-container">
    <table class="mdc-data-table__table" aria-label="Dessert calories">
      <thead>
        <tr class="mdc-data-table__header-row">
          <th
            class="mdc-data-table__header-cell"
            role="columnheader"
            scope="col"
          >
            Dessert
          </th>
          <th
            class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric"
            role="columnheader"
            scope="col"
          >
            Carbs (g)
          </th>
          <th
            class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric"
            role="columnheader"
            scope="col"
          >
            Protein (g)
          </th>
          <th
            class="mdc-data-table__header-cell"
            role="columnheader"
            scope="col"
          >
            Comments
          </th>
        </tr>
      </thead>
      <tbody class="mdc-data-table__content">
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell" scope="row">Frozen yogurt</th>
          <td class="mdc-data-table__cell mdc-data-table__cell--numeric">24</td>
          <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
            4.0
          </td>
          <td class="mdc-data-table__cell">Super tasty</td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell" scope="row">Ice cream sandwich</th>
          <td class="mdc-data-table__cell mdc-data-table__cell--numeric">37</td>
          <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
            4.33333333333
          </td>
          <td class="mdc-data-table__cell">I like ice cream more</td>
        </tr>
        <tr class="mdc-data-table__row">
          <th class="mdc-data-table__cell" scope="row">Eclair</th>
          <td class="mdc-data-table__cell mdc-data-table__cell--numeric">24</td>
          <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
            6.0
          </td>
          <td class="mdc-data-table__cell">New filing flavor</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="mdc-data-table__pagination">
    <div class="mdc-data-table__pagination-trailing">
      <div class="mdc-data-table__pagination-rows-per-page">
        <div class="mdc-data-table__pagination-rows-per-page-label">
          Rows per page
        </div>

        <div
          class="mdc-select mdc-select--outlined mdc-select--no-label mdc-data-table__pagination-rows-per-page-select"
        >
          <div
            class="mdc-select__anchor"
            role="button"
            aria-haspopup="listbox"
            aria-labelledby="demo-pagination-select"
            tabindex="0"
          >
            <span class="mdc-select__selected-text-container">
              <span
                id="demo-pagination-select"
                class="mdc-select__selected-text"
                >10</span
              >
            </span>
            <span class="mdc-select__dropdown-icon">
              <svg
                class="mdc-select__dropdown-icon-graphic"
                viewBox="7 10 10 5"
              >
                <polygon
                  class="mdc-select__dropdown-icon-inactive"
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 10 12 15 17 10"
                ></polygon>
                <polygon
                  class="mdc-select__dropdown-icon-active"
                  stroke="none"
                  fill-rule="evenodd"
                  points="7 15 12 10 17 15"
                ></polygon>
              </svg>
            </span>
            <span class="mdc-notched-outline mdc-notched-outline--notched">
              <span class="mdc-notched-outline__leading"></span>
              <span class="mdc-notched-outline__trailing"></span>
            </span>
          </div>
        </div>
      </div>

      <div class="mdc-data-table__pagination-navigation">
        <div class="mdc-data-table__pagination-total">1‑10 of 100</div>
        <button
          class="mdc-icon-button material-icons mdc-data-table__pagination-button"
          data-first-page="true"
          disabled
        >
          <div class="mdc-button__icon">first_page</div>
        </button>
        <button
          class="mdc-icon-button material-icons mdc-data-table__pagination-button"
          data-prev-page="true"
          disabled
        >
          <div class="mdc-button__icon">chevron_left</div>
        </button>
        <button
          class="mdc-icon-button material-icons mdc-data-table__pagination-button"
          data-next-page="true"
        >
          <div class="mdc-button__icon">chevron_right</div>
        </button>
        <button
          class="mdc-icon-button material-icons mdc-data-table__pagination-button"
          data-last-page="true"
        >
          <div class="mdc-button__icon">last_page</div>
        </button>
      </div>
    </div>
  </div>
</div>
`,x=`<div class="mdc-data-table" style="display: flex">
  <table class="mdc-data-table__table" aria-label="Dessert calories">
    <thead>
      <tr class="mdc-data-table__header-row">
        <th
          class="mdc-data-table__header-cell mdc-data-table__header-cell--with-sort"
          role="columnheader"
          scope="col"
          aria-sort="none"
          data-column-id="dessert"
        >
          <div class="mdc-data-table__header-cell-wrapper">
            <div class="mdc-data-table__header-cell-label">Dessert</div>
            <button
              class="mdc-icon-button material-icons mdc-data-table__sort-icon-button"
              aria-label="Sort by dessert"
              aria-describedby="dessert-status-label"
            >
              arrow_upward
            </button>
            <div
              class="mdc-data-table__sort-status-label"
              aria-hidden="true"
              id="dessert-status-label"
            ></div>
          </div>
        </th>
        <th
          class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric mdc-data-table__header-cell--with-sort mdc-data-table__header-cell--sorted"
          role="columnheader"
          scope="col"
          aria-sort="ascending"
          data-column-id="carbs"
        >
          <div class="mdc-data-table__header-cell-wrapper">
            <button
              class="mdc-icon-button material-icons mdc-data-table__sort-icon-button"
              aria-label="Sort by carbs"
              aria-describedby="carbs-status-label"
            >
              arrow_upward
            </button>
            <div class="mdc-data-table__header-cell-label">Carbs (g)</div>
            <div
              class="mdc-data-table__sort-status-label"
              aria-hidden="true"
              id="carbs-status-label"
            ></div>
          </div>
        </th>
        <th
          class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric mdc-data-table__header-cell--with-sort"
          role="columnheader"
          scope="col"
          aria-sort="none"
          data-column-id="protein"
        >
          <div class="mdc-data-table__header-cell-wrapper">
            <button
              class="mdc-icon-button material-icons mdc-data-table__sort-icon-button"
              aria-label="Sort by protein"
              aria-describedby="protein-status-label"
            >
              arrow_upward
            </button>
            <div class="mdc-data-table__header-cell-label">Protein (g)</div>
            <div
              class="mdc-data-table__sort-status-label"
              aria-hidden="true"
              id="protein-status-label"
            ></div>
          </div>
        </th>
        <th
          class="mdc-data-table__header-cell"
          role="columnheader"
          scope="col"
          data-column-id="comments"
        >
          Comments
        </th>
      </tr>
    </thead>
    <tbody class="mdc-data-table__content">
      <tr class="mdc-data-table__row">
        <td class="mdc-data-table__cell">Frozen yogurt</td>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">24</td>
        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">4.0</td>
        <td class="mdc-data-table__cell">Super tasty</td>
      </tr>
    </tbody>
  </table>
</div>
`;const R={title:"Components/Data Table",parameters:{}},a=({})=>y,t=({})=>S,e=({})=>C,n=({})=>x,l=({})=>f;var c,d,s;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"({}) => tableContent",...(s=(d=a.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var o,r,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:"({}) => tableRowSelectionContent",...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var _,m,b;e.parameters={...e.parameters,docs:{...(_=e.parameters)==null?void 0:_.docs,source:{originalSource:"({}) => tablePagination",...(b=(m=e.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var p,u,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:"({}) => tableColumnSorting",...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,v,w;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:"({}) => tableProgressIndicator",...(w=(v=l.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const W=["Basic","RowSelection","WithPagination","WithColumnSorting","ProgressIndicator"];export{a as Basic,l as ProgressIndicator,t as RowSelection,n as WithColumnSorting,e as WithPagination,W as __namedExportsOrder,R as default};
//# sourceMappingURL=data-table.stories-e1e00e61.js.map
