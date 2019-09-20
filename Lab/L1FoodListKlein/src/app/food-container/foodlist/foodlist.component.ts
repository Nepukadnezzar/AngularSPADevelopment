import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Food } from "src/app/food/food";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-foodlist",
  templateUrl: "./foodlist.component.html",
  styleUrls: ["./foodlist.component.css"]
})
export class FoodlistComponent implements OnInit {
  constructor() {}

  @Input() items: Food[];
  @Output() foodSelected: EventEmitter<Food> = new EventEmitter();

  ngOnInit() {}

  selectFood(f: Food) {
    this.foodSelected.emit(f);
  }
}
