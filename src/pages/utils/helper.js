// const FeaturedArticle = ({ img, title, time, brief, slug }) => {
//   return (
//     <li className="relative w-full col-span-1 p-4 border border-solid bg-light border-dark rounded-2xl">
//       <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
//       <Link
//         href={`https://kells.hashnode.dev/${slug}`}
//         target="_blank"
//         className="inline-block w-1/2 overflow-hidden rounded-lg cursor-pointer"
//       >
//         <FramerImage
//           src={img}
//           alt={title}
//           className="w-full h-auto"
//           whileHover={{ scale: 1.05 }}
//                   transition={ { duration: 0.2 } }
//                   width={ 1080 }
//                   height={1080}
//         />
//       </Link>
//       <Link href={`https://kells.hashnode.dev/${slug}`} target="_blank">
//         <h2 className="w-full my-2 text-3xl font-bold text-left hover:underine underline-offset-2">
//           {title}
//         </h2>
//         <p className="mb-2 text-sm">{brief}</p>
//         <span className="font-semibold text-primary">{time}&nbsp;min read</span>
//       </Link>
//     </li>
//   );
// };

{/* <ul className="grid grid-cols-2 gap-16">
            {articles.map((article) => {
              return (
                <FeaturedArticle
                  key={article._id}
                  time={article.readTime}
                  title={article.title}
                  img={article.coverImage}
                  brief={article.brief}
                  slug={article.slug}
                />
              );
            })}
          </ul> */}