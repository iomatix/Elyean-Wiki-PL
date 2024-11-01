import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/newestFiles.scss"
import { resolveRelative } from "../util/path"
import { i18n } from "../i18n"
import { classNames } from "../util/lang"

// Helper function to sort files by date
const sortByDateDescending = (a: any, b: any) => {
  const dateA = new Date(a.frontmatter?.date || 0).getTime()
  const dateB = new Date(b.frontmatter?.date || 0).getTime()
  return dateB - dateA // Newest files first
}

interface NewestFilesProps extends QuartzComponentProps {
    newestType: "published" | "modified" | "created";
    maxFiles?: number;
}

const NewestFiles: QuartzComponent = ({
  fileData,
  allFiles,
  displayClass,
  cfg,
  newestType = "published", // Use this prop to determine which date type to use
  maxFiles = 5, // Default to 5 if not provided
}: QuartzComponentProps) => {
  // Sort all files by date and pick the top X newest files
  const newestFiles = allFiles
    .filter((file) => fileData.dates?.[newestType as keyof typeof file.dates])
    .sort(sortByDateDescending)
    .slice(0, maxFiles)

  return (
    <div class={classNames(displayClass, "newest-files")}>
      <h3>{i18n(cfg.locale).components.newestFiles.title[newestType as "published" | "modified" | "created"]}</h3>

      <ul class="overflow">
        {newestFiles.length > 0 ? (
          newestFiles.map((f) => (
            <li key={f.slug}>
              <a href={resolveRelative(fileData.slug!, f.slug!)} class="internal">
              {f.frontmatter?.title} - {new Date(f.dates?.[newestType as keyof typeof f.dates] || new Date()).toLocaleDateString()}
              </a>
            </li>
          ))
        ) : (
          <li>{i18n(cfg.locale).components.newestFiles.noFilesFound}</li>
        )}
      </ul>
    </div>
  )
}

NewestFiles.css = style
export default (() => NewestFiles) satisfies QuartzComponentConstructor
