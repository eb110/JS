const speedListen = (arr) => {
    let sc = arr.reduce((sum, x, i) => sum + (i == 0 ? 10 : i == 1 ? 20 : 30), 0)
    return sc
  }


  console.log(speedListen([1,2,3])) // 60