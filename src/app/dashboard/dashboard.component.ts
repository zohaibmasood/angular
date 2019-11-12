import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
Designation: string;
Username: string;
NoOfTeamMembers: number;
TotalCostOfAllProjects: number;
PendingTasks: number;
UpcomingProjects: number;
ProjectCost: number;

CurrentExpenditure: number;
AvailableFunds: number;
Clients: string[];
Projects: string[];
Years: number[] =[];
TeamMembersSummary = [];
TeamMembers = [];

  ngOnInit() {
    this.Designation = "Team Manager";
    this.Username = "Zohaib Masood";
    this.NoOfTeamMembers = 10;
    this.TotalCostOfAllProjects = 2500000;
    this.PendingTasks = 2;
    this.UpcomingProjects = 1;
    this.ProjectCost = 1000000;
    this.CurrentExpenditure = 125000;
    this.AvailableFunds = 875000;
    this.Clients = [
      "ABC Solutions", "DEF industries", "GHI Groups"
    ];
    this.Projects = [
      "Project A", "Project B", "Project C", "Project D"
    ];
    for(var i = 2019;i >= 2010; i--){
      this.Years.push(i);
    }
    this.TeamMembersSummary = [
      { Region: "East", TeamMembersCount: 20, TemporarilyUnavailableMembers: 4 },
      { Region: "West", TeamMembersCount: 15, TemporarilyUnavailableMembers: 8 },
      { Region: "South", TeamMembersCount: 17, TemporarilyUnavailableMembers: 1 },
      { Region: "North", TeamMembersCount: 15, TemporarilyUnavailableMembers: 6 }
    ];
this.TeamMembers = [
      {
        Region: "East", Members: [
          { ID: 1, Name: "Ford", Status: "Available" },
          { ID: 2, Name: "Miller", Status: "Available" },
          { ID: 3, Name: "Jones", Status: "Busy" },
          { ID: 4, Name: "James", Status: "Busy" }
        ]
      },
      {
        Region: "West", Members: [
          { ID: 5, Name: "Anna", Status: "Available" },
          { ID: 6, Name: "Arun", Status: "Available" },
          { ID: 7, Name: "Varun", Status: "Busy" },
          { ID: 8, Name: "Jasmine", Status: "Busy" }
        ]
      },
      {
        Region: "South", Members: [
          { ID: 9, Name: "Krishna", Status: "Available" },
          { ID: 10, Name: "Mohan", Status: "Available" },
          { ID: 11, Name: "Raju", Status: "Busy" },
          { ID: 12, Name: "Farooq", Status: "Busy" }
        ]
      },
      {
        Region: "North", Members: [
          { ID: 13, Name: "Jacob", Status: "Available" },
          { ID: 14, Name: "Smith", Status: "Available" },
          { ID: 15, Name: "Jones", Status: "Busy" },
          { ID: 16, Name: "James", Status: "Busy" }
        ]
      }
    ];
  }
}