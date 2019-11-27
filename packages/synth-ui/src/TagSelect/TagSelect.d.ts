import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface Tag {
  label: string
  value: string
}

interface SynthTagSelectProps
  extends SynthReact.SynthComponentProps,
    React.HTMLAttributes<HTMLDivElement> {
  /**
   * A boolean flag to determine if the <TagSelect> component has the ability to
   * create new tags based on the user's search query.
   */
  canCreateTags?: boolean
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * The tags that will be selected by default, if any.
   */
  defaultSelected?: Tag[]
  /**
   * A number that indicates how many selected tags will be visible.
   */
  groupAfter?: number
  /**
   * A callback function that is called whenever tags get either selected or
   * removed
   */
  onUpdate?(selectedTags: Tag[])
  /**
   * A callback function that is called whenever a tag is created.
   */
  onCreate?(tag: Tag)
  /**
   * Provides a placeholder text for the search input.
   */
  placeholder?: string
  /**
   * A React `ref` object that will point to the tag select's DOM element.
   */
  ref?: React.Ref<HTMLDivElement>
  /**
   * A render function used to render the results state whenever there are no
   * results to show.
   */
  renderEmptyResults?(): React.ReactNode
  /**
   * A boolean flag to determine if the <TagSelect> component can only have
   * one selected tag at a time.
   */
  single?: boolean
  /**
   * The tags that can be selected by the user.
   */
  tags?: Tag[]
}

type SynthTagSelectComponent = React.ForwardRefExoticComponent<
  SynthTagSelectProps
>

declare const TagSelect: React.ForwardRefExoticComponent<SynthTagSelectProps>

export { SynthTagSelectComponent, SynthTagSelectProps }
export default TagSelect
