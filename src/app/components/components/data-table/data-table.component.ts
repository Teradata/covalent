import { Component, ViewChildren, QueryList } from '@angular/core';

import { TdDataTableSortingOrder } from '../../../../platform/data-table';

const NUMBER_FORMAT = (v: {value: number}) => v.value; 
const DECIMAL_FORMAT = (v: {value: number}) => v.value.toFixed(2); 

@Component({
  selector: 'data-table-demo',
  styleUrls: ['data-table.component.scss'],
  templateUrl: 'data-table.component.html',
})
export class DataTableDemoComponent {
  private columns: any[] = [
    { name: 'name',  label: 'Dessert (100g serving)' },
    { name: 'type', label: 'Type' },
    { name: 'calories', label: 'Calories', numeric: true, format: NUMBER_FORMAT },
    { name: 'fat', label: 'Fat (g)', numeric: true, format: DECIMAL_FORMAT },
    { name: 'carbs', label: 'Carbs (g)', numeric: true, format: NUMBER_FORMAT },
    { name: 'protein', label: 'Protein (g)', numeric: true, format: DECIMAL_FORMAT },
    { name: 'sodium', label: 'Sodium (mg)', numeric: true, format: NUMBER_FORMAT },
    { name: 'calcium', label: 'Calcium (%)', numeric: true, format: NUMBER_FORMAT },
    { name: 'iron', label: 'Iron (%)', numeric: true, format: NUMBER_FORMAT },
  ];
  private tooltip: string = 'Here you would explain what this column is.';
  private tooltipColumns: any[] = [
    { name: 'name',  label: 'Dessert (100g serving)', tooltip: this.tooltip },
    { name: 'type', label: 'Type', tooltip: this.tooltip },
    { name: 'calories', label: 'Calories', tooltip: this.tooltip, numeric: true, format: NUMBER_FORMAT },
    { name: 'fat', label: 'Fat (g)', tooltip: this.tooltip, numeric: true, format: DECIMAL_FORMAT },
    { name: 'carbs', label: 'Carbs (g)', tooltip: this.tooltip, numeric: true, format: NUMBER_FORMAT },
    { name: 'protein', label: 'Protein (g)', tooltip: this.tooltip, numeric: true, format: DECIMAL_FORMAT },
    { name: 'sodium', label: 'Sodium (mg)', tooltip: this.tooltip, numeric: true, format: NUMBER_FORMAT },
    { name: 'calcium', label: 'Calcium (%)', tooltip: this.tooltip, numeric: true, format: NUMBER_FORMAT },
    { name: 'iron', label: 'Iron (%)', tooltip: this.tooltip, numeric: true, format: NUMBER_FORMAT },
  ];

  private data: any[] = [
      {
        "name": "Frozen yogurt",
        "type": "Ice cream",
        "calories": { "value": 159.0 },
        "fat": { "value": 6.0 },
        "carbs": { "value": 24.0 },
        "protein": { "value": 4.0 },
        "sodium": { "value": 87.0 },
        "calcium": { "value": 14.0 },
        "iron": { "value": 1.0 }
      }, {
        "name": "Ice cream sandwich",
        "type": "Ice cream",
        "calories": { "value": 237.0 },
        "fat": { "value": 9.0 },
        "carbs": { "value": 37.0 },
        "protein": { "value": 4.3 },
        "sodium": { "value": 129.0 },
        "calcium": { "value": 8.0 },
        "iron": { "value": 1.0 }
      }, {
        "name": "Eclair",
        "type": "Pastry",
        "calories": { "value":  262.0 },
        "fat": { "value": 16.0 },
        "carbs": { "value": 24.0 },
        "protein": { "value":  6.0 },
        "sodium": { "value": 337.0 },
        "calcium": { "value":  6.0 },
        "iron": { "value": 7.0 }
      }, {
        "name": "Cupcake",
        "type": "Pastry",
        "calories": { "value":  305.0 },
        "fat": { "value": 3.7 },
        "carbs": { "value": 67.0 },
        "protein": { "value": 4.3 },
        "sodium": { "value": 413.0 },
        "calcium": { "value": 3.0 },
        "iron": { "value": 8.0 }
      }, {
        "name": "Jelly bean",
        "type": "Candy",
        "calories": { "value":  375.0 },
        "fat": { "value": 0.0 },
        "carbs": { "value": 94.0 },
        "protein": { "value": 0.0 },
        "sodium": { "value": 50.0 },
        "calcium": { "value": 0.0 },
        "iron": { "value": 0.0 }
      }, {
        "name": "Lollipop",
        "type": "Candy",
        "calories": { "value": 392.0 },
        "fat": { "value": 0.2 },
        "carbs": { "value": 98.0 },
        "protein": { "value": 0.0 },
        "sodium": { "value": 38.0 },
        "calcium": { "value": 0.0 },
        "iron": { "value": 2.0 }
      }, {
        "name": "Honeycomb",
        "type": "Other",
        "calories": { "value": 408.0 },
        "fat": { "value": 3.2 },
        "carbs": { "value": 87.0 },
        "protein": { "value": 6.5 },
        "sodium": { "value": 562.0 },
        "calcium": { "value": 0.0 },
        "iron": { "value": 45.0 }
      }, {
        "name": "Donut",
        "type": "Pastry",
        "calories": { "value": 452.0 },
        "fat": { "value": 25.0 },
        "carbs": { "value": 51.0 },
        "protein": { "value": 4.9 },
        "sodium": { "value": 326.0 },
        "calcium": { "value": 2.0 },
        "iron": { "value": 22.0 }
      }, {
        "name": "KitKat",
        "type": "Candy",
        "calories": { "value": 518.0 },
        "fat": { "value": 26.0 },
        "carbs": { "value": 65.0 },
        "protein": { "value": 7.0 },
        "sodium": { "value": 54.0 },
        "calcium": { "value": 12.0 },
        "iron": { "value": 6.0 }
      }
    ];

  private sortBy: string = 'name';
  private sortOrder: string = 'ASC';

  private rowSelection: boolean = false;
  private multiple: boolean = true;

  toggleRowSelection(): void {
    this.rowSelection = !this.rowSelection;
  }

  toggleRowSelectionMultiple(): void {
    this.multiple = !this.multiple;
  }

  toggleSortBy(): void {
    const columns = this.columns.map((c: any) => c.name);
    const idx = columns.indexOf(this.sortBy);
    if (idx < columns.length - 1) {
      this.sortBy = columns[idx + 1];
    } else {
      this.sortBy = columns[0];
    }
  }

  toggleSortOrder(): void {
    this.sortOrder = this.sortOrder === 'ASC' ? 'DESC' : 'ASC';
  }

  sortChanged(changes): void {
    const { column, order } = changes; 

    this.sortBy = column.name;
    this.sortOrder = order == TdDataTableSortingOrder.Ascending ? 'ASC' : 'DESC';
  }
}
