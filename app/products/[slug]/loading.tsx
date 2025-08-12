export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="animate-pulse">
            <div className="h-4 bg-slate-200 rounded w-32 mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="aspect-square bg-slate-200 rounded-2xl"></div>
                <div className="grid grid-cols-4 gap-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="aspect-square bg-slate-200 rounded-lg"></div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="h-6 bg-slate-200 rounded w-24"></div>
                <div className="h-10 bg-slate-200 rounded w-3/4"></div>
                <div className="h-6 bg-slate-200 rounded w-1/2"></div>
                <div className="h-8 bg-slate-200 rounded w-1/3"></div>
                <div className="h-4 bg-slate-200 rounded w-20"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-slate-200 rounded"></div>
                  <div className="h-4 bg-slate-200 rounded w-5/6"></div>
                </div>
                <div className="flex gap-4">
                  <div className="h-14 bg-slate-200 rounded-xl flex-1"></div>
                  <div className="h-14 bg-slate-200 rounded-xl flex-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
