import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../_models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';


@Component({
  selector: 'app-members-card',
  templateUrl: './members-card.component.html',
  styleUrls: ['./members-card.component.css']
})
export class MembersCardComponent implements OnInit {
  @Input() user: User;

  constructor(private userService: UserService, private alertify: AlertifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {

  }

}
