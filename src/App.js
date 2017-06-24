import React, { Component } from 'react';
import './App.css';
import Pane from './Pane';
import Footer from './Footer';
import Score from './Score';
import Select from 'react-select';

class App extends Component {
  constructor(props) {
    super(props);
    const competitionId = 426;
    var homeTeam = {
      _links: 
      { 
        "self": {"href": "http://api.football-data.org/v1/teams/61"},
        "fixtures": {"href": "http://api.football-data.org/v1/teams/61/fixtures"},
        "players": {"href": "http://api.football-data.org/v1/teams/61/players"} 
      },
      id: 61,
      name: "Chelsea FC",
      crestUrl: "https://upload.wikimedia.org/wikipedia/de/5/5c/Chelsea_crest.svg"
    };
    var awayTeam = {
      id: 64,
      _links: 
      { 
        "self": {"href": "http://api.football-data.org/v1/teams/64"},
        "fixtures": {"href": "http://api.football-data.org/v1/teams/64/fixtures"},
        "players": {"href": "http://api.football-data.org/v1/teams/64/players"} 
      },
      name: "Liverpool FC",
      crestUrl: "https://upload.wikimedia.org/wikipedia/de/0/0a/FC_Liverpool.svg"
    };
    var match = {
      matchday: 5,
      date: "2016-09-16T19:00:00Z",
      homeTeamName: "Chelsea FC",
      awayTeamName: "Liverpool FC",
      result : {
        goalsHomeTeam: 1,
        goalsAwayTeam: 2
      }
    };
    var matchaway = {
      matchday: 23,
      date: "2017-01-31T20:00:00Z",
      homeTeamName: "Liverpool FC",
      awayTeamName: "Chelsea FC",
      result : {
        goalsHomeTeam: 1,
        goalsAwayTeam: 1
      }
    };

    var matches = [
      match,
      matchaway
    ];
    this.state = {
      teamsApiUrl: "http://api.football-data.org/v1/competitions/" + competitionId + "/teams",
      competitionUrl: "http://api.football-data.org/v1/competitions/" + competitionId, 
      currentLeftPaneTeam: homeTeam,
      currentRightPaneTeam: awayTeam,
      matches: matches,
      teamsNames: [],
      teams: {},
      competitions: [],
      currentCompetition: "Premier League 2016/17",
      leagueStandings: {"_links":{"self":{"href":"http://api.football-data.org/v1/competitions/426/leagueTable/?matchday=38"},"competition":{"href":"http://api.football-data.org/v1/competitions/426"}},"leagueCaption":"Premier League 2016/17","matchday":38,"standing":[{"_links":{"team":{"href":"http://api.football-data.org/v1/teams/61"}},"position":1,"teamName":"Chelsea FC","crestURI":"http://upload.wikimedia.org/wikipedia/de/5/5c/Chelsea_crest.svg","playedGames":38,"points":93,"goals":85,"goalsAgainst":33,"goalDifference":52,"wins":30,"draws":3,"losses":5,"home":{"goals":55,"goalsAgainst":17,"wins":17,"draws":0,"losses":2},"away":{"goals":30,"goalsAgainst":16,"wins":13,"draws":3,"losses":3}},{"_links":{"team":{"href":"http://api.football-data.org/v1/teams/73"}},"position":2,"teamName":"Tottenham Hotspur FC","crestURI":"http://upload.wikimedia.org/wikipedia/de/b/b4/Tottenham_Hotspur.svg","playedGames":38,"points":86,"goals":86,"goalsAgainst":26,"goalDifference":60,"wins":26,"draws":8,"losses":4,"home":{"goals":47,"goalsAgainst":9,"wins":17,"draws":2,"losses":0},"away":{"goals":39,"goalsAgainst":17,"wins":9,"draws":6,"losses":4}},{"_links":{"team":{"href":"http://api.football-data.org/v1/teams/65"}},"position":3,"teamName":"Manchester City FC","crestURI":"https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg","playedGames":38,"points":78,"goals":80,"goalsAgainst":39,"goalDifference":41,"wins":23,"draws":9,"losses":6,"home":{"goals":37,"goalsAgainst":17,"wins":11,"draws":7,"losses":1},"away":{"goals":43,"goalsAgainst":22,"wins":12,"draws":2,"losses":5}},{"_links":{"team":{"href":"http://api.football-data.org/v1/teams/64"}},"position":4,"teamName":"Liverpool FC","crestURI":"http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Liverpool.svg","playedGames":38,"points":76,"goals":78,"goalsAgainst":42,"goalDifference":36,"wins":22,"draws":10,"losses":6,"home":{"goals":45,"goalsAgainst":18,"wins":12,"draws":5,"losses":2},"away":{"goals":33,"goalsAgainst":24,"wins":10,"draws":5,"losses":4}},{"_links":{"team":{"href":"http://api.football-data.org/v1/teams/57"}},"position":5,"teamName":"Arsenal FC","crestURI":"http://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg","playedGames":38,"points":75,"goals":77,"goalsAgainst":44,"goalDifference":33,"wins":23,"draws":6,"losses":9,"home":{"goals":39,"goalsAgainst":16,"wins":14,"draws":3,"losses":2},"away":{"goals":38,"goalsAgainst":28,"wins":9,"draws":3,"losses":7}},{"_links":{"team":{"href":"http://api.football-data.org/v1/teams/66"}},"position":6,"teamName":"Manchester United FC","crestURI":"http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg","playedGames":38,"points":69,"goals":54,"goalsAgainst":29,"goalDifference":25,"wins":18,"draws":15,"losses":5,"home":{"goals":26,"goalsAgainst":12,"wins":8,"draws":10,"losses":1},"away":{"goals":28,"goalsAgainst":17,"wins":10,"draws":5,"losses":4}},{"_links":{"team":{"href":"http://api.football-data.org/v1/teams/62"}},"position":7,"teamName":"Everton FC","crestURI":"http://upload.wikimedia.org/wikipedia/de/f/f9/Everton_FC.svg","playedGames":38,"points":61,"goals":62,"goalsAgainst":44,"goalDifference":18,"wins":17,"draws":10,"losses":11,"home":{"goals":42,"goalsAgainst":16,"wins":13,"draws":4,"losses":2},"away":{"goals":20,"goalsAgainst":28,"wins":4,"draws":6,"losses":9}},{"_links":{"team":{"href":"http://api.football-data.org/v1/teams/340"}},"position":8,"teamName":"Southampton FC","crestURI":"http://upload.wikimedia.org/wikipedia/de/c/c9/FC_Southampton.svg","playedGames":38,"points":46,"goals":41,"goalsAgainst":48,"goalDifference":-7,"wins":12,"draws":10,"losses":16,"home":{"goals":17,"goalsAgainst":21,"wins":6,"draws":6,"losses":7},"away":{"goals":24,"goalsAgainst":27,"wins":6,"draws":4,"losses":9}},{"_links":{"team":{"href":"http://api.football-data.org/v1/teams/1044"}},"position":9,"teamName":"AFC Bournemouth","crestURI":"https://upload.wikimedia.org/wikipedia/de/4/41/Afc_bournemouth.svg","playedGames":38,"points":46,"goals":55,"goalsAgainst":67,"goalDifference":-12,"wins":12,"draws":10,"losses":16,"home":{"goals":35,"goalsAgainst":29,"wins":9,"draws":4,"losses":6},"away":{"goals":20,"goalsAgainst":38,"wins":3,"draws":6,"losses":10}},{"_links":{"team":{"href":"http://api.football-data.org/v1/teams/74"}},"position":10,"teamName":"West Bromwich Albion FC","crestURI":"http://upload.wikimedia.org/wikipedia/de/8/8b/West_Bromwich_Albion.svg","playedGames":38,"points":45,"goals":43,"goalsAgainst":51,"goalDifference":-8,"wins":12,"draws":9,"losses":17,"home":{"goals":27,"goalsAgainst":22,"wins":9,"draws":2,"losses":8},"away":{"goals":16,"goalsAgainst":29,"wins":3,"draws":7,"losses":9}},{"_links":{"team":{"href":"http://api.football-data.org/v1/teams/563"}},"position":11,"teamName":"West Ham United FC","crestURI":"http://upload.wikimedia.org/wikipedia/de/e/e0/West_Ham_United_FC.svg","playedGames":38,"points":45,"goals":47,"goalsAgainst":64,"goalDifference":-17,"wins":12,"draws":9,"losses":17,"home":{"goals":19,"goalsAgainst":31,"wins":7,"draws":4,"losses":8},"away":{"goals":28,"goalsAgainst":33,"wins":5,"draws":5,"losses":9}},{"_links":{"team":{"href":"http://api.football-data.org/v1/teams/338"}},"position":12,"teamName":"Leicester City FC","crestURI":"http://upload.wikimedia.org/wikipedia/en/6/63/Leicester02.png","playedGames":38,"points":44,"goals":48,"goalsAgainst":63,"goalDifference":-15,"wins":12,"draws":8,"losses":18,"home":{"goals":31,"goalsAgainst":25,"wins":10,"draws":4,"losses":5},"away":{"goals":17,"goalsAgainst":38,"wins":2,"draws":4,"losses":13}},{"_links":{"team":{"href":"http://api.football-data.org/v1/teams/70"}},"position":13,"teamName":"Stoke City FC","crestURI":"http://upload.wikimedia.org/wikipedia/de/a/a3/Stoke_City.svg","playedGames":38,"points":44,"goals":41,"goalsAgainst":56,"goalDifference":-15,"wins":11,"draws":11,"losses":16,"home":{"goals":24,"goalsAgainst":24,"wins":7,"draws":6,"losses":6},"away":{"goals":17,"goalsAgainst":32,"wins":4,"draws":5,"losses":10}},{"_links":{"team":{"href":"http://api.football-data.org/v1/teams/354"}},"position":14,"teamName":"Crystal Palace FC","crestURI":"http://upload.wikimedia.org/wikipedia/de/b/bf/Crystal_Palace_F.C._logo_(2013).png","playedGames":38,"points":41,"goals":50,"goalsAgainst":63,"goalDifference":-13,"wins":12,"draws":5,"losses":21,"home":{"goals":24,"goalsAgainst":25,"wins":6,"draws":2,"losses":11},"away":{"goals":26,"goalsAgainst":38,"wins":6,"draws":3,"losses":10}},{"_links":{"team":{"href":"http://api.football-data.org/v1/teams/72"}},"position":15,"teamName":"Swansea City FC","crestURI":"http://upload.wikimedia.org/wikipedia/de/a/ab/Swansea_City_Logo.svg","playedGames":38,"points":41,"goals":45,"goalsAgainst":70,"goalDifference":-25,"wins":12,"draws":5,"losses":21,"home":{"goals":27,"goalsAgainst":34,"wins":8,"draws":3,"losses":8},"away":{"goals":18,"goalsAgainst":36,"wins":4,"draws":2,"losses":13}},{"_links":{"team":{"href":"http://api.football-data.org/v1/teams/328"}},"position":16,"teamName":"Burnley FC","crestURI":"https://upload.wikimedia.org/wikipedia/en/0/02/Burnley_FC_badge.png","playedGames":38,"points":40,"goals":39,"goalsAgainst":55,"goalDifference":-16,"wins":11,"draws":7,"losses":20,"home":{"goals":26,"goalsAgainst":20,"wins":10,"draws":3,"losses":6},"away":{"goals":13,"goalsAgainst":35,"wins":1,"draws":4,"losses":14}},{"_links":{"team":{"href":"http://api.football-data.org/v1/teams/346"}},"position":17,"teamName":"Watford FC","crestURI":"https://upload.wikimedia.org/wikipedia/en/e/e2/Watford.svg","playedGames":38,"points":40,"goals":40,"goalsAgainst":68,"goalDifference":-28,"wins":11,"draws":7,"losses":20,"home":{"goals":25,"goalsAgainst":29,"wins":8,"draws":4,"losses":7},"away":{"goals":15,"goalsAgainst":39,"wins":3,"draws":3,"losses":13}},{"_links":{"team":{"href":"http://api.football-data.org/v1/teams/322"}},"position":18,"teamName":"Hull City FC","crestURI":"http://upload.wikimedia.org/wikipedia/de/a/a9/Hull_City_AFC.svg","playedGames":38,"points":34,"goals":37,"goalsAgainst":80,"goalDifference":-43,"wins":9,"draws":7,"losses":22,"home":{"goals":28,"goalsAgainst":35,"wins":8,"draws":4,"losses":7},"away":{"goals":9,"goalsAgainst":45,"wins":1,"draws":3,"losses":15}},{"_links":{"team":{"href":"http://api.football-data.org/v1/teams/343"}},"position":19,"teamName":"Middlesbrough FC","crestURI":"https://upload.wikimedia.org/wikipedia/en/2/2c/Middlesbrough_FC_crest.svg","playedGames":38,"points":28,"goals":27,"goalsAgainst":53,"goalDifference":-26,"wins":5,"draws":13,"losses":20,"home":{"goals":17,"goalsAgainst":23,"wins":4,"draws":6,"losses":9},"away":{"goals":10,"goalsAgainst":30,"wins":1,"draws":7,"losses":11}},{"_links":{"team":{"href":"http://api.football-data.org/v1/teams/71"}},"position":20,"teamName":"Sunderland AFC","crestURI":"http://upload.wikimedia.org/wikipedia/de/6/60/AFC_Sunderland.svg","playedGames":38,"points":24,"goals":29,"goalsAgainst":69,"goalDifference":-40,"wins":6,"draws":6,"losses":26,"home":{"goals":16,"goalsAgainst":34,"wins":3,"draws":5,"losses":11},"away":{"goals":13,"goalsAgainst":35,"wins":3,"draws":1,"losses":15}}]}
    }

    this.handleChangeHomeDropdown = this.handleChangeHomeDropdown.bind(this);
    this.handleChangeAwayDropdown = this.handleChangeAwayDropdown.bind(this);
    this.handleChangeCompetitionsDropdown = this.handleChangeCompetitionsDropdown.bind(this);
  }

  componentDidMount() {
    var header = {
      headers: { 'X-Auth-Token': 'b2fff2b35cc74456bc7fe2f5a8d3adf6'},
      dataType: 'json',
      type: 'GET'
    };
    var apiCall = this.state.teamsApiUrl;
    fetch(apiCall, header)
    .then((res) => res.json()).then((data) => {
      var teams = data.teams;
      var teamNames = [];
      for (var i = 0; i < teams.length; i++) { 
          teamNames[i] = teams[i].name;
      }
      this.setState({
          teamsNames: teamNames,
          teams: teams
      });
    })
    this.mountCompetitions(header);
  }

  mountCompetitions(header) {
    fetch("http://api.football-data.org/v1/competitions/?season=2016", header)
    .then((results) => results.json()).then((results) => {
      let cr = results;
      let comps = [];
      for(let z in cr) {
        comps.push(cr[z].caption);
      }
      let cur = comps[1];
      this.setState({competitions: cr, currentCompetition: cur});
    })    
  }

  updateMatches(homeTeam, awayTeam) {
    let header = {
      headers: { 'X-Auth-Token': 'b2fff2b35cc74456bc7fe2f5a8d3adf6'},
      dataType: 'json',
      type: 'GET'
    };
    let apiCall = homeTeam._links.fixtures.href;
    fetch(apiCall, header)
    .then((response) => response.json()).then((data) => {
      let fixtures = data.fixtures;
      let fixturesThisComp = [];
      for(let y in fixtures) {
        if(fixtures[y].awayTeamName === awayTeam.name || fixtures[y].homeTeamName === awayTeam.name) {
          // fixtures[y]._links.competition.href === this.state.competitionUrl
          fixturesThisComp.push(fixtures[y]);
        }
      }
      this.setState({matches: fixturesThisComp});
    });
  }

  handleChangeHomeDropdown(eventKey) {
    let teams = this.state.teams;
    for(let x in teams) {
      if(teams[x].name === eventKey.label) {
        this.setState({currentLeftPaneTeam: teams[x]});
        this.updateMatches(teams[x], this.state.currentRightPaneTeam);
      }
    }
  }

  handleChangeAwayDropdown(eventKey) {
    let teams = this.state.teams;
    for(let x in teams) {
      if(teams[x].name === eventKey.label) {
        this.setState({currentRightPaneTeam: teams[x]});
        this.updateMatches(teams[x], this.state.currentLeftPaneTeam);
      }
    }
  }

  updateLeagueStandings(eventKey, header) {
    let competitions = this.state.competitions;
    for(let competition in competitions) {
        if(competitions[competition].caption === eventKey.label) {
          let api = "http://api.football-data.org/v1/competitions/" + competitions[competition].id + "/leagueTable";        
          fetch(api, header)
          .then((result) => result.json()).then((result) => {
            console.log(result);
            this.setState({ leagueStandings: result });
          });           
        }
    }    
  }

  handleChangeCompetitionsDropdown(eventKey) {
    let header = {
      headers: { 'X-Auth-Token': 'b2fff2b35cc74456bc7fe2f5a8d3adf6'},
      dataType: 'json',
      type: 'GET'
    };    
    this.updateLeagueStandings(eventKey, header);
    this.setState({currentCompetition: eventKey.label})
    let competitions = this.state.competitions;
    for(let competition in competitions) {
        if(competitions[competition].caption === eventKey.label) {
          this.setState({
            currentCompetition: competitions[competition].caption,
            teamsApiUrl: competitions[competition]._links.teams.href
          });
          let apiCall = competitions[competition]._links.teams.href;
          fetch(apiCall, header)
          .then((response) => response.json()).then((response) => {
            let teams = response.teams;
            let teamNames = [];
            for (var i = 0; i < teams.length; i++) { 
                teamNames[i] = teams[i].name;
            }
            this.setState({
                teamsNames: teamNames,
                teams: teams,
                currentLeftPaneTeam: teams[0],
                currentRightPaneTeam: teams[1]
            });
            this.updateMatches(teams[0], teams[1]);           
          })
          return;
        }
    }
  }

  render() {
    const teams = this.state.teamsNames;
    let options = [];
    for(let x in teams) {
      options.push({ "value": teams[x], "label": teams[x], clearableValue: false, clearable: false})
    }
    const comps = this.state.competitions;
    let competitions = [];
    for(let y in comps) {
      competitions.push({ "value": comps[y].caption, "label": comps[y].caption, clearableValue: false, clearable: false})
    }
    return (
        <div className="App">
          <div className="App-header">
            <div className="header">
              <div className="heading">Football QuickScore</div>
              <div className="competition-select-container">
                <Select 
                  name="competition-select"
                  value={this.state.currentCompetition}
                  options={competitions}
                  onChange={this.handleChangeCompetitionsDropdown}
                />     
              </div> 
            </div>       

            <div className="three-split">
              <div className="row row-centered">
                <div className="no-margin col-sm-4 col-md-4 col-lg-4">
                    <div className="select-container">
                      <Select
                        name="home-team-select"
                        placeholder="Home team search..."
                        options={options}
                        onChange={this.handleChangeHomeDropdown}
                      />
                    </div>
                    <div>
                      <Pane team={this.state.currentLeftPaneTeam} leagueStandings={this.state.leagueStandings}/>
                    </div>
                </div>
                <div className="no-margin col-xs-4 col-sm-4 col-md-4 col-lg-4">
 
                <br/><br/><br/><br/>
                  <div className="mid-content">
                    <Score match={this.state.matches[0]} homeTeam={this.state.currentLeftPaneTeam.name} />
                  </div>
                  <div className="mid-content">
                    <Score match={this.state.matches[1]} homeTeam={this.state.currentLeftPaneTeam.name} />
                  </div>
                </div>
                <div className="no-margin col-xs-4 col-sm-4 col-md-4 col-lg-4">
                  <div>
                    <div className="select-container">
                      <Select
                        name="home-away-select"
                        placeholder="Away team search..."
                        options={options}
                        onChange={this.handleChangeAwayDropdown}
                      />
                    </div>                    
                    <div>
                      <Pane team={this.state.currentRightPaneTeam} leagueStandings={this.state.leagueStandings} />
                    </div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
          <div className="footer"> 
            <Footer />
          </div>
        </div>
    );
  }
}
export default App;