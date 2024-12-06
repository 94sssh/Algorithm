function solution(genres, plays) {
    const mostPlayedList = {};
    const genresList = {};
    
    plays.forEach((play, i) => {
        mostPlayedList[genres[i]] = (mostPlayedList[genres[i]] || 0) + play;
    });
    
    genres.forEach((genre, i) => {
        genresList[genre] = genresList[genre] || [];
        genresList[genre].push(i);
    });
    
    const sortedGenres = Object.keys(mostPlayedList).sort((a, b) => mostPlayedList[b] - mostPlayedList[a]);
    
    return sortedGenres.reduce((a, c) => {
        return a = [...a, ...genresList[c].sort((a, b) => plays[b] - plays[a]).slice(0, 2)]
    }, []);
}