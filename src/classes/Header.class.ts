import type { Title } from '@/enums/title.enum';

/**
 * Represents a header for a table.
 */
export class Header {
  /**
   * The text to display in the header.
   */
  text: string;
  /**
   * The value associated with the header.
   */
  value: Title;

  /**
   * Create a new Header instance.
   * @param {string} text - The text to display in the header.
   * @param {Title} value - The value associated with the header.
   */
  constructor(text: string, value: Title) {
    this.text = text;
    this.value = value;
  }
}
