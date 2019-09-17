import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Food } from "./food";

@Injectable({
  providedIn: "root"
})
export class FoodService {
  constructor(private httpClient: HttpClient) {}

  getFoods() {
    return this.httpClient.get<Food[]>("assets/food.json");
  }
}
