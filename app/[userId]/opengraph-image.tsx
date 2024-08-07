import { User } from '@/store/useUserStore';
import { createClient } from '@/utils/supabase/server'
import { ImageResponse } from 'next/og'



export default async function Image({ params: { userId } }) {
  const apiClient = createClient()
  const response = await apiClient.from('profiles').select('*').eq('id', userId)
  const user = response.data?.[0] as User
  
  if (!user) {
    return new ImageResponse(<div>Not found</div>, { width: 1200, height: 630 });
  }

  const imageUrl = `https://uuljbqkwvruhxomkmxaj.supabase.co/storage/v1/object/public/aforshow/public/${user.id}.png`

  return new ImageResponse(<img src={imageUrl} alt={`${user.name} - Aforshow`} />);
  

}
