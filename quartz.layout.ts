import { PageLayout, SharedLayout } from "./quartz/cfg";
import * as Component from "./quartz/components";

// Sorting function to prioritize files above directories
const customSortFn_filesFirst = (a, b) => {
  if ((!a.file && !b.file) || (a.file && b.file)) {
    return a.displayName.localeCompare(b.displayName);
  }
  if (a.file && !b.file) {
    return -1;
  } else {
    return 1;
  }
};


// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.DesktopOnly(
      Component.NewestFiles({
        newestType: "published",
        maxFiles: 3,
      })
    ),
    Component.DesktopOnly(
      Component.NewestFiles({
        newestType: "modified",
        maxFiles: 6,
      })
    ),
    Component.DesktopOnly(
      Component.NewestFiles({
        newestType: "created",
        maxFiles: 3,
      })
    ),
  ],
  footer: Component.Footer({
    links: {
      PL: "https://iomatix.github.io/Elyean-Wiki-PL/",
      ENG: "https://iomatix.github.io/Elyean-Wiki-ENG/",
    },
  }),
};

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs({
      spacerSymbol: "❯", // symbol between crumbs
      rootName: "Start", // name of first/root element
      resolveFrontmatterTitle: true, // whether to resolve folder names through frontmatter titles
      hideOnRoot: true, // whether to hide breadcrumbs on root `index.md` page
      showCurrentPage: true, // whether to display the current page in the breadcrumbs
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.DesktopOnly(
      Component.Explorer({
        sortFn: customSortFn_filesFirst,
      })
    ),
    Component.Darkmode(),
  ],
  right: [
    Component.Graph(
      localGraph: {
        drag: true, // whether to allow panning the view around
        zoom: true, // whether to allow zooming in and out
        depth: 1, // how many hops of notes to display
        scale: 1.1, // default view scale
        repelForce: 0.5, // how much nodes should repel each other
        centerForce: 0.3, // how much force to use when trying to center the nodes
        linkDistance: 30, // how long should the links be by default?
        fontSize: 0.6, // what size should the node labels be?
        opacityScale: 1, // how quickly do we fade out the labels when zooming out?
        removeTags: [], // what tags to remove from the graph
        showTags: false, // whether to show tags in the graph
        enableRadial: false, // whether to constrain the graph, similar to Obsidian
      },
      globalGraph: {
        drag: true,
        zoom: true,
        depth: -1,
        scale: 0.9,
        repelForce: 0.5,
        centerForce: 0.3,
        linkDistance: 30,
        fontSize: 0.6,
        opacityScale: 1,
        removeTags: [],
        showTags: false,
        enableRadial: true,
      },
    ),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
};


// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs({
      spacerSymbol: "❯", // symbol between crumbs
      rootName: "Start", // name of first/root element
      resolveFrontmatterTitle: true, // whether to resolve folder names through frontmatter titles
      hideOnRoot: true, // whether to hide breadcrumbs on root `index.md` page
      showCurrentPage: true, // whether to display the current page in the breadcrumbs
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],
  left: [
    Component.PageTitle(),
    Component.Search(),
    Component.DesktopOnly(
      Component.Explorer({
        sortFn: customSortFn_filesFirst,
      })
    ),
  ],
  right: [Component.Darkmode(),],
};
