/**
 * @vitest-environment jsdom
 */
import { it, describe, expect, beforeAll } from 'vitest';
import { CovalentStatusDialog } from './status-dialog';

describe('Dialog', () => {
  let dialogElements: NodeListOf<CovalentStatusDialog>;
  const heading = 'Test heading';
  const content = 'Content in dialog';

  beforeAll(() => {
    document.body.innerHTML = `<cv-status-dialog  heading="${heading}">${content}</cv-status-dialog>
    <cv-status-dialog state="positive"  heading="${heading}">
      ${content}
      <div slot="details">Additional details</div>
    </cv-status-dialog>
      `;
    dialogElements = document.body.querySelectorAll('cv-status-dialog');
  });

  it('should work', () => {
    expect(new CovalentStatusDialog()).toBeDefined();
  });

  it('should display heading and content', () => {
    const dialog = dialogElements[0];
    expect(dialog.heading).toBe(heading);
    expect(dialog.innerHTML).toContain(content);
  });

  it('should set the state of the dialog', () => {
    const dialog = dialogElements[1];
    expect(dialog.state).toBe('positive');
  });

  it('should show details link when details are present', () => {
    const dialog = dialogElements[1];
    expect(dialog.showDetailsLink).toBe(true);
  });

  it('should toggle details open and close', () => {
    const dialog = dialogElements[1];
    expect(dialog['expandDetails']).toBe(false);
    expect(dialog.toggleDetails());
    expect(dialog['expandDetails']).toBe(true);
  });
});
