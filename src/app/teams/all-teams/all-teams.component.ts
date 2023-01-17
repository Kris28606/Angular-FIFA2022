import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Continent } from 'src/app/domain/continent';
import { Team } from 'src/app/domain/team';
import { ContinentService } from 'src/app/services/continent.service';
import { PictureService } from 'src/app/services/picture.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-all-teams',
  templateUrl: './all-teams.component.html',
  styleUrls: ['./all-teams.component.css']
})
export class AllTeamsComponent implements OnInit {

  constructor(private teamService: TeamService, private continentService: ContinentService, 
    private pictureService: PictureService) { }

  niz: number[]=[1,2,3,4,5,6,7,9,9,9,9,99,9];
  teams: Team[]=[];
  firstTeams: Team[]=[];
  secondTeams: Team[]=[];
  thirdTeams: Team[]=[];
  dodajForma: boolean=false;
  selectedContinent: Continent=0;
  continents: string[]=[];
  file: any;
  data=new FormData();
  team: Team=new Team();
  trebaNovi: boolean=true;

  ngOnInit(): void {
    this.srediTimove();
    this.continentService.GetContinents().subscribe(data=> {
        for(let i=0;i<7;i++) {
          this.continents[i]=Continent[i];
        }
      },error=> {
        console.log(error.message);
      })
  }


  srediTimove() {
    this.teamService.GetMyTeams().subscribe(data=> {
      this.teams=data;
      console.log(this.teams.length);
      if(this.teams.length==32) {
        this.trebaNovi=false;
      }
      console.log(this.teams);
      let brojac=0;
      for(let team of this.teams) {
        if(brojac<11) {
          this.firstTeams.push(team);
        brojac++;
        } else if(brojac<22) {
          this.secondTeams.push(team);
          brojac++;
        } else {
          this.thirdTeams.push(team);
          brojac++;
        }
      }
      
      

    }, error=> {
      console.log(error.message);
    });
  }


  dodajNovu() {
    if(!this.dodajForma){
      this.dodajForma=true;
      return;
    }
    if(this.dodajForma) {
      for(let i=0;i<7;i++) {
        if(Continent[i].toString()==this.selectedContinent.toString()) {
          this.team.continent=i;
        }
      }
      this.changePicture();
    }
  }

  select(env: any) {
    this.file=env.target.files[0];
    console.log(this.file);
  }

  changePicture() {
      if(this.file!=undefined) {
       this.data.append('file',this.file);
      this.pictureService.uploadPicture(this.data).subscribe(data=> {
        console.log(data);
        this.team.flag="https://localhost:7140/"+data.toString();
        console.log("Upload: "+this.team.flag);
        console.log(this.team);
      this.teamService.AddTeam(this.team).subscribe(data=> {
        this.firstTeams=[];
        this.secondTeams=[];
        this.thirdTeams=[];
        this.srediTimove();
        this.file=undefined;
        this.data=new FormData();
        this.team.name="";
      }, error=> {
        console.log(error.message);
      });
          }, error=> {
            console.log(error.message)
          });
      }
      };
  }
