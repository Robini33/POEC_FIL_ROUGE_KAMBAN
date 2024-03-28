import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class SidebarService {
    isExpanded = true;
  
    toggleSidenav() {
      this.isExpanded = !this.isExpanded;
      console.log("toggleSidenav", this.isExpanded);
    }
  
    expandSidenav() {
      this.isExpanded = true;
      console.log("expandSidenav");
    }
  
    collapseSidenav() {
      this.isExpanded = false;
      console.log("collapseSidenav");
    }
  }