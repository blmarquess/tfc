// import { LeaderBoardDTO } from '../useCases/repositories/LeaderBoardDTO';
// import { MatchEntity } from '../entities/MatchEntity';

// export const hasWon = (challenger: number, challenged: number) => {
//   if (challenger > challenged) { return 'win'; }
//   if (challenger < challenged) { return 'lose'; }
//   return 'draw';
// };

// export const pointsPerMatch = (challenger: number, challenged: number) => {
//   if (hasWon(challenger, challenged) === 'win') { return 3; }
//   if (hasWon(challenger, challenged) === 'draw') { return 1; }
//   return 0;
// };

// export const totalPointsFromLocation = (location:string, matches:MatchEntity[]) => {
//   if (location === 'home') {
//     return matches
//       .reduce((acc, crv) => pointsPerMatch(crv.homeTeamGoals, crv.awayTeamGoals) + acc, 0);
//   }
//   if (location === 'away') {
//     return matches
//       .reduce((acc, crv) => pointsPerMatch(crv.awayTeamGoals, crv.homeTeamGoals) + acc, 0);
//   }
// };

// export const resultMatches = (location:string, matches:MatchEntity[]) => {
//   if (location === 'home') {
//     const matchesResults = { draw: 0, lose: 0, win: 0 };
//     matches.forEach((game) => {
//       const result = hasWon(game.homeTeamGoals, game.awayTeamGoals);
//       matchesResults[result] += 1;
//     });
//     return matchesResults;
//   }
//   if (location === 'away') {
//     const matchesResults = { draw: 0, lose: 0, win: 0 };
//     matches.forEach((game) => {
//       const result = hasWon(game.homeTeamGoals, game.awayTeamGoals);
//       matchesResults[result] += 1;
//     });
//     return matchesResults;
//   }
// };

// export const countGoals = (goals: number[]) => goals.reduce((acc, crv) => crv + acc, 0);

// export const totalGoalsFavor = (location: string, matches: MatchEntity[]) => {
//   if (location === 'home') {
//     return matches.reduce((acc, crv) => crv.homeTeamGoals + acc, 0);
//   }
//   if (location === 'away') {
//     return matches.reduce((acc, crv) => crv.awayTeamGoals + acc, 0);
//   }
// };

// export const totalGoalsOwn = (location: string, matches: MatchEntity[]) => {
//   if (location === 'home') {
//     return matches.reduce((acc, cv) => acc + cv.awayTeamGoals, 0);
//   }
//   if (location === 'away') {
//     return matches.reduce((acc, crv) => acc + crv.homeTeamGoals, 0);
//   }
// };

// const genGoalsBalance = (favor: number, own: number) => favor - own;

// const getEfficiencyTeam = (location: string, matches: MatchEntity[]) => {
//   const maxPintChampionShip = matches.length * 3;
//   const totalPoints = totalPointsFromLocation(location, matches) as number;
//   return (totalPoints / maxPintChampionShip) * 100;
// };

// export interface LeaderBoardResponse {
//   name: string;
//   totalPoints: number;
//   totalGames: number;
//   totalVictories: number;
//   totalDraws: number;
//   totalLosses: number;
//   goalsFavor: number;
//   goalsOwn: number;
//   goalsBalance: number;
//   efficiency: number;
// }

// export const FactoryBoardTeamHome = (matches: LeaderBoardDTO[]) =>
//   matches.map((match) => ({
//     name: match.teamName,
//     totalPoints: totalPointsFromLocation('home', match.matchesHome),
//     totalGames: match.matchesHome.length,
//     totalVictories: resultMatches('home', match.matchesHome)?.win,
//     totalDraws: resultMatches('home', match.matchesHome)?.draw,
//     totalLosses: resultMatches('home', match.matchesHome)?.lose,
//     goalsFavor: totalGoalsFavor('home', match.matchesHome),
//     goalsOwn: totalGoalsOwn('home', match.matchesHome),
//     goalsBalance: genGoalsBalance(
//       totalGoalsOwn('home', match.matchesHome) as number,
//       totalGoalsFavor('home', match.matchesHome) as number,
//     ).toFixed(2),

//     efficiency: getEfficiencyTeam('home', match.matchesHome),
//   }));

// export const FactoryBoardTeamAway = (matches: LeaderBoardDTO[]) =>
//   matches.map((match) => ({
//     name: match.teamName,
//     totalPoints: totalPointsFromLocation('away', match.matchesAway),
//     totalGames: match.matchesAway.length,
//     totalVictories: resultMatches('away', match.matchesAway)?.win,
//     totalDraws: resultMatches('away', match.matchesAway)?.draw,
//     totalLosses: resultMatches('away', match.matchesAway)?.lose,
//     goalsFavor: totalGoalsFavor('away', match.matchesAway),
//     goalsOwn: totalGoalsOwn('away', match.matchesAway),
//     goalsBalance: genGoalsBalance(
//       totalGoalsOwn('away', match.matchesAway) as number,
//       totalGoalsFavor('away', match.matchesAway) as number,
//     ).toFixed(2),

//     efficiency: getEfficiencyTeam('away', match.matchesAway),
//   }));
