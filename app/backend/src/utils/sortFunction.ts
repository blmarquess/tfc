type arrSort = {
  totalPoints: number,
  goalsBalance: number,
  goalsFavor: number,
  goalsOwn: number
};

export default function SortArray(arr:arrSort[]) {
  return arr.sort((a, b) =>
    b.totalPoints - a.totalPoints
    || b.goalsBalance - a.goalsBalance
    || b.goalsFavor - a.goalsFavor
    || a.goalsOwn - b.goalsOwn);
}
