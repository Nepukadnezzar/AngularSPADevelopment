import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { Component, OnInit } from "@angular/core";
import { BehaviorSubject, combineLatest, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { DemoService } from "src/app/demos/demo.service";
import { DemoItem } from "../../demo-item.model";

@Component({
  selector: "app-demos-admin",
  templateUrl: "./demo-admin.component.html",
  styleUrls: ["./demo-admin.component.scss"]
})
export class DemoAdminComponent implements OnInit {
  constructor(private ds: DemoService) {}

  //Data Stream
  demosData$: Observable<DemoItem[]> = this.ds.getItems();

  //Action Stream
  filter: string;
  private filterSubject = new BehaviorSubject<string>("");
  filter$ = this.filterSubject.asObservable();

  //Stream to bind the view to
  demos$ = combineLatest([this.demosData$, this.filter$]).pipe(
    map(([demos, filter]) => {
      return filter != ""
        ? demos.filter(d =>
            d.title.toLowerCase().includes(filter.toLowerCase())
          )
        : demos;
    })
  );

  ngOnInit() {}

  handleFilter() {
    this.filterSubject.next(this.filter);
  }

  drop(event: CdkDragDrop<DemoItem[]>) {
    this.demos$.subscribe(arr => {
      moveItemInArray(arr, event.previousIndex, event.currentIndex);
      this.changeSortOrder(arr);
    });
  }

  changeSortOrder(arr: DemoItem[]) {
    let idx = 0;
    arr.forEach(item => {
      item.sortOrder = idx;
      console.log("new sort order:", item);
      idx++;
    });
  }

  deleteItem(item: DemoItem) {
    console.log("deleting item", item);
  }

  changeVisibility(item: DemoItem) {
    console.log("change visibility", item);
  }
}
