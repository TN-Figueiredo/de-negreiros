import { format, isFuture } from "date-fns";

export const getYear = (pastYear) => {
  if (pastYear) {
    return format(pastYear, "yyyy");
  } else {
    return format(new Date(), "yyyy");
  }
};

export const getYoutubeEmbed = (url) => {
  const parsedUrl1 = url.split("/")[url.split("/").length - 1].split("?");
  const parsedUrl2 = parsedUrl1.map((section) => {
    if (section.split("v=").length > 1) {
      return section.split("v=")[1];
    } else return section;
  });
  let resolvedUrl = "https://www.youtube.com/embed/";

  parsedUrl2.forEach((piece) => {
    if (piece === "watch") {
      return;
    } else {
      if (piece.split("t=").length > 1) {
        resolvedUrl = `${resolvedUrl}?start=${piece.split("t=")[1]}`;
      } else {
        resolvedUrl = `${resolvedUrl}?${piece}`;
      }
    }
  });
  return resolvedUrl.replace("/embed/?", "/embed/");
};

export const getWindowDimensions = () => {
  if (window) {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  }
  return undefined;
};

export const handleColor = (backgroundColor, theme) =>
  backgroundColor === "white" ? theme.colors.$blue500 : theme.colors.$grey000;

export const handleColorBlack = (backgroundColor, theme) =>
  backgroundColor === "white" ? theme.colors.$grey900 : theme.colors.$grey000;

export const handleBackgroundColor = (backgroundColor, theme) =>
  backgroundColor === "blue" ? theme.colors.$blue500 : theme.colors.$grey100;

export function cn(...args) {
  return args.filter(Boolean).join(" ");
}

export function mapEdgesToNodes(data) {
  if (!data.edges) return [];
  return data.edges.map((edge) => edge.node);
}

export function filterOutDocsWithoutSlugs({ slug }) {
  return (slug || {}).current;
}

export function filterOutDocsPublishedInTheFuture({ publishedAt }) {
  return !isFuture(new Date(publishedAt));
}

export function getBlogUrl(publishedAt, slug) {
  return `/blog/${format(new Date(publishedAt), "yyyy/MM")}/${
    slug.current || slug
  }/`;
}

export function buildImageObj(source = { asset: {} }) {
  const imageObj = {
    asset: { _ref: source.asset._ref || source.asset._id },
  };

  if (source.crop) imageObj.crop = source.crop;
  if (source.hotspot) imageObj.hotspot = source.hotspot;

  return imageObj;
}

export function toPlainText(blocks) {
  if (!blocks) {
    return "";
  }
  return blocks
    .map((block) => {
      if (block._type !== "block" || !block.children) {
        return "";
      }
      return block.children.map((child) => child.text).join("");
    })
    .join("\n\n");
}
