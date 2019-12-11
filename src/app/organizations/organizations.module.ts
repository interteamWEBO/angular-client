import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { OrganizationsListComponent } from "./organizations-list/organizations-list.component";
import { OrganizationsAddComponent } from "./organizations-add/organizations-add.component";
import { OrganizationsEditComponent } from "./organizations-edit/organizations-edit.component";

@NgModule({
  declarations: [
    OrganizationsListComponent,
    OrganizationsAddComponent,
    OrganizationsEditComponent
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule]
})
export class OrganizationsModule {}
