'use server'

import { revalidatePath } from "next/cache"

export async function revalidadePatchAction(patch:string) {
    revalidatePath(patch)
}