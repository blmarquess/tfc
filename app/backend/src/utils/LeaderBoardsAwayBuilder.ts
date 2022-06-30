type Match = {
  'homeTeamGoals': number,
  'awayTeamGoals': number,
  'inProgress': false,
  'teamHome': {
    'id': number,
    'teamName': string,
  },
  'teamAway': {
    'id': number,
    'teamName': string
  }
};

export const hasWon = (challenger: number, challenged: number) => {
  if (challenger > challenged) { return 'win'; }
  if (challenger < challenged) { return 'lose'; }
  return 'draw';
};

export const pointsPerMatch = (challenger: number, challenged: number) => {
  if (hasWon(challenger, challenged) === 'win') { return 3; }
  if (hasWon(challenger, challenged) === 'draw') { return 1; }
  return 0;
};

export const totalPointsFromAway = (teamTarget: string, matches: Match[]) => {
  const teamFilter = matches.filter(({ teamAway: { teamName } }) => teamName === teamTarget);
  return teamFilter
    .reduce((acc, cv) => acc + pointsPerMatch(cv.awayTeamGoals, cv.homeTeamGoals), 0);
};

export const totalMatches = (teamTarget: string, matches: Match[]) =>
  matches.filter(({ teamAway: { teamName } }) => teamName === teamTarget).length;

export const calcTotalVictories = (matches: Match[]) =>
  matches
    .filter(({ awayTeamGoals, homeTeamGoals }) =>
      hasWon(awayTeamGoals, homeTeamGoals) === 'win').length;

export const calcTotalLosses = (matches: Match[]) =>
  matches
    .filter(({ awayTeamGoals, homeTeamGoals }) =>
      hasWon(awayTeamGoals, homeTeamGoals) === 'lose').length;

export const calcTotalDraws = (matches: Match[]) =>
  matches
    .filter(({ awayTeamGoals, homeTeamGoals }) =>
      hasWon(awayTeamGoals, homeTeamGoals) === 'draw').length;

export const totalGoasFavor = (teamTarget: string, matches: Match[]) => {
  const teamFilter = matches.filter(({ teamAway: { teamName } }) => teamName === teamTarget);
  return teamFilter
    .reduce((acc, cv) => acc + cv.awayTeamGoals, 0);
};

export const totalGoalsOwn = (teamTarget: string, matches: Match[]) => {
  const teamFilter = matches.filter(({ teamAway: { teamName } }) => teamName === teamTarget);
  return teamFilter
    .reduce((acc, cv) => acc + cv.homeTeamGoals, 0);
};

export const goalsBalance = (teamTarget: string, matches: Match[]) =>
  totalGoasFavor(teamTarget, matches) - totalGoalsOwn(teamTarget, matches);

const efficiencyCalculator = (teamTarget: string, matches: Match[]) => {
  const totalDePontos = totalPointsFromAway(teamTarget, matches);
  const maxScore = totalMatches(teamTarget, matches) * 3;
  const efficiencyCalc = (totalDePontos / maxScore) * 100;
  return +efficiencyCalc.toFixed(2);
};

type queryTMatches = {
  'homeTeamGoals': number,
  'awayTeamGoals': number,
  'inProgress': false,
  'teamHome': {
    'id': number,
    'teamName': string,
  },
  'teamAway': {
    'id': number,
    'teamName': string
  }
};

export const leaderBoardAwayFactory = (teamName: string, arrayMatches:queryTMatches[]) => {
  const arrayMatchesFiltrado = arrayMatches
    .filter(({ teamAway }) => teamAway.teamName === teamName);
  return {
    name: teamName,
    totalPoints: totalPointsFromAway(teamName, arrayMatches),
    totalGames: totalMatches(teamName, arrayMatches),
    totalVictories: calcTotalVictories(arrayMatchesFiltrado),
    totalDraws: calcTotalDraws(arrayMatchesFiltrado),
    totalLosses: calcTotalLosses(arrayMatchesFiltrado),
    goalsFavor: totalGoasFavor(teamName, arrayMatches),
    goalsOwn: totalGoalsOwn(teamName, arrayMatches),
    goalsBalance: goalsBalance(teamName, arrayMatches),
    efficiency: efficiencyCalculator(teamName, arrayMatches),
  };
};
