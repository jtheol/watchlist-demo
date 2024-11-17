"use server"

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function deleteWatch(formData: FormData) {
  const watchId = formData.get("id")

  const cookieStore = cookies()
  const supabase = createServerComponentClient({cookies: () => cookieStore})

  const {data: {user}} = await supabase.auth.getUser();

  if (!user) {
    console.error("User is not authenticated within deleteWatch server  action");
    return;
  }

  const{data, error} = await supabase
  .from("watches")
  .delete()
  .match({id: watchId, user_id: user.id})

  if (error) {
    console.error("Error deleting watch", error)
    return;
  }

  revalidatePath("/watch-list")
}
