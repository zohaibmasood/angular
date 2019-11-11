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

  }

}
