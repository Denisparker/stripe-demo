import ListWrapper from "app/components/ListWrapper"
import Loading from "app/loading"
import {Suspense} from "react"

export default function Home() {

  return (
    <div className="flex flex-col items-center py-16">
      <div className="w-[75rem] sm:w-full flex flex-col gap-24">
        <div className="sm:px-10">
          <h3 className="font-bold">Cookies</h3>
          <h4 className="text-gold">Premium</h4>
        </div>
        <Suspense fallback={(
          <div className="h-[50vh]">
            <Loading/>
          </div>
        )}>
          <ListWrapper/>
        </Suspense>
      </div>
    </div>
  )
}
