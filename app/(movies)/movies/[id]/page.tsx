import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideo from "../../../../components/movie-videos";

export default async function MovieDetail ({params:{id}}: {params: {id: string}}) {
    // const [movie, videos] = await Promise.all([getMovie(id), getViedos(id)])

    return <div>
        <Suspense fallback={<h1>Movie info is loading...</h1>}>
            <MovieInfo id={id}/>
        </Suspense>
        <Suspense fallback={<h1>Movie video is loading...</h1>}>
            <MovieVideo id={id}/>
        </Suspense>
        </div>
}