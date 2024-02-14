const a=`<div class="mdc-data-table">
  <div class="mdc-data-table__table-container">
    <table class="mdc-data-table__table" aria-label="Dessert calories">
      <thead>
        <tr class="mdc-data-table__header-row">
          <th
            class="mdc-data-table__header-cell mdc-data-table__header-cell--checkbox"
            role="columnheader"
            scope="col"
          >
            <cv-checkbox aria-label="select row"></cv-checkbox>
          </th>
          <th
            class="mdc-data-table__header-cell"
            role="columnheader"
            scope="col"
          >
            Signal name
          </th>
          <th
            class="mdc-data-table__header-cell"
            role="columnheader"
            scope="col"
          >
            Status
          </th>
          <th
            class="mdc-data-table__header-cell"
            role="columnheader"
            scope="col"
          >
            Severity
          </th>
          <th
            class="mdc-data-table__header-cell"
            role="columnheader"
            scope="col"
          >
            Stage
          </th>
          <th
            class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric"
            role="columnheader"
            scope="col"
          >
            Time
          </th>
          <th
            class="mdc-data-table__header-cell"
            role="columnheader"
            scope="col"
          >
            Roles
          </th>
        </tr>
      </thead>
      <tbody class="mdc-data-table__content">
        <tr data-row-id="u0" class="mdc-data-table__row">
          <td class="mdc-data-table__cell mdc-data-table__cell--checkbox">
            <cv-checkbox aria-label="select row"></cv-checkbox>
          </td>
          <th class="mdc-data-table__cell" scope="row" id="u0">
            Arcus watch slowdown
          </th>
          <td class="mdc-data-table__cell">Online</td>
          <td class="mdc-data-table__cell">Medium</td>
          <td class="mdc-data-table__cell">Triaged</td>
          <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
            0:33
          </td>
          <td class="mdc-data-table__cell">Allison Brie</td>
        </tr>
        <tr
          data-row-id="u1"
          class="mdc-data-table__row mdc-data-table__row--selected"
          aria-selected="true"
        >
          <td class="mdc-data-table__cell mdc-data-table__cell--checkbox">
            <cv-checkbox aria-label="select row" checked></cv-checkbox>
          </td>
          <th class="mdc-data-table__cell" scope="row" id="u1">
            monarch: prod shared ares-managed-features-provider-heavy
          </th>
          <td class="mdc-data-table__cell">Offline</td>
          <td class="mdc-data-table__cell">Huge</td>
          <td class="mdc-data-table__cell">Triaged</td>
          <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
            0:33
          </td>
          <td class="mdc-data-table__cell">Brie Larson</td>
        </tr>
        <tr
          data-row-id="u2"
          class="mdc-data-table__row mdc-data-table__row--selected"
          aria-selected="true"
        >
          <td class="mdc-data-table__cell mdc-data-table__cell--checkbox">
            <cv-checkbox aria-label="select row" checked></cv-checkbox>
          </td>
          <th class="mdc-data-table__cell" scope="row" id="u2">
            monarch: prod shared ares-managed-features-provider-heavy
          </th>
          <td class="mdc-data-table__cell">Online</td>
          <td class="mdc-data-table__cell">Minor</td>
          <td class="mdc-data-table__cell">Not triaged</td>
          <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
            0:33
          </td>
          <td class="mdc-data-table__cell">Jeremy Lake</td>
        </tr>
        <tr data-row-id="u3" class="mdc-data-table__row">
          <td class="mdc-data-table__cell mdc-data-table__cell--checkbox">
            <cv-checkbox aria-label="select row"></cv-checkbox>
          </td>
          <th class="mdc-data-table__cell" scope="row" id="u3">
            Arcus watch slowdown
          </th>
          <td class="mdc-data-table__cell">Online</td>
          <td class="mdc-data-table__cell">Negligible</td>
          <td class="mdc-data-table__cell">Triaged</td>
          <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
            0:33
          </td>
          <td class="mdc-data-table__cell">Angelina Cheng</td>
        </tr>
        <tr data-row-id="u4" class="mdc-data-table__row">
          <td class="mdc-data-table__cell mdc-data-table__cell--checkbox">
            <cv-checkbox aria-label="select row" checked></cv-checkbox>
          </td>
          <th class="mdc-data-table__cell" scope="row" id="u4">
            Arcus watch slowdown
          </th>
          <td class="mdc-data-table__cell">Online</td>
          <td class="mdc-data-table__cell">Negligible</td>
          <td class="mdc-data-table__cell">Triaged</td>
          <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
            0:33
          </td>
          <td class="mdc-data-table__cell">Angelina Cheng</td>
        </tr>
        <tr data-row-id="u5" class="mdc-data-table__row">
          <td class="mdc-data-table__cell mdc-data-table__cell--checkbox">
            <cv-checkbox aria-label="select row"></cv-checkbox>
          </td>
          <th class="mdc-data-table__cell" scope="row" id="u5">
            Arcus watch slowdown
          </th>
          <td class="mdc-data-table__cell">Online</td>
          <td class="mdc-data-table__cell">Negligible</td>
          <td class="mdc-data-table__cell">Triaged</td>
          <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
            0:33
          </td>
          <td class="mdc-data-table__cell">Angelina Cheng</td>
        </tr>
        <tr data-row-id="u6" class="mdc-data-table__row">
          <td class="mdc-data-table__cell mdc-data-table__cell--checkbox">
            <cv-checkbox aria-label="select row"></cv-checkbox>
          </td>
          <th class="mdc-data-table__cell" scope="row" id="u6">
            Arcus watch slowdown
          </th>
          <td class="mdc-data-table__cell">Online</td>
          <td class="mdc-data-table__cell">Negligible</td>
          <td class="mdc-data-table__cell">Triaged</td>
          <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
            0:33
          </td>
          <td class="mdc-data-table__cell">Angelina Cheng</td>
        </tr>
        <tr data-row-id="u7" class="mdc-data-table__row">
          <td class="mdc-data-table__cell mdc-data-table__cell--checkbox">
            <cv-checkbox aria-label="select row"></cv-checkbox>
          </td>
          <th class="mdc-data-table__cell" scope="row" id="u7">
            Arcus watch slowdown
          </th>
          <td class="mdc-data-table__cell">Online</td>
          <td class="mdc-data-table__cell">Negligible</td>
          <td class="mdc-data-table__cell">Triaged</td>
          <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
            0:33
          </td>
          <td class="mdc-data-table__cell">Angelina Cheng</td>
        </tr>
        <tr data-row-id="u8" class="mdc-data-table__row">
          <td class="mdc-data-table__cell mdc-data-table__cell--checkbox">
            <cv-checkbox aria-label="select row"></cv-checkbox>
          </td>
          <th class="mdc-data-table__cell" scope="row" id="u8">
            Arcus watch slowdown
          </th>
          <td class="mdc-data-table__cell">Online</td>
          <td class="mdc-data-table__cell">Negligible</td>
          <td class="mdc-data-table__cell">Triaged</td>
          <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
            0:33
          </td>
          <td class="mdc-data-table__cell">Angelina Cheng</td>
        </tr>
        <tr data-row-id="u9" class="mdc-data-table__row">
          <td class="mdc-data-table__cell mdc-data-table__cell--checkbox">
            <cv-checkbox aria-label="select row"></cv-checkbox>
          </td>
          <th class="mdc-data-table__cell" scope="row" id="u9">
            Arcus watch slowdown
          </th>
          <td class="mdc-data-table__cell">Online</td>
          <td class="mdc-data-table__cell">Negligible</td>
          <td class="mdc-data-table__cell">Triaged</td>
          <td class="mdc-data-table__cell mdc-data-table__cell--numeric">
            0:33
          </td>
          <td class="mdc-data-table__cell">Angelina Cheng</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`;export{a as t};
