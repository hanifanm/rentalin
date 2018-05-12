import { Component, OnInit } from '@angular/core';
import { LoginService } from '../model/login.service';
import { InteractionService, InteractionModel } from '../model/interaction.service';
import { ROLE_SUPERADMIN, ROLE_USER, ROLE_VENDOR } from '../model/const';
import { STATUS_PENDING, STATUS_APPROVED, STATUS_CANCELLED, STATUS_REJECTED } from '../model/const';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent implements OnInit {

  constructor(
    private interactionService : InteractionService,
    private loginService : LoginService
  ) { }

  ngOnInit() {
    this.interactionService.fetch();
  }

  onApproveInteraction(interaction : InteractionModel) {
    this.interactionService.update(interaction.id, STATUS_APPROVED);
    this.interactionService.fetch();
  }

  onRejectInteraction(interaction : InteractionModel) {
    this.interactionService.update(interaction.id, STATUS_REJECTED);
    this.interactionService.fetch();
  }

  onCancelInteraction(interaction : InteractionModel) {
    this.interactionService.update(interaction.id, STATUS_CANCELLED);
    this.interactionService.fetch();
  }

  isCanApprove(interaction : InteractionModel) : boolean {
    return this.loginService.user.level === ROLE_VENDOR && interaction.status === STATUS_PENDING;
  }

  isCanCancel(interaction : InteractionModel) : boolean {
    return this.loginService.user.level === ROLE_USER && interaction.status === STATUS_PENDING;
  }

}
