import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/domain/group';
import { GroupService } from 'src/app/services/group.service';

@Component({
  selector: 'app-all-groups',
  templateUrl: './all-groups.component.html',
  styleUrls: ['./all-groups.component.css']
})
export class AllGroupsComponent implements OnInit {

  constructor(private groupService: GroupService) { }

  niz: number[]=[1,2,3,4,5,6,7];
  brTimova: number[]=[1,2,3,4];
  groups: Group[]=[];
  brojac=1;

  ngOnInit(): void {
    this.groupService.GetMyGroups().subscribe(data=> {
      this.groups=data;
      for(let i=0;i<this.groups.length;i++) {
        let timovi=this.groups[i].teams.sort((a,b) => {
          if(a.points>b.points) {
            return -1;
          } else if(a.points==b.points){
            return 0;
          } else {
            return 1;
          }
        });
      }
    }, error=> {
      console.log("Ne mogu da preuzmem grupe:  "+error.message);
    });
  }

}
