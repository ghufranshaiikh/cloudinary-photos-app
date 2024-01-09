
'use client'
import { CldUploadButton } from 'next-cloudinary';
import { UploadResult } from '../page';
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';
const UploadButton = () => {
    const router = useRouter()
  return (
   <div>
      <Button asChild>
                    

                        <CldUploadButton
                            onUpload={(result: UploadResult) => {
                                // setImageId(result.info.public_id)
                                setTimeout(() => {
                                    router.refresh()
                                }, 500);
                                
                            }}
                            uploadPreset="efy4duis" >

                               <div className='flex gap-x-2 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
                        </svg>
                         Upload
                        </div>
                       </CldUploadButton>
                       
                    </Button>
   </div>
  )
}

export default UploadButton