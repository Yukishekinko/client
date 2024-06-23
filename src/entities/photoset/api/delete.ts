import api from "@/shared/api/axios"
import { toast } from "@/shared/ui/toast"

export const deletePhotoset = async (photoset_id: string) => {
    try {
        await api.delete(`photoset/${photoset_id}`)
    } catch (error: any) {
        toast({ title: 'Произошла ошибка:', description: error.response.data.message })
    }
}