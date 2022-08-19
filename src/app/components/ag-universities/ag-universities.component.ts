import {Component, OnInit, ViewChild} from '@angular/core';
import {CellClickedEvent, ColDef, GridOptions, GridReadyEvent} from "ag-grid-community";
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
  private alignedGrids: GridOptions[] = [];

  public columnDefs: ColDef[] = [
    {headerName: 'ID', valueGetter: 'node.id', width: 50},
    {field: 'country', headerName: 'Country', width: 200},
    {field: 'alpha_two_code', headerName: 'Code', width: 200},
    {field: 'state-province', headerName: 'State', width: 400},
    {field: 'name', width: 1000},
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  firstGridOptions: GridOptions = {
    suppressCellSelection: true,
    alignedGrids: this.alignedGrids,
    enableCellTextSelection: true,
  };

  secondGridOptions: GridOptions = {
    suppressCellSelection: true,
    alignedGrids: this.alignedGrids,
    enableCellTextSelection: true,
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

    this.setupGrid();
  }

  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }

  private setupGrid(): void {
    this.firstGridOptions.alignedGrids!.push(this.secondGridOptions);
    this.secondGridOptions.alignedGrids!.push(this.firstGridOptions);
  }
}
