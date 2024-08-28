import { API_URL } from "../app/(home)/page"

async function getViedos(id:string) {
    console.log(`fetcing videos: ${Date.now()}`)
    await new Promise((resolve)=> setTimeout(resolve, 3000))
    throw new Error('xomething broke...')
//     const response = await fetch(`${API_URL}/${id}/videos`)
//     const json = response.json()
//     return json
}


export default async function MovieVideo ({id}: {id: string}) {
    const video = await getViedos(id)
    return <h6>{JSON.stringify(video)}</h6>
}