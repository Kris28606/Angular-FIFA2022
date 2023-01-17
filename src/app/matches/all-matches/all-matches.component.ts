import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/domain/group';
import { Match } from 'src/app/domain/match';
import { Team } from 'src/app/domain/team';
import { GroupService } from 'src/app/services/group.service';
import { MatchService } from 'src/app/services/match.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-all-matches',
  templateUrl: './all-matches.component.html',
  styleUrls: ['./all-matches.component.css']
})
export class AllMatchesComponent implements OnInit {

  constructor(private matchService: MatchService, private groupService: GroupService, private teamService: TeamService) { }

  matches: Match[]=[];
  niz: number[]=[1,2,3,4];
  match: Match=new Match();
  dodajForma: boolean=false;
  groups: Group[]=[];
  selectedGroup: Group=new Group();
  selectedTeam1: Team=new Team();
  selectedTeam2: Team=new Team();
  change1: boolean=false;
  change2: boolean=false;
  teams1: Team[]=[];
  teams2: Team[]=[];
  allTeams: Team[]=[];

  ngOnInit(): void {
    this.matchService.GetMatchs().subscribe(data=> {
      this.matches=data;
      console.log(this.matches);
    }, error=> {
      console.log("Ne mogu da ucitam utakmice: "+error.message);
    })
  }


  ucitajTimove(ev: any) {
    this.selectedGroup=ev;
    this.teamService.GetTeamsForGroup(this.selectedGroup.groupId).subscribe(data=> {
      this.allTeams=data;
      this.teams1=data;
      this.promeniTimove1(this.teams1[0]);
      this.promeniTimove2(this.teams2[0]);
    })
  }

  promeniTimove1(ev: any) {
    this.selectedTeam1=ev;
      this.teams2=[];
      for(let i=0;i<this.allTeams.length;i++) {
        if(this.allTeams[i].name!=this.selectedTeam1.name) {
          this.teams2.push(this.allTeams[i]);
        }
      }
  }

  promeniTimove2(ev: any) {
    this.selectedTeam2=ev;
      this.teams1=[];
      for(let i=0;i<this.allTeams.length;i++) {
        if(this.allTeams[i].name!=this.selectedTeam2.name) {
          this.teams1.push(this.allTeams[i]);
        }
    }
  }


  dodajNovu() {
    if(this.dodajForma==false) {
      this.dodajForma=true;
      this.groupService.GetMyGroups().subscribe(data=> {
        this.groups=data;
      }, error=> {
        console.log("Ne mogu da ucitam grupe: "+error.message);
      })
      return;
    } else {
      this.match.team1=this.selectedTeam1;
      this.match.team1.group=this.selectedGroup.name;
      this.match.team2=this.selectedTeam2;
      this.match.team2.group=this.selectedGroup.name;
      
      this.match.status=0;
      this.match.stadium="Stadium 974";
      this.match.group=this.selectedGroup.name;
      console.log(this.match);
      this.matchService.AddMatch(this.match).subscribe(data=> {
        console.log("Sacuvana utakmica!");
        this.matchService.GetMatchs().subscribe(data=> {
          this.matches=data;
        }, error=> {
          console.log("Ne mogu da ucitam utakmice: "+error.message);
        })
      }, error=> {
        console.log("Ne mogu da sacuvam utakmicu: "+error.message);
      })
      this.dodajForma=false;
    }
  }
}
