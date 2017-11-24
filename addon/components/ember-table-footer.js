import EmberTableBaseCell from './ember-table-base-cell';
import { property } from '../utils/class';

import layout from '../templates/components/ember-table-footer';

export default class EmberTableFooter extends EmberTableBaseCell {
  @property layout = layout;
  @property tagName = 'td';
  @property classNameBindings = ['isFixed::et-tf'];
}
