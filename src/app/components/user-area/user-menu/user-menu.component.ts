import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NotifyService } from '../../../services/notify.service';
import { UserService } from '../../../services/user.service';
import { UserStore } from '../../../storage/user-store';

@Component({
  selector: 'app-user-menu',
  imports: [RouterLink, CommonModule],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.css'
})
export class UserMenuComponent {
    public userStore = inject(UserStore);
    public userService = inject(UserService);

    public logout() {
        this.userService.logout();
    }
}
