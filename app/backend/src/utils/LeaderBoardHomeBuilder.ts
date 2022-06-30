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

export const totalPointsFromHome = (teamTarget: string, matches: Match[]) => {
  const filtroDenomes = matches.filter(({ teamHome: { teamName } }) => teamName === teamTarget);
  return filtroDenomes
    .reduce((acc, cv) => acc + pointsPerMatch(cv.homeTeamGoals, cv.awayTeamGoals), 0);
};

export const totalMatches = (teamTarget: string, matches: Match[]) =>
  matches.filter(({ teamHome: { teamName } }) => teamName === teamTarget).length;

export const calcTotalVictories = (matches: Match[]) =>
  matches
    .filter(({ homeTeamGoals, awayTeamGoals }) =>
      hasWon(homeTeamGoals, awayTeamGoals) === 'win').length;

export const calcTotalLosses = (matches: Match[]) =>
  matches
    .filter(({ homeTeamGoals, awayTeamGoals }) =>
      hasWon(homeTeamGoals, awayTeamGoals) === 'lose').length;

export const calcTotalDraws = (matches: Match[]) =>
  matches
    .filter(({ homeTeamGoals, awayTeamGoals }) =>
      hasWon(homeTeamGoals, awayTeamGoals) === 'draw').length;

export const totalGoasFavor = (teamTarget: string, matches: Match[]) => {
  const filtroDenomes = matches.filter(({ teamHome: { teamName } }) => teamName === teamTarget);
  return filtroDenomes
    .reduce((acc, cv) => acc + cv.homeTeamGoals, 0);
};

export const totalGoalsOwn = (teamTarget: string, matches: Match[]) => {
  const filtroDenomes = matches.filter(({ teamHome: { teamName } }) => teamName === teamTarget);
  return filtroDenomes
    .reduce((acc, cv) => acc + cv.awayTeamGoals, 0);
};

export const goalsBalance = (teamTarget: string, matches: Match[]) =>
  totalGoasFavor(teamTarget, matches) - totalGoalsOwn(teamTarget, matches);

const efficiencyCalculator = (teamTarget: string, matches: Match[]) => {
  const totalDePontos = totalPointsFromHome(teamTarget, matches);
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

export const leaderBoardHomeFactory = (teamName: string, arrayMatches: queryTMatches[]) => {
  const arrayMatchesFiltrado = arrayMatches
    .filter(({ teamHome }) => teamHome.teamName === teamName);
  return {
    name: teamName,
    totalPoints: totalPointsFromHome(teamName, arrayMatches),
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
