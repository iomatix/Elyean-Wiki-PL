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
    maxFiles?: number; // Add maxFiles as an optional prop
  }

const NewestFiles: QuartzComponent = ({
  fileData,
  allFiles,
  displayClass,
  cfg,
  maxFiles = 5,
}: QuartzComponentProps) => {
  // Sort all files by date and pick the top X newest files
  const newestFiles = allFiles
    .filter((file) => file.frontmatter?.date)
    .sort(sortByDateDescending)
    .slice(0, maxFiles)

  return (
    <div class={classNames(displayClass, "newest-files")}>
      <h3>{i18n(cfg.locale).components.newestFiles.title}</h3>
      <ul class="overflow">
        {newestFiles.length > 0 ? (
          newestFiles.map((f) => (
            <li key={f.slug}>
              <a href={resolveRelative(fileData.slug!, f.slug!)} class="internal">
                {f.frontmatter?.title} - {new Date(f.frontmatter?.date).toLocaleDateString()}
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
