import { graphql } from "gatsby";
import * as React from "react";
import { StringParam, useQueryParam } from "use-query-params";
import BlogSelector from "../../../components/blog-selector";
import Layout from "../../../components/layout";
import PostPreview from "../../../components/post-preview";
import Seo from "../../../components/seo";

interface TagsProps {
  data: Queries.AllPostTagsQuery;
}

const Tags = ({ data }: TagsProps) => {
  const [allTags, setAllTags] = React.useState<(string | null)[]>([]);
  const [tagParam, setTagParam] = useQueryParam("tag", StringParam);

  const getAllTags = () => {
    let allTags: (string | null)[] = [];
    data.allMdx.nodes.map((node) => {
      if (node.frontmatter?.tags) {
        allTags = [...allTags, ...node.frontmatter.tags];
      }
    });
    allTags = [...new Set(allTags)];
    return allTags;
  };

  React.useEffect(() => {
    setAllTags(getAllTags());
  }, []);

  return (
    <Layout>
      <div className="pt-6 pb-8">
        <BlogSelector value="tag" />
        <section className="flex gap-3 flex-wrap mt-3">
          {allTags.map((tag) => (
            <button
              className="bg-white px-4 py-1 rounded-full hover:bg-cyan-500 hover:text-white transition-colors"
              key={tag}
            >
              <p className="text-sm">{tag}</p>
            </button>
          ))}
        </section>
        <section className="grid grid-flow-dense justify-items-stretch grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6"></section>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="블로그" />;

export const query = graphql`
  query AllPostTags {
    allMdx {
      nodes {
        frontmatter {
          tags
        }
      }
    }
  }
`;

export default Tags;
