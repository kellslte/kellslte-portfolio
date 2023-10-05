import { AnimatedText } from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import TransitionEffect from "@/components/TransitionEffect";
import Article from "@/components/Article";

export async function getServerSideProps(context) {
  const client = new ApolloClient({
    uri: "https://api.hashnode.com/",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query GetPosts {
        user(username: "kellslte") {
          publication {
            posts(page: 0) {
              _id
              coverImage
              slug
              title
              brief
              readTime
              dateAdded
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      articles: data.user.publication.posts,
    },
  };
}

const Articles = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Favour Max-Oti - Backend Software Developer | My Articles</title>
        <meta
          name="description"
          content="Over the years of learning and growing, here is a list of stuff I have learned and written about"
        />
      </Head>
      <TransitionEffect />
      <main className="flex flex-col items-center justify-center w-full mb-16 overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text={`Hello World!`}
            className="mb-16 sm:mb-8 xs:!text-4xl"
          />
          <h2 className="w-full my-16 mt-32 text-4xl font-bold text-center dark:text-primaryDark">
            All My Articles
          </h2>
          <ul>
            {articles.map((article) => {
              return (
                <Article
                  key={article._id}
                  title={article.title}
                  date={article.dateAdded}
                  slug={article.slug}
                  img={article.coverImage}
                />
              );
            })}
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Articles;
