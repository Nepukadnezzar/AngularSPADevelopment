import { Component, OnInit } from "@angular/core";
import { FoodService } from "../food/food.service";
import { Food } from "../food/food";

@Component({
  selector: "app-food-container",
  templateUrl: "./food-container.component.html",
  styleUrls: ["./food-container.component.css"]
})
export class FoodContainerComponent implements OnInit {
  constructor(private fs: FoodService) {}

  foods: Food[];
  current: Food;

  ngOnInit() {
    this.fs.getFoods().subscribe(data => {
      console.log("foodData: ", data);
      this.foods = data;
    });
  }

  onFoodSelected(f: Food) {
    this.current = { ...f };
  }

  onFoodSaved(f: Food) {
    let existing: Food = this.foods.find(i => i.id === f.id);
    if (existing != null) {
      Object.assign(existing, f);
    }
  }
}
