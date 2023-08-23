import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import slugify from "slugify";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join(),
  },
  headings: {
    type: "json",
    resolve: async (doc) => {
      const headingsRegex = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
      const headings = Array.from(doc.body.raw.matchAll(headingsRegex)).map(
        ({ groups }) => {
          const flag = groups?.flag;
          const content = groups?.content;
          return {
            level: flag.length,
            text: content,
            slug: content ? slugify(content, { lower: true }) : undefined,
          };
        }
      );
      return headings;
    },
  },
};

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    createdAt: {
      type: "string",
      required: true,
    },
    summary: {
      type: "string",
      required: true,
    },
    thumbnail: {
      type: "string",
      required: true,
    },
    isBigProject: {
      type: "boolean",
      required: true,
    },
    techStacks: {
      type: "list",
      required: true,
      of: { type: "string" },
    },
    repoLink: {
      type: "string",
      required: true,
    },
    demoLink: {
      type: "string",
      required: true,
    },
    numberOfPeople: {
      type: "number",
      required: true,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Project],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          },
        },
      ],
      [
        rehypeAutoLinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
});
