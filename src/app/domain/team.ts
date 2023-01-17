import { Continent } from "./continent";

export class Team {
    teamId: number=0;
    name: string="";
    continent!: Continent;
    played: number=0;
    won: number=0;
    lost: number=0;
    drawn: number=0;
    goalDifference: number=0;
    pass: boolean=false;
    points: number=0;
    flag: string="";
    group: string="";
}
