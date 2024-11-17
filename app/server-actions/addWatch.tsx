"use server"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

export async function addWatch(formData: FormData) {
  const model = formData.get("model")
  const brand = formData.get("brand")
  const reference_num = formData.get("reference_num")

  const cookieStore = cookies();
  const supabase = createServerComponentClient({cookies: () => cookieStore})

  const {data: {user}} = await supabase.auth.getUser();

  if (!user) {
    console.error("User is not authenticated within addWatch server action");
    return;
  }

  const{data, error} = await supabase
  .from("watches")
  .insert([
    {
      model,
      brand,
      reference_num,
      user_id: user.id
    }
  ])

  if (error){
    console.error("Error inserting data", error)
    return;
  }
  revalidatePath("/watch-list"); // See updated watch list

  return {message: "Success"}
}