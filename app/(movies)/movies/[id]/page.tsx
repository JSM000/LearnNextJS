import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideo from "../../../../components/movie-videos";

interface IParams{
    params: {id: string}
}

export async function generateMetadata({params:{id}}: IParams){
    // 최신버전에서는 fetch된 데이터가 캐싱되기 떄문에 MovieInfo에서는 캐싱된 데이터를 가져가서 쓴다.
    const movie = await getMovie(id)
    return {
        title: movie.title,
    }
}

export default async function MovieDetail ({params:{id}}: IParams) {
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