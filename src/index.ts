import axios from "axios";
import HTTPHeaders from "./util/HTTPHeaders";
<<<<<<< 84eb8c74041e39137e41f1c5c9f712a7593bf953
=======
import HttpsProxy from "./util/HttpsProxy";
import {
  Season,
  Region,
  League,
  EventLiveStream,
  Event,
  Match,
  MatchDetails,
  MatchParticipant,
  Ranking,
  Insights,
  Alliance,
  Media,
  AwardRecipient,
  EventParticipant,
  Team,
  WebAnnouncement,
  LeagueDiv
} from "./models";
import { ISerializable } from "./models/ISerializable";
>>>>>>> Add all GET endpoints

const api_endpoint = "https://theorangealliance.com/api";

class API {
  private _api_key: string;
  private _app_name: string;

  constructor(api_key: string, application_name: string) {
    this._api_key = api_key;
    this._app_name = application_name;
  }

  headers(): HTTPHeaders {
    return {
      "Content-Type": "application/json",
      "X-TOA-Key": this._api_key,
      "X-Application-Origin": this._app_name
    };
  }

  async fetch<T>(url: string): Promise<T> {
    if (url.charAt(0) !== "/") {
      // If there is no leading slash, add one
      url = "/" + url;
    }

    return await axios.get(api_endpoint + url, { headers: this.headers() });
  }

  async getAPI(): Promise<string> {
    return await this.fetch<string>("/");
  }
<<<<<<< 84eb8c74041e39137e41f1c5c9f712a7593bf953
=======
  async getEventMatchDetails(eventKey: string): Promise<MatchDetails[]> {
    return this.arrToObj(
      MatchDetails,
      await this.fetch(`/event/${eventKey}/matches/details`)
    );
  }
  async getEventMatchParticipants(
    eventKey: string
  ): Promise<MatchParticipant[]> {
    return this.arrToObj(
      MatchParticipant,
      await this.fetch(`/event/${eventKey}/matches/participants`)
    );
  }
  async getEventRankings(eventKey: string): Promise<Ranking[]> {
    return this.arrToObj(
      Ranking,
      await this.fetch(`/event/${eventKey}/rankings`)
    );
  }
  async getEventInsights(eventKey: string): Promise<Insights[]> {
    return this.arrToObj(
      Insights,
      await this.fetch(`/event/${eventKey}/insights`)
    );
  }
  async getEventAlliances(eventKey: string): Promise<Alliance[]> {
    return this.arrToObj(
      Alliance,
      await this.fetch(`/event/${eventKey}/alliances`)
    );
  }
  async getEventStreams(eventKey: string): Promise<EventLiveStream[]> {
    return this.arrToObj(
      EventLiveStream,
      await this.fetch(`/event/${eventKey}/streams`)
    );
  }
  async getEventTeams(eventKey: string): Promise<EventParticipant[]> {
    return this.arrToObj(
      EventParticipant,
      await this.fetch(`/event/${eventKey}/teams`)
    );
  }
  async getEventAwards(eventKey: string): Promise<AwardRecipient[]> {
    return this.arrToObj(
      AwardRecipient,
      await this.fetch(`/event/${eventKey}/awards`)
    );
  }
  async getEventMedia(eventKey: string): Promise<Media[]> {
    return this.arrToObj(Media, await this.fetch(`/event/${eventKey}/media`));
  }

  // /api/match
  async getSeasonMatches(seasonKey: string, start: number = 0, count = 500) {
    return this.arrToObj(
      Match,
      await this.fetch(`/match/all/${seasonKey}`, {
        start: start,
        count: count
      })
    );
  }
  async getSeasonMatchCount(): Promise<number> {
    let x = await this.fetch("/match/size");
    let y: { result: number } = JSON.parse(x);
    return y.result;
  }
  async getHighScoreMatch(type: "quals" | "elims" | "all"): Promise<Match> {
    return this.arrToObj(
      Match,
      await this.fetch("/match/high-scores", { type: type })
    )[0];
  }
  async getMatch(matchKey: string): Promise<Match> {
    return this.arrToObj(Match, await this.fetch(`/match/${matchKey}`))[0];
  }
  async getMatchDetails(matchKey: string): Promise<MatchDetails> {
    return this.arrToObj(
      MatchDetails,
      await this.fetch(`/match/${matchKey}/details`)
    )[0];
  }
  async getMatchParticipants(matchKey: string): Promise<MatchParticipant[]> {
    return this.arrToObj(
      MatchParticipant,
      await this.fetch(`/match/${matchKey}/participants`)
    );
  }

  // /api/team
  async getTeams(): Promise<Team[]> {
    return this.arrToObj(Team, await this.fetch(`/team`));
  }
  async getTeamCount(): Promise<number> {
    let x = await this.fetch("/team/size");
    let y: { result: number } = JSON.parse(x);
    return y.result;
  }
  async getTeam(teamKey: string): Promise<Team> {
    return this.arrToObj(Team, await this.fetch(`/team/${teamKey}`))[0];
  }
  async getTeamWLT(teamKey: string): Promise<Team> {
    return this.arrToObj(Team, await this.fetch(`/team/${teamKey}/wlt`))[0];
  }
  async getTeamEvents(
    teamKey: string,
    seasonKey: string
  ): Promise<EventParticipant[]> {
    return this.arrToObj(
      EventParticipant,
      await this.fetch(`/team/${teamKey}/events/${seasonKey}`)
    );
  }
  async getTeamAwards(
    teamKey: string,
    seasonKey: string
  ): Promise<AwardRecipient[]> {
    return this.arrToObj(
      AwardRecipient,
      await this.fetch(`/team/${teamKey}/awards/${seasonKey}`)
    );
  }
  async getTeamRankings(
    teamKey: string,
    seasonKey: string
  ): Promise<Ranking[]> {
    return this.arrToObj(
      Ranking,
      await this.fetch(`/team/${teamKey}/results/${seasonKey}`)
    );
  }
  async getTeamMedia(teamKey: string, seasonKey: string): Promise<Media[]> {
    return this.arrToObj(
      Media,
      await this.fetch(`/team/${teamKey}/media/${seasonKey}`)
    );
  }
  async getSeasonTeams(seasonKey: string): Promise<Team[]> {
    return this.arrToObj(Team, await this.fetch(`/team/history/${seasonKey}`));
  }
  async getSeasonTeam(teamKey: string, seasonKey: string): Promise<Team[]> {
    return this.arrToObj(
      Team,
      await this.fetch(`/team/history/${seasonKey}/${teamKey}`)
    );
  }

  // /api/web
  async getWebAnnouncements(): Promise<WebAnnouncement[]> {
    return this.arrToObj(
      WebAnnouncement,
      await this.fetch(`/web/announcements`)
    );
  }

  // /api/league
  async getLeague(leagueKey: string): Promise<League> {
    return this.arrToObj(League, await this.fetch(`/league/${leagueKey}`))[0];
  }
  async getLeagueDivisions(): Promise<LeagueDiv[]> {
    return this.arrToObj(LeagueDiv, await this.fetch(`/league/divisions`));
  }
>>>>>>> Add all GET endpoints
}

export default API;
