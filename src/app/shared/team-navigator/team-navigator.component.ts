import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamMember } from '../../core/models/team.model';

@Component({
    selector: 'app-team-navigator',
    standalone: true,
    imports: [CommonModule],
    template: `
<section class="full-screen d-flex align-items-center text-white">
    <div class="container">
        <div class="pt-5 pb-5">
            <h2 class="fs-1 text-white pb-5">Other Members</h2>
            <div class="row">
                <div class="col-6 col-sm-4 col-md-4 col-lg-3" *ngFor="let member of otherMembers">
                    <div class="card mb-4 team-card  border-secondary  text-center text-white" style="background-color: transparent;">
                        <img [src]="member.img" [alt]="member.name" class="card-img-top" alt="img-fluid">
                        <div class="card-body border-0 px-1">
                            <h5 class="card-title">
                                <a href="/team/{{member.slug}}" class="link-light fs-6 link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">{{member.alt}}</a>
                            </h5>
                            <p class="card-text small p-0 small">{{member.role}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>  
  `,
    styles: []
})
export class TeamNavigatorComponent {
  @Input() currentMemberId!: string;
  @Input() members: TeamMember[] = [];

  get otherMembers(): TeamMember[] {
    return this.members.filter(member => member.id !== this.currentMemberId);
  }
}