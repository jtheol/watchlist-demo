"use server"

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { watch } from "fs"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

export async function editWatch (formData: FormData) {

  const watchId = formData.get("id")
  const model = formData.get("model")
  const brand = formData.get("brand")
  const reference_num = formData.get("reference_num")

  const cookieStore = cookies();
  const supabase = createServerComponentClient({cookies: () => cookieStore})

  const {data: {user}} = await supabase.auth.getUser();

  if (!user) {
    console.error("User is not authenticated within editWatch server action.")
    return;
  }

  const{data, error} = await supabase
  .from("watches")
  .update(
    {
      model,
      brand,
      reference_num
    }
  )
  .match({id: watchId, user_id: user.id})

  if (error) {
    console.error("Error updating watch ", error)
    return;
  }

  revalidatePath("/watch-list")

  return {message: "Updated watch."}
}