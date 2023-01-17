import { Data } from "@angular/router";
import { MatchStatus } from "./match-status";
import { Team } from "./team";

export class Match {
    matchId: number=0;
    team1!: Team;
    team2!: Team;
    team1Goals: number=0;
    team2Goals: number=0;
    dateTime!: Date;
    status: MatchStatus=0;
    group: String="";
    stadium: String="";
}
