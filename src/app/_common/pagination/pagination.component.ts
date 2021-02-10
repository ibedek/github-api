import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { PageEventModel } from './page-event.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent implements OnChanges {
  @Input() totalResults = 0;
  @Input() pageSize = 10;
  @Input() currentPage = 1;
  @Input() rowsPerPageOptions: number[] = [10];

  @Output()
  pageEvent: EventEmitter<PageEventModel> = new EventEmitter<PageEventModel>();

  public showPagination = false;

  public totalPages = 0;

  ngOnChanges(): void {
    this.totalPages = Math.ceil(this.totalResults / this.pageSize);

    this.showPagination =
      this.totalResults >= Math.min(...this.rowsPerPageOptions);
  }

  pageChange(page: number): void {
    this.pageEvent.emit({ page, pageSize: this.pageSize });
  }
}
