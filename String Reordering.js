function sentence(List) {
    return List.sort((a,b) => Object.keys(a) - Object.keys(b)).map(item => Object.values(item)).join(' ')
  }