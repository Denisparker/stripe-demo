import ListWrapper from "app/components/ListWrapper"
import Loading from "app/loading"
import {Suspense} from "react"

export default function Home() {

  return (
    <div className="flex flex-col items-center py-16">
      <div className="w-[75rem] h-[80vh] flex flex-col gap-24">
        <div>
          <h3 className="font-bold">Cookies</h3>
          <h4 className="text-gold">Premium</h4>
        </div>
        <Suspense fallback={<Loading/>}>
          <ListWrapper/>
        </Suspense>
      </div>
    </div>
  )
}
