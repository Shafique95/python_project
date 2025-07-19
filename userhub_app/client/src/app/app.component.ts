import { Component, ViewChild } from '@angular/core';
import { UserListComponent } from './user-list.component';
import { UserCreateFormComponent } from './user-create-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserListComponent, UserCreateFormComponent],
  template: `
    <div style="max-width:600px;margin:40px auto;font-family:sans-serif;">
      <h1>UserHub</h1>
      <app-user-create-form (userCreated)="onUserCreated()"></app-user-create-form>
      <hr />
      <app-user-list #userList></app-user-list>
    </div>
  `,
})
export class AppComponent {
  @ViewChild('userList') userListComp?: UserListComponent;

  onUserCreated() {
    this.userListComp?.reload();
  }
} 