import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BarChartService } from 'src/app/services/bar-chart.service';

@Component({
  selector: 'app-bar-chart-page',
  templateUrl: './bar-chart-page.component.html',
  styleUrls: ['./bar-chart-page.component.scss']
})
export class BarChartPageComponent implements OnInit {
  public data$!: Observable<Array<any>>;

  constructor(private barChartService: BarChartService) { }

  ngOnInit(): void {
    this.data$ = this.barChartService.getData();
  }

}
