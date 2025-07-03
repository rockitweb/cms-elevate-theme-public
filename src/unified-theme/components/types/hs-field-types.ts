export type HsBackgroundImageField = {
  src: string;
  background_position:
    | 'TOP_LEFT'
    | 'TOP_CENTER'
    | 'TOP_RIGHT'
    | 'MIDDLE_LEFT'
    | 'MIDDLE_CENTER'
    | 'MIDDLE_RIGHT'
    | 'BOTTOM_LEFT'
    | 'BOTTOM_CENTER'
    | 'BOTTOM_RIGHT';
  background_size: 'CONTAIN' | 'COVER' | 'AUTO';
};
