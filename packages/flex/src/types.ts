import { FrameProps } from '@tailwind-layout-react/frame';

export interface FlexProps extends FrameProps {
  inline?: boolean;
  justifyCenter?: boolean;
  itemsCenter?: boolean;
  placeContentCenter?: boolean;
}
