const API_KEY = "3ead6799647bf0b2f9c031ea21c0927d";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    // fetchActionMovies: `/movie/action?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genrec=28`,
    // fetchComedyMovies: `movies/popular/comedy?api_key=${API_KEY}&language=en-US`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genrec=45`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genrec=37`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genrec=10749`,
    fetchDocumentries: `/discover/movie?api_key=${API_KEY}&with_genrec=99`,
}

export default requests;