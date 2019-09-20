import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Food } from "src/app/food/food";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-foodedit",
  templateUrl: "./foodedit.component.html",
  styleUrls: ["./foodedit.component.css"]
})
export class FoodeditComponent implements OnInit {
  @Input() food: Food;
  @Output() saveFood: EventEmitter<Food> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  foodForm: FormGroup;

  ngOnInit() {
    this.foodForm = this.fb.group({
      Id: [this.food.id],
      Name: [this.food.name],
      Preis: [this.food.price],
      Kalorien: [this.food.calories]
    });
    console.log(this.food);
  }

  doSave() {
    this.saveFood.emit(this.food);
  }
}
