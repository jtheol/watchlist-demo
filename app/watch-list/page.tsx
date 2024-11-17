import { Watch } from "@/types";
import WatchForm from "../components/WatchForm"
import EditWatch from "../components/EditWatch";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";
import { deleteWatch } from "../server-actions/deleteWatch";

export default async function WatchList() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const {data: { user } } = await supabase.auth.getUser();

  const {data: watches, error} = await supabase
  .from("watches")
  .select("*")
  .eq("user_id", user?.id)
  .order("brand", {ascending: true})

  if (error) {
    console.log("Error fetching watches.")
  }

  console.log({watches})

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold">My WatchList</h1>
          <form action="/auth/signout" method="post">
            <button
              type="submit"
              className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-md transition"
            >
              Sign Out
            </button>
          </form>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <WatchForm />
        </div>
        <div className="space-y-4">
          {watches?.map((watch) => (
            <div
              key={watch.id}
              className="p-4 bg-gray-800 rounded-lg shadow-md flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-semibold">
                  {watch.brand} - {watch.model}
                </h2>
              </div>
              <div className="flex items-center space-x-4">
                <form action={deleteWatch}>
                  <input type="hidden" name="id" value={watch.id} />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-md transition"
                  >
                    Delete
                  </button>
                </form>
                <EditWatch watch={watch} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}