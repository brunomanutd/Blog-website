
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
    // const[blogs,setBlogs]=useState(null);
    // // const [name,setName]=useState('mario');
    // const handleDelete=(id)=>{
    //     const newBlogs=blogs.filter(blog=>blog.id !==id);
    //     setBlogs(newBlogs);
    // }
    // const[isPending,setIsPending]=useState(true);
    // const[error,setError]=useState(null);

    // useEffect(()=>{
        // setTimeout(() => {
        //     fetch('http://localhost:8000/blogs')
        //     .then(res=>{
        //         if(!res.ok)
        //         {
        //             throw Error('could not fetch the data');
        //         }
        //         return res.json();
        //     })
        //     .then(data=>{
        //         setBlogs(data);
        //         setIsPending(false);
        //         setError(null);
        //     });
        //     .catch(err=>{
        //         setIsPending(false);
        //         setError(err.message);
        //     })
        // }, 1000);
        // fetch('http://localhost:8000/blogs')
        // .then(res=>{
        //     return res.json();
        // })
        // .then(data=>{
        //     setBlogs(data);
        //     setIsPending(false);
        // })
        const {data: blogs,isPending,error}=useFetch('http://localhost:8000/blogs');
    // },[]);
    return ( 
        <div className="Home">
        { error && <div>{error}</div>}
        {isPending && <div>Loading.....</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs!"  />}
        </div>
     );
}
 
export default Home;




// [
//     {title:'My new Website',body:'man utd wins champions league',author:'mario',id:1},
//     {title:'Welcome party',body:'man utd win europa league',author:'yoshi',id:2},
//     {title:'web dev tools',body:'man utd win premier league',author:'mario',id:3}
// ]

// handleDelete={handleDelete}