
import cloudinary from "cloudinary"
import UploadButton from "./Upload-Button";
import CloudinaryImage from "./Cloudinary-image";


type SearchResult = {
    public_id : string;
};
export default async function GalleryPage() {
 
    const results =( await cloudinary.v2.search
  .expression("resource_type:image")
  .sort_by("created_at","desc")
  .max_results(30)
  .execute()) as {resources : SearchResult[]};
   

    return (
        <section>
            <div className="flex flex-col gap-8 container mx-auto">
                <div className="flex justify-between ">
                <div>
                    <h1 className="text-4xl font-bold">Gallery</h1>
                </div>
                <div>
                  <UploadButton/>
                </div>
                </div>
               
                <div className="grid grid-cols-4 gap-4 ">
                    {results.resources.map((result)=>(
                        <CloudinaryImage 
                        key = {result.public_id}
                        src ={result.public_id}
                        width = "400"
                        height = "300"
                        alt = "image of something"
                        />
                    ))}
                  </div>
            </div>
        </section>
    )


}

