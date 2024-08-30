import { API_URL } from "../app/(home)/page"
import styles from "../styles/movie-videos.module.css"

async function getViedos(id:string) {
    console.log(`fetcing videos: ${Date.now()}`)
    // await new Promise((resolve)=> setTimeout(resolve, 3000))
    // throw new Error('xomething broke...')
    const response = await fetch(`${API_URL}/${id}/videos`)
    const json = response.json()
    return json
}


export default async function MovieVideo ({id}: {id: string}) {
    const videos = await getViedos(id)
    return <div className={styles.container}>
        {videos.map(video => 
            <iframe 
                key={video.id} 
                src={`https://youtube.com/embed/${video.key}`} 
                title={video.name} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                />

        )}
    </div>
}