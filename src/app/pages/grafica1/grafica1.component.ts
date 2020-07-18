import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels: Label[] = ['Download Saless', 'In-Store Saless', 'Mail-Order Saless'];
  public data: MultiDataSet[] = [
    [150, 450, 100],
  ];
  public doughnutChart: string = 'doughnut';


}
