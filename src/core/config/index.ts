import { DEFAULT_COLOR_UI_OPTIONS } from '../constants';
import { ColorUIOptions } from './types';

let config: ColorUIOptions = { ...DEFAULT_COLOR_UI_OPTIONS };

export function getConfig() {
  return config;
}

export function createColorUI(newConfig: Partial<ColorUIOptions>) {
  config = { ...config, ...newConfig };
}
