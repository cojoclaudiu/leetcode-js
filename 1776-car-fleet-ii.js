/**
 * @param {number[][]} cars
 * @return {number[]}
 */
var getCollisionTimes = function (cars) {
  let n = cars.length,
    t = 0,
    i
  const ans = Array(n)
  for (let i = 0; i < n; i++) ans[i] = -1
  const s = []
  s[++t] = n - 1
  for (let i = n - 2; ~i; i--) {
    while (t && cars[s[t]][1] >= cars[i][1]) t--
    while (
      t > 1 &&
      (cars[s[t]][0] - cars[i][0]) * (cars[i][1] - cars[s[t - 1]][1]) >
        (cars[s[t - 1]][0] - cars[i][0]) * (cars[i][1] - cars[s[t]][1])
    )
      t--
    if (t) ans[i] = (cars[s[t]][0] - cars[i][0]) / (cars[i][1] - cars[s[t]][1])
    s[++t] = i
  }
  return ans
}
