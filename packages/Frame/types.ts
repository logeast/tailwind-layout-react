import { BaseProps } from '../utils/basic-props';
import {
  AspectType,
  BoxSizingType,
  ClearType,
  ColumnsType,
  DisplayType,
  FloatType,
  OverflowType,
  PositionType,
  VisibleType,
  ZIndex
} from '../utils/layout-types';

export interface FrameProps extends BaseProps {
  /** Utilities for controlling the aspect ratio of an element. */
  aspect?: AspectType;
  /** Utilities for controlling how the browser should calculate an element's total size. */
  boxSizing?: BoxSizingType;
  /** Utilities for controlling the wrapping of content around an element. */
  clear?: ClearType;
  /** Utilities for controlling the number of columns within an element. */
  columns?: ColumnsType;
  /** Utilities for controlling the display box type of an element. */
  display?: DisplayType;
  /** Utilities for controlling the wrapping of content around an element. */
  float?: FloatType;
  /** Utilities for controlling how an element handles content that is too large for the container. */
  overflow?: OverflowType;
  /** Utilities for controlling how an element is positioned in the DOM. */
  position?: PositionType;
  /** Utilities for controlling the visibility of an element. */
  visible?: VisibleType;
  /**  Utilities for controlling the stack order of an element. */
  zIndex?: ZIndex;
}
