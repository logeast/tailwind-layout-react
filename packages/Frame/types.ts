import { BaseProps } from '../utils/BaseProps';
import {
  BoxSizingType,
  DisplayType,
  OverflowType,
  PositionType,
  VisibleType,
  ZIndex,
} from '../utils/types';

export interface FrameProps extends BaseProps {
  /** Utilities for controlling how the browser should calculate an element's total size. */
  boxSizing?: BoxSizingType;
  /** Utilities for controlling the display box type of an element. */
  display?: DisplayType;
  /** Utilities for controlling how an element handles content that is too large for the container. */
  overflow?: OverflowType;
  /** Utilities for controlling how an element is positioned in the DOM. */
  position?: PositionType;
  /** Utilities for controlling the visibility of an element. */
  visible?: VisibleType;
  /**  Utilities for controlling the stack order of an element. */
  zIndex?: ZIndex;
}
