import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Food } from "src/app/food/food";

@Component({
  selector: "app-foodedit",
  templateUrl: "./foodedit.component.html",
  styleUrls: ["./foodedit.component.css"]
})
export class FoodeditComponent implements OnInit {
  @Input() food: Food;
  @Output() saveFood: EventEmitter<Food> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  doSave() {
    this.saveFood.emit(this.food);
  }
}
