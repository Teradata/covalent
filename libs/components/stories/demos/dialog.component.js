// Material Dialog example taken Material Components Catalog
// https://github.com/material-components/material-web/blob/master/demos/dialog
import '@material/mwc-dialog';
import '@material/mwc-button';
import '@material/mwc-textfield';

import * as dialogTemplate from './dialog.component.html';

export default ({ }) => {
    document.addEventListener('DOMContentLoaded', () => {

        const buttons = document.body.querySelectorAll('mwc-button[data-num]');
    
        for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        const buttonNum = button.dataset.num;
    
        const listenerFactory = (numButton) => {
            return function() {
            const dialog = document.body.querySelector('#dialog' + numButton);
            dialog.open = true;
            };
        };
    
        const listener = listenerFactory(buttonNum);
    
        button.addEventListener('click', listener);
        }
    
        window.toggleActions.onclick = function() {
        const dialog = document.body.querySelector('#dialog4');
        const hideActionSpan = document.body.querySelector('#hideActionVal');
    
        const hideAction = !dialog.hideActions;
        dialog.hideActions = hideAction;
        hideActionSpan.innerText = hideAction;
        };
    
        const dialog = document.querySelector('#dialog8');
        const textField = document.querySelector('#dialog8-text-field');
        const primaryButton = document.querySelector('#dialog8-primary-action-button');
            
        primaryButton.addEventListener('click', () => {
        // validate, possible asynchronous such as a server response
        const isValid = textField.checkValidity();
        if (isValid) {
            dialog.close();
            return;
        }
        
        textField.reportValidity();
        });
    }, { once : true });
    
    return dialogTemplate;
};