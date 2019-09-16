import { Component, OnInit } from "@angular/core";
import { Skill } from "../model/skill.model";

@Component({
  selector: "app-skill-container",
  templateUrl: "./skill-container.component.html",
  styleUrls: ["./skill-container.component.css"]
})
export class SkillContainerComponent implements OnInit {
  constructor() {}

  skills: Skill[] = [
    { id: 1, name: "Typescript", hours: 3, completed: false },
    { id: 2, name: "Node", hours: 5, completed: false },
    { id: 3, name: "ng Basics", hours: 30, completed: false }
  ];

  ngOnInit() {}

  selectSkill(item: Skill) {
    console.log(`You clicked ${item.name}`);
  }
}
