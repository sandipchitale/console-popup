import './polyfills';
import {provideHttpClient, withNoXsrfProtection} from '@angular/common/http';
import {bootstrapApplication} from '@angular/platform-browser';
import {NgbdPopoverTplcontent} from './app/popover-tplcontent';

bootstrapApplication(NgbdPopoverTplcontent, {
  providers: [
    provideHttpClient(withNoXsrfProtection()),
  ],
})
.then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Otherwise, log the boot error
})
.catch(err => console.error(err));
