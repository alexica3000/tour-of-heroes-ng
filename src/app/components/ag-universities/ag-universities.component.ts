import {Component, OnInit, ViewChild} from '@angular/core';
import {CellClickedEvent, ColDef, GridReadyEvent} from "ag-grid-community";
import {Observable, tap} from "rxjs";
import {AgGridAngular} from "ag-grid-angular";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-ag-universities',
  templateUrl: './ag-universities.component.html',
  styleUrls: ['./ag-universities.component.css']
})
export class AgUniversitiesComponent implements OnInit {
  private agDataUrl = 'http://universities.hipolabs.com/search?country=';

  public columnDefs: ColDef[] = [
    {headerName: 'ID', valueGetter: 'node.id'},
    {field: 'country', headerName: 'Country'},
    {field: 'alpha_two_code', headerName: 'Code'},
    {field: 'state-province', headerName: 'State'},
    {field: 'name'},
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

    params.api.sizeColumnsToFit();
  }

  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }
}
