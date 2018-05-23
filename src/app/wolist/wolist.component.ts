import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Services } from '@angular/core/src/view';
import { Http, Headers } from '@angular/http';
import { QueryApiService } from '../services/query-data.service';
import { MatTableDataSource, MatPaginator, PageEvent, MatSort, Sort, MatPaginatorIntl } from '@angular/material';
import { Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { AlertService } from '../services/alert/alert.service';
import { UpperCasePipe } from '@angular/common';


@Component({
  selector: 'app-wolist',
  templateUrl: './wolist.component.html',
  styleUrls: ['./wolist.component.css']
})
export class WolistComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('sortTable') sortTable: MatSort;
  @ViewChild('filter') filter: ElementRef;
  wolistDataSource = new MatTableDataSource<any>();

  currentPage: PageEvent;
  currentSort: Sort;
  currentFilterData: string | undefined;
  totalCount: number;

  constructor(
    private queryApiService: QueryApiService,
    private http: Http, private matPaginatorIntl: MatPaginatorIntl,
    private alertservice: AlertService,

  ) { }

  ngOnInit() {

    this.currentPage = {
      pageIndex: 0,
      pageSize: 9,
      length: null
    };
    this.currentSort = {
      active: '',
      direction: ''
    };
    this.getData(this.currentPage.pageIndex, this.currentPage.pageSize + 1);
    // 分頁切換時，重新取得資料
    this.paginator.page.subscribe((page: PageEvent) => {
      this.getData(page.pageIndex, page.pageSize);
    });
    /*
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe(() => {
        this.currentFilterData = (this.filter.nativeElement as HTMLInputElement).value;
        this.getData(this.currentPage.pageIndex, this.currentPage.pageSize + 1);
        // console.log('init currentFilterData=' + (this.filter.nativeElement as HTMLInputElement).value);
        // this.wolistDataSource.filter = (this.filter.nativeElement as HTMLInputElement).value;
      });
    */
  }

  getData(pageIndex, pageSize) {
    // console.log('init currentFilterData=' + this.currentFilterData);
    this.queryApiService.getQueryResult(pageIndex, pageSize, this.currentFilterData, this.currentSort).subscribe(
      (data: any) => {
        try {

          let resobj = JSON.parse(data._body);
          if (resobj.member != undefined) {
            console.log('data===>' + resobj.member);
            this.totalCount = resobj.responseInfo.totalCount;
            this.wolistDataSource.data = resobj.member;
            // 設定使用前端資料排序
            this.wolistDataSource.sort = this.sortTable;
            // this.wolistDataSource.paginator = this.paginator;
          } else {
            //
            let jsonerror = JSON.parse(data);
            this.alertservice.error('錯誤訊息:' + jsonerror.error + '(error code:' + data.status + ')');
          }
        }
        catch (error) {
          let jsonerror = JSON.parse(data);
          this.alertservice.error('錯誤訊息:' + jsonerror.error + '(error code:' + data.status + ')');
        }
      });
  }
  changeSort(sortInfo: Sort) {
    this.currentSort = sortInfo;
    console.log('currentSort.active==>' + this.currentSort.active);
    this.getData(this.currentPage.pageIndex, this.currentPage.pageSize + 1);
  }

}
