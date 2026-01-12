import"./icon-BYPYUWym.js";import"./linear-progress-BWOh604G.js";import{t as y}from"./table.content-DXiXegTF.js";import{t as S}from"./table-row-selection.content-tSLjFSBa.js";import{t as f}from"./table-progress-indicator.content-Ct_3biMo.js";/* empty css                           */import"./mwc-icon-BGUO1vKj.js";import"./tslib.es6-C-hQhb2A.js";import"./query-assigned-elements-BJdb4KNY.js";import"./aria-property-BYXgNswj.js";import"./state-CGn7W7VL.js";import"./query-pFbEai1B.js";import"./class-map-LmxYoNzI.js";import"./directive-CvdRHFdJ.js";import"./if-defined-dAx6j6jI.js";import"./style-map-CNNK6hz8.js";const C=`<div class="mdc-data-table" style="display: flex">
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
        <cv-icon
          class="mdc-data-table__pagination-button"
          data-first-page="true"
          disabled
          >first_page
        </cv-icon>
        <cv-icon
          class="mdc-data-table__pagination-button"
          data-prev-page="true"
          disabled
          >chevron_left
        </cv-icon>
        <cv-icon class="mdc-data-table__pagination-button" data-next-page="true"
          >chevron_right</cv-icon
        >
        <cv-icon class="mdc-data-table__pagination-button" data-last-page="true"
          >last_page</cv-icon
        >
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
            <cv-icon
              class="mdc-data-table__sort-icon-button"
              aria-label="Sort by dessert"
              aria-describedby="dessert-status-label"
              >arrow_upward</cv-icon
            >
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
            <cv-icon
              class="mdc-data-table__sort-icon-button"
              aria-label="Sort by carbs"
              aria-describedby="carbs-status-label"
            >
              arrow_upward
            </cv-icon>
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
            <cv-icon
              class="mdc-data-table__sort-icon-button"
              aria-label="Sort by protein"
              aria-describedby="protein-status-label"
            >
              arrow_upward
            </cv-icon>
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
`,G={title:"Components/Data Table",parameters:{}},a=({})=>y,e=({})=>S,t=({})=>C,n=({})=>x,l=({})=>f;var c,d,s;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"({}) => tableContent",...(s=(d=a.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var r,o,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:"({}) => tableRowSelectionContent",...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var _,m,b;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:"({}) => tablePagination",...(b=(m=t.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var p,u,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:"({}) => tableColumnSorting",...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var v,g,w;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:"({}) => tableProgressIndicator",...(w=(g=l.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};const H=["Basic","RowSelection","WithPagination","WithColumnSorting","ProgressIndicator"];export{a as Basic,l as ProgressIndicator,e as RowSelection,n as WithColumnSorting,t as WithPagination,H as __namedExportsOrder,G as default};
