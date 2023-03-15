import { api } from "@/utils/api";
import BlogCard from "./BlogCard";

const views = [ 1000, 500, 500, 500, 500, 500, 500, 1000,1000, 1000, 1000, 1000 ];

export default function Bloglist() {


    const {data,isLoading} = api.blogpost.getAll.useQuery();
    if(!data)return <div>Loading...</div>;

  return (
    <div id="blog-list">
      {data.map((elem, idx) => {
        return <article key={idx} style={{gridArea:(idx + 10).toString(36).toUpperCase()}}><BlogCard {...elem}/></article>;
      })}
    </div>
  );
}
