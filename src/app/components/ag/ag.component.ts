import {Component, OnInit, ViewChild} from '@angular/core';
import {CellClickedEvent, ColDef, GridReadyEvent} from "ag-grid-community";
import {Observable, tap} from "rxjs";
import {AgGridAngular} from "ag-grid-angular";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-ag',
  templateUrl: './ag.component.html',
  styleUrls: ['./ag.component.css']
})
export class AgComponent implements OnInit {
  private agDataUrl = 'https://www.ag-grid.com/example-assets/row-data.json';

  public columnDefs: ColDef[] = [
    {field: 'make'},
    {field: 'model'},
    {field: 'price'},
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  public rowData$!: Observable<any[]>;

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {}

  onGridReady(params: GridReadyEvent): void {
    this.rowData$ = this.http.get<any[]>(this.agDataUrl)
      .pipe(
        tap(_ => console.log('fetched ag data')),
      );
  }

  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }
}
