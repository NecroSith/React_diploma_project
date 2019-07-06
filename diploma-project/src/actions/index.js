const bestLoaded = (newBest) => {
    return {
        type: 'BEST_LOADED',
        payload: newBest
    }
}

export {
    bestLoaded
}