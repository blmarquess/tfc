export type teamRes = {
  name: '',
  totalGames: 0,
  totalVictories: 0,
  totalDraws: 0,
  totalLosses: 0,
  goalsFavor: 0,
  goalsOwn: 0,
  totalPoints: 0,
  goalsBalance: 0,
  efficiency: 0,
};

export default function mergeTeamResults(teamHome: teamRes, teamAway: teamRes) {
  const goalsFavor = teamHome.goalsFavor + teamAway.goalsFavor;
  const goalsOwn = teamHome.goalsOwn + teamAway.goalsOwn;
  const totalPoints = teamHome.totalPoints + teamAway.totalPoints;
  const totalGames = teamHome.totalGames + teamAway.totalGames;

  return {
    name: teamHome.name,
    totalPoints,
    totalGames,
    totalVictories: teamHome.totalVictories + teamAway.totalVictories,
    totalDraws: teamHome.totalDraws + teamAway.totalDraws,
    totalLosses: teamHome.totalLosses + teamAway.totalLosses,
    goalsFavor,
    goalsOwn,
    goalsBalance: goalsFavor - goalsOwn,
    efficiency: +((totalPoints / (totalGames * 3)) * 100).toFixed(2),
  };
}
