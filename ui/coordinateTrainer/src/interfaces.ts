export type ColorChoice = Color | 'random';

export type Mode = 'findSquare' | 'nameSquare';

export type InputMethod = 'text' | 'buttons';

export type TimeControlChoice = 'noTime' | 'thirtySeconds' | 'oneMinute'

interface WhiteBlackScores {
  white: number[];
  black: number[];
}

export interface ModeScores {
  findSquare: WhiteBlackScores;
  nameSquare: WhiteBlackScores;
}

export interface CoordinateTrainerConfig {
  i18n: I18nDict;
  is3d: boolean;
  resizePref: number;
  scores: ModeScores;
}

export type CoordModifier = 'next' | 'current';

export type Redraw = () => void;
