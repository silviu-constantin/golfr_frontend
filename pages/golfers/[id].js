import { useRouter } from "next/router"
import ScoreCard from '../../components/ScoreCard'
import Layout from "../../components/Layout"
import useFetchScores from "../../lib/useFetchScores"

 const Stats = () => {
   const router = useRouter()
   const { id } = router.query
   const { data, error } = useFetchScores(id)

   return (
    <Layout>
      <>
        {error ? (error) : (
          <>
           
              <div>
                <h2>{data?.name ? (<>Golfer`s name: {data?.name} </>) : (<>undefined</>)} </h2>
                {data?.scores && data?.scores?.map(score => (
                  <ScoreCard
                    key={score.id}
                    id={score.id}
                    totalScore={score.total_score}
                    playedAt={score.played_at}
                    userId={score.user_id}
                    userName={data.name}
                  />
                ))}
              </div>
           

          </>
        )}
      </>
    </Layout>
  )
 }

 export default Stats 