function superbowlWin (records) {
    const findWin = records.find(records => records.result === "W")
    if (!!findWin) {
      return findWin.year
    } else {
      return undefined
    }
  }