import { DebugElement } from '@angular/core';

export class CovalentTests {

  /*
  * Utility function that traverses down the DOM to find the dialog overlay and then
  * traverses down the DOM of that overlay to get the Update/Stop button.
  * This could be a brittle way of doing this so best to keep this in a utility
  * function that can be changed for all places needing this.
  */
  public static confirmDialog(component: any): void {
      let elements: NodeList = document.querySelectorAll('[id^=cdk-overlay]');
      for (let index: number = 0; index < elements.length; index++) {
          let dialogOverlayId: string = elements.item(index).attributes.getNamedItem('id').value;
          // try to click update on any error dialogs found.  If there is an error trying to click one just
          // hide the error as it may not be clickable yet in the DOM or something
          try {
            let confirmButton: Element = document.getElementById(dialogOverlayId).children.item(0)
                                .children.item(0).children.item(1).children.item(0).children.item(0)
                                .children.item(0).children.item(1).children.item(1).children.item(1);
            component.renderer.invokeElementMethod(confirmButton, 'dispatchEvent', [new MouseEvent('click', { bubbles: true, cancelable: true })]);
          } catch (e) {/*do nothing*/}
      }
  }

  /*
  * Utility function that traverses down the DOM to find the dialog overlay and then
  * traverses down the DOM of that overlay to get the Share button.
  * This could be a brittle way of doing this so best to keep this in a utility
  * function that can be changed for all places needing this.
  */
  public static clickDialogButton(component: any, buttonText: string): void {
      let elements: NodeList = document.querySelectorAll('[mat-button]');
      for (let index: number = 0; index < elements.length; index++) {
          // try to click share on any buttons found with share as the text content.  If there is an error trying to click one just
          // hide the error as it may not be clickable yet in the DOM or something
          try {
            let button: Node = elements.item(index);
            if (button.firstChild.textContent === buttonText) {
                component.renderer.invokeElementMethod(button, 'dispatchEvent', [new MouseEvent('click', { bubbles: true, cancelable: true })]);
            }
          } catch (e) {/*do nothing*/}
      }
  }

  /*
  * Utility function that traverses down the DOM to get the container of the snackbar Overlay.
  * This could be a brittle way of doing this so best to keep this in a utility
  * function that can be changed for all places needing this.
  */
  public static getSnackBar(): Element {
      let elements: NodeList = document.querySelectorAll('[id^=cdk-overlay]');
      for (let index: number = 0; index < elements.length; index++) {
          let dialogOverlayId: string = elements.item(index).attributes.getNamedItem('id').value;
          let containerElement: Element = document.getElementById(dialogOverlayId).children.item(0);
          // check to see if has attribute role, if so it is the snackbar
          if (containerElement.getAttribute('role') === 'alert') {
              return containerElement;
          }
      }
  }

  /*
  * Utility function that takes a snackBarContainerElement and traverses down the DOM
  * to get the text content of the snackbar.
  * This could be a brittle way of doing this so best to keep this in a utility
  * function that can be changed for all places needing this.
  */
  public static getSnackBarTextContent(snackBarContainerElement: Element): string {
    return snackBarContainerElement.children.item(0).children.item(0).textContent;
  }

  /*
  * Utility function that takes an expansionContainer and traverses down the DOM
  * to get the node to click on.
  * This could be a brittle way of doing this so best to keep this in a utility
  * function that can be changed for all places needing this.
  */
  public static clickExpansionDownArrow(component: any, expansionContainer: DebugElement): void {
    let downArrowIcon: DebugElement = expansionContainer.children[0].children[0].children[0];
    downArrowIcon.triggerEventHandler('click', undefined);
  }

 /*
  * Utility function that queires the DOM for all cdk-overlay-* ids and closes them all
  * This could be a brittle way of doing this so best to keep this in a utility
  * function that can be changed for all places needing this.
  */
  public static clearAllErrorDialogs(component: any): void {
      let elements: NodeList = document.querySelectorAll('[id^=cdk-overlay]');
      for (let index: number = 0; index < elements.length; index++) {
          let dialogOverlayId: string = elements.item(index).attributes.getNamedItem('id').value;
          // try to close any error dialogs found.  If there is an error trying to close one just
          // hide the error as it may not be clickable yet in the DOM or something
          try {
            let closeButton: Element = document.getElementById(dialogOverlayId).children.item(0)
                                    .children.item(0).children.item(1).children.item(0).children.item(0)
                                    .children.item(0).children.item(2).children.item(1).children.item(0);
            component.renderer.invokeElementMethod(closeButton, 'dispatchEvent', [new MouseEvent('click', { bubbles: true, cancelable: true })]);
          } catch (e) {/*do nothing*/}
      }
  }

  /*
  * Utility function that queires the DOM for all cdk-overlay-* and returns true
  * if it finds one that has "There was a problem" as the firstChild Text
  * This could be a brittle way of doing this so best to keep this in a utility
  * function that can be changed for all places needing this.
  */
  public static checkForErrorDialogs(): boolean {
      let elements: NodeList = document.querySelectorAll('[id^=cdk-overlay]');
      let foundErrorDialog: boolean = false;
      for (let index: number = 0; index < elements.length; index++) {
        if (elements[index].firstChild.textContent.indexOf('There was a problem') > -1) {
            foundErrorDialog = true;
        }
      }
      return foundErrorDialog;
  }
}
