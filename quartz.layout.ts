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
  afterBody: [],
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
    Component.Breadcrumbs(),
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
  ],
  right: [
    Component.Darkmode(),
    Component.MobileOnly(Component.Spacer()),
    Component.MobileOnly(
      Component.NewestFiles({
        newestType: "published",
        maxFiles: 3,
      })
    ),
    Component.MobileOnly(
      Component.NewestFiles({
        newestType: "modified",
        maxFiles: 4,
      })
    ),
    Component.MobileOnly(Component.Spacer()),
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
};


// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
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
  ],
  right: [Component.Darkmode(),],
};
