import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/newestFiles.scss"
import { ValidDateType } from "./Date"
import { formatDate, getDate } from "./Date"
import { resolveRelative } from "../util/path"
import { i18n } from "../i18n"
import { classNames } from "../util/lang"



// Helper function to sort files by date
const sortByDateDescending = (type: ValidDateType) => (a: any, b: any) => {
  const dateA = a.dates[type]
  const dateB = b.dates[type]
  return dateB.getTime() - dateA.getTime();
};


// Interface Declaration
interface Options {
  newestType?: ValidDateType
  maxFiles: number
}

// Default Interface Values
const defaultOptions: Options = {
  maxFiles: 5,
}

const NewestFiles: QuartzComponent = ({
  fileData,
  allFiles,
  displayClass,
  cfg,
  inputOptions
}: QuartzComponentProps) => {

  // Use defaults if not in userOpts
  const options: Options = { ...defaultOptions, ...inputOptions }
  // Validation of newestType, default = cfg default DataType
  const validNewestType: ValidDateType = options.newestType ? options.newestType : cfg.defaultDateType

  // Validation of maxFiles, default = 5
  const validMaxFiles = options.maxFiles > 0 ? options.maxFiles : 5

  // Sort all files by date and pick the top X newest files
  const newestFiles = allFiles
    .filter((file) => file.dates?.[validNewestType])
    .sort(sortByDateDescending(validNewestType))
    .slice(0, validMaxFiles)
  
  return (
    <div class={classNames(displayClass, "newestFiles")}>
      <h3>{i18n(cfg.locale).components.newestFiles.title[validNewestType]}</h3>
      <ul class="overflow">
        {newestFiles.length > 0 ? (
          newestFiles.map((file) => (
            <li>
              <a href={resolveRelative(fileData.slug!, file.slug!)} class="internal">
              {file.frontmatter?.title} - {formatDate((file.dates![validNewestType]), cfg.locale)}
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
export default ((userOpts?: Partial<Options>) => {
  const options = { ...defaultOptions, ...userOpts }
  return (props: QuartzComponentProps) => NewestFiles({ ...props, inputOptions: options })
}) satisfies QuartzComponentConstructor
