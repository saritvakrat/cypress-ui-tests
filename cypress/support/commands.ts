import { addMatchImageSnapshotCommand, SnapshotOptions } from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand();

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Screenshot test the current page.
       * @param name file name of the screenshot
       * @param options general options
       */
      matchImageSnapshot(name: string, options?: SnapshotOptions): Chainable<Element>;

      /**
       * Screenshot test the current page.
       * @param options general options
       */
      matchImageSnapshot(options?: SnapshotOptions): Chainable<Element>;
    }
  }
}